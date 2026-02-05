# Registration Approval Test Instructions

Use this guide to validate the new post-registration experience where users wait for manual admin approval instead of entering an OTP code.

## Steps

1. Navigate to `/auth?tab=register`.
2. Complete the registration form with valid information and submit.
3. Confirm that a success card appears explaining the application is pending review. The card should:
   - Mention the email address that was used during registration.
   - Explain that the compliance team will review the application.
   - Provide "Edit Application" and "Back to Login" actions.
4. Attempt to log in with the newly created credentials. You should see an error message stating that the account is awaiting admin approval.
5. Sign in as an administrator, approve the user, and ensure the user can then log in successfully.

## Expected Messaging

- **Registration Toast:** "Application submitted" with detailed copy from the backend response.
- **Login Error (Pending):** "Account pending admin approval".
- **Login Error (Rejected):** "Account rejected. Contact support."

## Notes

- Email verification is now auto-approved for newly created accounts.
- Manual admin approval is required before a customer can access the dashboard.
- Password reset flows still rely on OTP codes and are unaffected by this change.
