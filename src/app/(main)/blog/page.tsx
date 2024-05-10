import { Metadata } from "next";

import MaxWidthContainer from "@/components/ui/max-width-container";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogsPage() {
  return (
    <MaxWidthContainer>
      <h1>Blogs Page</h1>
    </MaxWidthContainer>
  );
}
