import type { VercelRequest, VercelResponse } from "@vercel/node";
import { db, users } from "@/db/db";
import { eq } from "drizzle-orm";
import { z } from "zod";

const approvalSchema = z.object({
  userId: z.number(),
  status: z.enum(["APPROVED", "REJECTED"]),
});

function generateAccountNumber() {
  return "202" + Math.floor(100000000 + Math.random() * 900000000).toString();
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "PATCH") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const payload = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const data = approvalSchema.parse(payload);

    const [updated] = await db
      .update(users)
      .set({
        status: data.status,
        accountNumber: data.status === "APPROVED" ? generateAccountNumber() : undefined,
      })
      .where(eq(users.id, data.userId))
      .returning();

    if (!updated) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ id: updated.id, status: updated.status, accountNumber: updated.accountNumber });
  } catch (err: any) {
    console.error(err);
    res.status(400).json({ message: err.message ?? "Invalid request" });
  }
}
