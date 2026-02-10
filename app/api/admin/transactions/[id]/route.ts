import { NextRequest } from 'next/server';
import { adminStorage } from '@server/admin-storage';
import { getCurrentUserFromRequest } from '@lib/auth';
import { z } from 'zod';

const updateTransactionSchema = z.object({
    type: z.enum(['CREDIT', 'DEBIT']).optional(),
    amount: z.string().optional(),
    description: z.string().optional(),
    createdAt: z.string().optional(),
});

export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: idParam } = await params;

        // Check Admin Auth
        const user = await getCurrentUserFromRequest(request);
        if (!user || user.role !== 'ADMIN') {
            return Response.json({ message: "Unauthorized" }, { status: 403 });
        }

        // If it's a UUID or non-numeric string, we'll try to use it as is
        // If it's numeric (serial ID), we parse it
        const id = /^\d+$/.test(idParam) ? parseInt(idParam) : idParam;

        if (typeof id === 'number' && isNaN(id)) {
            return Response.json({ message: "Invalid transaction ID" }, { status: 400 });
        }

        const body = await request.json();
        const validatedData = updateTransactionSchema.parse(body);

        const updatedTransaction = await adminStorage.updateTransaction(id, validatedData);

        return Response.json(updatedTransaction);
    } catch (err: any) {
        console.error("Update transaction error:", err);
        if (err.name === 'ZodError') {
            return Response.json({ message: err.errors[0].message }, { status: 400 });
        }
        return Response.json({ message: err.message || "Internal server error" }, { status: 500 });
    }
}
