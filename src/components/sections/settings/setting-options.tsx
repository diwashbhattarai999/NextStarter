"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SETTINGS_OPTIONS } from "@/constants";

import { cn } from "@/lib/utils";

const SettingOptions = () => {
  const pathname = usePathname();

  return (
    <>
      {SETTINGS_OPTIONS.map((option) => {
        return (
          <Link key={option.label} href={option.link}>
            <div
              className={cn(
                "flex items-center gap-2 pl-3 pr-2 py-[6px] rounded-md cursor-pointer hover:bg-muted transition-all relative",
                pathname === `/settings/${option.link}` && "bg-muted"
              )}
            >
              <option.icon className="text-muted-foreground h-4 w-4 -mt-[2px]" />
              <span className="text-secondary-foreground text-nowrap">
                {option.label}
              </span>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default SettingOptions;
