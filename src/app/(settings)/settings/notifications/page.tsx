import { Metadata } from "next";

import SettingsHeader from "@/components/sections/settings/settings-header";

export const metadata: Metadata = {
  title: "Notifications",
};

const NotificationsPage = () => {
  return (
    <div>
      <SettingsHeader title="Notifications" />
    </div>
  );
};

export default NotificationsPage;
