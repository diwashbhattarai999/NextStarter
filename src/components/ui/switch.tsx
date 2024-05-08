"use client";

import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import * as z from "zod";

import { SettingsProfileSchema } from "@/schemas";

import { cn } from "@/lib/utils";

interface SwitchProps {
  label: string;
  descriptions: string;
  disabled?: boolean;
  error?: string;
  value?: boolean;
  setValue: UseFormSetValue<z.infer<typeof SettingsProfileSchema>>;
}

const Switch = ({
  label,
  descriptions,
  disabled,
  error,
  value,
  setValue,
}: SwitchProps) => {
  const [toggleSwitch, setToggleSwitch] = useState(value);

  const handleSwitch = () => {
    setToggleSwitch((currValue) => !currValue);
    setValue("isTwoFactorEnabled", !toggleSwitch);
  };

  return (
    <div
      className={cn(
        "w-full h-full py-4 pl-2 pr-8 mb-8 bg-transparent border rounded-md text-primary placeholder:text-secondary-foreground outline-none flex items-start justify-between max-md:gap-4 max-md:flex-col max-md:items-start max-md:pr-2",
        error
          ? "border-destructive focus:border-destructive"
          : "border-input focus:border-secondary-foreground",
        { "cursor-not-allowed opacity-50": disabled }
      )}
    >
      <div className="flex flex-col items-start justify-start gap-1 text-left flex-1">
        <label className="text-sm font-medium text-primary">{label}</label>
        <p className="text-sm text-secondary-foreground">{descriptions}</p>
      </div>
      <div
        className={cn(
          "w-10 h-6 flex items-center bg-foreground/30 rounded-full cursor-pointer shadow-inner",
          { "bg-foreground/20": toggleSwitch }
        )}
        onClick={handleSwitch}
      >
        <div
          className={cn(
            "w-4 h-4 mx-1 rounded-full duration-300",
            toggleSwitch
              ? "translate-x-[100%] bg-foreground"
              : "translate-x-0 bg-foreground/90"
          )}
        />
      </div>
    </div>
  );
};

export default Switch;
