import { db, otps } from "@/db/db";
import { and, eq } from "drizzle-orm";

export async function generateOtp(email: string, purpose: "EMAIL_VERIFICATION" | "PASSWORD_RESET" = "EMAIL_VERIFICATION") {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  await db.delete(otps).where(and(eq(otps.email, email), eq(otps.purpose, purpose)));
  await db.insert(otps).values({ email, code, purpose, expiresAt });

  return code;
}

export async function validateOtp(email: string, code: string, purpose: "EMAIL_VERIFICATION" | "PASSWORD_RESET" = "EMAIL_VERIFICATION") {
  const [otp] = await db
    .select()
    .from(otps)
    .where(and(eq(otps.email, email), eq(otps.purpose, purpose)));

  if (!otp) return false;
  if (new Date() > otp.expiresAt) {
    await db.delete(otps).where(eq(otps.id, otp.id));
    return false;
  }

  const valid = otp.code === code;
  await db.delete(otps).where(eq(otps.id, otp.id));
  return valid;
}
