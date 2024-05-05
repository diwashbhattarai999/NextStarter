"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { newVerification } from "@/actions/auth/new-verification";

import FormError from "@/components/ui/form-error";
import FormSuccess from "@/components/ui/form-success";
import CardWrapper from "@/components/auth/card-wrapper";

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Verify your account"
      subHeaderLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/login"
      wrapperClassName="min-h-fit"
    >
      <div className="flex items-center justify-center w-full">
        {/* //TODO: Add a loader here */}
        {!success && !error && <h2>Loading...</h2>}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
