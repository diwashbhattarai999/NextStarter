import { useSession } from "next-auth/react";

// Get current user role from session
export const useCurrentRole = () => {
  const session = useSession();

  return session.data?.user.role;
};
