import { NextRequest } from 'next/server';
import { api } from '@shared/routes';
import { adminStorage } from '@server/storage';
import { comparePasswords } from '../../utils/auth';
import { createSession } from '@lib/auth';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const input = api.auth.login.input.parse(await request.json());
    const user = await adminStorage.getUserByEmail(input.email);

    if (!user || !(await comparePasswords(input.password, user.password))) {
      return Response.json({ message: "Invalid email or password" }, { status: 401 });
    }

    const cookieStore = await cookies();
    const storedCaptcha = cookieStore.get('captcha_code')?.value;

    if (!storedCaptcha || input.loginCode !== storedCaptcha) {
      return Response.json({ message: "Invalid verification code. Please try again." }, { status: 401 });
    }

    // Clear captcha cookie after successful verification
    cookieStore.delete('captcha_code');
    console.log(user);
    if (user.status === "PENDING") {
      return Response.json({ message: "Account pending admin approval" }, { status: 403 });
    }

    if (user.status === "REJECTED") {
      return Response.json({ message: "Account rejected. Contact support." }, { status: 403 });
    }

    // Create session for the user
    const sessionId = await createSession(user.id);

    return new Response(JSON.stringify(user), {
      status: 200,
      statusText: 'OK'
    });
  } catch (err: any) {
    if (err.name === 'ZodError') {
      return Response.json({ message: err.errors[0].message }, { status: 400 });
    } else {
      return Response.json({ message: err.message || "Internal server error" }, { status: 500 });
    }
  }
}