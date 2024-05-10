import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "ne"] as const;

export const pathnames = {
  "/": "/",
  "/about": "/about",
  "/blog": "/blog",
  "/contact": "/contact",
  "/new-verification": "/new-verification",
  "/login": "/login",
  "/register": "/register",
  "/reset": "/reset",
  "/new-password": "/new-password",
  "/not-found": "/not-found",
  "/error": "/error",
} as Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
