import { headers } from "next/headers";
import { auth as baseAuth } from "./auth";
import { unauthorized } from "next/navigation";
import { Session } from "better-auth";

export const getUser = async() => {
  const session = await baseAuth.api.getSession({
    headers: await headers()
  });

  return session;
};

export const getRequiredUser = async() => {
  const user = await getUser();

  if (!user) {
    unauthorized();
  }

  return user;
};