import { NextRequest } from 'next/server';
import { adminStorage } from '@server/storage';
import { generateAccountNumber } from '../../../../utils/user';
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

  // Debug: Log the incoming ID
  console.log("Received ID for approval:", awaitedParams.id);

  // The database ID is a UUID, so try to find user by UUID first
  let user: any;
  const idParam = awaitedParams.id;
  
  // First, try to find user by UUID (database ID)
  user = await adminStorage.updateUserStatusByUuid(idParam, "APPROVED");
  
  // If not found by UUID, try customer ID
  if (!user) {
    console.log("No user found by UUID, trying customer ID:", idParam);
    const foundUser = await adminStorage.getUserByCustomerId(idParam);
    if (foundUser) {
      console.log("Found user by customer ID, updating status for DB ID:", foundUser.id);
      // Use the UUID from foundUser.id to update status
      user = await adminStorage.updateUserStatusByUuid(foundUser.id, "APPROVED");
    } else {
      console.log("No user found with customer ID:", idParam);
    }
  }

  if (!user) {
    console.log("User not found for ID:", idParam);
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" }
    });
  }

  // Generate account number if not exists
  if (!user.accountNumber) {
    const accNum = generateAccountNumber();
    await adminStorage.updateUserAccountNumber(user.id, accNum);
  }

  console.log("Successfully approved user:", user.id);
  return Response.json(user);
}