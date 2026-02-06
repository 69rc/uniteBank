module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/uniteBank/lib/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAdminSupabaseClient",
    ()=>createAdminSupabaseClient,
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
// Initialize Supabase client with public environment variables
const supabaseUrl = ("TURBOPACK compile-time value", "https://nzdrjzneghitaaapyaul.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56ZHJqem5lZ2hpdGFhYXB5YXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxMjkyNzQsImV4cCI6MjA4NTcwNTI3NH0.jaZe98SKdVwBnFq6FDL1ffow4A7rKzX1oLN_9gfVS0s");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
async function createAdminSupabaseClient() {
    const supabaseUrl = ("TURBOPACK compile-time value", "https://nzdrjzneghitaaapyaul.supabase.co");
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    // Create a client with service role for admin operations
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseServiceRoleKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    });
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/Documents/uniteBank/server/storage.supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SupabaseStorage",
    ()=>SupabaseStorage,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/lib/supabase.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
;
;
;
const scryptAsync = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["scrypt"]);
// Helper functions to convert between snake_case and camelCase
function snakeToCamel(obj) {
    const result = {};
    for(const key in obj){
        if (obj.hasOwnProperty(key)) {
            const camelKey = key.replace(/_([a-z])/g, (g)=>g[1].toUpperCase());
            result[camelKey] = obj[key];
        }
    }
    return result;
}
function camelToSnake(obj) {
    const result = {};
    for(const key in obj){
        if (obj.hasOwnProperty(key)) {
            const snakeKey = key.replace(/[A-Z]/g, (letter)=>`_${letter.toLowerCase()}`);
            result[snakeKey] = obj[key];
        }
    }
    return result;
}
class SupabaseStorage {
    // Users
    async getUser(id) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').select(`
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
      `).eq('id', id).single();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        return undefined;
    }
    async getUserByEmail(email) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').select(`
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
      `).eq('email', email).single();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        return undefined;
    }
    async createUser(user) {
        // Convert camelCase to snake_case for insertion
        const snakeUser = camelToSnake(user);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').insert([
            snakeUser
        ]).select(`
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
      `).single();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        throw new Error('User creation failed');
    }
    async updateUserStatus(id, status) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').update({
            status
        }).eq('id', id).select(`
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
      `).single();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        return undefined;
    }
    async updateUserBalance(id, balance) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').update({
            balance
        }).eq('id', id).select(`
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
      `).single();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        return undefined;
    }
    async updateUserAccountNumber(id, accountNumber) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').update({
            account_number: accountNumber
        }).eq('id', id).select(`
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
      `).single();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        return undefined;
    }
    async verifyUserEmail(email) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').update({
            "isEmailVerified": true
        }).eq('email', email);
        if (error) throw error;
    }
    async updateUserPassword(id, password) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').update({
            password
        }).eq('id', id);
        if (error) throw error;
    }
    async getUserByAccountNumber(accountNumber) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').select(`
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
      `).eq('account_number', accountNumber).single();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        return undefined;
    }
    async getAllUsers() {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').select(`
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
      `).order('created_at', {
            ascending: false
        });
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        return data?.map(snakeToCamel) || [];
    }
    // OTPs
    async createOtp(email, code, purpose = "EMAIL_VERIFICATION") {
        // First delete any existing OTPs for this email
        await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('otps').delete().match({
            email
        });
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('otps').insert([
            {
                email,
                code,
                purpose,
                expires_at: expiresAt.toISOString()
            }
        ]);
        if (error) throw error;
    }
    async verifyOtp(email, code, purpose = "EMAIL_VERIFICATION") {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('otps').select(`
        id,
        email,
        code,
        purpose,
        expires_at
      `).match({
            email,
            code,
            purpose
        }).single();
        if (error || !data) return false;
        // Check expiration
        if (new Date() > new Date(data.expires_at)) {
            // Delete expired OTP
            await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('otps').delete().eq('id', data.id);
            return false;
        }
        // Delete OTP after successful verification
        await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('otps').delete().eq('id', data.id);
        return true;
    }
    // Transactions
    async createTransaction(transaction) {
        // Convert camelCase to snake_case for insertion
        const snakeTransaction = camelToSnake(transaction);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('transactions').insert([
            snakeTransaction
        ]).select(`
        id,
        user_id,
        type,
        amount,
        description,
        created_by,
        created_at
      `).single();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        throw new Error('Transaction creation failed');
    }
    async getTransactionsByUserId(userId) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('transactions').select(`
        id,
        user_id,
        type,
        amount,
        description,
        created_by,
        created_at
      `).eq('user_id', userId).order('created_at', {
            ascending: false
        });
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        return data?.map(snakeToCamel) || [];
    }
    async getAllTransactions() {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('transactions').select(`
        id,
        user_id,
        type,
        amount,
        description,
        created_by,
        created_at
      `).order('created_at', {
            ascending: false
        });
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        return data?.map(snakeToCamel) || [];
    }
    // Transfers
    async createTransfer(transfer) {
        // Convert camelCase to snake_case for insertion
        const snakeTransfer = camelToSnake(transfer);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('transfers').insert([
            snakeTransfer
        ]).select(`
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
      `).single();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        throw new Error('Transfer creation failed');
    }
    async getTransfersByUserId(userId) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('transfers').select(`
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
      `).or(`sender_id.eq.${userId},recipient_id.eq.${userId}`).order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return data?.map(snakeToCamel) || [];
    }
}
const storage = new SupabaseStorage();
}),
"[project]/Documents/uniteBank/server/admin-storage.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SupabaseAdminStorage",
    ()=>SupabaseAdminStorage,
    "SupabasePublicStorage",
    ()=>SupabasePublicStorage,
    "adminStorage",
    ()=>adminStorage,
    "publicStorage",
    ()=>publicStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/lib/supabase.ts [app-route] (ecmascript)");
;
// Helper functions to convert between snake_case and camelCase
function snakeToCamel(obj) {
    const result = {};
    for(const key in obj){
        if (obj.hasOwnProperty(key)) {
            const camelKey = key.replace(/_([a-z])/g, (g)=>g[1].toUpperCase());
            result[camelKey] = obj[key];
        }
    }
    return result;
}
function camelToSnake(obj) {
    const result = {};
    for(const key in obj){
        if (obj.hasOwnProperty(key)) {
            const snakeKey = key.replace(/[A-Z]/g, (letter)=>`_${letter.toLowerCase()}`);
            result[snakeKey] = obj[key];
        }
    }
    return result;
}
class SupabaseAdminStorage {
    // Methods that require admin privileges
    async getUser(id) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('users').select(`
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
      `).eq('id', id).single();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        return undefined;
    }
    async getUserByEmail(email) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('users').select(`
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
      `).eq('email', email).maybeSingle();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        return undefined;
    }
    async createUser(user) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        // Convert camelCase to snake_case for insertion
        const snakeUser = camelToSnake(user);
        const { data, error } = await adminClient.from('users').insert([
            snakeUser
        ]).select(`
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
      `).single();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        throw new Error('User creation failed');
    }
    async updateUserStatus(id, status) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('users').update({
            status
        }).eq('id', id).select(`
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
      `).single();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        return undefined;
    }
    async updateUserStatusByUuid(uuid, status) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('users').update({
            status
        }).eq('id', uuid).select(`
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
      `).single();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        return undefined;
    }
    async updateUserBalance(id, balance) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('users').update({
            balance
        }).eq('id', id).select(`
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
      `).single();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        return undefined;
    }
    async updateUserBalanceByUuid(uuid, balance) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('users').update({
            balance
        }).eq('id', uuid).select(`
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
      `).single();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        return undefined;
    }
    async updateUserAccountNumber(id, accountNumber) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('users').update({
            account_number: accountNumber
        }).eq('id', id).select(`
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
      `).single();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        return undefined;
    }
    async verifyUserEmail(email) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { error } = await adminClient.from('users').update({
            "isEmailVerified": true
        }).eq('email', email);
        if (error) throw error;
    }
    async updateUserPassword(id, password) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { error } = await adminClient.from('users').update({
            password
        }).eq('id', id);
        if (error) throw error;
    }
    async updateUserPasswordByUuid(uuid, password) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { error } = await adminClient.from('users').update({
            password
        }).eq('id', uuid);
        if (error) throw error;
    }
    async getUserByAccountNumber(accountNumber) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('users').select(`
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
      `).eq('account_number', accountNumber).single();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        return undefined;
    }
    async getUserByCustomerId(customerId) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('users').select(`
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
      `).eq('customer_id', customerId).single();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        return undefined;
    }
    async getUserByUuid(uuid) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('users').select(`
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
      `).eq('id', uuid).single();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        return undefined;
    }
    async getAllUsers() {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('users').select('*').order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return data?.map(snakeToCamel) || [];
    }
    // OTPs
    async createOtp(email, code, purpose = "EMAIL_VERIFICATION") {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        // First delete any existing OTPs for this email
        await adminClient.from('otps').delete().match({
            email
        });
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now
        const { error } = await adminClient.from('otps').insert([
            {
                email,
                code,
                expires_at: expiresAt.toISOString()
            }
        ]);
        if (error) throw error;
    }
    async verifyOtp(email, code, purpose = "EMAIL_VERIFICATION") {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('otps').select('*').match({
            email,
            code
        }).maybeSingle();
        if (error || !data) return false;
        // Check expiration
        if (new Date() > new Date(data.expires_at ?? data.expiresAt)) {
            // Delete expired OTP
            await adminClient.from('otps').delete().eq('id', data.id);
            return false;
        }
        // Delete OTP after successful verification
        await adminClient.from('otps').delete().eq('id', data.id);
        return true;
    }
    // Transactions
    async createTransaction(transaction) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        // Convert camelCase to snake_case for insertion
        const snakeTransaction = camelToSnake(transaction);
        const { data, error } = await adminClient.from('transactions').insert([
            snakeTransaction
        ]).select(`
        id,
        user_id,
        type,
        amount,
        description,
        created_by,
        created_at
      `).single();
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        if (data) {
            return snakeToCamel(data);
        }
        throw new Error('Transaction creation failed');
    }
    async getTransactionsByUserId(userId) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('transactions').select(`
        id,
        user_id,
        type,
        amount,
        description,
        created_by,
        created_at
      `).eq('user_id', userId).order('created_at', {
            ascending: false
        });
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        return data?.map(snakeToCamel) || [];
    }
    async getTransactionsByUserUuid(uuid) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('transactions').select(`
        id,
        user_id,
        type,
        amount,
        description,
        created_by,
        created_at
      `).eq('user_id', uuid).order('created_at', {
            ascending: false
        });
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        return data?.map(snakeToCamel) || [];
    }
    async getAllTransactions() {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('transactions').select(`
        id,
        user_id,
        type,
        amount,
        description,
        created_by,
        created_at
      `).order('created_at', {
            ascending: false
        });
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        return data?.map(snakeToCamel) || [];
    }
    // Transfers
    async getAllPendingTransfers() {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('transfers').select(`
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
      `).eq('status', 'PENDING').order('created_at', {
            ascending: false
        });
        if (error) throw error;
        // Transform snake_case response to camelCase to match schema
        return data?.map(snakeToCamel) || [];
    }
    async approveTransfer(transferId, adminId) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        // 1. Fetch transfer details
        const { data: transfer, error: fetchError } = await adminClient.from('transfers').select('*').eq('id', transferId).single();
        if (fetchError || !transfer) throw new Error('Transfer not found');
        if (transfer.status !== 'PENDING') throw new Error('Transfer is not pending');
        const amount = parseFloat(transfer.amount);
        const senderId = transfer.sender_id;
        const recipientId = transfer.recipient_id;
        // 2. Fetch Sender and Recipient
        const { data: sender, error: senderError } = await adminClient.from('users').select('balance').eq('id', senderId).single();
        if (senderError || !sender) throw new Error('Sender not found');
        const { data: recipient, error: recipientError } = await adminClient.from('users').select('balance').eq('id', recipientId).single();
        if (recipientError || !recipient) throw new Error('Recipient not found');
        const senderBalance = parseFloat(sender.balance);
        if (senderBalance < amount) throw new Error('Insufficient funds');
        // 3. Perform Updates (Sequentially for now, ideally RPC)
        // Debit Sender
        const newSenderBalance = (senderBalance - amount).toFixed(2);
        const { error: debitError } = await adminClient.from('users').update({
            balance: newSenderBalance
        }).eq('id', senderId);
        if (debitError) throw new Error('Failed to debit sender');
        // Credit Recipient
        const recipientBalance = parseFloat(recipient.balance);
        const newRecipientBalance = (recipientBalance + amount).toFixed(2);
        const { error: creditError } = await adminClient.from('users').update({
            balance: newRecipientBalance
        }).eq('id', recipientId);
        if (creditError) {
            // Rollback sender debit (manual compensation)
            await adminClient.from('users').update({
                balance: sender.balance
            }).eq('id', senderId);
            throw new Error('Failed to credit recipient');
        }
        // Create Debit Transaction
        await adminClient.from('transactions').insert([
            {
                user_id: senderId,
                type: 'DEBIT',
                amount: amount.toFixed(2),
                description: `Transfer to ${recipientId}: ${transfer.description}`,
                created_by: 'ADMIN'
            }
        ]);
        // Create Credit Transaction
        await adminClient.from('transactions').insert([
            {
                user_id: recipientId,
                type: 'CREDIT',
                amount: amount.toFixed(2),
                description: `Transfer from ${senderId}: ${transfer.description}`,
                created_by: 'ADMIN'
            }
        ]);
        // Update Transfer Status
        await adminClient.from('transfers').update({
            status: 'APPROVED',
            approved_by: adminId,
            processed_at: new Date().toISOString()
        }).eq('id', transferId);
    }
    async rejectTransfer(transferId, adminId) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        await adminClient.from('transfers').update({
            status: 'REJECTED',
            approved_by: adminId,
            processed_at: new Date().toISOString()
        }).eq('id', transferId);
    }
}
class SupabasePublicStorage {
    // Public methods that don't require admin privileges
    async getUser(id) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').select(`
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
      `).eq('id', id).single();
        if (error) throw error;
        return data ? snakeToCamel(data) : undefined;
    }
    async getUserByEmail(email) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').select(`
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
      `).eq('email', email).maybeSingle();
        if (error) throw error;
        return data ? snakeToCamel(data) : undefined;
    }
    async getUserByAccountNumber(accountNumber) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').select(`
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
      `).eq('account_number', accountNumber).maybeSingle();
        if (error) throw error;
        return data ? snakeToCamel(data) : undefined;
    }
    async getUserByCustomerId(customerId) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').select(`
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
      `).eq('customer_id', customerId).maybeSingle();
        if (error) throw error;
        return data ? snakeToCamel(data) : undefined;
    }
    async getUserByUuid(uuid) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').select(`
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
      `).eq('id', uuid).maybeSingle();
        if (error) throw error;
        return data ? snakeToCamel(data) : undefined;
    }
    async getTransactionsByUserId(userId) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('transactions').select('*').eq('user_id', userId).order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return data?.map(snakeToCamel) || [];
    }
    async getTransactionsByUserUuid(uuid) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('transactions').select('*').eq('user_id', uuid).order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return data?.map(snakeToCamel) || [];
    }
    // Other public methods should throw an error since they require admin access
    async createUser(user) {
        throw new Error("Create user must be done through public registration endpoint");
    }
    async updateUserStatus(id, status) {
        throw new Error("Update user status requires admin privileges");
    }
    async updateUserStatusByUuid(uuid, status) {
        throw new Error("Update user status requires admin privileges");
    }
    async updateUserBalance(id, balance) {
        throw new Error("Update user balance requires admin privileges");
    }
    async updateUserBalanceByUuid(uuid, balance) {
        throw new Error("Update user balance requires admin privileges");
    }
    async getAllUsers() {
        throw new Error("Get all users requires admin privileges");
    }
    async updateUserAccountNumber(id, accountNumber) {
        throw new Error("Update account number requires admin privileges");
    }
    async verifyUserEmail(email) {
        throw new Error("Verify email requires admin privileges");
    }
    async updateUserPassword(id, password) {
        throw new Error("Update password requires admin privileges");
    }
    async updateUserPasswordByUuid(uuid, password) {
        throw new Error("Update password requires admin privileges");
    }
    async createOtp(email, code, purpose) {
        throw new Error("Create OTP requires admin privileges");
    }
    async verifyOtp(email, code, purpose) {
        throw new Error("Verify OTP requires admin privileges");
    }
    async createTransaction(transaction) {
        throw new Error("Create transaction requires admin privileges");
    }
    async getAllTransactions() {
        throw new Error("Get all transactions requires admin privileges");
    }
    // Transfers - Not implemented for public storage
    async getAllPendingTransfers() {
        throw new Error("Unauthorized");
    }
    async approveTransfer(transferId, adminId) {
        throw new Error("Unauthorized");
    }
    async rejectTransfer(transferId, adminId) {
        throw new Error("Unauthorized");
    }
}
const adminStorage = new SupabaseAdminStorage();
const publicStorage = new SupabasePublicStorage();
}),
"[project]/Documents/uniteBank/server/storage.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// This is a facade that exposes the right storage methods for different contexts
// For API routes that need admin operations, import adminStorage directly
// For public operations, use publicStorage directly
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$server$2f$admin$2d$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/server/admin-storage.ts [app-route] (ecmascript)");
;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Documents/uniteBank/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSession",
    ()=>createSession,
    "createSessionId",
    ()=>createSessionId,
    "destroySession",
    ()=>destroySession,
    "destroySessionById",
    ()=>destroySessionById,
    "getCurrentUserFromRequest",
    ()=>getCurrentUserFromRequest,
    "isAdmin",
    ()=>isAdmin,
    "isAuthenticated",
    ()=>isAuthenticated
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$server$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/uniteBank/server/storage.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$server$2f$admin$2d$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/server/admin-storage.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
const globalForSessions = globalThis;
const mockSessions = globalForSessions.__SESSION_STORE__ ?? (globalForSessions.__SESSION_STORE__ = new Map());
async function isAuthenticated(request) {
    const sessionId = getSessionIdFromRequest(request);
    if (!sessionId) {
        return false;
    }
    const session = mockSessions.get(sessionId);
    return !!session;
}
async function isAdmin(request) {
    const user = await getCurrentUserFromRequest(request);
    return user && user.role === 'ADMIN';
}
async function getCurrentUserFromRequest(request) {
    const sessionId = getSessionIdFromRequest(request);
    if (!sessionId) {
        return null;
    }
    const session = mockSessions.get(sessionId);
    if (!session) {
        return null;
    }
    // In a real implementation, you would fetch user from your DB
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$server$2f$admin$2d$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["adminStorage"].getUserByUuid(session.userId);
    return user;
}
// Helper function to extract session ID from request
function getSessionIdFromRequest(request) {
    // Look for session ID in cookies
    const cookieHeader = request.headers.get('cookie');
    if (!cookieHeader) return undefined;
    const cookies = cookieHeader.split(';').reduce((acc, cookieStr)=>{
        const [key, value] = cookieStr.trim().split('=');
        acc[key] = value;
        return acc;
    }, {});
    return cookies['sessionId'];
}
function createSessionId(userId) {
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    mockSessions.set(sessionId, {
        userId,
        createdAt: new Date()
    });
    return sessionId;
}
async function createSession(userId) {
    const sessionId = createSessionId(userId);
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.set('sessionId', sessionId, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 7 * 24 * 60 * 60 // 1 week
    });
    return sessionId;
}
async function destroySession() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const sessionId = cookieStore.get('sessionId')?.value;
    if (sessionId) {
        mockSessions.delete(sessionId);
        cookieStore.delete('sessionId');
    }
}
function destroySessionById(sessionId) {
    mockSessions.delete(sessionId);
}
}),
"[project]/Documents/uniteBank/app/api/transfers/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$server$2f$storage$2e$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/server/storage.supabase.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$server$2f$admin$2d$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/server/admin-storage.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/lib/auth.ts [app-route] (ecmascript)");
;
;
;
;
const transferSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    recipientAccountNumber: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(10),
    amount: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number().positive(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional()
});
async function POST(request) {
    try {
        // Get authenticated user
        const sender = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentUserFromRequest"])(request);
        if (!sender) {
            return Response.json({
                message: "Unauthorized"
            }, {
                status: 401
            });
        }
        const body = await request.json();
        const validation = transferSchema.safeParse(body);
        if (!validation.success) {
            return Response.json({
                message: "Invalid input",
                errors: validation.error.errors
            }, {
                status: 400
            });
        }
        const { recipientAccountNumber, amount, description } = validation.data;
        // Check sender status
        if (sender.status !== 'APPROVED') {
            return Response.json({
                message: "Account not approved"
            }, {
                status: 403
            });
        }
        // Check Balance
        if (parseFloat(sender.balance) < amount) {
            return Response.json({
                message: "Insufficient funds"
            }, {
                status: 400
            });
        }
        // Fetch Recipient
        const recipient = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$server$2f$admin$2d$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["adminStorage"].getUserByAccountNumber(recipientAccountNumber);
        if (!recipient) {
            return Response.json({
                message: "Recipient not found"
            }, {
                status: 404
            });
        }
        if (sender.id === recipient.id) {
            return Response.json({
                message: "Cannot transfer to self"
            }, {
                status: 400
            });
        }
        // Create Transfer Request
        const transfer = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$server$2f$storage$2e$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storage"].createTransfer({
            sender_id: sender.id,
            recipient_id: recipient.id,
            amount: amount.toString(),
            description: description || "Transfer",
            status: "PENDING"
        });
        return Response.json({
            message: "Transfer request created",
            transfer
        }, {
            status: 201
        });
    } catch (err) {
        console.error("Transfer request error:", err);
        return Response.json({
            message: "Internal server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7a689d15._.js.map