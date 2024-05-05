"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

import { ResetSchema } from "@/schemas";

import { Button } from "@/components/ui/button";
import FormError from "@/components/ui/form-error";
import FormSuccess from "@/components/ui/form-success";
import Input from "@/components/ui/Input";
import CardWrapper from "@/components/auth/card-wrapper";

const defaultValues = {
  email: "",
};

const ResetForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<typeof defaultValues> = (
    values: z.infer<typeof ResetSchema>
  ) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      console.log(values);
    });
  };

  return (
    <CardWrapper
      headerLabel="Reset Password"
      subHeaderLabel="Forgot your password ?"
      backButtonHref="/login"
      backButtonLabel="Go back to login"
      disabled={isPending}
      wrapperClassName="min-h-fit"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start"
      >
        {/* User Inputs -- Email */}
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          icon={Mail}
          error={errors.email?.message}
          disabled={isPending}
          register={register("email")}
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
          Send Reset Email
        </Button>
      </form>
    </CardWrapper>
  );
};

export default ResetForm;
