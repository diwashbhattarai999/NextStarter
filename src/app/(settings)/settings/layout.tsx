import React from "react";
import Image from "next/image";
import Link from "next/link";

import { SETTINGS_OPTIONS } from "@/constants";
import { auth } from "@/auth";

import MaxWidthContainer from "@/components/ui/max-width-container";
import Footer from "@/components/sections/footer/footer";
import Navbar from "@/components/sections/navbar/nav";

export default async function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="my-8 flex-1">
        <MaxWidthContainer className="max-w-[1350px]">
          <div className="flex flex-col justify-center gap-10">
            {/* Header - Image & Name */}
            <div className="flex gap-4 items-center">
              {/* Profile Image */}
              <Image
                src={user?.image || "/images/default-profile.png"}
                alt="profile"
                width={60}
                height={60}
                priority
                className="rounded-full cursor-pointer group-hover:opacity-70 object-cover"
              />

              {/* Profile Info */}
              <div>
                <div className="flex items-center gap-1">
                  {/* Profile Name */}
                  <span className="text-2xl">{user?.name} </span>

                  {/* Profile username */}
                  <span className="text-xl text-muted-foreground">
                    (@{user?.email?.split("@")[0]})
                  </span>
                </div>
                <div className="text-muted-foreground">
                  Update your username and manage your account
                </div>
              </div>
            </div>

            <div className="hidden md:flex md:gap-4">
              {/* Options */}
              <div className="w-full md:basis-[25%] flex flex-col">
                {SETTINGS_OPTIONS.map((option) => {
                  return (
                    <Link key={option.label} href={option.link}>
                      <div className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-muted transition-all">
                        <option.icon className="text-muted-foreground h-4 w-4 -mt-[2px]" />
                        <span className="text-secondary-foreground">
                          {option.label}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="w-full md:basis-[75%]">{children}</div>
            </div>
          </div>
        </MaxWidthContainer>
      </main>
      <Footer />
    </div>
  );
}
