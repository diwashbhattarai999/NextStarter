import { Metadata } from "next";

import DeleteAccountButton from "@/components/sections/settings/delete-account-button";
import SettingsHeader from "@/components/sections/settings/settings-header";

export const metadata: Metadata = {
  title: "Delete Account",
};

const DeleteAccountPage = () => {
  return (
    <div>
      <SettingsHeader title="Delete Account" className="text-destructive" />

      <div className="my-4 flex flex-col gap-4">
        <span>
          Once you delete your account, there is no going back. Please be
          certain.
        </span>

        <DeleteAccountButton />
      </div>
    </div>
  );
};

export default DeleteAccountPage;
