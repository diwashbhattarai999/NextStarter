"use server";

import { db } from "@/lib/db";

export const deleteAccount = async (userId: string | undefined) => {
  if (!userId)
    return { error: "Failed to delete your account. Please try again later!" };

  // Delete user from database
  await db.user.delete({
    where: { id: userId },
  });

  return { success: "Your account has been deleted." };
};
