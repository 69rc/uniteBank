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
    "users",
    ()=>users
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-orm/pg-core/columns/text.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-orm/pg-core/columns/serial.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/drizzle-orm/pg-core/columns/integer.js [app-route] (ecmascript)");
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
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
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
    isEmailVerified: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])("isEmailVerified").default(false).notNull(),
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
    purpose: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("purpose").default("EMAIL_VERIFICATION").notNull(),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("expires_at").notNull()
});
const transactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("transactions", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serial"])("id").primaryKey(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("user_id").references(()=>users.id).notNull(),
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
                createdBy: true
            }).extend({
                userId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].coerce.number().int().min(1, "User is required"),
                amount: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].coerce.string()
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
class SupabaseAdminStorage {
    // Methods that require admin privileges
    async getUser(id) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('users').select('*').eq('id', id).single();
        if (error) throw error;
        return data;
    }
    async getUserByEmail(email) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('users').select('*').eq('email', email).maybeSingle();
        if (error) throw error;
        return data ?? undefined;
    }
    async createUser(user) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('users').insert([
            user
        ]).select().single();
        if (error) throw error;
        return data;
    }
    async updateUserStatus(id, status) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('users').update({
            status
        }).eq('id', id).select().single();
        if (error) throw error;
        return data;
    }
    async updateUserBalance(id, balance) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('users').update({
            balance
        }).eq('id', id).select().single();
        if (error) throw error;
        return data;
    }
    async updateUserAccountNumber(id, accountNumber) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('users').update({
            account_number: accountNumber
        }).eq('id', id).select().single();
        if (error) throw error;
        return data;
    }
    async verifyUserEmail(email) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { error } = await adminClient.from('users').update({
            isEmailVerified: true
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
    async getAllUsers() {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('users').select('*').order('createdAt', {
            ascending: false
        });
        if (error) throw error;
        return data;
    }
    // OTPs
    async createOtp(email, code, purpose = "EMAIL_VERIFICATION") {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        // First delete any existing OTPs for this email and purpose
        await adminClient.from('otps').delete().match({
            email,
            purpose
        });
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now
        const { error } = await adminClient.from('otps').insert([
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
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('otps').select('*').match({
            email,
            code,
            purpose
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
        const { data, error } = await adminClient.from('transactions').insert([
            transaction
        ]).select().single();
        if (error) throw error;
        return data;
    }
    async getTransactionsByUserId(userId) {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('transactions').select('*').eq('userId', userId).order('createdAt', {
            ascending: false
        });
        if (error) throw error;
        return data;
    }
    async getAllTransactions() {
        const adminClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAdminSupabaseClient"])();
        const { data, error } = await adminClient.from('transactions').select('*').order('createdAt', {
            ascending: false
        });
        if (error) throw error;
        return data;
    }
}
class SupabasePublicStorage {
    // Public methods that don't require admin privileges
    async getUser(id) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('id', id).single();
        if (error) throw error;
        return data;
    }
    async getUserByEmail(email) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('email', email).maybeSingle();
        if (error) throw error;
        return data ?? undefined;
    }
    async getTransactionsByUserId(userId) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('transactions').select('*').eq('userId', userId).order('createdAt', {
            ascending: false
        });
        if (error) throw error;
        return data;
    }
    // Other public methods should throw an error since they require admin access
    async createUser(user) {
        throw new Error("Create user must be done through public registration endpoint");
    }
    async updateUserStatus(id, status) {
        throw new Error("Update user status requires admin privileges");
    }
    async updateUserBalance(id, balance) {
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
"[project]/Documents/uniteBank/app/api/utils/user.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Simple account number generator
__turbopack_context__.s([
    "generateAccountNumber",
    ()=>generateAccountNumber,
    "generateCustomerId",
    ()=>generateCustomerId
]);
function generateAccountNumber() {
    return '202' + Math.floor(100000000 + Math.random() * 900000000).toString();
}
function generateCustomerId() {
    return 'CU' + Math.floor(1000000000000 + Math.random() * 9000000000000).toString();
}
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/Documents/uniteBank/server/mailer.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendOtpEmail",
    ()=>sendOtpEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/node_modules/nodemailer/lib/nodemailer.js [app-route] (ecmascript)");
;
function getMailConfig() {
    return {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
        from: process.env.EMAIL_FROM,
        service: process.env.SMTP_SERVICE
    };
}
let transporter = null;
function getTransporter(config) {
    if (!(config.service || config.host) || !config.user || !config.pass) {
        throw new Error("SMTP configuration is incomplete. Please set SMTP credentials (e.g. SMTP_HOST/PORT or SMTP_SERVICE) along with SMTP_USER and SMTP_PASS.");
    }
    if (!transporter) {
        const baseOptions = {
            auth: {
                user: config.user,
                pass: config.pass
            }
        };
        if (config.service) {
            baseOptions.service = config.service;
        } else {
            baseOptions.host = config.host;
            baseOptions.port = config.port;
            baseOptions.secure = config.port === 465;
        }
        transporter = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport(baseOptions);
    }
    return transporter;
}
function getCopy(purpose) {
    if (purpose === "PASSWORD_RESET") {
        return {
            subject: "Reset your UnitedHorizon password",
            title: "Password reset request",
            body: "Use the verification code below to reset your password. This code expires in 5 minutes."
        };
    }
    return {
        subject: "Verify your UnitedHorizon account",
        title: "Verify your email",
        body: "Use the verification code below to complete your registration. This code expires in 5 minutes."
    };
}
async function sendOtpEmail(to, code, purpose = "EMAIL_VERIFICATION") {
    const config = getMailConfig();
    const mailer = getTransporter(config);
    const fromAddress = config.from || config.user;
    const copy = getCopy(purpose);
    await mailer.sendMail({
        from: fromAddress,
        to,
        subject: copy.subject,
        text: `${copy.body} Code: ${code}`,
        html: `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h2 style="color: #0f172a;">${copy.title}</h2>
        <p>${copy.body}</p>
        <p style="font-size: 32px; font-weight: 700; letter-spacing: 8px; color: #ea580c;">${code}</p>
        <p>If you did not request this code, you can safely ignore this email.</p>
      </div>
    `
    });
}
}),
"[project]/Documents/uniteBank/app/api/auth/register/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/shared/routes.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$server$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/uniteBank/server/storage.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$server$2f$admin$2d$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/server/admin-storage.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$api$2f$utils$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/app/api/utils/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$api$2f$utils$2f$user$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/app/api/utils/user.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$server$2f$mailer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/uniteBank/server/mailer.ts [app-route] (ecmascript)");
;
;
;
;
;
async function POST(request) {
    try {
        const input = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$shared$2f$routes$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].auth.register.input.parse(await request.json());
        console.log("Registration input received:", JSON.stringify(input, null, 2));
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$server$2f$admin$2d$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["adminStorage"].getUserByEmail(input.email);
        if (existing) {
            return Response.json({
                message: "Email already registered"
            }, {
                status: 400
            });
        }
        const hashedPassword = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$api$2f$utils$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hashPassword"])(input.password);
        const accountNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$api$2f$utils$2f$user$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateAccountNumber"])();
        const customerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$app$2f$api$2f$utils$2f$user$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateCustomerId"])();
        const userToCreate = {
            ...input,
            password: hashedPassword,
            accountNumber,
            customerId,
            role: "USER",
            status: "PENDING",
            balance: "0.00",
            isEmailVerified: false
        };
        const dbPayload = {
            first_name: userToCreate.firstName,
            last_name: userToCreate.lastName,
            other_name: userToCreate.otherName ?? null,
            email: userToCreate.email,
            phone: userToCreate.phone,
            dob: userToCreate.dob,
            gender: userToCreate.gender,
            nationality: userToCreate.nationality,
            address: userToCreate.address,
            city: userToCreate.city,
            state: userToCreate.state,
            country: userToCreate.country,
            zip_code: userToCreate.zipCode,
            id_type: userToCreate.idType,
            id_number: userToCreate.idNumber,
            id_expiry_date: userToCreate.idExpiryDate,
            id_image_url: userToCreate.idImageUrl ?? null,
            selfie_url: userToCreate.selfieUrl ?? null,
            account_type: userToCreate.accountType,
            currency: userToCreate.currency,
            account_purpose: userToCreate.accountPurpose ?? null,
            password: userToCreate.password,
            transaction_pin: userToCreate.transactionPin,
            role: userToCreate.role,
            status: userToCreate.status,
            isEmailVerified: userToCreate.isEmailVerified,
            account_number: userToCreate.accountNumber,
            customer_id: userToCreate.customerId,
            balance: userToCreate.balance
        };
        console.log("Creating user with data:", JSON.stringify(userToCreate, null, 2));
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$server$2f$admin$2d$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["adminStorage"].createUser(dbPayload);
        // Generate OTP
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$server$2f$admin$2d$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["adminStorage"].createOtp(user.email, code);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$uniteBank$2f$server$2f$mailer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendOtpEmail"])(user.email, code, "EMAIL_VERIFICATION");
            console.log(`[OTP EMAIL SENT] To: ${user.email}`);
        } catch (emailErr) {
            console.error("Failed to send OTP email", emailErr);
            return Response.json({
                message: "User created but we could not send the verification email. Please try again later."
            }, {
                status: 500
            });
        }
        return Response.json({
            message: "User created. Please verify your email with the OTP code sent to your email.",
            email: user.email
        }, {
            status: 201
        });
    } catch (err) {
        console.error("Registration error:", err);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__592b97bb._.js.map