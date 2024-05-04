import React from "react";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

import { siteConfig } from "@/configs";

import { cn } from "@/lib/utils";

import "@/styles/globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = siteConfig;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased flex flex-col min-h-screen bg-background text-foreground",
          nunito.className
        )}
      >
        {children}
        <Toaster richColors={true} position="top-center" />
        <NextTopLoader showSpinner={false} />
      </body>
    </html>
  );
}
