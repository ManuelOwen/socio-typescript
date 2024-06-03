CREATE TABLE IF NOT EXISTS "profiles" (
	"id" serial PRIMARY KEY NOT NULL,
	"bio" varchar(255),
	"userId" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"fullname" text,
	"email" varchar(255),
	"phone" varchar(11),
	"address" varchar(255),
	"score" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
