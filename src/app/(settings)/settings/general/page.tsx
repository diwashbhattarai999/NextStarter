import { Metadata } from "next";

import SettingsForm from "@/components/sections/settings/settings-form";
import SettingsHeader from "@/components/sections/settings/settings-header";

export const metadata: Metadata = {
  title: "General",
};

const GeneralPage = () => {
  return (
    <>
      <SettingsHeader title="Your Profile" />
      <SettingsForm />
    </>
  );
};

export default GeneralPage;
