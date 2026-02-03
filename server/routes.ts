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
      const existing = await storage.getUserByEmail(input.email);
      if (existing) {
        return res.status(400).json({ message: "Email already registered" });
      }

      const hashedPassword = await hashPassword(input.password);
      const user = await storage.createUser({
        ...input,
        password: hashedPassword,
        role: "USER",
        status: "PENDING",
        balance: "0.00",
        isEmailVerified: false,
      });

      // Generate OTP
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      await storage.createOtp(user.email, code);
      console.log(`[MOCK EMAIL] To: ${user.email}, OTP: ${code}`);

      res.status(201).json({ message: "User created. Check console for OTP.", email: user.email });
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: err.errors[0].message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.post(api.auth.verifyOtp.path, async (req, res) => {
    try {
      const { email, code } = api.auth.verifyOtp.input.parse(req.body);
      const isValid = await storage.verifyOtp(email, code);
      
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

  app.post(api.auth.login.path, passport.authenticate("local"), (req, res) => {
    res.json(req.user);
  });

  app.post(api.auth.logout.path, (req, res) => {
    req.logout(() => {
      res.sendStatus(200);
    });
  });

  app.get(api.auth.me.path, (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    res.json(req.user);
  });

  // Admin Routes
  const requireAdmin = (req: any, res: any, next: any) => {
    if (!req.isAuthenticated() || req.user.role !== "ADMIN") return res.sendStatus(403);
    next();
  };

  app.get(api.admin.listUsers.path, requireAdmin, async (req, res) => {
    const users = await storage.getAllUsers();
    res.json(users);
  });

  app.post(api.admin.approveUser.path, requireAdmin, async (req, res) => {
    const id = parseInt(req.params.id);
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
    const id = parseInt(req.params.id);
    const user = await storage.updateUserStatus(id, "REJECTED");
    if (!user) return res.status(404).send("User not found");
    res.json(user);
  });

  app.post(api.admin.createTransaction.path, requireAdmin, async (req, res) => {
    try {
      const input = api.admin.createTransaction.input.parse(req.body);
      const tx = await storage.createTransaction({
        ...input,
        createdBy: "ADMIN",
        createdAt: new Date(),
      });
      
      // Update User Balance
      const user = await storage.getUser(input.userId);
      if (user) {
        const currentBalance = parseFloat(user.balance);
        const amount = parseFloat(input.amount);
        const newBalance = input.type === 'CREDIT' 
          ? (currentBalance + amount).toFixed(2)
          : (currentBalance - amount).toFixed(2);
        
        await storage.updateUserBalance(user.id, newBalance);
      }
      
      res.status(201).json(tx);
    } catch (err) {
      res.status(400).json({ message: "Invalid transaction" });
    }
  });

  app.get(api.admin.listAllTransactions.path, requireAdmin, async (req, res) => {
     const txs = await storage.getAllTransactions();
     res.json(txs);
  });

  // User Routes
  app.get(api.user.listTransactions.path, async (req, res) => {
    if (!req.isAuthenticated()) return res.sendStatus(401);
    const txs = await storage.getTransactionsByUserId(req.user!.id);
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
