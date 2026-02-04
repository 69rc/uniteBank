import { NextRequest } from 'next/server';
import { destroySessionById } from '@lib/auth';

export async function POST(request: NextRequest) {
  // Extract session ID from request cookies
  const cookieHeader = request.headers.get('cookie');
  let sessionId;

  if (cookieHeader) {
    const cookies = cookieHeader.split(';').reduce((acc, cookieStr) => {
      const [key, value] = cookieStr.trim().split('=');
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);

    sessionId = cookies['sessionId'];
  }

  if (sessionId) {
    destroySessionById(sessionId);
  }

  // Create response to clear the session cookie
  const headers = new Headers();
  headers.append('Set-Cookie', 'sessionId=; HttpOnly; Path=/; Max-Age=0');

  return new Response(null, {
    status: 200,
    headers
  });
}