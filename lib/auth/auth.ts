import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "../db/prisma";
 
export const auth = betterAuth({
  plugins: [],
 
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  })
})