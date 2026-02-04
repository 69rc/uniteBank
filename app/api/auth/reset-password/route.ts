import { NextRequest } from 'next/server';
import { api } from '@shared/routes';
import { adminStorage } from '@server/storage';
import { hashPassword } from '../../utils/auth';

export async function POST(request: NextRequest) {
  try {
    const { email, code, newPassword } = api.auth.resetPassword.input.parse(await request.json());
    const user = await adminStorage.getUserByEmail(email);
    if (!user) {
      return Response.json({ message: "Invalid email" }, { status: 400 });
    }

    const isValid = await adminStorage.verifyOtp(email, code, "PASSWORD_RESET");
    if (!isValid) {
      return Response.json({ message: "Invalid or expired OTP" }, { status: 400 });
    }

    const hashedPassword = await hashPassword(newPassword);
    await adminStorage.updateUserPassword(user.id, hashedPassword);

    return Response.json({ message: "Password updated. You can now login." }, { status: 200 });
  } catch (err: any) {
    if (err.name === 'ZodError') {
      return Response.json({ message: err.errors[0].message }, { status: 400 });
    }
    return Response.json({ message: "Unable to reset password." }, { status: 500 });
  }
}