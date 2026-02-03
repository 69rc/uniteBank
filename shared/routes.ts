import { z } from 'zod';
import { insertUserSchema, users, transactions, insertTransactionSchema, loginSchema, otpSchema } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  unauthorized: z.object({
    message: z.string(),
  }),
  forbidden: z.object({
    message: z.string(),
  }),
};

export const api = {
  auth: {
    register: {
      method: 'POST' as const,
      path: '/api/auth/register',
      input: insertUserSchema,
      responses: {
        201: z.object({ message: z.string(), email: z.string() }),
        400: errorSchemas.validation,
      },
    },
    verifyOtp: {
      method: 'POST' as const,
      path: '/api/auth/verify-otp',
      input: otpSchema,
      responses: {
        200: z.object({ message: z.string(), user: z.custom<typeof users.$inferSelect>() }),
        400: errorSchemas.validation,
      },
    },
    login: {
      method: 'POST' as const,
      path: '/api/auth/login',
      input: loginSchema,
      responses: {
        200: z.custom<typeof users.$inferSelect>(),
        401: errorSchemas.unauthorized,
      },
    },
    logout: {
      method: 'POST' as const,
      path: '/api/auth/logout',
      responses: {
        200: z.void(),
      },
    },
    me: {
      method: 'GET' as const,
      path: '/api/user',
      responses: {
        200: z.custom<typeof users.$inferSelect>(),
        401: errorSchemas.unauthorized,
      },
    },
    forgotPassword: {
      method: 'POST' as const,
      path: '/api/auth/forgot-password',
      input: z.object({ email: z.string().email() }),
      responses: {
        200: z.object({ message: z.string() }),
        400: errorSchemas.validation,
      },
    },
    resetPassword: {
      method: 'POST' as const,
      path: '/api/auth/reset-password',
      input: z.object({
        email: z.string().email(),
        code: z.string().length(6),
        newPassword: z.string().min(8),
      }),
      responses: {
        200: z.object({ message: z.string() }),
        400: errorSchemas.validation,
      },
    },
  },
  admin: {
    listUsers: {
      method: 'GET' as const,
      path: '/api/admin/users',
      responses: {
        200: z.array(z.custom<typeof users.$inferSelect>()),
        403: errorSchemas.forbidden,
      },
    },
    approveUser: {
      method: 'POST' as const,
      path: '/api/admin/users/:id/approve',
      responses: {
        200: z.custom<typeof users.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
    rejectUser: {
      method: 'POST' as const,
      path: '/api/admin/users/:id/reject',
      responses: {
        200: z.custom<typeof users.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
    createTransaction: {
      method: 'POST' as const,
      path: '/api/admin/transactions',
      input: insertTransactionSchema
        .omit({ createdBy: true })
        .extend({
          userId: z.coerce.number().int().min(1, "User is required"),
          amount: z.coerce.string(), // Accept number and convert to string
        }),
      responses: {
        201: z.custom<typeof transactions.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
    listAllTransactions: {
      method: 'GET' as const,
      path: '/api/admin/transactions',
      responses: {
        200: z.array(z.custom<typeof transactions.$inferSelect>()),
      },
    }
  },
  user: {
    listTransactions: {
      method: 'GET' as const,
      path: '/api/transactions',
      responses: {
        200: z.array(z.custom<typeof transactions.$inferSelect>()),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
