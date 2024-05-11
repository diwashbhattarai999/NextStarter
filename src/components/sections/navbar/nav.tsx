"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS } from "@/constants";
import { useCurrentUser } from "@/hooks/use-current-user";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import MaxWidthContainer from "@/components/ui/max-width-container";
import UserProfile from "@/components/sections/navbar/user-profile";

import MobileNav from "./mobile-nav";

const Navbar = () => {
  const pathname = usePathname().split("/")[1];
  const [activeLink, setActiveLink] = useState(`/${pathname}`);

  const user = useCurrentUser();

  return (
    <div className="py-3 sm:py-5 border-b border-border/50">
      <MaxWidthContainer className="flex items-center justify-between gap-8">
        {/* Logo */}
        <Logo />

        {/* Nav Links */}
        <div className="flex items-center gap-2 lg:gap-4 xl:gap-8 justify-center">
          <div className="hidden lg:flex items-center gap-10 rounded-full relative">
            {/* Links */}
            {NAV_LINKS.map((link) => {
              return (
                <Link
                  key={link.path}
                  onMouseEnter={() => setActiveLink(link.path)}
                  onMouseLeave={() => setActiveLink(`/${pathname}`)}
                  href={link.path}
                  className={cn(
                    "font-medium text-base whitespace-nowrap z-50 after:block after:content-[''] after:h-[3px] after:w-[85%] after:bg-primary after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-x-125 after:origin-[0%_50%]",
                    {
                      "after:scale-x-125": activeLink === link.path,
                    }
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="max-sm:hidden ml-8 flex items-center gap-2 lg:gap-4">
            {user ? (
              <>
                {/* Dashboard */}
                <Link href={"/dashboard"}>
                  <Button
                    variant={"default"}
                    className="rounded-full hover:rounded-md font-semibold text-base"
                  >
                    Dashboard
                  </Button>
                </Link>

                {/* User Profile */}
                <UserProfile />
              </>
            ) : (
              <>
                {/* Show if user is not logged in */}
                <div className="ml-5 xl:ml-20">
                  {/* Signin button */}
                  <Link href={"/login"}>
                    <Button
                      variant={"default"}
                      className="rounded-full px-12 hover:rounded-md font-semibold text-base"
                    >
                      Signin
                    </Button>
                  </Link>

                  {/* Github Icon */}
                  <Link
                    href="https://github.com/diwashbhattarai999/NextStarter"
                    target="_blank"
                  >
                    <Button variant={"ghost"} size={"icon"} aria-label="Github">
                      <Image
                        src={"/images/github.svg"}
                        width={30}
                        height={30}
                        alt="GitHub"
                        priority
                      />
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Mobile Nav */}
          <MobileNav />
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default Navbar;
