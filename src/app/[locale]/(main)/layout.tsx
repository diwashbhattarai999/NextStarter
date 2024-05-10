import React from "react";
import { getLocale } from "next-intl/server";

import Footer from "@/components/sections/footer/footer";
import Navbar from "@/components/sections/navbar/nav";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar locale={locale} />
      <main className="my-8 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
