import { UserRole } from "@prisma/client";
import { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  phoneNumber: string;
};

declare module "next-auth" {
  // eslint-disable-next-line
  interface Session {
    user: ExtendedUser;
  }
}
