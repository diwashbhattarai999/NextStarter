import { Metadata } from "next";

import SettingsHeader from "@/components/sections/settings/settings-header";

export const metadata: Metadata = {
  title: "Appearance",
};

const AppearancePage = () => {
  return (
    <div>
      <SettingsHeader title="Theme Preferences" />
    </div>
  );
};

export default AppearancePage;
