"use client";

import React, { useEffect, useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound, Mail, Phone, UserCircle2, UserCog2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// import { settings } from "@/actions/settings";
import { SettingsSchema } from "@/schemas";
import { useCurrentUser } from "@/hooks/use-current-user";

import { Button } from "@/components/ui/button";
import FormError from "@/components/ui/form-error";
import FormSuccess from "@/components/ui/form-success";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/select";
import Switch from "@/components/ui/switch";
import ChangeProfileImg from "@/components/sections/settings/change-profile";

const SettingsForm = () => {
  // eslint-disable-next-line
  const [error, setError] = useState<string | undefined>();
  // eslint-disable-next-line
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const [selectValue, setSelectValue] = useState("Select a Role");

  // eslint-disable-next-line
  const { update } = useSession();

  const user = useCurrentUser();

  const defaultValues = {
    image: user?.image || undefined,
    name: user?.name || undefined,
    email: user?.email || undefined,
    phone: user?.phoneNumber || undefined,
    password: undefined,
    newPassword: undefined,
    role: user?.role || undefined,
    isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
  };

  useEffect(() => {
    if (user) {
      setSelectValue(user.role);
    }
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      // settings(values)
      //   .then((data) => {
      //     if (data.error) {
      //       setError(data.error);
      //       setSuccess("");
      //     }
      //     if (data.success) {
      //       update();
      //       setSuccess(data.success);
      //       setError("");
      //     }
      //   })
      //   .catch(() => setError("Something went wrong!"));
      console.log(values);
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="z-0 flex flex-col items-start my-5"
    >
      <div className="w-full flex flex-col-reverse sm:flex-row items-start gap-12">
        {/* Inputs */}
        <div className="flex flex-col items-start w-full">
          {/* User Inputs -- Name */}
          <Input
            label="Name"
            name="name"
            type="text"
            placeholder="Full name"
            icon={UserCircle2}
            error={errors.name?.message}
            disabled={isPending}
            register={register("name")}
          />
          {user?.isOAuth === false && (
            <>
              {/* User Inputs -- Email */}
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="name@example.com"
                icon={Mail}
                error={errors.email?.message}
                disabled={isPending}
                register={register("email")}
              />

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

              {/* User Inputs -- New Password */}
              <Input
                label="New Password"
                name="newPassword"
                type="password"
                placeholder="******"
                icon={KeyRound}
                error={errors.newPassword?.message}
                disabled={isPending}
                register={register("newPassword")}
              />
            </>
          )}
          {/* User Inputs -- Phone Number */}
          <Input
            label="Phone Number"
            name="phone"
            type="text"
            placeholder="Phone Number"
            icon={Phone}
            error={errors.phone?.message}
            disabled={isPending}
            register={register("phone")}
          />

          {/* User Inputs -- Role */}
          <Select
            selectLabel="Role"
            name="role"
            Icon={UserCog2}
            value={selectValue}
            setSelectValue={setSelectValue}
            error={errors.role?.message}
            disabled={isPending}
            register={register("role")}
            options={[
              { label: "Admin", value: "ADMIN" },
              { label: "User", value: "USER" },
            ]}
          />

          {/* User Inputs -- 2FA */}
          {user?.isOAuth === false && (
            <Switch
              value={defaultValues.isTwoFactorEnabled}
              error={errors.isTwoFactorEnabled?.message}
              disabled={isPending}
              setValue={setValue}
              label="Two Factor Authentication"
              descriptions="Enable two factor authentication for your account"
            />
          )}
        </div>

        <ChangeProfileImg setValue={setValue} value={defaultValues.image} />
      </div>

      {/* Sucess Message */}
      {success && <FormSuccess message={success} />}

      {/* Error Message */}
      {error && <FormError message={error} />}

      {/* Submit Button */}
      <Button disabled={isPending} type="submit" size={"lg"}>
        Save
      </Button>
    </form>
  );
};

export default SettingsForm;
