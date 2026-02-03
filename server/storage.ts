import { users, otps, transactions, type User, type InsertUser, type Transaction, type InsertTransaction } from "@shared/schema";
import { db } from "./db";
import { eq, desc, and } from "drizzle-orm";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: any): Promise<User>;
  updateUserStatus(id: number, status: "PENDING" | "APPROVED" | "REJECTED"): Promise<User | undefined>;
  updateUserBalance(id: number, balance: string): Promise<User | undefined>;
  getAllUsers(): Promise<User[]>;
  updateUserAccountNumber(id: number, accountNumber: string): Promise<User | undefined>;
  verifyUserEmail(email: string): Promise<void>;
  updateUserPassword(id: number, password: string): Promise<void>;

  // OTPs
  createOtp(email: string, code: string, purpose?: "EMAIL_VERIFICATION" | "PASSWORD_RESET"): Promise<void>;
  verifyOtp(email: string, code: string, purpose?: "EMAIL_VERIFICATION" | "PASSWORD_RESET"): Promise<boolean>;

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

  async createUser(user: any): Promise<User> {
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

  async verifyUserEmail(email: string): Promise<void> {
    await db.update(users).set({ isEmailVerified: true }).where(eq(users.email, email));
  }

  async updateUserPassword(id: number, password: string): Promise<void> {
    await db.update(users).set({ password }).where(eq(users.id, id));
  }

  async getAllUsers(): Promise<User[]> {
    return await db.select().from(users).orderBy(desc(users.createdAt));
  }

  // OTPs
  async createOtp(email: string, code: string, purpose: "EMAIL_VERIFICATION" | "PASSWORD_RESET" = "EMAIL_VERIFICATION"): Promise<void> {
    await db.delete(otps).where(and(eq(otps.email, email), eq(otps.purpose, purpose)));
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
    await db.insert(otps).values({ email, code, expiresAt, purpose });
  }

  async verifyOtp(email: string, code: string, purpose: "EMAIL_VERIFICATION" | "PASSWORD_RESET" = "EMAIL_VERIFICATION"): Promise<boolean> {
    const [otp] = await db
      .select()
      .from(otps)
      .where(and(eq(otps.email, email), eq(otps.purpose, purpose)));
    if (!otp) return false;
    if (new Date() > otp.expiresAt) {
      await db.delete(otps).where(eq(otps.id, otp.id));
      return false;
    }
    if (otp.code !== code) return false;
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
