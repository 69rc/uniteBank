import { NextRequest } from 'next/server';
import { adminStorage } from '@server/admin-storage';
import { getCurrentUserFromRequest } from '@lib/auth';

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        // Check Admin Auth
        const user = await getCurrentUserFromRequest(request);
        if (!user || user.role !== 'ADMIN') {
            return Response.json({ message: "Unauthorized" }, { status: 403 });
        }

        const { id: idParam } = await params;
        const id = parseInt(idParam);
        if (isNaN(id)) {
            return Response.json({ message: "Invalid ID" }, { status: 400 });
        }

        await adminStorage.approveTransfer(id, user.id);

        return Response.json({ message: "Transfer approved" });
    } catch (err: any) {
        console.error("Approve transfer error:", err);
        return Response.json({ message: err.message || "Internal server error" }, { status: 500 });
    }
}
