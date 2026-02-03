# UniteBank Serverless API (Vercel)

This folder contains a Vercel-ready backend using serverless functions and Drizzle ORM.

## Structure

- `api/` – Vercel serverless API routes (users, admin, topup, otp)
- `db/` – Drizzle ORM schema and connection to Supabase Postgres
- `lib/` – Helper utilities (OTP generation/validation)
- `drizzle.config.ts` – Drizzle CLI configuration
- `tsconfig.json` – TypeScript configuration with path aliases

## Environment Variables

Create a `.env` file (or configure in Vercel) with:

```
DATABASE_URL="postgresql://..."
SUPABASE_URL="https://xxx.supabase.co"
SUPABASE_ANON_KEY="..."
SUPABASE_SERVICE_ROLE_KEY="..."
```

## Development

```bash
cd vercel
npm install
vercel dev
```

## Deployment

1. Push this folder to a repository.
2. Import into Vercel (select this folder as root).
3. Set environment variables.
4. Deploy.
```
