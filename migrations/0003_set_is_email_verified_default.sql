ALTER TABLE "users" ALTER COLUMN "isEmailVerified" SET DEFAULT true;
--> statement-breakpoint
UPDATE "users" SET "isEmailVerified" = true WHERE "isEmailVerified" = false;
