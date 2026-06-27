import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: process.env.LOCALHOST_URI,
});
export const { signIn, signUp, signOut, useSession } = authClient;
