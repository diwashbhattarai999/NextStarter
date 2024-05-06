import { db } from "@/lib/db";

// Function to get account by user ID
export const getAccountByUserId = async (userId: string) => {
  try {
    const account = await db.account.findFirst({
      where: { userId },
    });

    return account;
  } catch (error) {
    return null;
  }
};
