"use server";

import * as z from "zod";

import { ResetSchema } from "@/schemas";

import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/token";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  // Validate reset form fields and return error if fields are invalid
  const validatedFields = ResetSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid fields!" };

  const { email } = validatedFields.data;

  // Check if user with given email exists
  const existingUser = await getUserByEmail(email);
  if (!existingUser) return { error: "Email not found!" };

  // Generate and send password reset email
  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );

  return { success: "Reset email sent!" };
};
