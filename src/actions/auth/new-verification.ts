"use server";

import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";
import { db } from "@/lib/db";

export const newVerification = async (token: any) => {
  // Retrieve verification token and return error if token does not exist
  const existingToken = await getVerificationTokenByToken(token);
  if (!existingToken) return { error: "Token does not exist!" };

  // Check if token has expired and return error if token has expired
  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) return { error: "Token has expired!" };

  // Retrieve user by email from the token and return error if email does not exist
  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) return { error: "Email does not exist!" };

  // Update user's email verification status and email in the database
  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  // Delete the used verification token
  await db.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Email verified! You can close this page and goto login." };
};
