"use server";

import * as z from "zod";

import { LoginSchema } from "@/schemas";

export const login = async (
  values: z.infer<typeof LoginSchema>,
  callbackUrl: string | null
) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  console.log(callbackUrl);

  return { success: "Login Success!", twoFactor: false };
};
