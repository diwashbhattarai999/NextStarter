import React from "react";

import Footer from "@/components/sections/footer/footer";
import Navbar from "@/components/sections/navbar/nav";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="my-8 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
