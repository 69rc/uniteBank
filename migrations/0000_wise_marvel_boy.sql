CREATE TABLE "otps" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"code" text NOT NULL,
	"expires_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "transactions" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"type" text NOT NULL,
	"amount" numeric(12, 2) NOT NULL,
	"description" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"created_by" text DEFAULT 'SYSTEM' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"other_name" text,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"dob" date NOT NULL,
	"gender" text NOT NULL,
	"nationality" text NOT NULL,
	"address" text NOT NULL,
	"city" text NOT NULL,
	"state" text NOT NULL,
	"country" text NOT NULL,
	"zip_code" text NOT NULL,
	"id_type" text NOT NULL,
	"id_number" text NOT NULL,
	"id_expiry_date" date NOT NULL,
	"id_image_url" text,
	"selfie_url" text,
	"account_type" text NOT NULL,
	"currency" text DEFAULT 'USD' NOT NULL,
	"account_purpose" text,
	"password" text NOT NULL,
	"transaction_pin" text NOT NULL,
	"role" text DEFAULT 'USER' NOT NULL,
	"status" text DEFAULT 'PENDING' NOT NULL,
	"isEmailVerified" boolean DEFAULT false NOT NULL,
	"account_number" varchar(20),
	"customer_id" varchar(15),
	"balance" numeric(12, 2) DEFAULT '0.00' NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_account_number_unique" UNIQUE("account_number"),
	CONSTRAINT "users_customer_id_unique" UNIQUE("customer_id")
);
--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;