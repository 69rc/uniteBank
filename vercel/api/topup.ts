import type { VercelRequest, VercelResponse } from "@vercel/node";
import { db, users } from "@/db/db";
import { eq, sql } from "drizzle-orm";
import { z } from "zod";

const topupSchema = z.object({
  userId: z.number(),
  amount: z.number().positive(),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const payload = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const data = topupSchema.parse(payload);

    const [user] = await db
      .update(users)
      .set({ balance: sql`${users.balance} + ${data.amount}` })
      .where(eq(users.id, data.userId))
      .returning();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ id: user.id, balance: user.balance });
  } catch (err: any) {
    console.error(err);
    res.status(400).json({ message: err.message ?? "Invalid request" });
  }
}
