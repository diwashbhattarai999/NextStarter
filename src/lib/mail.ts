import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_BASE_URL;

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `
      <h1>Password Reset</h1>
      <p>We received a request to reset your password.</p>
      <p>If you didn't request a password reset, you can ignore this email.</p>
      <p>To reset your password, please click the link below:</p>
      <a href="${resetLink}">Reset Password</a>
      <p>If the button above doesn't work, you can copy and paste the following link into your browser:</p>
      <p>${resetLink}</p>
      <p>This link will expire in 24 hours for security reasons.</p>
  `,
  });
};

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
