import { auth } from "@/auth";

import MaxWidthContainer from "@/components/ui/max-width-container";

const SettingsPage = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <MaxWidthContainer>
      <h1 className="mb-6">Settings Page</h1>
      <div className="flex flex-col gap-1">
        <p>User Name: {user?.name}</p>
        <p>Email: {user?.email}</p>
        <p>
          Two Factor: {user?.isTwoFactorEnabled ? "Enabled" : "Not Enabled"}
        </p>
        <p>Role: {user?.role}</p>
      </div>
    </MaxWidthContainer>
  );
};

export default SettingsPage;
