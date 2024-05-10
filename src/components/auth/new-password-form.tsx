"use client";

import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

import { newPassword } from "@/actions/auth/new-password";
import { NewPasswordSchema } from "@/schemas";

import { Button } from "@/components/ui/button";
import FormError from "@/components/ui/form-error";
import FormSuccess from "@/components/ui/form-success";
import Input from "@/components/ui/Input";
import CardWrapper from "@/components/auth/card-wrapper";

const defaultValues = {
  password: "",
};

const NewPasswordForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<typeof defaultValues> = (values) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      newPassword(values, token).then((data) => {
        setError(data?.error);
        if (data?.success) {
          setSuccess(data.success);
          setTimeout(() => {
            router.replace("/login");
          }, 700);
        }
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Change Password"
      subHeaderLabel="Enter a new password"
      backButtonLabel="Back to login"
      backButtonHref="/login"
      disabled={isPending}
      wrapperClassName="min-h-fit"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* User Inputs -- Password */}
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="******"
          icon={KeyRound}
          error={errors.password?.message}
          disabled={isPending}
          register={register("password")}
        />

        {/* Sucess Message */}
        {success && <FormSuccess message={success} />}

        {/* Error Message */}
        {error && <FormError message={error} />}

        {/* Reset Button */}
        <Button
          disabled={isPending}
          type="submit"
          variant={"default"}
          size={"full"}
        >
          Reset Password
        </Button>
      </form>
    </CardWrapper>
  );
};

export default NewPasswordForm;
