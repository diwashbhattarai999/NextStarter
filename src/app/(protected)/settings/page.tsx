import { auth } from "@/auth";

import MaxWidthContainer from "@/components/ui/max-width-container";
import Footer from "@/components/sections/footer/footer";
import Navbar from "@/components/sections/navbar/nav";

const SettingsPage = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="my-8 flex-1">
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
      </main>
      <Footer />
    </div>
  );
};

export default SettingsPage;
