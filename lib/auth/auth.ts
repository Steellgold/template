import { betterAuth } from "better-auth";
import { Pool } from "pg";
import { env } from "@/lib/env";
 
export const auth = betterAuth({
  plugins: [],
  database: new Pool({ connectionString: env.DATABASE_URL })
})