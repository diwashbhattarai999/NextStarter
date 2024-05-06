"use client";

import { useState, useTransition } from "react";
import { signOut } from "next-auth/react";

import { deleteAccount } from "@/actions/settings/delete-account";
import { useCurrentUser } from "@/hooks/use-current-user";

import { Button } from "@/components/ui/button";
import FormError from "@/components/ui/form-error";
import FormSuccess from "@/components/ui/form-success";

import ConfirmationPopup from "./confirmation-popup";

const DeleteAccountButton = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const user = useCurrentUser();

  const handleConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleDeleteAccount = () => {
    startTransition(() => {
      deleteAccount(user?.id)
        .then((data) => {
          if (data?.error) {
            setError(data?.error);
          }
          if (data?.success) {
            setSuccess(data?.success);
            signOut();
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };

  return (
    <>
      {/* Delete confirmation */}

      <ConfirmationPopup
        heading="Delete your account"
        showConfirmation={showConfirmation}
        setShowConfirmation={setShowConfirmation}
        cancelButtonLabel="Cancel"
        confirmButtonLabel="Delete Account"
        handleSubmit={handleDeleteAccount}
        isPending={isPending}
      >
        <div>
          <div className="font-medium text-lg">
            Are you sure you want to delete your account?
          </div>
          <div className="text-muted-foreground text-sm">
            By confirming, you acknowledge that this action is irreversible.
            Please be aware that all your data and settings will be permanently
            deleted. Make sure to back up any important information before
            proceeding.
          </div>
        </div>
      </ConfirmationPopup>

      {/* Sucess Message */}
      {success && <FormSuccess message={success} />}

      {/* Error Message */}
      {error && <FormError message={error} />}

      <Button
        variant={"destructive"}
        onClick={handleConfirmation}
        disabled={isPending}
      >
        Delete your account
      </Button>
    </>
  );
};

export default DeleteAccountButton;
