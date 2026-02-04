import { NextRequest } from 'next/server';
import { publicStorage } from '@server/storage';
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
  if (!user) {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" }
    });
  }
  const txs = await publicStorage.getTransactionsByUserId(user.id);
  return Response.json(txs);
}