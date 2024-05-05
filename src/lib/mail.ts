import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_BASE_URL;

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `
      <h1>Confirm your email</h1>
      <p>Please confirm your email by clicking the link below:</p>
      <a href="${confirmLink}">${confirmLink}</a>
    `,
  });
};
