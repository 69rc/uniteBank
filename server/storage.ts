import { users, otps, transactions, type User, type InsertUser, type Transaction, type InsertTransaction } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser & { role: "USER" | "ADMIN"; status: "PENDING" | "APPROVED" | "REJECTED"; balance: string }): Promise<User>;
  updateUserStatus(id: number, status: "PENDING" | "APPROVED" | "REJECTED"): Promise<User | undefined>;
  updateUserBalance(id: number, balance: string): Promise<User | undefined>;
  getAllUsers(): Promise<User[]>;
  updateUserAccountNumber(id: number, accountNumber: string): Promise<User | undefined>;

  // OTPs
  createOtp(email: string, code: string): Promise<void>;
  verifyOtp(email: string, code: string): Promise<boolean>;

  // Transactions
  createTransaction(transaction: InsertTransaction): Promise<Transaction>;
  getTransactionsByUserId(userId: number): Promise<Transaction[]>;
  getAllTransactions(): Promise<Transaction[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async createUser(user: InsertUser & { role: "USER" | "ADMIN"; status: "PENDING" | "APPROVED" | "REJECTED"; balance: string }): Promise<User> {
    const [newUser] = await db.insert(users).values(user).returning();
    return newUser;
  }

  async updateUserStatus(id: number, status: "PENDING" | "APPROVED" | "REJECTED"): Promise<User | undefined> {
    const [user] = await db.update(users).set({ status }).where(eq(users.id, id)).returning();
    return user;
  }

  async updateUserBalance(id: number, balance: string): Promise<User | undefined> {
    const [user] = await db.update(users).set({ balance }).where(eq(users.id, id)).returning();
    return user;
  }

  async updateUserAccountNumber(id: number, accountNumber: string): Promise<User | undefined> {
    const [user] = await db.update(users).set({ accountNumber }).where(eq(users.id, id)).returning();
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return await db.select().from(users).orderBy(desc(users.createdAt));
  }

  // OTPs
  async createOtp(email: string, code: string): Promise<void> {
    // Delete existing OTPs for this email first
    await db.delete(otps).where(eq(otps.email, email));
    
    // Create new OTP expires in 5 minutes
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
    await db.insert(otps).values({ email, code, expiresAt });
  }

  async verifyOtp(email: string, code: string): Promise<boolean> {
    const [otp] = await db.select().from(otps).where(eq(otps.email, email));
    if (!otp) return false;
    
    if (new Date() > otp.expiresAt) {
      await db.delete(otps).where(eq(otps.id, otp.id));
      return false;
    }
    
    if (otp.code !== code) return false;
    
    // Valid OTP, delete it
    await db.delete(otps).where(eq(otps.id, otp.id));
    return true;
  }

  // Transactions
  async createTransaction(transaction: InsertTransaction): Promise<Transaction> {
    const [newTx] = await db.insert(transactions).values(transaction).returning();
    return newTx;
  }

  async getTransactionsByUserId(userId: number): Promise<Transaction[]> {
    return await db.select().from(transactions).where(eq(transactions.userId, userId)).orderBy(desc(transactions.createdAt));
  }

  async getAllTransactions(): Promise<Transaction[]> {
    return await db.select().from(transactions).orderBy(desc(transactions.createdAt));
  }
}

export const storage = new DatabaseStorage();
