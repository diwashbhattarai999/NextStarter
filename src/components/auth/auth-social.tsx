"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

import { Button } from "@/components/ui/button";

const AUTH_SOCIAL_LINKS = [
  {
    label: "google",
    icon: "/images/google.svg",
  },
  {
    label: "github",
    icon: "/images/github.svg",
  },
];

const AuthSocial = ({ disabled }: { disabled?: boolean }) => {
  const handleSocialLogin = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center justify-between w-full gap-2">
      {AUTH_SOCIAL_LINKS.map((link) => {
        return (
          <Button
            key={link.label}
            variant={"secondary"}
            size={"lg"}
            className="w-full border border-border"
            onClick={() =>
              handleSocialLogin(link.label === "google" ? "google" : "github")
            }
            disabled={disabled}
          >
            <Image
              src={link.icon}
              alt="Social Icons"
              width={25}
              height={25}
              priority
              aria-hidden="true"
            />
            <span className="text-primary capitalize font-medium">
              {link.label}
            </span>
          </Button>
        );
      })}
    </div>
  );
};

export default AuthSocial;
