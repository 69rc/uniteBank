import type { VercelRequest, VercelResponse } from "@vercel/node";
import { db, users } from "@/db/db";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { randomBytes, scryptSync } from "crypto";

const registrationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string(),
  lastName: z.string(),
});

function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const buf = scryptSync(password, salt, 64);
  return `${buf.toString("hex")}.${salt}`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const payload = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const data = registrationSchema.parse(payload);

    const existing = await db.select().from(users).where(eq(users.email, data.email)).limit(1);
    if (existing.length) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashed = hashPassword(data.password);
    const [created] = await db
      .insert(users)
      .values({
        email: data.email,
        password: hashed,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: "",
        dob: "2000-01-01",
        gender: "OTHER",
        nationality: "US",
        address: "",
        city: "",
        state: "",
        country: "US",
        zipCode: "00000",
        idType: "PASSPORT",
        idNumber: "TEMP",
        idExpiryDate: "2030-01-01",
        accountType: "CHECKING",
        transactionPin: "0000",
      })
      .returning();

    res.status(201).json({ id: created.id, email: created.email, status: created.status });
  } catch (err: any) {
    console.error(err);
    res.status(400).json({ message: err.message ?? "Invalid request" });
  }
}
