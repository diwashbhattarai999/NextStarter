import { Metadata } from "next";

import NewVerificationForm from "@/components/auth/new-verification-form";

export const metadata: Metadata = {
  title: "New Verification",
};

const NewVerificationPage = () => {
  return <NewVerificationForm />;
};

export default NewVerificationPage;
