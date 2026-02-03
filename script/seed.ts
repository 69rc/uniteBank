import "dotenv/config";
import { db } from "../server/db";
import { users } from "../shared/schema";
import { eq } from "drizzle-orm";

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

  // Check existing users
  const existingUsers = await db.select().from(users);
  console.log(`Found ${existingUsers.length} existing users`);

  // Check if admin exists
  const existingAdmin = existingUsers.find(u => u.role === "ADMIN");
  if (!existingAdmin) {
    // Seed Admin User
    const adminAccountNumber = await generateAccountNumber();
    const admin = await db.insert(users).values({
      firstName: "Admin",
      lastName: "User",
      email: "admin@unitebank.com",
      phone: "+1234567890",
      dob: "1990-01-01",
      gender: "Other",
      nationality: "US",
      address: "123 Admin Street",
      city: "New York",
      state: "NY",
      country: "USA",
      zipCode: "10001",
      idType: "Passport",
      idNumber: "ADM123456789",
      idExpiryDate: "2030-12-31",
      accountType: "CURRENT",
      currency: "USD",
      accountPurpose: "Business Operations",
      password: "admin123", // In production, this should be hashed
      transactionPin: "1234",
      role: "ADMIN",
      status: "APPROVED",
      isEmailVerified: true,
      accountNumber: adminAccountNumber,
      balance: "10000.00"
    }).returning();

    console.log("✅ Admin user created:", admin[0].email, "Account:", admin[0].accountNumber);
  } else {
    console.log("✅ Admin user already exists:", existingAdmin.email);
    
    // Update admin account number and customer ID if missing
    const updates: any = {};
    if (!existingAdmin.accountNumber) {
      updates.accountNumber = await generateAccountNumber();
      console.log("✅ Generated admin account number:", updates.accountNumber);
    }
    if (!existingAdmin.customerId) {
      updates.customerId = await generateCustomerId();
      console.log("✅ Generated admin customer ID:", updates.customerId);
    }
    
    if (Object.keys(updates).length > 0) {
      await db.update(users)
        .set(updates)
        .where(eq(users.id, existingAdmin.id));
      console.log("✅ Updated admin user with missing fields");
    }
  }

  // Check if regular user exists
  const existingUser = existingUsers.find(u => u.role === "USER");
  if (!existingUser) {
    // Seed Regular User
    const userAccountNumber = await generateAccountNumber();
    const user = await db.insert(users).values({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "+1987654321",
      dob: "1995-06-15",
      gender: "Male",
      nationality: "US",
      address: "456 User Avenue",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      zipCode: "90210",
      idType: "Driver License",
      idNumber: "DL987654321",
      idExpiryDate: "2028-06-15",
      accountType: "SAVINGS",
      currency: "USD",
      accountPurpose: "Personal Banking",
      password: "user123", // In production, this should be hashed
      transactionPin: "5678",
      role: "USER",
      status: "APPROVED",
      isEmailVerified: true,
      accountNumber: userAccountNumber,
      balance: "1500.00"
    }).returning();

    console.log("✅ Regular user created:", user[0].email, "Account:", user[0].accountNumber);
  } else {
    console.log("✅ Regular user already exists:", existingUser.email);
    
    // Update regular user account number and customer ID if missing
    const updates: any = {};
    if (!existingUser.accountNumber) {
      updates.accountNumber = await generateAccountNumber();
      console.log("✅ Generated user account number:", updates.accountNumber);
    }
    if (!existingUser.customerId) {
      updates.customerId = await generateCustomerId();
      console.log("✅ Generated user customer ID:", updates.customerId);
    }
    
    if (Object.keys(updates).length > 0) {
      await db.update(users)
        .set(updates)
        .where(eq(users.id, existingUser.id));
      console.log("✅ Updated regular user with missing fields");
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