import { NextRequest } from 'next/server';
import { api } from '@shared/routes';
import { adminStorage } from '@server/storage';
import { comparePasswords } from '../../utils/auth';
import { createSessionId } from '@lib/auth';

export async function POST(request: NextRequest) {
  try {
    const input = api.auth.login.input.parse(await request.json());
    const user = await adminStorage.getUserByEmail(input.email);

    if (!user || !(await comparePasswords(input.password, user.password))) {
      return Response.json({ message: "Invalid email or password" }, { status: 401 });
    }
console.log(user);
    if (!user.isEmailVerified) {
      return Response.json({ message: "Email not verified" }, { status: 401 });
    }

    // Create session for the user
    const sessionId = createSessionId(user.id);

    // Create response with session cookie in headers
    const headers = new Headers();
    headers.append('Set-Cookie', `sessionId=${sessionId}; HttpOnly; Path=/; ${process.env.NODE_ENV === 'production' ? 'Secure;' : ''} Max-Age=${60 * 60 * 24 * 7}`);

    return new Response(JSON.stringify(user), {
      status: 200,
      headers,
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