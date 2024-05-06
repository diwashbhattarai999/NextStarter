"use server";

import bcrypt from "bcryptjs";
import * as z from "zod";

import { NewPasswordSchema } from "@/schemas";

import { getPasswordResetTokenByToken } from "@/data/password-token";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
) => {
  // Return error if token is missing
  if (!token) return { error: "Missing token!" };

  // Validate newPassword form fields and return error if fields are invalid
  const validatedFields = NewPasswordSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid fields!" };

  const { password } = validatedFields.data;

  // Retrieve password reset token and return error if token is invalid
  const existingToken = await getPasswordResetTokenByToken(token);
  if (!existingToken) return { error: "Invalid token!" };

  // Check if token has expired and return error if token has expired
  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) return { error: "Token has expired!" };

  // Retrieve user by email from the token and return error if email does not exist
  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) return { error: "Email does not exist!" };

  // Hash the new password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Update user's password in the database
  await db.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  // Delete the used password reset token
  await db.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Password updated!" };
};
