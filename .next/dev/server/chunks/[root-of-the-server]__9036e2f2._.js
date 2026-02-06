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
"[project]/Documents/uniteBank/shared/schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-orm/pg-core/columns/text.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-orm/pg-core/columns/serial.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-orm/pg-core/columns/numeric.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-orm/pg-core/columns/date.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-zod/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
;
;
;
const users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("users", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    firstName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("first_name").notNull(),
    lastName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("last_name").notNull(),
    otherName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("other_name"),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("email").notNull().unique(),
    phone: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("phone").notNull(),
    dob: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["date"])("dob").notNull(),
    gender: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("gender").notNull(),
    nationality: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("nationality").notNull(),
    // Contact info
    address: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("address").notNull(),
    city: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("city").notNull(),
    state: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("state").notNull(),
    country: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("country").notNull(),
    zipCode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("zip_code").notNull(),
    // KYC
    idType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id_type").notNull(),
    idNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id_number").notNull(),
    idExpiryDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["date"])("id_expiry_date").notNull(),
    idImageUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id_image_url"),
    selfieUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("selfie_url"),
    // Account Info
    accountType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("account_type", {
        enum: [
            "SAVINGS",
            "CURRENT",
            "CHECKING"
        ]
    }).notNull(),
    currency: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("currency").default("USD").notNull(),
    accountPurpose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("account_purpose"),
    // Security
    password: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("password").notNull(),
    transactionPin: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("transaction_pin").notNull(),
    // Status & Role
    role: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("role", {
        enum: [
            "USER",
            "ADMIN"
        ]
    }).default("USER").notNull(),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("status", {
        enum: [
            "PENDING",
            "APPROVED",
            "REJECTED"
        ]
    }).default("PENDING").notNull(),
    isEmailVerified: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])("isEmailVerified").default(true).notNull(),
    // Generated fields
    accountNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("account_number", {
        length: 20
    }).unique(),
    customerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("customer_id", {
        length: 15
    }).unique(),
    balance: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["numeric"])("balance", {
        precision: 12,
        scale: 2
    }).default("0.00").notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow()
});
const otps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("otps", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("email").notNull(),
    code: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("code").notNull(),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("expires_at").notNull()
});
const transactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("transactions", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("user_id").references(()=>users.id).notNull(),
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("type", {
        enum: [
            "CREDIT",
            "DEBIT"
        ]
    }).notNull(),
    amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["numeric"])("amount", {
        precision: 12,
        scale: 2
    }).notNull(),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("description").notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow(),
    createdBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("created_by", {
        enum: [
            "SYSTEM",
            "ADMIN"
        ]
    }).default("SYSTEM").notNull()
});
const transfers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("transfers", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    senderId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("sender_id").references(()=>users.id).notNull(),
    recipientId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("recipient_id").references(()=>users.id).notNull(),
    amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["numeric"])("amount", {
        precision: 12,
        scale: 2
    }).notNull(),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("description").notNull(),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("status", {
        enum: [
            "PENDING",
            "APPROVED",
            "REJECTED"
        ]
    }).default("PENDING").notNull(),
    adminNote: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("admin_note"),
    approvedBy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("approved_by").references(()=>users.id),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow(),
    processedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("processed_at")
});
const insertUserSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createInsertSchema"])(users).omit({
    id: true,
    createdAt: true,
    accountNumber: true,
    customerId: true,
    balance: true,
    role: true,
    status: true,
    isEmailVerified: true
}).extend({
    password: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(8),
    transactionPin: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(4).max(6)
});
const insertTransactionSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createInsertSchema"])(transactions).omit({
    id: true,
    createdAt: true
});
const insertTransferSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$zod$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createInsertSchema"])(transfers).omit({
    id: true,
    createdAt: true,
    processedAt: true,
    approvedBy: true,
    status: true,
    adminNote: true
});
const loginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().email(),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
});
const otpSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().email(),
    code: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().length(6)
});
}),
"[project]/Documents/uniteBank/shared/routes.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api,
    "buildUrl",
    ()=>buildUrl,
    "errorSchemas",
    ()=>errorSchemas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/shared/schema.ts [app-route] (ecmascript)");
;
;
const errorSchemas = {
    validation: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        field: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional()
    }),
    notFound: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    }),
    unauthorized: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    }),
    forbidden: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })
};
const api = {
    auth: {
        register: {
            method: 'POST',
            path: '/api/auth/register',
            input: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["insertUserSchema"],
            responses: {
                201: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
                    email: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
                }),
                400: errorSchemas.validation
            }
        },
        verifyOtp: {
            method: 'POST',
            path: '/api/auth/verify-otp',
            input: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["otpSchema"],
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
                    user: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].custom()
                }),
                400: errorSchemas.validation
            }
        },
        login: {
            method: 'POST',
            path: '/api/auth/login',
            input: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loginSchema"],
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].custom(),
                401: errorSchemas.unauthorized
            }
        },
        logout: {
            method: 'POST',
            path: '/api/auth/logout',
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].void()
            }
        },
        me: {
            method: 'GET',
            path: '/api/user',
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].custom(),
                401: errorSchemas.unauthorized
            }
        },
        forgotPassword: {
            method: 'POST',
            path: '/api/auth/forgot-password',
            input: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                email: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().email()
            }),
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
                }),
                400: errorSchemas.validation
            }
        },
        resetPassword: {
            method: 'POST',
            path: '/api/auth/reset-password',
            input: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                email: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().email(),
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().length(6),
                newPassword: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(8)
            }),
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
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
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].custom()),
                403: errorSchemas.forbidden
            }
        },
        approveUser: {
            method: 'POST',
            path: '/api/admin/users/:id/approve',
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].custom(),
                404: errorSchemas.notFound
            }
        },
        rejectUser: {
            method: 'POST',
            path: '/api/admin/users/:id/reject',
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].custom(),
                404: errorSchemas.notFound
            }
        },
        createTransaction: {
            method: 'POST',
            path: '/api/admin/transactions',
            input: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["insertTransactionSchema"].omit({
                createdBy: true,
                userId: true
            }) // Omit userId from original schema
            .extend({
                // Either userId or accountNumber must be provided
                userId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional(),
                accountNumber: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(10, "Account number must be at least 10 digits").max(20, "Account number is too long").optional(),
                amount: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(1, "Amount is required").refine((val)=>{
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
                201: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].custom(),
                400: errorSchemas.validation
            }
        },
        listAllTransactions: {
            method: 'GET',
            path: '/api/admin/transactions',
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].custom())
            }
        }
    },
    user: {
        listTransactions: {
            method: 'GET',
            path: '/api/transactions',
            responses: {
                200: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].custom())
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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/Documents/uniteBank/app/api/utils/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "comparePasswords",
    ()=>comparePasswords,
    "hashPassword",
    ()=>hashPassword
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
;
;
const scryptAsync = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["scrypt"]);
async function hashPassword(password) {
    const salt = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomBytes"])(16).toString('hex');
    const buf = await scryptAsync(password, salt, 64);
    return `${buf.toString('hex')}.${salt}`;
}
async function comparePasswords(supplied, stored) {
    const [hashed, salt] = stored.split('.');
    const hashedBuf = Buffer.from(hashed, 'hex');
    const suppliedBuf = await scryptAsync(supplied, salt, 64);
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["timingSafeEqual"])(hashedBuf, suppliedBuf);
}
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
"[project]/Documents/uniteBank/app/api/auth/login/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/shared/routes.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$server$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/uniteBank/server/storage.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$server$2f$admin$2d$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/server/admin-storage.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$api$2f$utils$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/app/api/utils/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/lib/auth.ts [app-route] (ecmascript)");
;
;
;
;
async function POST(request) {
    try {
        const input = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].auth.login.input.parse(await request.json());
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$server$2f$admin$2d$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["adminStorage"].getUserByEmail(input.email);
        if (!user || !await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$api$2f$utils$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["comparePasswords"])(input.password, user.password)) {
            return Response.json({
                message: "Invalid email or password"
            }, {
                status: 401
            });
        }
        console.log(user);
        if (user.status === "PENDING") {
            return Response.json({
                message: "Account pending admin approval"
            }, {
                status: 403
            });
        }
        if (user.status === "REJECTED") {
            return Response.json({
                message: "Account rejected. Contact support."
            }, {
                status: 403
            });
        }
        // Create session for the user
        const sessionId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSession"])(user.id);
        return new Response(JSON.stringify(user), {
            status: 200,
            statusText: 'OK'
        });
    } catch (err) {
        if (err.name === 'ZodError') {
            return Response.json({
                message: err.errors[0].message
            }, {
                status: 400
            });
        } else {
            return Response.json({
                message: err.message || "Internal server error"
            }, {
                status: 500
            });
        }
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9036e2f2._.js.map