import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";
import { generateOtp, validateOtp } from "@/lib/otp";

const schema = z.object({
  email: z.string().email(),
  action: z.enum(["generate", "verify"]),
  purpose: z.enum(["EMAIL_VERIFICATION", "PASSWORD_RESET"]).default("EMAIL_VERIFICATION"),
  code: z.string().length(6).optional(),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const payload = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const data = schema.parse(payload);

    if (data.action === "generate") {
      const code = await generateOtp(data.email, data.purpose);
      return res.json({ message: "OTP generated", code });
    }

    if (!data.code) {
      return res.status(400).json({ message: "Code is required for verification" });
    }

    const valid = await validateOtp(data.email, data.code, data.purpose);
    return res.json({ valid });
  } catch (err: any) {
    console.error(err);
    res.status(400).json({ message: err.message ?? "Invalid request" });
  }
}
