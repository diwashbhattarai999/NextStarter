import { Metadata } from "next";

import SettingsHeader from "@/components/sections/settings/settings-header";

export const metadata: Metadata = {
  title: "Social Profiles",
};

const SocialProfilesPage = () => {
  return (
    <div>
      <SettingsHeader title="Connect your social accounts" />
    </div>
  );
};

export default SocialProfilesPage;
