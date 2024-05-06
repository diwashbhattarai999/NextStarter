"use server";

import bcrypt from "bcryptjs";
import * as z from "zod";

import { RegisterSchema } from "@/schemas";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/token";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  // Validate registration form fields and return error if fields are invalid
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid fields!" };

  const { email, name, password } = validatedFields.data;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Check if user with given email already exists and return error if email is already in use
  const existingUser = await getUserByEmail(email);
  if (existingUser) return { error: "Email already in use!" };

  // Create new user in the database
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // Generate and send verification email
  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "Confirmation email sent!" };
};
