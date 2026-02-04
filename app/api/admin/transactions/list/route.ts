import { NextRequest } from 'next/server';
import { adminStorage } from '@server/storage';
import { isAdmin, getCurrentUserFromRequest } from '@lib/auth';

// Helper function to validate admin access
async function requireAdmin(request: Request): Promise<{ authenticated: boolean; user?: any }> {
  const admin = await isAdmin(request);

  if (!admin) {
    return { authenticated: false };
  }

  const user = await getCurrentUserFromRequest(request);
  return { authenticated: true, user };
}

export async function GET(request: NextRequest) {
  const adminCheck = await requireAdmin(request);
  if (!adminCheck.authenticated) {
    return new Response(JSON.stringify({ message: "Forbidden" }), {
      status: 403,
      headers: { "Content-Type": "application/json" }
    });
  }

  const txs = await adminStorage.getAllTransactions();
  return Response.json(txs);
}