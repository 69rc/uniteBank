import "dotenv/config";
import { db } from "../server/db";
import { users } from "../shared/schema";
import { eq } from "drizzle-orm";
import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}

async function fixPasswords() {
  console.log("🔧 Fixing user passwords...");

  // Get all users
  const allUsers = await db.select().from(users);
  
  for (const user of allUsers) {
    // Check if password is in the correct format (contains a dot for salt)
    if (!user.password.includes('.')) {
      console.log(`Fixing password for user: ${user.email}`);
      
      // Hash the plain text password
      const hashedPassword = await hashPassword(user.password);
      
      // Update the user's password
      await db.update(users)
        .set({ password: hashedPassword })
        .where(eq(users.id, user.id));
        
      console.log(`✅ Updated password for ${user.email}`);
    } else {
      console.log(`✅ Password already hashed for ${user.email}`);
    }
  }
  
  console.log("🎉 Password fix completed!");
}

async function main() {
  try {
    await fixPasswords();
    process.exit(0);
  } catch (error) {
    console.error("❌ Password fix failed:", error);
    process.exit(1);
  }
}

main();