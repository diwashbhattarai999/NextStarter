import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import AuthSocial from "@/components/auth/auth-social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  subHeaderLabel: string;
  HeaderIcon?: LucideIcon;
  backButtonLabel?: string;
  backButtonHref?: string;
  showSocial?: boolean;
  disabled?: boolean;
  className?: string;
  wrapperClassName?: string;
}

const CardWrapper = ({
  children,
  headerLabel,
  HeaderIcon,
  backButtonLabel,
  subHeaderLabel,
  backButtonHref,
  showSocial,
  disabled,
  className,
  wrapperClassName,
}: CardWrapperProps) => {
  return (
    <div
      className={cn(
        "w-full min-h-screen flex items-center justify-center bg-background/70 backdrop-blur-md",
        { "cursor-not-allowed z-0": disabled },
        wrapperClassName
      )}
    >
      <div
        className={cn(
          "w-full shadow-sm rounded-md text-card-foreground border border-border p-4 flex flex-col items-center justify-center gap-4",
          className
        )}
      >
        {/* Form Title */}
        <div className="w-full pb-4 text-center border-b border-border">
          <div className="flex items-center justify-center gap-4 text-foreground">
            {HeaderIcon && <HeaderIcon className="w-7 h-7" />}
            <h1 className="mb-1 text-4xl font-semibold">{headerLabel}</h1>
          </div>
          <div className="text-lg text-secondary-foreground">
            {subHeaderLabel}
          </div>
        </div>
        <div
          className={cn("w-full pb-4", {
            "border-b border-border": showSocial || backButtonHref,
          })}
        >
          {children}
        </div>
        {showSocial && (
          <div className="w-full">
            <AuthSocial disabled={disabled} />
          </div>
        )}
        {backButtonHref && backButtonLabel && (
          <Link
            href={backButtonHref}
            className={cn(
              "text-secondary-foreground hover:text-muted-foreground text-sm border-b border-b-secondary-foreground/50",
              { "cursor-not-allowed opacity-50": disabled }
            )}
          >
            {backButtonLabel}
          </Link>
        )}
      </div>
    </div>
  );
};

export default CardWrapper;
