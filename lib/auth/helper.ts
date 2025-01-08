import { headers } from "next/headers";
import { auth as baseAuth } from "./auth";
import { redirect } from "next/navigation";
import type { User } from "better-auth";

export const auth = async(): Promise<User | null> => {
  const session = await baseAuth.api.getSession({
    headers: await headers()
  });

  if (session?.user) return session.user;
  return null;
};

export const requiredAuth = async(): Promise<User> => {
  const user = await auth();

  if (!user) {
    redirect("/login");
  }

  return user;
};