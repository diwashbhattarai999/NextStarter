import { auth } from "@/auth";

// Get current user from session for server side
export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

// Get current user role from session for server side
export const currentRole = async () => {
  const session = await auth();

  return session?.user?.role;
};
