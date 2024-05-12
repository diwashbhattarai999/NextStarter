import { Metadata } from "next";

import { env } from "@/lib/env.mjs";

const BASE_URL = env.NEXT_PUBLIC_BASE_URL;

export const siteConfig: Metadata = {
  title: {
    template: "%s | DB-NextStarter",
    default:
      "DB-NextStarter | Your Next.js Boilerplate with Authentication and more...",
  },
  metadataBase: BASE_URL ? new URL(BASE_URL) : new URL("http://localhost:3000"),
  icons: [
    { rel: "icon", url: "/favicon.png" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],

  alternates: {
    canonical: "./",
  },
  authors: [{ name: "Diwash Bhattarai", url: "https://diwashb.com.np" }],
  description:
    "DB-NextStarter is a Next.js boilerplate for kickstarting secure and modern web applications. Featuring authentication with NextAuth v5, Tailwind CSS for styling, and more.",

  openGraph: {
    title: "DB-NextStarter - Next.js Boilerplate with Authentication",
    description:
      "DB-NextStarter is a Next.js boilerplate for kickstarting secure and modern web applications. Featuring authentication with NextAuth v5, Tailwind CSS for styling, and more.",
    images: [
      {
        url: "/DB-NextStarter.svg",
        alt: "DB-NextStarter",
        width: 1200,
        height: 630,
      },
    ],
  },
  keywords: [
    "next.js",
    "next-auth",
    "tailwind css",
    "eslint",
    "prettier",
    "commitlint",
    "husky",
    "github actions",
    "authentication",
    "boilerplate",
    "template",
  ],
} as const;
