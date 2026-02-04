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

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const awaitedParams = await params;
  const adminCheck = await requireAdmin(request);
  if (!adminCheck.authenticated) {
    return new Response(JSON.stringify({ message: "Forbidden" }), {
      status: 403,
      headers: { "Content-Type": "application/json" }
    });
  }

  const userId = parseInt(awaitedParams.id);

  if (!userId || isNaN(userId)) {
    return new Response(JSON.stringify({ message: "Invalid user ID" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  const user = await adminStorage.updateUserStatus(userId, "REJECTED");
  if (!user) {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" }
    });
  }

  return Response.json(user);
}