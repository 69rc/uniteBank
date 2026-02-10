(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/uniteBank/shared/schema.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "insertTransactionSchema",
    ()=>insertTransactionSchema,
    "insertTransferSchema",
    ()=>insertTransferSchema,
    "insertUserSchema",
    ()=>insertUserSchema,
    "loginSchema",
    ()=>loginSchema,
    "otpSchema",
    ()=>otpSchema,
    "otps",
    ()=>otps,
    "transactions",
    ()=>transactions,
    "transfers",
    ()=>transfers,
    "users",
    ()=>users
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-orm/pg-core/table.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-orm/pg-core/columns/text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-orm/pg-core/columns/serial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-orm/pg-core/columns/numeric.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-orm/pg-core/columns/date.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-zod/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/zod/lib/index.mjs [app-client] (ecmascript)");
;
;
;
const users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pgTable"])("users", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    firstName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("first_name").notNull(),
    lastName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("last_name").notNull(),
    otherName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("other_name"),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("email").notNull().unique(),
    phone: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("phone").notNull(),
    dob: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"])("dob").notNull(),
    gender: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("gender").notNull(),
    nationality: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("nationality").notNull(),
    // Contact info
    address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("address").notNull(),
    city: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("city").notNull(),
    state: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("state").notNull(),
    country: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("country").notNull(),
    zipCode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("zip_code").notNull(),
    // KYC
    idType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("id_type").notNull(),
    idNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("id_number").notNull(),
    idExpiryDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["date"])("id_expiry_date").notNull(),
    idImageUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("id_image_url"),
    selfieUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("selfie_url"),
    // Account Info
    accountType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("account_type", {
        enum: [
            "SAVINGS",
            "CURRENT",
            "CHECKING",
            "BUSINESS"
        ]
    }).notNull(),
    currency: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("currency").default("USD").notNull(),
    accountPurpose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("account_purpose"),
    // Security
    password: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("password").notNull(),
    transactionPin: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("transaction_pin").notNull(),
    // Status & Role
    role: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("role", {
        enum: [
            "USER",
            "ADMIN"
        ]
    }).default("USER").notNull(),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("status", {
        enum: [
            "PENDING",
            "APPROVED",
            "REJECTED"
        ]
    }).default("PENDING").notNull(),
    isEmailVerified: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"])("isEmailVerified").default(true).notNull(),
    // Generated fields
    accountNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["varchar"])("account_number", {
        length: 20
    }).unique(),
    customerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["varchar"])("customer_id", {
        length: 15
    }).unique(),
    balance: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numeric"])("balance", {
        precision: 12,
        scale: 2
    }).default("0.00").notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow()
});
const otps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pgTable"])("otps", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("email").notNull(),
    code: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("code").notNull(),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestamp"])("expires_at").notNull()
});
const transactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pgTable"])("transactions", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("user_id").references(()=>users.id).notNull(),
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("type", {
        enum: [
            "CREDIT",
            "DEBIT"
        ]
    }).notNull(),
    amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numeric"])("amount", {
        precision: 12,
        scale: 2
    }).notNull(),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("description").notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow(),
    createdBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("created_by", {
        enum: [
            "SYSTEM",
            "ADMIN"
        ]
    }).default("SYSTEM").notNull()
});
const transfers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pgTable"])("transfers", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    senderId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("sender_id").references(()=>users.id).notNull(),
    recipientId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("recipient_id").references(()=>users.id).notNull(),
    amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numeric"])("amount", {
        precision: 12,
        scale: 2
    }).notNull(),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("description").notNull(),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("status", {
        enum: [
            "PENDING",
            "APPROVED",
            "REJECTED"
        ]
    }).default("PENDING").notNull(),
    adminNote: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("admin_note"),
    approvedBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["text"])("approved_by").references(()=>users.id),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow(),
    processedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestamp"])("processed_at")
});
const insertUserSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInsertSchema"])(users).omit({
    id: true,
    createdAt: true,
    accountNumber: true,
    customerId: true,
    balance: true,
    role: true,
    status: true,
    isEmailVerified: true
}).extend({
    password: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(8),
    transactionPin: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(4).max(6)
});
const insertTransactionSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInsertSchema"])(transactions).omit({
    id: true,
    createdAt: true
});
const insertTransferSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInsertSchema"])(transfers).omit({
    id: true,
    createdAt: true,
    processedAt: true,
    approvedBy: true,
    status: true,
    adminNote: true
});
const loginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().email(),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
    loginCode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(1, "Login code is required")
});
const otpSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().email(),
    code: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().length(6)
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/uniteBank/shared/routes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api,
    "buildUrl",
    ()=>buildUrl,
    "errorSchemas",
    ()=>errorSchemas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/zod/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/shared/schema.ts [app-client] (ecmascript)");
;
;
const errorSchemas = {
    validation: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
        field: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().optional()
    }),
    notFound: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string()
    }),
    unauthorized: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string()
    }),
    forbidden: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string()
    })
};
const api = {
    auth: {
        register: {
            method: 'POST',
            path: '/api/auth/register',
            input: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertUserSchema"],
            responses: {
                201: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
                    email: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string()
                }),
                400: errorSchemas.validation
            }
        },
        verifyOtp: {
            method: 'POST',
            path: '/api/auth/verify-otp',
            input: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["otpSchema"],
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string(),
                    user: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].custom()
                }),
                400: errorSchemas.validation
            }
        },
        login: {
            method: 'POST',
            path: '/api/auth/login',
            input: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginSchema"],
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].custom(),
                401: errorSchemas.unauthorized
            }
        },
        logout: {
            method: 'POST',
            path: '/api/auth/logout',
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].void()
            }
        },
        me: {
            method: 'GET',
            path: '/api/user',
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].custom(),
                401: errorSchemas.unauthorized
            }
        },
        forgotPassword: {
            method: 'POST',
            path: '/api/auth/forgot-password',
            input: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
                email: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().email()
            }),
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string()
                }),
                400: errorSchemas.validation
            }
        },
        resetPassword: {
            method: 'POST',
            path: '/api/auth/reset-password',
            input: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
                email: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().email(),
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().length(6),
                newPassword: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(8)
            }),
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string()
                }),
                400: errorSchemas.validation
            }
        }
    },
    admin: {
        listUsers: {
            method: 'GET',
            path: '/api/admin/users',
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].custom()),
                403: errorSchemas.forbidden
            }
        },
        approveUser: {
            method: 'POST',
            path: '/api/admin/users/:id/approve',
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].custom(),
                404: errorSchemas.notFound
            }
        },
        rejectUser: {
            method: 'POST',
            path: '/api/admin/users/:id/reject',
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].custom(),
                404: errorSchemas.notFound
            }
        },
        createTransaction: {
            method: 'POST',
            path: '/api/admin/transactions',
            input: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insertTransactionSchema"].omit({
                createdBy: true,
                userId: true
            }) // Omit userId from original schema
            .extend({
                // Either userId or accountNumber must be provided
                userId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().optional(),
                accountNumber: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(10, "Account number must be at least 10 digits").max(20, "Account number is too long").optional(),
                amount: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(1, "Amount is required").refine((val)=>{
                    const num = Number(val);
                    return !isNaN(num) && num >= 0.01;
                }, {
                    message: "Amount must be greater than 0"
                })
            }).refine((data)=>data.userId || data.accountNumber, {
                message: "Either userId or accountNumber must be provided",
                path: [
                    "userId"
                ]
            }),
            responses: {
                201: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].custom(),
                400: errorSchemas.validation
            }
        },
        listAllTransactions: {
            method: 'GET',
            path: '/api/admin/transactions',
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].custom())
            }
        }
    },
    user: {
        listTransactions: {
            method: 'GET',
            path: '/api/transactions',
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].custom())
            }
        }
    }
};
function buildUrl(path, params) {
    let url = path;
    if (params) {
        Object.entries(params).forEach(([key, value])=>{
            if (url.includes(`:${key}`)) {
                url = url.replace(`:${key}`, String(value));
            }
        });
    }
    return url;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_uniteBank_shared_6f7c4c28._.js.map