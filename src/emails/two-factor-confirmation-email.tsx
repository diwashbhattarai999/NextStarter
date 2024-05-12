import * as React from "react";
import {
  Body,
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

interface TwoFactorConfirmationEmailProps {
  token?: string;
}

const baseUrl = env.AUTH_TRUST_HOST
  ? `${env.NEXT_PUBLIC_BASE_URL}`
  : "https://db-next-starter.vercel.app";

export const TwoFactorConfirmationEmail = ({
  token,
}: TwoFactorConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Two-Factor Authentication Code</Preview>
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
              You&apos;ve requested a verification code to enable two-factor
              authentication (2FA) for your account.Here is your verification
              code:
            </Text>
            <Text style={tokenText}>{token}</Text>

            <Text style={text}>
              If you did not sign up for a your account or didn&apos;t request
              this, just ignore and delete this message.
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

TwoFactorConfirmationEmail.PreviewProps = {
  token: "123456",
} as TwoFactorConfirmationEmailProps;

export default TwoFactorConfirmationEmail;

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

const tokenText = {
  color: "#141414",
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: "32px",
  textDecoration: "none",
  textAlign: "center" as const,
  fontWeight: "bold",
  margin: "40px 0",
};

const anchor = {
  textDecoration: "underline",
};
