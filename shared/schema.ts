import { pgTable, text, serial, integer, boolean, timestamp, numeric, varchar, date } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

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
  
  // Contact info
  address: text("address").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  country: text("country").notNull(),
  zipCode: text("zip_code").notNull(),
  
  // KYC
  idType: text("id_type").notNull(), // National ID, Passport, etc.
  idNumber: text("id_number").notNull(),
  idExpiryDate: date("id_expiry_date").notNull(),
  idImageUrl: text("id_image_url"),
  selfieUrl: text("selfie_url"),
  
  // Account Info
  accountType: text("account_type", { enum: ["SAVINGS", "CURRENT", "CHECKING"] }).notNull(),
  currency: text("currency").default("USD").notNull(),
  accountPurpose: text("account_purpose"),
  
  // Security
  password: text("password").notNull(),
  transactionPin: text("transaction_pin").notNull(), // 4-6 digits
  
  // Status & Role
  role: text("role", { enum: ["USER", "ADMIN"] }).default("USER").notNull(),
  status: text("status", { enum: ["PENDING", "APPROVED", "REJECTED"] }).default("PENDING").notNull(),
  isEmailVerified: boolean("is_email_verified").default(false).notNull(),
  
  // Generated fields
  accountNumber: varchar("account_number", { length: 20 }).unique(), 
  customerId: varchar("customer_id", { length: 15 }).unique(), // Auto-generated customer ID
  balance: numeric("balance", { precision: 12, scale: 2 }).default("0.00").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const otps = pgTable("otps", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  code: text("code").notNull(),
  purpose: text("purpose").default("EMAIL_VERIFICATION").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
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

// Schemas
export const insertUserSchema = createInsertSchema(users).omit({ 
  id: true, 
  createdAt: true, 
  accountNumber: true, 
  customerId: true,
  balance: true,
  role: true, 
  status: true,
  isEmailVerified: true
}).extend({
  password: z.string().min(8),
  transactionPin: z.string().min(4).max(6),
});

export const insertTransactionSchema = createInsertSchema(transactions).omit({ 
  id: true, 
  createdAt: true 
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Transaction = typeof transactions.$inferSelect;
export type InsertTransaction = z.infer<typeof insertTransactionSchema>;

// Auth types
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const otpSchema = z.object({
  email: z.string().email(),
  code: z.string().length(6),
});

export type LoginRequest = z.infer<typeof loginSchema>;
export type OtpRequest = z.infer<typeof otpSchema>;
