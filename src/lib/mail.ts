import { ResetPasswordEmail } from "@/emails/reset-password-email";
import TwoFactorConfirmationEmail from "@/emails/two-factor-confirmation-email";
import VerificationEmail from "@/emails/verification-email";
import { render } from "@react-email/components";
import { Resend } from "resend";

import { env } from "@/lib/env";

const resend = new Resend(env.RESEND_API_KEY);

const domain = env.NEXT_PUBLIC_BASE_URL;

// Function to send password reset email
export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/new-password?token=${token}`;

  await resend.emails.send({
    from: "DB-NextStarter<onboarding@resend.dev>",
    to: email,
    subject: "Reset your password",
    html: render(
      ResetPasswordEmail({
        resetPasswordLink: resetLink,
      })
    ),
  });
};

// Function to send email verification email
export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/new-verification?token=${token}`;

  await resend.emails.send({
    from: "DB-NextStarter<onboarding@resend.dev>",
    to: email,
    subject: "Confirm your email",
    html: render(
      VerificationEmail({
        confirmLink,
      })
    ),
  });
};

// Function to send two-factor authentication token email
export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "DB-NextStarter<onboarding@resend.dev>",
    to: email,
    subject: "2FA Code",
    html: render(TwoFactorConfirmationEmail({ token })),
  });
};
