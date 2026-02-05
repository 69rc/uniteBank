import { NextRequest } from 'next/server';
import { api } from '@shared/routes';
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

export async function POST(request: NextRequest) {
  const adminCheck = await requireAdmin(request);
  if (!adminCheck.authenticated) {
    return new Response(JSON.stringify({ message: "Forbidden" }), {
      status: 403,
      headers: { "Content-Type": "application/json" }
    });
  }

  console.log("=== TRANSACTION CREATION DEBUG ===");
  console.log("1. Request received");
  console.log("2. Admin check passed");

  try {
    const requestBody = await request.json();
    console.log("3. Raw request body:", JSON.stringify(requestBody, null, 2));

    console.log("4. Starting input parsing...");
    const parsedInput = api.admin.createTransaction.input.parse(requestBody);
    console.log("5. Input parsed successfully:", JSON.stringify(parsedInput, null, 2));

    // Determine the user ID - either from userId or by looking up account number
    let userId: string;

    if (parsedInput.accountNumber) {
      // Look up user by account number
      const user = await adminStorage.getUserByAccountNumber(parsedInput.accountNumber);
      if (!user) {
        return Response.json({ message: "User with account number not found" }, { status: 404 });
      }
      userId = user.id;
      console.log(`5a. Found user by account number ${parsedInput.accountNumber}: user ID ${userId}`);
    } else if (parsedInput.userId) {
      userId = parsedInput.userId;
      console.log(`5a. Using user ID from request: ${userId}`);
    } else {
      return Response.json({ message: "Either userId or accountNumber must be provided" }, { status: 400 });
    }

    const transactionData = {
      userId: userId,
      type: parsedInput.type,
      amount: parsedInput.amount, // Already converted to string by schema
      description: parsedInput.description,
      createdBy: "ADMIN" as const,
    };

    console.log("6. Transaction data prepared:", JSON.stringify(transactionData, null, 2));

    const tx = await adminStorage.createTransaction(transactionData);
    console.log("7. Transaction created successfully:", tx.id);

    // Update User Balance
    const user = await adminStorage.getUserByUuid(userId);
    if (user) {
      const currentBalance = parseFloat(user.balance);
      const amount = parseFloat(parsedInput.amount);
      const newBalance = parsedInput.type === 'CREDIT'
        ? (currentBalance + amount).toFixed(2)
        : (currentBalance - amount).toFixed(2);

      console.log(`8. Updating balance for user ${user.id}: ${currentBalance} -> ${newBalance}`);
      await adminStorage.updateUserBalanceByUuid(userId, newBalance);
    }

    console.log("9. Transaction completed successfully");
    return Response.json(tx, { status: 201 });
  } catch (err: any) {
    console.error("=== TRANSACTION ERROR ===");
    console.error("Error occurred:", err);
    console.error("Error message:", err.message);
    if (err.stack) console.error("Error stack:", err.stack);

    if (err.name === 'ZodError') {
      console.error("Zod validation errors:", err.errors);
      return Response.json({ message: `Validation error: ${err.errors[0].message}` }, { status: 400 });
    } else {
      return Response.json({ message: err.message || "Invalid transaction" }, { status: 400 });
    }
  }
}