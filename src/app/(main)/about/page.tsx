import { Metadata } from "next";

import MaxWidthContainer from "@/components/ui/max-width-container";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <MaxWidthContainer>
      <h1>About Page</h1>
    </MaxWidthContainer>
  );
}
