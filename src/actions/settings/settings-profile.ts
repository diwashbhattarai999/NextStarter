"use server";

import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";
import * as z from "zod";

import { SettingsProfileSchema } from "@/schemas";

import { getUserByEmail, getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/token";

export const settingsProfile = async (
  values: z.infer<typeof SettingsProfileSchema>
) => {
  // Check if user is authenticated
  const user = await currentUser();
  if (!user) return { error: "Unauthorized!" };

  // Get user data from the database
  const dbUser = await getUserById(user.id as string);
  if (!dbUser) return { error: "Unauthorized!" };

  // If user is authenticated via OAuth, certain fields cannot be modified
  if (user.isOAuth) {
    values.email = undefined;
    values.password = undefined;
    values.newPassword = undefined;
    values.isTwoFactorEnabled = undefined;
  }

  // If the email is being changed
  if (values.email && values.email !== user.email) {
    // Check if the new email is already in use
    const existingUser = await getUserByEmail(values.email);
    if (existingUser && existingUser.id !== user.id) {
      return { error: "Email already in use!" };
    }

    // Generate verification token and send verification email
    const verificationToken = await generateVerificationToken(values.email);
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Verification email sent!" };
  }

  // If password is being changed
  if (
    values.password &&
    values.password.length > 0 &&
    values.newPassword &&
    values.password.length > 0 &&
    dbUser.password
  ) {
    // Check if the current password matches the user's password
    const passwordsMatch = await bcrypt.compare(
      values.password,
      dbUser.password
    );
    if (!passwordsMatch) return { error: "Incorrect password!" };

    // Hash the new password
    const hashedPassword = await bcrypt.hash(values.newPassword, 10);
    values.password = hashedPassword;
    values.newPassword = undefined;
  } else {
    // If password is not being changed, remove password field from update data
    values.password = undefined;
  }

  // If phone number is being changed check if it is 10 digits
  if (values.phone && (values.phone.length < 10 || values.phone.length > 10)) {
    return { error: "Phone Number should be of 10 digits!" };
  }

  // Update user settings in the database
  await db.user.update({
    where: { id: dbUser.id },
    data: {
      role: values.role,
      name: values.name,
      isTwoFactorEnabled: values.isTwoFactorEnabled,
      email: values.email,
      password: values.password,
      phone: values.phone,
    },
  });

  return { success: "Settings Updated!" };
};

export const uploadProfileImage = async (image: string) => {
  // Check if user is authenticated
  const user = await currentUser();
  if (!user) return { error: "Unauthorized!" };

  // Get user data from the database
  const dbUser = await getUserById(user.id as string);
  if (!dbUser) return { error: "Unauthorized!" };

  // Update user settings in the database
  await db.user.update({
    where: { id: dbUser.id },
    data: { image },
  });

  revalidatePath("/settings/general");

  return { success: "Image updated successfully" };
};

export const deletProfileImage = async () => {
  // Check if user is authenticated
  const user = await currentUser();
  if (!user) return { error: "Unauthorized!" };

  // Get user data from the database
  const dbUser = await getUserById(user.id as string);
  if (!dbUser) return { error: "Unauthorized!" };

  // Check if image exists
  const existingUserImage = user.image;
  if (!existingUserImage) return { error: "No Image found to delete" };

  // Update image to null in the database
  await db.user.update({
    where: { id: dbUser.id },
    data: { image: null },
  });

  revalidatePath("/settings/general");

  return { success: "Profile Image deleted" };
};
