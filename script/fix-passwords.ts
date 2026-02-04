import "dotenv/config";
import { createAdminSupabaseClient } from "../lib/supabase";
import { users } from "../shared/schema";
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

  const adminClient = await createAdminSupabaseClient();

  // Get all users from Supabase
  const { data: allUsers, error } = await adminClient
    .from('users')
    .select('*');

  if (error) {
    console.error('❌ Error fetching users:', error);
    return;
  }

  if (!allUsers) {
    console.log('✅ No users found');
    return;
  }

  for (const user of allUsers) {
    // Check if password is in the correct format (contains a dot for salt)
    if (user.password && !user.password.includes('.')) {
      console.log(`Fixing password for user: ${user.email}`);

      // Hash the plain text password
      const hashedPassword = await hashPassword(user.password);

      // Update the user's password
      const { error: updateError } = await adminClient
        .from('users')
        .update({ password: hashedPassword })
        .eq('id', user.id);

      if (updateError) {
        console.error(`❌ Error updating password for ${user.email}:`, updateError);
      } else {
        console.log(`✅ Updated password for ${user.email}`);
      }
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