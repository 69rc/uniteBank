import "dotenv/config";
import { createAdminSupabaseClient } from "../lib/supabase";
import { users } from "../shared/schema";
import { eq } from "drizzle-orm";
import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

async function hashPassword(password: string) {
  const salt = randomBytes(16).toString('hex');
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString('hex')}.${salt}`;
}

async function generateAccountNumber(): Promise<string> {
  // Generate a 10-digit account number
  return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}

async function generateCustomerId(): Promise<string> {
  // Generate customer ID
  return 'CU' + Math.floor(1000000000000 + Math.random() * 9000000000000).toString();
}

async function seedUsers() {
  console.log("🌱 Seeding users...");

  const adminClient = await createAdminSupabaseClient();

  // Check existing users
  const { data: existingUsers, error } = await adminClient
    .from('users')
    .select('*');

  if (error) {
    console.error("❌ Error fetching existing users:", error);
    return;
  }

  console.log(`Found ${existingUsers?.length || 0} existing users`);

  // Check if admin exists
  const existingAdmin = existingUsers?.find(u => u.role === "ADMIN");
  if (!existingAdmin) {
    // Seed Admin User
    const adminAccountNumber = await generateAccountNumber();
    const adminHashedPassword = await hashPassword("admin123"); // Hash the password
    const { data: admin, error: insertError } = await adminClient
      .from('users')
      .insert({
        first_name: "Admin",
        last_name: "User",
        email: "admin@unitebank.com",
        phone: "+1234567890",
        dob: "1990-01-01",
        gender: "Other",
        nationality: "US",
        address: "123 Admin Street",
        city: "New York",
        state: "NY",
        country: "USA",
        zip_code: "10001",
        id_type: "Passport",
        id_number: "ADM123456789",
        id_expiry_date: "2030-12-31",
        account_type: "CURRENT",
        currency: "USD",
        account_purpose: "Business Operations",
        password: adminHashedPassword, // Use hashed password
        transaction_pin: "1234",
        role: "ADMIN",
        status: "APPROVED",
        isEmailVerified: true,
        account_number: adminAccountNumber,
        balance: "10000.00"
      })
      .select();

    if (insertError) {
      console.error("❌ Error inserting admin:", insertError);
    } else if (admin && admin[0]) {
      console.log("✅ Admin user created:", admin[0].email, "Account:", admin[0].accountNumber ?? admin[0].account_number);
    }
  } else {
    console.log("✅ Admin user already exists:", existingAdmin.email);

    // Update admin account number and customer ID if missing
    const updates: any = {};
    if (!existingAdmin.account_number && !existingAdmin.accountNumber) {
      updates.account_number = await generateAccountNumber();
      console.log("✅ Generated admin account number:", updates.account_number);
    }
    if (!existingAdmin.customer_id && !existingAdmin.customerId) {
      updates.customer_id = await generateCustomerId();
      console.log("✅ Generated admin customer ID:", updates.customer_id);
    }

    if (Object.keys(updates).length > 0 && existingAdmin.id) {
      const { error: updateError } = await adminClient
        .from('users')
        .update(updates)
        .eq('id', existingAdmin.id);

      if (updateError) {
        console.error("❌ Error updating admin user:", updateError);
      } else {
        console.log("✅ Updated admin user with missing fields");
      }
    }
  }

  // Check if regular user exists
  const existingUser = existingUsers?.find(u => u.role === "USER");
  if (!existingUser) {
    // Seed Regular User
    const userAccountNumber = await generateAccountNumber();
    const userHashedPassword = await hashPassword("user123"); // Hash the password
    const { data: user, error: userInsertError } = await adminClient
      .from('users')
      .insert({
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        phone: "+1987654321",
        dob: "1995-06-15",
        gender: "Male",
        nationality: "US",
        address: "456 User Avenue",
        city: "Los Angeles",
        state: "CA",
        country: "USA",
        zip_code: "90210",
        id_type: "Driver License",
        id_number: "DL987654321",
        id_expiry_date: "2028-06-15",
        account_type: "SAVINGS",
        currency: "USD",
        account_purpose: "Personal Banking",
        password: userHashedPassword, // Use hashed password
        transaction_pin: "5678",
        role: "USER",
        status: "APPROVED",
        isEmailVerified: true,
        account_number: userAccountNumber,
        balance: "1500.00"
      })
      .select();

    if (userInsertError) {
      console.error("❌ Error inserting user:", userInsertError);
    } else if (user && user[0]) {
      console.log("✅ Regular user created:", user[0].email, "Account:", user[0].accountNumber ?? user[0].account_number);
    }
  } else {
    console.log("✅ Regular user already exists:", existingUser.email);

    // Update regular user account number and customer ID if missing
    const updates: any = {};
    if (!existingUser.account_number && !existingUser.accountNumber) {
      updates.account_number = await generateAccountNumber();
      console.log("✅ Generated user account number:", updates.account_number);
    }
    if (!existingUser.customer_id && !existingUser.customerId) {
      updates.customer_id = await generateCustomerId();
      console.log("✅ Generated user customer ID:", updates.customer_id);
    }

    if (Object.keys(updates).length > 0 && existingUser.id) {
      const { error: userUpdateError } = await adminClient
        .from('users')
        .update(updates)
        .eq('id', existingUser.id);

      if (userUpdateError) {
        console.error("❌ Error updating regular user:", userUpdateError);
      } else {
        console.log("✅ Updated regular user with missing fields");
      }
    }
  }

  console.log("\n🎉 Seeding completed!");
  console.log("\nLogin credentials:");
  console.log("Admin: admin@bank.com (existing) or admin@unitebank.com");
  console.log("User: john.doe@example.com / user123");
}

async function main() {
  try {
    await seedUsers();
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
}

main();