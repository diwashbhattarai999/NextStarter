"use client";

import React, { useState } from "react";
import { ChevronDown, LucideIcon } from "lucide-react";
import { UseFormRegisterReturn } from "react-hook-form";

import { cn } from "@/lib/utils";

export type Options = {
  readonly value: string;
  readonly label: string;
};

interface SelectProps {
  name: string;
  register: UseFormRegisterReturn;
  value: string;
  setSelectValue: React.Dispatch<React.SetStateAction<any>>;
  error?: string;
  disabled?: boolean;
  options: Options[];
  className?: string;
  selectLabel: string;
  Icon?: LucideIcon;
  onChange?: (value: string) => void; // eslint-disable-line no-unused-vars
}

const Select = ({
  name,
  value,
  setSelectValue,
  error,
  disabled,
  register,
  options,
  className,
  selectLabel,
  Icon,
  onChange,
  ...props
}: SelectProps) => {
  const [selectOpen, setSelectOpen] = useState(false);

  const handleSelect = (option: Options) => {
    setSelectValue(option.label);
    register.onChange({ target: { name, value: option.value } });
    setSelectOpen(false);

    onChange && onChange(option.value);
  };

  return (
    <div
      className={cn("w-full relative mb-8 flex flex-col items-start gap-2 ", {
        "cursor-not-allowed opacity-50": disabled,
      })}
    >
      <label
        htmlFor="SelectRole"
        className={cn(
          "text-primary cursor-pointer ",
          { "text-destructive opacity-80": error },
          { "cursor-not-allowed opacity-50": disabled }
        )}
      >
        {selectLabel}
      </label>

      <div
        className="flex items-center w-full"
        onClick={() => setSelectOpen((currValue) => !currValue)}
      >
        {Icon && (
          <Icon className="absolute left-2 pointer-events-none h-5 w-5 text-secondary-foreground" />
        )}

        <div
          {...props}
          className={cn(
            "w-full h-full bg-transparent border rounded-md text-left text-primary placeholder:text-secondary-foreground outline-none disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer",
            error
              ? "border-destructive focus:border-destructive"
              : "border-input focus:border-secondary-foreground",
            Icon ? "py-4 px-10" : "py-2 px-4",
            className
          )}
          {...register}
        >
          {value}
        </div>
        <ChevronDown
          className={cn(
            "absolute right-2 cursor-pointer h-9 w-9 text-secondary-foreground",
            Icon ? "pr-4 h-9 w-9" : "h-6 w-6"
          )}
        />
      </div>
      {error && <div className="mb-4 text-destructive italic">{error}</div>}

      <div
        className={cn(
          "w-full h-fit bg-background border border-border shadow-md absolute left-0 top-[5.7rem] py-2 rounded-md text-left duration-300 z-50 overflow-y-auto max-h-60",
          selectOpen
            ? "translate-y-0 opacity-100 h-auto pointer-events-auto"
            : "-translate-y-5 opacity-0 -h-4 pointer-events-none"
        )}
      >
        {options.map((option) => (
          <div
            key={option.value}
            className="py-3 hover:bg-muted border border-transparent hover:border-border cursor-pointer rounded-md px-10 duration-300 m-2 capitalize flex justify-between group"
            onClick={() => handleSelect(option)}
          >
            <p className="flex-1 group-hover:text-foreground">{option.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
