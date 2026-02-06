import { createAdminSupabaseClient, supabase } from '@lib/supabase';
import { User, Transaction } from '@shared/schema';

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUuid(uuid: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUserByAccountNumber(accountNumber: string): Promise<User | undefined>;
  getUserByCustomerId(customerId: string): Promise<User | undefined>;
  createUser(user: any): Promise<User>;
  updateUserStatus(id: number, status: "PENDING" | "APPROVED" | "REJECTED"): Promise<User | undefined>;
  updateUserStatusByUuid(uuid: string, status: "PENDING" | "APPROVED" | "REJECTED"): Promise<User | undefined>;
  updateUserBalance(id: number, balance: string): Promise<User | undefined>;
  updateUserBalanceByUuid(uuid: string, balance: string): Promise<User | undefined>;
  getAllUsers(): Promise<User[]>;
  updateUserAccountNumber(id: number, accountNumber: string): Promise<User | undefined>;
  verifyUserEmail(email: string): Promise<void>;
  updateUserPassword(id: number, password: string): Promise<void>;
  updateUserPasswordByUuid(uuid: string, password: string): Promise<void>;

  // OTPs
  createOtp(email: string, code: string, purpose?: "EMAIL_VERIFICATION" | "PASSWORD_RESET"): Promise<void>;
  verifyOtp(email: string, code: string, purpose?: "EMAIL_VERIFICATION" | "PASSWORD_RESET"): Promise<boolean>;

  // Transactions
  createTransaction(transaction: any): Promise<Transaction>;
  getTransactionsByUserId(userId: number): Promise<Transaction[]>;
  getTransactionsByUserUuid(uuid: string): Promise<Transaction[]>;
  getAllTransactions(): Promise<Transaction[]>;

  // Transfers
  getAllPendingTransfers(): Promise<any[]>;
  approveTransfer(transferId: number, adminId: string): Promise<void>;
  rejectTransfer(transferId: number, adminId: string): Promise<void>;
}

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

export class SupabaseAdminStorage implements IStorage {
  // Methods that require admin privileges
  async getUser(id: number): Promise<User | undefined> {
    const adminClient = await createAdminSupabaseClient();
    const { data, error } = await adminClient
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
    const adminClient = await createAdminSupabaseClient();
    const { data, error } = await adminClient
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
      .maybeSingle();

    if (error) throw error;
    // Transform snake_case response to camelCase to match schema
    if (data) {
      return snakeToCamel(data) as User;
    }
    return undefined;
  }

  async createUser(user: any): Promise<User> {
    const adminClient = await createAdminSupabaseClient();
    // Convert camelCase to snake_case for insertion
    const snakeUser = camelToSnake(user);
    const { data, error } = await adminClient
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
    const adminClient = await createAdminSupabaseClient();
    const { data, error } = await adminClient
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

  async updateUserStatusByUuid(uuid: string, status: "PENDING" | "APPROVED" | "REJECTED"): Promise<User | undefined> {
    const adminClient = await createAdminSupabaseClient();
    const { data, error } = await adminClient
      .from('users')
      .update({ status })
      .eq('id', uuid)
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
    const adminClient = await createAdminSupabaseClient();
    const { data, error } = await adminClient
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

  async updateUserBalanceByUuid(uuid: string, balance: string): Promise<User | undefined> {
    const adminClient = await createAdminSupabaseClient();
    const { data, error } = await adminClient
      .from('users')
      .update({ balance })
      .eq('id', uuid)
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
    const adminClient = await createAdminSupabaseClient();
    const { data, error } = await adminClient
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
    const adminClient = await createAdminSupabaseClient();
    const { error } = await adminClient
      .from('users')
      .update({ "isEmailVerified": true })
      .eq('email', email);

    if (error) throw error;
  }

  async updateUserPassword(id: number, password: string): Promise<void> {
    const adminClient = await createAdminSupabaseClient();
    const { error } = await adminClient
      .from('users')
      .update({ password })
      .eq('id', id);

    if (error) throw error;
  }

  async updateUserPasswordByUuid(uuid: string, password: string): Promise<void> {
    const adminClient = await createAdminSupabaseClient();
    const { error } = await adminClient
      .from('users')
      .update({ password })
      .eq('id', uuid);

    if (error) throw error;
  }

  async getUserByAccountNumber(accountNumber: string): Promise<User | undefined> {
    const adminClient = await createAdminSupabaseClient();
    const { data, error } = await adminClient
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

  async getUserByCustomerId(customerId: string): Promise<User | undefined> {
    const adminClient = await createAdminSupabaseClient();
    const { data, error } = await adminClient
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
      .eq('customer_id', customerId)
      .single();

    if (error) throw error;
    // Transform snake_case response to camelCase to match schema
    if (data) {
      return snakeToCamel(data) as User;
    }
    return undefined;
  }

  async getUserByUuid(uuid: string): Promise<User | undefined> {
    const adminClient = await createAdminSupabaseClient();
    const { data, error } = await adminClient
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
      .eq('id', uuid)
      .single();

    if (error) throw error;
    // Transform snake_case response to camelCase to match schema
    if (data) {
      return snakeToCamel(data) as User;
    }
    return undefined;
  }

  async getAllUsers(): Promise<User[]> {
    const adminClient = await createAdminSupabaseClient();
    const { data, error } = await adminClient
      .from('users')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data?.map(snakeToCamel) as User[] || [];
  }

  // OTPs
  async createOtp(email: string, code: string, purpose: "EMAIL_VERIFICATION" | "PASSWORD_RESET" = "EMAIL_VERIFICATION"): Promise<void> {
    const adminClient = await createAdminSupabaseClient();
    // First delete any existing OTPs for this email
    await adminClient
      .from('otps')
      .delete()
      .match({ email });

    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now
    const { error } = await adminClient
      .from('otps')
      .insert([{ email, code, expires_at: expiresAt.toISOString() }]);

    if (error) throw error;
  }

  async verifyOtp(email: string, code: string, purpose: "EMAIL_VERIFICATION" | "PASSWORD_RESET" = "EMAIL_VERIFICATION"): Promise<boolean> {
    const adminClient = await createAdminSupabaseClient();
    const { data, error } = await adminClient
      .from('otps')
      .select('*')
      .match({ email, code })
      .maybeSingle();

    if (error || !data) return false;

    // Check expiration
    if (new Date() > new Date(data.expires_at ?? data.expiresAt)) {
      // Delete expired OTP
      await adminClient
        .from('otps')
        .delete()
        .eq('id', data.id);
      return false;
    }

    // Delete OTP after successful verification
    await adminClient
      .from('otps')
      .delete()
      .eq('id', data.id);

    return true;
  }

  // Transactions
  async createTransaction(transaction: any): Promise<Transaction> {
    const adminClient = await createAdminSupabaseClient();
    // Convert camelCase to snake_case for insertion
    const snakeTransaction = camelToSnake(transaction);
    const { data, error } = await adminClient
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
    const adminClient = await createAdminSupabaseClient();
    const { data, error } = await adminClient
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

  async getTransactionsByUserUuid(uuid: string): Promise<Transaction[]> {
    const adminClient = await createAdminSupabaseClient();
    const { data, error } = await adminClient
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
      .eq('user_id', uuid)
      .order('created_at', { ascending: false });

    if (error) throw error;
    // Transform snake_case response to camelCase to match schema
    return data?.map(snakeToCamel) as Transaction[] || [];
  }

  async getAllTransactions(): Promise<Transaction[]> {
    const adminClient = await createAdminSupabaseClient();
    const { data, error } = await adminClient
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
  async getAllPendingTransfers(): Promise<any[]> {
    const adminClient = await createAdminSupabaseClient();
    const { data, error } = await adminClient
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
      .eq('status', 'PENDING')
      .order('created_at', { ascending: false });

    if (error) throw error;
    // Transform snake_case response to camelCase to match schema
    return data?.map(snakeToCamel) || [];
  }

  async approveTransfer(transferId: number, adminId: string): Promise<void> {
    const adminClient = await createAdminSupabaseClient();

    // 1. Fetch transfer details
    const { data: transfer, error: fetchError } = await adminClient
      .from('transfers')
      .select('*')
      .eq('id', transferId)
      .single();

    if (fetchError || !transfer) throw new Error('Transfer not found');
    if (transfer.status !== 'PENDING') throw new Error('Transfer is not pending');

    const amount = parseFloat(transfer.amount);
    const senderId = transfer.sender_id;
    const recipientId = transfer.recipient_id;

    // 2. Fetch Sender and Recipient
    const { data: sender, error: senderError } = await adminClient
      .from('users')
      .select('balance')
      .eq('id', senderId)
      .single();

    if (senderError || !sender) throw new Error('Sender not found');

    const { data: recipient, error: recipientError } = await adminClient
      .from('users')
      .select('balance')
      .eq('id', recipientId)
      .single();

    if (recipientError || !recipient) throw new Error('Recipient not found');

    const senderBalance = parseFloat(sender.balance);
    if (senderBalance < amount) throw new Error('Insufficient funds');

    // 3. Perform Updates (Sequentially for now, ideally RPC)
    // Debit Sender
    const newSenderBalance = (senderBalance - amount).toFixed(2);
    const { error: debitError } = await adminClient
      .from('users')
      .update({ balance: newSenderBalance })
      .eq('id', senderId);

    if (debitError) throw new Error('Failed to debit sender');

    // Credit Recipient
    const recipientBalance = parseFloat(recipient.balance);
    const newRecipientBalance = (recipientBalance + amount).toFixed(2);
    const { error: creditError } = await adminClient
      .from('users')
      .update({ balance: newRecipientBalance })
      .eq('id', recipientId);

    if (creditError) {
      // Rollback sender debit (manual compensation)
      await adminClient.from('users').update({ balance: sender.balance }).eq('id', senderId);
      throw new Error('Failed to credit recipient');
    }

    // Create Debit Transaction
    await adminClient.from('transactions').insert([{
      user_id: senderId,
      type: 'DEBIT',
      amount: amount.toFixed(2),
      description: `Transfer to ${recipientId}: ${transfer.description}`, // Ideally use names
      created_by: 'ADMIN'
    }]);

    // Create Credit Transaction
    await adminClient.from('transactions').insert([{
      user_id: recipientId,
      type: 'CREDIT',
      amount: amount.toFixed(2),
      description: `Transfer from ${senderId}: ${transfer.description}`,
      created_by: 'ADMIN'
    }]);

    // Update Transfer Status
    await adminClient
      .from('transfers')
      .update({
        status: 'APPROVED',
        approved_by: adminId,
        processed_at: new Date().toISOString()
      })
      .eq('id', transferId);
  }

  async rejectTransfer(transferId: number, adminId: string): Promise<void> {
    const adminClient = await createAdminSupabaseClient();

    await adminClient
      .from('transfers')
      .update({
        status: 'REJECTED',
        approved_by: adminId,
        processed_at: new Date().toISOString()
      })
      .eq('id', transferId);
  }
}

// For non-admin operations, use the regular client
export class SupabasePublicStorage implements IStorage {
  // Public methods that don't require admin privileges
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
    return data ? snakeToCamel(data) : undefined;
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
      .maybeSingle();

    if (error) throw error;
    return data ? snakeToCamel(data) : undefined;
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
      .maybeSingle();

    if (error) throw error;
    return data ? snakeToCamel(data) : undefined;
  }

  async getUserByCustomerId(customerId: string): Promise<User | undefined> {
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
      .eq('customer_id', customerId)
      .maybeSingle();

    if (error) throw error;
    return data ? snakeToCamel(data) : undefined;
  }

  async getUserByUuid(uuid: string): Promise<User | undefined> {
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
      .eq('id', uuid)
      .maybeSingle();

    if (error) throw error;
    return data ? snakeToCamel(data) : undefined;
  }

  async getTransactionsByUserId(userId: number): Promise<Transaction[]> {
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data?.map(snakeToCamel) as Transaction[] || [];
  }

  async getTransactionsByUserUuid(uuid: string): Promise<Transaction[]> {
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .eq('user_id', uuid)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data?.map(snakeToCamel) as Transaction[] || [];
  }

  // Other public methods should throw an error since they require admin access
  async createUser(user: any): Promise<User> {
    throw new Error("Create user must be done through public registration endpoint");
  }

  async updateUserStatus(id: number, status: "PENDING" | "APPROVED" | "REJECTED"): Promise<User | undefined> {
    throw new Error("Update user status requires admin privileges");
  }

  async updateUserStatusByUuid(uuid: string, status: "PENDING" | "APPROVED" | "REJECTED"): Promise<User | undefined> {
    throw new Error("Update user status requires admin privileges");
  }

  async updateUserBalance(id: number, balance: string): Promise<User | undefined> {
    throw new Error("Update user balance requires admin privileges");
  }

  async updateUserBalanceByUuid(uuid: string, balance: string): Promise<User | undefined> {
    throw new Error("Update user balance requires admin privileges");
  }

  async getAllUsers(): Promise<User[]> {
    throw new Error("Get all users requires admin privileges");
  }

  async updateUserAccountNumber(id: number, accountNumber: string): Promise<User | undefined> {
    throw new Error("Update account number requires admin privileges");
  }

  async verifyUserEmail(email: string): Promise<void> {
    throw new Error("Verify email requires admin privileges");
  }

  async updateUserPassword(id: number, password: string): Promise<void> {
    throw new Error("Update password requires admin privileges");
  }

  async updateUserPasswordByUuid(uuid: string, password: string): Promise<void> {
    throw new Error("Update password requires admin privileges");
  }

  async createOtp(email: string, code: string, purpose: "EMAIL_VERIFICATION" | "PASSWORD_RESET"): Promise<void> {
    throw new Error("Create OTP requires admin privileges");
  }

  async verifyOtp(email: string, code: string, purpose: "EMAIL_VERIFICATION" | "PASSWORD_RESET"): Promise<boolean> {
    throw new Error("Verify OTP requires admin privileges");
  }

  async createTransaction(transaction: any): Promise<Transaction> {
    throw new Error("Create transaction requires admin privileges");
  }

  async getAllTransactions(): Promise<Transaction[]> {
    throw new Error("Get all transactions requires admin privileges");
  }

  // Transfers - Not implemented for public storage
  async getAllPendingTransfers(): Promise<any[]> {
    throw new Error("Unauthorized");
  }

  async approveTransfer(transferId: number, adminId: string): Promise<void> {
    throw new Error("Unauthorized");
  }

  async rejectTransfer(transferId: number, adminId: string): Promise<void> {
    throw new Error("Unauthorized");
  }
}

// Export admin storage for server-side operations
export const adminStorage = new SupabaseAdminStorage();
export const publicStorage = new SupabasePublicStorage();