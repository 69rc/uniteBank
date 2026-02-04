import { NextRequest } from 'next/server';
import { getCurrentUserFromRequest, isAuthenticated } from '@lib/auth';

export async function GET(request: NextRequest) {
  const authenticated = await isAuthenticated(request);
  if (!authenticated) {
    return new Response(JSON.stringify({ message: "Not authenticated" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }

  const user = await getCurrentUserFromRequest(request);
  return Response.json(user);
}