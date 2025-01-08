import { createAuthClient } from "better-auth/react";
import { toast } from "sonner";

export const client = createAuthClient({
  plugins: [],
  fetchOptions: {
    onError(e) {
      if (e.error.status === 429) {
        toast.error("Too many requests. Please try again later.");
      }
    }
  }
});

export const {
  signUp,
  signIn,
  signOut,

  useSession,

  forgetPassword,
  resetPassword,

  sendVerificationEmail,
  verifyEmail
} = client;