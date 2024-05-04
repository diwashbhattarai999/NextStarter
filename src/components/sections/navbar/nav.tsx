"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS } from "@/constants";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import MaxWidthContainer from "@/components/ui/max-width-container";
import UserProfile from "@/components/sections/navbar/user-profile";

import MobileNav from "./mobile-nav";

const Navbar = () => {
  const pathname = usePathname().split("/")[1];
  const [activeLink, setActiveLink] = useState(`/${pathname}`);

  const user = null;

  return (
    <div className="py-2 sm:py-5 border-b border-border/50">
      <MaxWidthContainer className="flex items-center justify-between gap-8">
        {/* Logo */}
        <Logo />

        {/* Nav Links */}
        <div className="flex items-center gap-2 lg:gap-4 xl:gap-8 justify-center">
          <div className="hidden xl:flex items-center gap-2 p-1 rounded-full relative">
            {/* Links */}
            {NAV_LINKS.map((link) => {
              return (
                <div
                  key={link.path}
                  className="w-20 text-center py-1"
                  onMouseEnter={() => setActiveLink(link.path)}
                  onMouseLeave={() => setActiveLink(`/${pathname}`)}
                >
                  <Link
                    href={link.path}
                    className={cn(
                      "font-medium whitespace-nowrap z-50 transition-colors",
                      activeLink === link.path
                        ? "text-primary-foreground"
                        : "text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                </div>
              );
            })}

            {/* Hover effect background */}
            <div
              className={cn(
                "absolute left-0 top-1/2 -translate-y-1/2  h-[36px] w-[90px] bg-primary rounded-full transition-transform duration-300 -z-10 hidden",
                activeLink === "/" && "-translate-x-0 block",
                activeLink === "/about" && "translate-x-[5.4rem] block",
                activeLink === "/blog" && "translate-x-[10.8rem] block",
                activeLink === "/contact" && "translate-x-[16.4rem] block"
              )}
            />
          </div>

          <div className="max-sm:hidden">
            {user ? (
              <>
                {/* Show if user is logged in */}
                {/* User Profile */}
                <UserProfile />
              </>
            ) : (
              <>
                {/* Show if user is not logged in */}
                <div className="ml-5 xl:ml-20 flex items-center gap-2 lg:gap-4">
                  {/* Signin button */}
                  <Link href={"/login"}>
                    <Button
                      variant={"default"}
                      className="rounded-full px-12 hover:rounded-md"
                    >
                      Signin
                    </Button>
                  </Link>

                  {/* Github Icon */}
                  <Link
                    href="https://github.com/diwashbhattarai999/NextStarter"
                    target="_blank"
                  >
                    <Button variant={"ghost"} size={"icon"}>
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
