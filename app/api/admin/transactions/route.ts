import { NextRequest } from 'next/server';
import { api } from '@shared/routes';
import { storage } from '@server/storage';
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

    const input = {
      ...parsedInput,
      userId: Number(parsedInput.userId),
      amount: parsedInput.amount.toString(),
    };
    console.log("5a. Normalized input:", JSON.stringify(input, null, 2));

    const transactionData = {
      userId: input.userId,
      type: input.type,
      amount: input.amount, // Already converted to string by schema
      description: input.description,
      createdBy: "ADMIN" as const,
    };

    console.log("6. Transaction data prepared:", JSON.stringify(transactionData, null, 2));

    const tx = await storage.createTransaction(transactionData);
    console.log("7. Transaction created successfully:", tx.id);

    // Update User Balance
    const user = await storage.getUser(input.userId);
    if (user) {
      const currentBalance = parseFloat(user.balance);
      const amount = parseFloat(input.amount);
      const newBalance = input.type === 'CREDIT'
        ? (currentBalance + amount).toFixed(2)
        : (currentBalance - amount).toFixed(2);

      console.log(`8. Updating balance for user ${user.id}: ${currentBalance} -> ${newBalance}`);
      await storage.updateUserBalance(user.id, newBalance);
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