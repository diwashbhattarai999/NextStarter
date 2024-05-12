import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { env } from "@/lib/env.mjs";

interface ResetPasswordEmailProps {
  resetPasswordLink?: string;
}

const baseUrl = env.AUTH_TRUST_HOST
  ? `${env.NEXT_PUBLIC_BASE_URL}`
  : "https://db-next-starter.vercel.app";

export const ResetPasswordEmail = ({
  resetPasswordLink,
}: ResetPasswordEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Reset your password</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/logo-transparent-black.png`}
            width="200"
            height="30"
            alt="NextStarter"
          />
          <Section>
            <Text style={text}>Hey there,</Text>
            <Text style={text}>
              We recently received a request to reset a password for your
              account. If this was you, you can set a new password here:
            </Text>
            <Button style={button} href={resetPasswordLink}>
              Reset password
            </Button>

            <Text style={text}>
              If the button above doesn&apos;t work, you can copy and paste the
              following link into your browser:{" "}
              <Link style={anchor} href={resetPasswordLink}>
                {resetPasswordLink}
              </Link>
            </Text>

            <Text style={text}>
              If you don&apos;t want to change your password or didn&apos;t
              request this, just ignore and delete this message.
            </Text>

            <Text style={text}>
              To keep your account secure, please don&apos;t forward this email
              to anyone. See our Help Center for{" "}
              <Link style={anchor} href={baseUrl}>
                more security tips.
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

ResetPasswordEmail.PreviewProps = {
  resetPasswordLink: "https://db-nextstarter.vercel.app",
} as ResetPasswordEmailProps;

export default ResetPasswordEmail;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "45px",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};

const button = {
  backgroundColor: "#007ee6",
  borderRadius: "4px",
  color: "#fff",
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "210px",
  padding: "14px 7px",
};

const anchor = {
  textDecoration: "underline",
};
