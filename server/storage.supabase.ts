import { supabase } from '@lib/supabase';
import { User, Transaction } from '@shared/schema';
import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

// Helper functions to convert between snake_case and camelCase
function snakeToCamel<T extends Record<string, any>>(obj: T): any {
  const result = {} as any;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const camelKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
      result[camelKey] = obj[key];
    }
  }
  return result;
}

function camelToSnake<T extends Record<string, any>>(obj: T): any {
  const result = {} as any;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const snakeKey = key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
      result[snakeKey] = obj[key];
    }
  }
  return result;
}

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUserByAccountNumber(accountNumber: string): Promise<User | undefined>;
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
  createTransaction(transaction: any): Promise<Transaction>;
  getTransactionsByUserId(userId: number): Promise<Transaction[]>;
  getAllTransactions(): Promise<Transaction[]>;

  // Transfers
  createTransfer(transfer: any): Promise<any>;
  getTransfersByUserId(userId: string): Promise<any[]>;
}

export class SupabaseStorage implements IStorage {
  // Users
  async getUser(id: number): Promise<User | undefined> {
    const { data, error } = await supabase
      .from('users')
      .select(`
        id,
        first_name,
        last_name,
        other_name,
        email,
        phone,
        dob,
        gender,
        nationality,
        address,
        city,
        state,
        country,
        zip_code,
        id_type,
        id_number,
        id_expiry_date,
        id_image_url,
        selfie_url,
        account_type,
        currency,
        account_purpose,
        password,
        transaction_pin,
        role,
        status,
        "isEmailVerified",
        account_number,
        customer_id,
        balance,
        created_at
      `)
      .eq('id', id)
      .single();

    if (error) throw error;
    // Transform snake_case response to camelCase to match schema
    if (data) {
      return snakeToCamel(data) as User;
    }
    return undefined;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const { data, error } = await supabase
      .from('users')
      .select(`
        id,
        first_name,
        last_name,
        other_name,
        email,
        phone,
        dob,
        gender,
        nationality,
        address,
        city,
        state,
        country,
        zip_code,
        id_type,
        id_number,
        id_expiry_date,
        id_image_url,
        selfie_url,
        account_type,
        currency,
        account_purpose,
        password,
        transaction_pin,
        role,
        status,
        "isEmailVerified",
        account_number,
        customer_id,
        balance,
        created_at
      `)
      .eq('email', email)
      .single();

    if (error) throw error;
    // Transform snake_case response to camelCase to match schema
    if (data) {
      return snakeToCamel(data) as User;
    }
    return undefined;
  }

  async createUser(user: any): Promise<User> {
    // Convert camelCase to snake_case for insertion
    const snakeUser = camelToSnake(user);
    const { data, error } = await supabase
      .from('users')
      .insert([snakeUser])
      .select(`
        id,
        first_name,
        last_name,
        other_name,
        email,
        phone,
        dob,
        gender,
        nationality,
        address,
        city,
        state,
        country,
        zip_code,
        id_type,
        id_number,
        id_expiry_date,
        id_image_url,
        selfie_url,
        account_type,
        currency,
        account_purpose,
        password,
        transaction_pin,
        role,
        status,
        "isEmailVerified",
        account_number,
        customer_id,
        balance,
        created_at
      `)
      .single();

    if (error) throw error;
    // Transform snake_case response to camelCase to match schema
    if (data) {
      return snakeToCamel(data) as User;
    }
    throw new Error('User creation failed');
  }

  async updateUserStatus(id: number, status: "PENDING" | "APPROVED" | "REJECTED"): Promise<User | undefined> {
    const { data, error } = await supabase
      .from('users')
      .update({ status })
      .eq('id', id)
      .select(`
        id,
        first_name,
        last_name,
        other_name,
        email,
        phone,
        dob,
        gender,
        nationality,
        address,
        city,
        state,
        country,
        zip_code,
        id_type,
        id_number,
        id_expiry_date,
        id_image_url,
        selfie_url,
        account_type,
        currency,
        account_purpose,
        password,
        transaction_pin,
        role,
        status,
        "isEmailVerified",
        account_number,
        customer_id,
        balance,
        created_at
      `)
      .single();

    if (error) throw error;
    // Transform snake_case response to camelCase to match schema
    if (data) {
      return snakeToCamel(data) as User;
    }
    return undefined;
  }

  async updateUserBalance(id: number, balance: string): Promise<User | undefined> {
    const { data, error } = await supabase
      .from('users')
      .update({ balance })
      .eq('id', id)
      .select(`
        id,
        first_name,
        last_name,
        other_name,
        email,
        phone,
        dob,
        gender,
        nationality,
        address,
        city,
        state,
        country,
        zip_code,
        id_type,
        id_number,
        id_expiry_date,
        id_image_url,
        selfie_url,
        account_type,
        currency,
        account_purpose,
        password,
        transaction_pin,
        role,
        status,
        "isEmailVerified",
        account_number,
        customer_id,
        balance,
        created_at
      `)
      .single();

    if (error) throw error;
    // Transform snake_case response to camelCase to match schema
    if (data) {
      return snakeToCamel(data) as User;
    }
    return undefined;
  }

  async updateUserAccountNumber(id: number, accountNumber: string): Promise<User | undefined> {
    const { data, error } = await supabase
      .from('users')
      .update({ account_number: accountNumber })
      .eq('id', id)
      .select(`
        id,
        first_name,
        last_name,
        other_name,
        email,
        phone,
        dob,
        gender,
        nationality,
        address,
        city,
        state,
        country,
        zip_code,
        id_type,
        id_number,
        id_expiry_date,
        id_image_url,
        selfie_url,
        account_type,
        currency,
        account_purpose,
        password,
        transaction_pin,
        role,
        status,
        "isEmailVerified",
        account_number,
        customer_id,
        balance,
        created_at
      `)
      .single();

    if (error) throw error;
    // Transform snake_case response to camelCase to match schema
    if (data) {
      return snakeToCamel(data) as User;
    }
    return undefined;
  }

  async verifyUserEmail(email: string): Promise<void> {
    const { error } = await supabase
      .from('users')
      .update({ "isEmailVerified": true })
      .eq('email', email);

    if (error) throw error;
  }

  async updateUserPassword(id: number, password: string): Promise<void> {
    const { error } = await supabase
      .from('users')
      .update({ password })
      .eq('id', id);

    if (error) throw error;
  }

  async getUserByAccountNumber(accountNumber: string): Promise<User | undefined> {
    const { data, error } = await supabase
      .from('users')
      .select(`
        id,
        first_name,
        last_name,
        other_name,
        email,
        phone,
        dob,
        gender,
        nationality,
        address,
        city,
        state,
        country,
        zip_code,
        id_type,
        id_number,
        id_expiry_date,
        id_image_url,
        selfie_url,
        account_type,
        currency,
        account_purpose,
        password,
        transaction_pin,
        role,
        status,
        "isEmailVerified",
        account_number,
        customer_id,
        balance,
        created_at
      `)
      .eq('account_number', accountNumber)
      .single();

    if (error) throw error;
    // Transform snake_case response to camelCase to match schema
    if (data) {
      return snakeToCamel(data) as User;
    }
    return undefined;
  }

  async getAllUsers(): Promise<User[]> {
    const { data, error } = await supabase
      .from('users')
      .select(`
        id,
        first_name,
        last_name,
        other_name,
        email,
        phone,
        dob,
        gender,
        nationality,
        address,
        city,
        state,
        country,
        zip_code,
        id_type,
        id_number,
        id_expiry_date,
        id_image_url,
        selfie_url,
        account_type,
        currency,
        account_purpose,
        password,
        transaction_pin,
        role,
        status,
        "isEmailVerified",
        account_number,
        customer_id,
        balance,
        created_at
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;
    // Transform snake_case response to camelCase to match schema
    return data?.map(snakeToCamel) as User[] || [];
  }

  // OTPs
  async createOtp(email: string, code: string, purpose: "EMAIL_VERIFICATION" | "PASSWORD_RESET" = "EMAIL_VERIFICATION"): Promise<void> {
    // First delete any existing OTPs for this email
    await supabase
      .from('otps')
      .delete()
      .match({ email });

    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now
    const { error } = await supabase
      .from('otps')
      .insert([{ email, code, purpose, expires_at: expiresAt.toISOString() }]);

    if (error) throw error;
  }

  async verifyOtp(email: string, code: string, purpose: "EMAIL_VERIFICATION" | "PASSWORD_RESET" = "EMAIL_VERIFICATION"): Promise<boolean> {
    const { data, error } = await supabase
      .from('otps')
      .select(`
        id,
        email,
        code,
        purpose,
        expires_at
      `)
      .match({ email, code, purpose })
      .single();

    if (error || !data) return false;

    // Check expiration
    if (new Date() > new Date(data.expires_at)) {
      // Delete expired OTP
      await supabase
        .from('otps')
        .delete()
        .eq('id', data.id);
      return false;
    }

    // Delete OTP after successful verification
    await supabase
      .from('otps')
      .delete()
      .eq('id', data.id);

    return true;
  }

  // Transactions
  async createTransaction(transaction: any): Promise<Transaction> {
    // Convert camelCase to snake_case for insertion
    const snakeTransaction = camelToSnake(transaction);
    const { data, error } = await supabase
      .from('transactions')
      .insert([snakeTransaction])
      .select(`
        id,
        user_id,
        type,
        amount,
        description,
        created_by,
        created_at
      `)
      .single();

    if (error) throw error;
    // Transform snake_case response to camelCase to match schema
    if (data) {
      return snakeToCamel(data) as Transaction;
    }
    throw new Error('Transaction creation failed');
  }

  async getTransactionsByUserId(userId: number): Promise<Transaction[]> {
    const { data, error } = await supabase
      .from('transactions')
      .select(`
        id,
        user_id,
        type,
        amount,
        description,
        created_by,
        created_at
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    // Transform snake_case response to camelCase to match schema
    return data?.map(snakeToCamel) as Transaction[] || [];
  }

  async getAllTransactions(): Promise<Transaction[]> {
    const { data, error } = await supabase
      .from('transactions')
      .select(`
        id,
        user_id,
        type,
        amount,
        description,
        created_by,
        created_at
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;
    // Transform snake_case response to camelCase to match schema
    return data?.map(snakeToCamel) as Transaction[] || [];
  }

  // Transfers
  async createTransfer(transfer: any): Promise<any> {
    // Convert camelCase to snake_case for insertion
    const snakeTransfer = camelToSnake(transfer);
    const { data, error } = await supabase
      .from('transfers')
      .insert([snakeTransfer])
      .select(`
        id,
        sender_id,
        recipient_id,
        amount,
        description,
        status,
        admin_note,
        approved_by,
        created_at,
        processed_at
      `)
      .single();

    if (error) throw error;
    // Transform snake_case response to camelCase to match schema
    if (data) {
      return snakeToCamel(data);
    }
    throw new Error('Transfer creation failed');
  }

  async getTransfersByUserId(userId: string): Promise<any[]> {
    const { data, error } = await supabase
      .from('transfers')
      .select(`
        id,
        sender_id,
        recipient_id,
        amount,
        description,
        status,
        admin_note,
        approved_by,
        created_at,
        processed_at
      `)
      .or(`sender_id.eq.${userId},recipient_id.eq.${userId}`)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data?.map(snakeToCamel) || [];
  }
}

export const storage = new SupabaseStorage();