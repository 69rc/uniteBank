import { pgTable, serial, text, varchar, date, boolean, timestamp, numeric, integer } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  otherName: text("other_name"),
  email: text("email").notNull().unique(),
  phone: text("phone").notNull(),
  dob: date("dob").notNull(),
  gender: text("gender").notNull(),
  nationality: text("nationality").notNull(),

  address: text("address").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  country: text("country").notNull(),
  zipCode: text("zip_code").notNull(),

  idType: text("id_type").notNull(),
  idNumber: text("id_number").notNull(),
  idExpiryDate: date("id_expiry_date").notNull(),
  idImageUrl: text("id_image_url"),
  selfieUrl: text("selfie_url"),

  accountType: text("account_type", { enum: ["SAVINGS", "CURRENT", "CHECKING"] }).notNull(),
  currency: text("currency").default("USD").notNull(),
  accountPurpose: text("account_purpose"),

  password: text("password").notNull(),
  transactionPin: text("transaction_pin").notNull(),

  role: text("role", { enum: ["USER", "ADMIN"] }).default("USER").notNull(),
  status: text("status", { enum: ["PENDING", "APPROVED", "REJECTED"] }).default("PENDING").notNull(),
  isEmailVerified: boolean("is_email_verified").default(false).notNull(),

  accountNumber: varchar("account_number", { length: 20 }).unique(),
  customerId: varchar("customer_id", { length: 15 }).unique(),
  balance: numeric("balance", { precision: 12, scale: 2 }).default("0.00").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const otps = pgTable("otps", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  code: text("code").notNull(),
  purpose: text("purpose").default("EMAIL_VERIFICATION").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const transactions = pgTable("transactions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  type: text("type", { enum: ["CREDIT", "DEBIT"] }).notNull(),
  amount: numeric("amount", { precision: 12, scale: 2 }).notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  createdBy: text("created_by", { enum: ["SYSTEM", "ADMIN"] }).default("SYSTEM").notNull(),
});

export type User = typeof users.$inferSelect;
export type Transaction = typeof transactions.$inferSelect;
