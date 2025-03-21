import { z } from "zod";

const zEnv = z.object({
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string(),
  DATABASE_URL: z.string(),
});

export const env = zEnv.parse(process.env);