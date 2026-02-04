import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";
import { otps } from "@shared/schema";
import { pool } from "./db";
import { createRequire } from "module";
import { sendOtpEmail } from "./mailer";

const require = createRequire(import.meta.url);
const PgSession = require("connect-pg-simple")(session);

const scryptAsync = promisify(scrypt);

async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}

async function comparePasswords(supplied: string, stored: string) {
  const [hashed, salt] = stored.split(".");
  const hashedBuf = Buffer.from(hashed, "hex");
  const suppliedBuf = (await scryptAsync(supplied, salt, 64)) as Buffer;
  return timingSafeEqual(hashedBuf, suppliedBuf);
}

// Simple account number generator
function generateAccountNumber() {
  return '202' + Math.floor(100000000 + Math.random() * 900000000).toString();
}

// Customer ID generator
function generateCustomerId() {
  return 'CU' + Math.floor(1000000000000 + Math.random() * 9000000000000).toString();
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Session setup
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "secret",
      resave: false,
      saveUninitialized: false,
      store: new PgSession({
        pool,
        createTableIfMissing: true,
      }),
      cookie: {
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          const user = await storage.getUserByEmail(email);
          if (!user || !(await comparePasswords(password, user.password))) {
            return done(null, false, { message: "Invalid email or password" });
          }
          if (!user.isEmailVerified) {
             return done(null, false, { message: "Email not verified" });
          }
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  passport.serializeUser((user: any, done) => done(null, user.id));
  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await storage.getUser(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  // Auth Routes
  app.post(api.auth.register.path, async (req, res) => {
    try {
      const input = api.auth.register.input.parse(req.body);
      console.log("Registration input received:", JSON.stringify(input, null, 2));
      
      const existing = await storage.getUserByEmail(input.email);
      if (existing) {
        return res.status(400).json({ message: "Email already registered" });
      }

      const hashedPassword = await hashPassword(input.password);
      const accountNumber = generateAccountNumber();
      const customerId = generateCustomerId();
      
      const userToCreate = {
        ...input,
        password: hashedPassword,
        accountNumber,
        customerId,
        role: "USER",
        status: "PENDING",
        balance: "0.00",
        isEmailVerified: false,
      };
      
      console.log("Creating user with data:", JSON.stringify(userToCreate, null, 2));
      
      const user = await storage.createUser(userToCreate);

      // Generate OTP
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      await storage.createOtp(user.email, code);

      try {
        await sendOtpEmail(user.email, code, "EMAIL_VERIFICATION");
        console.log(`[OTP EMAIL SENT] To: ${user.email}`);
      } catch (emailErr) {
        console.error("Failed to send OTP email", emailErr);
        return res.status(500).json({
          message:
            "User created but we could not send the verification email. Please try again later.",
        });
      }

      res.status(201).json({ 
        message: "User created. Please verify your email with the OTP code sent to your email.", 
        email: user.email
      });
    } catch (err) {
      console.error("Registration error:", err);
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: err.errors[0].message });
      } else {
        const errorMessage = err instanceof Error ? err.message : "Internal server error";
        res.status(500).json({ message: errorMessage });
      }
    }
  });

  app.post(api.auth.verifyOtp.path, async (req, res) => {
    try {
      const { email, code } = api.auth.verifyOtp.input.parse(req.body);
      const isValid = await storage.verifyOtp(email, code, "EMAIL_VERIFICATION");
      
      if (!isValid) {
        return res.status(400).json({ message: "Invalid or expired OTP" });
      }

      // Mark user as verified
      const user = await storage.getUserByEmail(email);
      if (user) {
        await storage.verifyUserEmail(email);
      }

      res.status(200).json({ message: "Email verified. Please login.", user });
    } catch (err) {
       res.status(400).json({ message: "Invalid request" });
    }
  });

  app.post(api.auth.forgotPassword.path, async (req, res) => {
    try {
      const { email } = api.auth.forgotPassword.input.parse(req.body);
      const user = await storage.getUserByEmail(email);
      if (!user) {
        return res.status(200).json({ message: "If that email exists, we've sent an OTP." });
      }

      const code = Math.floor(100000 + Math.random() * 900000).toString();
      await storage.createOtp(email, code, "PASSWORD_RESET");
      try {
        await sendOtpEmail(email, code, "PASSWORD_RESET");
      } catch (mailErr) {
        console.error("Failed to send password reset OTP", mailErr);
        return res.status(500).json({ message: "Unable to send OTP email. Please try again later." });
      }

      res.status(200).json({ message: "OTP sent. Please check your email." });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      res.status(500).json({ message: "Unable to start password reset." });
    }
  });

  app.post(api.auth.resetPassword.path, async (req, res) => {
    try {
      const { email, code, newPassword } = api.auth.resetPassword.input.parse(req.body);
      const user = await storage.getUserByEmail(email);
      if (!user) {
        return res.status(400).json({ message: "Invalid email" });
      }

      const isValid = await storage.verifyOtp(email, code, "PASSWORD_RESET");
      if (!isValid) {
        return res.status(400).json({ message: "Invalid or expired OTP" });
      }

      const hashedPassword = await hashPassword(newPassword);
      await storage.updateUserPassword(user.id, hashedPassword);

      res.status(200).json({ message: "Password updated. You can now login." });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      res.status(500).json({ message: "Unable to reset password." });
    }
  });

  app.post(api.auth.login.path, passport.authenticate("local"), (req, res) => {
    res.json(req.user);
  });

  app.post(api.auth.logout.path, (req, res) => {
    req.logout((err) => {
      if (err) {
        console.error("Logout error:", err);
        return res.status(500).json({ message: "Logout failed" });
      }
      
      req.session.destroy((err) => {
        if (err) {
          console.error("Session destroy error:", err);
          return res.status(500).json({ message: "Session destroy failed" });
        }
        
        res.clearCookie('connect.sid'); // Clear session cookie
        res.sendStatus(200);
      });
    });
  });

  app.get(api.auth.me.path, (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    res.json(req.user);
  });

  // Admin Routes
  const requireAdmin = (req: any, res: any, next: any) => {
    console.log("=== ADMIN CHECK ===");
    console.log("Is authenticated:", req.isAuthenticated());
    console.log("User:", req.user ? { id: req.user.id, email: req.user.email, role: req.user.role } : null);
    
    if (!req.isAuthenticated()) {
      console.log("❌ Not authenticated");
      return res.sendStatus(403);
    }
    
    if (req.user.role !== "ADMIN") {
      console.log("❌ Not admin, role:", req.user.role);
      return res.sendStatus(403);
    }
    
    console.log("✅ Admin check passed");
    next();
  };

  app.get(api.admin.listUsers.path, requireAdmin, async (req, res) => {
    const users = await storage.getAllUsers();
    res.json(users);
  });

  app.post(api.admin.approveUser.path, requireAdmin, async (req, res) => {
    const idString = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const id = parseInt(idString);
    const user = await storage.updateUserStatus(id, "APPROVED");
    if (!user) return res.status(404).send("User not found");
    
    // Generate account number if not exists
    if (!user.accountNumber) {
        const accNum = generateAccountNumber();
        await storage.updateUserAccountNumber(id, accNum);
    }
    
    res.json(user);
  });

  app.post(api.admin.rejectUser.path, requireAdmin, async (req, res) => {
    const idString = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const id = parseInt(idString);
    const user = await storage.updateUserStatus(id, "REJECTED");
    if (!user) return res.status(404).send("User not found");
    res.json(user);
  });

  app.post(api.admin.createTransaction.path, requireAdmin, async (req, res) => {
    console.log("=== TRANSACTION CREATION DEBUG ===");
    console.log("1. Request received");
    console.log("2. Admin check passed");
    console.log("3. Raw request body:", JSON.stringify(req.body, null, 2));
    
    try {
      console.log("4. Starting input parsing...");
      const parsedInput = api.admin.createTransaction.input.parse(req.body);
      console.log("5. Input parsed successfully:", JSON.stringify(parsedInput, null, 2));

      const input = {
        ...parsedInput,
        userId: Number(parsedInput.userId),
        amount: parsedInput.amount.toString(),
      };
      console.log("5a. Normalized input:", JSON.stringify(input, null, 2));
      
      const transactionData = {
        userId: input.userId,
        type: input.type,
        amount: input.amount, // Already converted to string by schema
        description: input.description,
        createdBy: "ADMIN" as const,
      };
      
      console.log("6. Transaction data prepared:", JSON.stringify(transactionData, null, 2));
      
      const tx = await storage.createTransaction(transactionData);
      console.log("7. Transaction created successfully:", tx.id);
      
      // Update User Balance
      const user = await storage.getUser(input.userId);
      if (user) {
        const currentBalance = parseFloat(user.balance);
        const amount = parseFloat(input.amount);
        const newBalance = input.type === 'CREDIT' 
          ? (currentBalance + amount).toFixed(2)
          : (currentBalance - amount).toFixed(2);
        
        console.log(`8. Updating balance for user ${user.id}: ${currentBalance} -> ${newBalance}`);
        await storage.updateUserBalance(user.id, newBalance);
      }
      
      console.log("9. Transaction completed successfully");
      res.status(201).json(tx);
    } catch (err) {
      console.error("=== TRANSACTION ERROR ===");
      console.error("Error occurred:", err);
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      const errorStack = err instanceof Error ? err.stack : undefined;

      console.error("Error message:", errorMessage);
      if (errorStack) console.error("Error stack:", errorStack);

      if (err instanceof z.ZodError) {
        console.error("Zod validation errors:", err.errors);
        res.status(400).json({ message: `Validation error: ${err.errors[0].message}` });
      } else {
        res.status(400).json({ message: errorMessage || "Invalid transaction" });
      }
    }
  });

  app.get(api.admin.listAllTransactions.path, requireAdmin, async (req, res) => {
     const txs = await storage.getAllTransactions();
     res.json(txs);
  });

  // User Routes
  app.get(api.user.listTransactions.path, async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const txs = await storage.getTransactionsByUserId((req.user as any).id);
    res.json(txs);
  });
  
  // Seed Admin
  (async () => {
    const adminEmail = "admin@bank.com";
    const existing = await storage.getUserByEmail(adminEmail);
    if (!existing) {
      const hashedPassword = await hashPassword("admin123");
      await storage.createUser({
        firstName: "Super",
        lastName: "Admin",
        email: adminEmail,
        phone: "0000000000",
        dob: "2000-01-01",
        gender: "OTHER",
        nationality: "US",
        address: "Bank HQ",
        city: "New York",
        state: "NY",
        country: "US",
        zipCode: "10001",
        idType: "PASSPORT",
        idNumber: "ADMIN001",
        idExpiryDate: "2030-01-01",
        accountType: "CHECKING",
        transactionPin: "1234",
        password: hashedPassword,
        role: "ADMIN",
        status: "APPROVED",
        balance: "1000000.00",
        isEmailVerified: true,
      });
      console.log("Admin account seeded: admin@bank.com / admin123");
    }
  })();

  return httpServer;
}
