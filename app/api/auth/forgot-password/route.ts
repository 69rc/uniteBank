import { NextRequest } from 'next/server';
import { api } from '@shared/routes';
import { storage } from '@server/storage';
import { sendOtpEmail } from '@server/mailer';

export async function POST(request: NextRequest) {
  try {
    const { email } = api.auth.forgotPassword.input.parse(await request.json());
    const user = await storage.getUserByEmail(email);
    if (!user) {
      return Response.json({ message: "If that email exists, we've sent an OTP." }, { status: 200 });
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    await storage.createOtp(email, code, "PASSWORD_RESET");
    try {
      await sendOtpEmail(email, code, "PASSWORD_RESET");
    } catch (mailErr) {
      console.error("Failed to send password reset OTP", mailErr);
      return Response.json({ message: "Unable to send OTP email. Please try again later." }, { status: 500 });
    }

    return Response.json({ message: "OTP sent. Please check your email." }, { status: 200 });
  } catch (err: any) {
    if (err.name === 'ZodError') {
      return Response.json({ message: err.errors[0].message }, { status: 400 });
    }
    return Response.json({ message: "Unable to start password reset." }, { status: 500 });
  }
}