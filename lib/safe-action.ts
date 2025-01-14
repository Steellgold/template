import { createSafeActionClient } from "next-safe-action";
import { auth } from "./auth/auth";
import { headers } from "next/headers";

export const actionClient = createSafeActionClient();

export const authActionClient = actionClient.use(async ({ next }) => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user.id) {
    throw new Error("You are not authenticated. Please login to continue.");
  }

  return next({ ctx: { session } });
})