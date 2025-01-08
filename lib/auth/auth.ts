import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { username } from "better-auth/plugins";
import { prisma } from "../db/prisma";
 
export const auth = betterAuth({
  plugins: [username()],
 
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  })
})