"use client";

import { HTMLInputTypeAttribute, useState } from "react";
import { Eye, EyeOff, LucideIcon } from "lucide-react";
import { UseFormRegisterReturn } from "react-hook-form";

import { cn } from "@/lib/utils";

interface InputProps {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
  register: UseFormRegisterReturn;
  value?: string;
  placeholder?: string;
  icon?: LucideIcon;
  error?: string;
  disabled?: boolean;
}

const Input = ({
  label,
  name,
  type,
  value,
  placeholder,
  icon: Icon,
  error,
  disabled,
  register,
}: InputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const EyeIcon = passwordVisible ? Eye : EyeOff;

  return (
    <div
      className={cn("relative w-full mb-4 flex flex-col gap-2 items-start", {
        "cursor-not-allowed opacity-50": disabled,
      })}
    >
      <label
        htmlFor={name}
        className={cn(
          "text-primary cursor-pointer",
          { "text-destructive opacity-80": error },
          { "cursor-not-allowed opacity-50": disabled }
        )}
      >
        {label}
      </label>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center w-full relative">
          {Icon && (
            <Icon className="absolute left-2 pointer-events-none h-5 w-5 text-secondary-foreground" />
          )}
          <input
            {...register}
            name={name}
            type={
              type == "password"
                ? passwordVisible
                  ? "string"
                  : "password"
                : type
            }
            placeholder={placeholder}
            defaultValue={value}
            id={name}
            disabled={disabled}
            className={cn(
              "w-full h-full bg-transparent border rounded-md text-primary placeholder:text-muted-foreground/80 outline-none disabled:cursor-not-allowed disabled:opacity-50",
              error
                ? "border-destructive focus:border-destructive"
                : "border-input focus:border-secondary",
              Icon ? "pl-10 py-4" : "px-4 py-2"
            )}
          />
        </div>

        {type == "password" && (
          <EyeIcon
            className="absolute right-2 cursor-pointer pr-4 h-9 w-9 text-secondary-foreground"
            onClick={() => setPasswordVisible((currentVal) => !currentVal)}
          />
        )}
      </div>
      {error && <div className="mb-4 text-destructive italic">{error}</div>}
    </div>
  );
};

export default Input;
