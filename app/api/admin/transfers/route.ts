import { NextRequest } from 'next/server';
import { adminStorage } from '@server/admin-storage';
import { getCurrentUserFromRequest } from '@lib/auth';

export async function GET(request: NextRequest) {
    try {
        // Check Admin Auth
        const user = await getCurrentUserFromRequest(request);
        if (!user || user.role !== 'ADMIN') {
            return Response.json({ message: "Unauthorized" }, { status: 403 });
        }

        const transfers = await adminStorage.getAllPendingTransfers();

        // Enrich with sender and recipient details
        const enrichedTransfers = await Promise.all(transfers.map(async (t) => {
            const sender = await adminStorage.getUserByUuid(t.senderId);
            const recipient = await adminStorage.getUserByUuid(t.recipientId);
            return {
                ...t,
                senderName: sender ? `${sender.firstName} ${sender.lastName}` : 'Unknown',
                senderAccountNumber: sender?.accountNumber,
                recipientName: recipient ? `${recipient.firstName} ${recipient.lastName}` : 'Unknown',
                recipientAccountNumber: recipient?.accountNumber,
            };
        }));

        return Response.json(enrichedTransfers);
    } catch (err: any) {
        console.error("Fetch pending transfers error:", err);
        return Response.json({ message: "Internal server error" }, { status: 500 });
    }
}
