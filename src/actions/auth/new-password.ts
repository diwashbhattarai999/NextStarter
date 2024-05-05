"use server";

import * as z from "zod";

import { NewPasswordSchema } from "@/schemas";

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>
) => {
  const validatedFields = NewPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  return { success: "Password changed!" };
};
