import { NextRequest } from 'next/server';
import { api } from '@shared/routes';
import { storage } from '@server/storage';
import { hashPassword } from '../../utils/auth';
import { generateAccountNumber, generateCustomerId } from '../../utils/user';
import { sendOtpEmail } from '@server/mailer';

export async function POST(request: NextRequest) {
  try {
    const input = api.auth.register.input.parse(await request.json());
    console.log("Registration input received:", JSON.stringify(input, null, 2));

    const existing = await storage.getUserByEmail(input.email);
    if (existing) {
      return Response.json({ message: "Email already registered" }, { status: 400 });
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
      return Response.json({
        message:
          "User created but we could not send the verification email. Please try again later.",
      }, { status: 500 });
    }

    return Response.json({
      message: "User created. Please verify your email with the OTP code sent to your email.",
      email: user.email
    }, { status: 201 });
  } catch (err: any) {
    console.error("Registration error:", err);
    if (err.name === 'ZodError') {
      return Response.json({ message: err.errors[0].message }, { status: 400 });
    } else {
      return Response.json({ message: err.message || "Internal server error" }, { status: 500 });
    }
  }
}