# UnitedHorizonBank

A full-stack banking application built with React, Node.js, and PostgreSQL.

## How to Run the App

1. The application is already running. If you need to restart it, use the "Start application" workflow or run:
   ```bash
   npm run dev
   ```

## How to View the Database

- You can view the database using Replit's built-in PostgreSQL tool in the sidebar.
- Alternatively, you can inspect the schema in `shared/schema.ts`.

## How to Test OTP

1. Go to the Registration page (`/auth?tab=register`).
2. Fill in the details and submit.
3. **Check the Replit Console (Shell/Logs)**. You will see a log entry like:
   ```
   [MOCK EMAIL] To: user@example.com, OTP: 123456
   ```
4. Enter this code in the OTP verification modal.

## Admin Access

- **Email**: `admin@bank.com`
- **Password**: `admin123`

Login with these credentials to access the Admin Dashboard.
