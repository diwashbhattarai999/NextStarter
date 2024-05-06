import { useSession } from "next-auth/react";

// Get current user from session
export const useCurrentUser = () => {
  const session = useSession();

  return session.data?.user;
};
