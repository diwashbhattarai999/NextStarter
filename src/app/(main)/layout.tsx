import React from "react";

import Navbar from "@/components/sections/navbar/nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="my-8">{children}</main>
    </>
  );
}
