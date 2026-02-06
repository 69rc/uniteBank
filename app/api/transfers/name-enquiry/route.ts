import { NextRequest } from 'next/server';
import { adminStorage } from '@server/admin-storage';
import { z } from 'zod';

const enquirySchema = z.object({
    accountNumber: z.string().min(10),
});

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const accountNumber = searchParams.get('accountNumber');

        if (!accountNumber) {
            return Response.json({ message: "Account number is required" }, { status: 400 });
        }

        const validation = enquirySchema.safeParse({ accountNumber });
        if (!validation.success) {
            return Response.json({ message: "Invalid account number format" }, { status: 400 });
        }

        const user = await adminStorage.getUserByAccountNumber(accountNumber);

        if (!user) {
            return Response.json({ message: "Account not found" }, { status: 404 });
        }

        // Return only non-sensitive info
        return Response.json({
            firstName: user.firstName,
            lastName: user.lastName,
            accountNumber: user.accountNumber,
        });
    } catch (err: any) {
        console.error("Name enquiry error:", err);
        return Response.json({ message: "Internal server error" }, { status: 500 });
    }
}
