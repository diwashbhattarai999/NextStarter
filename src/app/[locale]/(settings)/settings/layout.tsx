import React from "react";
import Image from "next/image";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { getLocale } from "next-intl/server";
import { extractRouterConfig } from "uploadthing/server";

import { auth } from "@/auth";

import MaxWidthContainer from "@/components/ui/max-width-container";
import Navbar from "@/components/sections/navbar/nav";
import SettingOptions from "@/components/sections/settings/setting-options";
import { ourFileRouter } from "@/app/api/uploadthing/core";

export default async function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const user = session?.user;
  const locale = await getLocale();

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* UploadThing SSR Plugin: To add SSR hydration and avoid that loading state */}
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />

      {/* Header */}
      <Navbar locale={locale} />

      {/* Body */}
      <main className="my-8 flex-1">
        <MaxWidthContainer className="max-w-[1350px]">
          <div className="flex flex-col justify-center gap-10">
            {/* Header - Image & Name */}
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
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
                <div className="flex flex-row items-center gap-1">
                  {/* Profile Name */}
                  <span className="text-2xl">{user?.name} </span>

                  {/* Profile username */}
                  <span className="text-xl text-muted-foreground">
                    ({user?.email?.split("@")[0]})
                  </span>
                </div>
                <div className="text-muted-foreground">
                  Update your username and manage your account
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16 xl:gap-20">
              <div className="w-full md:basis-[25%] flex flex-col gap-1">
                <SettingOptions />
              </div>

              <div className="w-full md:basis-[75%]">{children}</div>
            </div>
          </div>
        </MaxWidthContainer>
      </main>

      {/* Footer */}
      <div className="border-t border-t-border/70 flex items-center justify-center text-center py-4 text-xs md:text-sm max-sm:flex-col max-sm:gap-2">
        <p>
          Copyright &copy; 2024 Diwash Bhattarai. All Rights Reserved.
          Handigaun, Kathmandu
        </p>
      </div>
    </div>
  );
}
