import { Metadata } from "next";

import NewPasswordForm from "@/components/auth/new-password-form";

export const metadata: Metadata = {
  title: "New Password",
};

const NewPassword = () => {
  return <NewPasswordForm />;
};

export default NewPassword;
