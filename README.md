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

## Registration Flow

1. Go to the Registration page (`/auth?tab=register`).
2. Fill in the details and submit.
3. You'll see a confirmation message indicating the application is awaiting admin review.
4. An administrator must approve the account from the dashboard before the user can log in.

## Admin Access

- **Email**: `admin@bank.com`
- **Password**: `admin123`

Login with these credentials to access the Admin Dashboard.
