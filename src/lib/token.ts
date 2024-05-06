import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";

import { getPasswordResetTokenByEmail } from "@/data/password-token";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";
import { getVerificationTokenByEmail } from "@/data/verification-token";
import { db } from "@/lib/db";

// Function to generate a password reset token
export const generatePasswordResetToken = async (email: string) => {
  // Generate a unique token using UUIDv4
  const token = uuidv4();

  // Set the expiration time to 1 hour from the current time
  const expires = new Date(new Date().getTime() + 60 * 60 * 1000);

  const existingToken = await getPasswordResetTokenByEmail(email);

  // If an existing token is found, delete it
  if (existingToken) {
    await db.passwordResetToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  // Create a new password reset token in the database
  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return passwordResetToken;
};

// Function to generate a verification token
export const generateVerificationToken = async (email: string) => {
  // Generate a unique token using UUIDv4
  const token = uuidv4();

  // Set the expiration time to 1 hour from the current time
  const expires = new Date(new Date().getTime() + 60 * 60 * 1000);

  const existingToken = await getVerificationTokenByEmail(email);

  // If an existing token is found, delete it
  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  // Create a new verification token in the database
  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
};

// Function to generate a two-factor authentication token
export const generateTwoFactorToken = async (email: string) => {
  // Generate a random six-digit token
  const token = crypto.randomInt(100_000, 1_000_000).toString();

  // Set the expiration time to 5 minutes from the current time
  const expires = new Date(new Date().getTime() + 5 * 60 * 1000);

  const existingToken = await getTwoFactorTokenByEmail(email);

  // If an existing token is found, delete it
  if (existingToken) {
    await db.twoFactorToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  // Create a new two-factor authentication token in the database
  const twoFactorToken = await db.twoFactorToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return twoFactorToken;
};
