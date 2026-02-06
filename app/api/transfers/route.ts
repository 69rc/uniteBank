import { NextRequest } from 'next/server';
import { storage } from '@server/storage.supabase';
import { adminStorage } from '@server/admin-storage';
import { z } from 'zod';
import { getCurrentUserFromRequest } from '@lib/auth';

const transferSchema = z.object({
    recipientAccountNumber: z.string().min(10),
    amount: z.number().positive(),
    description: z.string().optional(),
});

export async function POST(request: NextRequest) {
    try {
        // Get authenticated user
        const sender = await getCurrentUserFromRequest(request);
        if (!sender) {
            return Response.json({ message: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const validation = transferSchema.safeParse(body);

        if (!validation.success) {
            return Response.json({ message: "Invalid input", errors: validation.error.errors }, { status: 400 });
        }

        const { recipientAccountNumber, amount, description } = validation.data;

        // Check sender status
        if (sender.status !== 'APPROVED') {
            return Response.json({ message: "Account not approved" }, { status: 403 });
        }

        // Check Balance
        if (parseFloat(sender.balance) < amount) {
            return Response.json({ message: "Insufficient funds" }, { status: 400 });
        }

        // Fetch Recipient
        const recipient = await adminStorage.getUserByAccountNumber(recipientAccountNumber);
        if (!recipient) {
            return Response.json({ message: "Recipient not found" }, { status: 404 });
        }

        if (sender.id === recipient.id) {
            return Response.json({ message: "Cannot transfer to self" }, { status: 400 });
        }

        // Create Transfer Request
        const transfer = await storage.createTransfer({
            sender_id: sender.id,
            recipient_id: recipient.id,
            amount: amount.toString(),
            description: description || "Transfer",
            status: "PENDING"
        });

        return Response.json({ message: "Transfer request created", transfer }, { status: 201 });
    } catch (err: any) {
        console.error("Transfer request error:", err);
        return Response.json({ message: "Internal server error" }, { status: 500 });
    }
}
