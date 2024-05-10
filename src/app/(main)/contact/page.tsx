import { Metadata } from "next";

import MaxWidthContainer from "@/components/ui/max-width-container";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <MaxWidthContainer>
      <h1>Contact Page</h1>
    </MaxWidthContainer>
  );
}
