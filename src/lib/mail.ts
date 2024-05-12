import { ResetPasswordEmail } from "@/emails/reset-password-email";
import { render } from "@react-email/components";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_BASE_URL;

// Function to send password reset email
export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
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
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `
      <h1>Email Verification Confirmation</h1>
      <p>Thank you for signing up. To get started, please confirm your email address by clicking the link below:</p>
      <p><a href="${confirmLink}">Confirm Email Address</a></p>
      <p>If you did not sign up for a Resend account, you can safely ignore this email.</p>
      <p>This link will expire in 24 hours for security reasons.</p>
    `,
  });
};

// Function to send two-factor authentication token email
export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "2FA Code",
    html: `
      <h1>Two-Factor Authentication Code</h1>
      <p>You've requested a verification code to enable two-factor authentication (2FA) for your account.</p>
      <p>Here is your verification code:</p>
      <h2 style="font-size: 24px; font-weight: bold; color: #333;">${token}</h2>
      <p>This code will expire in 10 minutes for security reasons.</p>
      <p>If you didn't request this code, it's possible someone else is trying to access your account. Please ensure the security of your account and consider changing your password immediately.</p>
   `,
  });
};
