import { NextRequest } from 'next/server';
import { api } from '@shared/routes';
import { storage } from '@server/storage';

export async function POST(request: NextRequest) {
  try {
    const { email, code } = api.auth.verifyOtp.input.parse(await request.json());
    const isValid = await storage.verifyOtp(email, code, "EMAIL_VERIFICATION");

    if (!isValid) {
      return Response.json({ message: "Invalid or expired OTP" }, { status: 400 });
    }

    // Mark user as verified
    const user = await storage.getUserByEmail(email);
    if (user) {
      await storage.verifyUserEmail(email);
    }

    return Response.json({ message: "Email verified. Please login.", user }, { status: 200 });
  } catch (err: any) {
    return Response.json({ message: "Invalid request" }, { status: 400 });
  }
}