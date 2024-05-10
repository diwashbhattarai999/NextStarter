import NextAuth from "next-auth";
import createMiddleware from "next-intl/middleware";

import { localePrefix, locales, pathnames } from "@/localization/config";
import authConfig from "@/auth.config";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

const intlMiddelware = createMiddleware({
  defaultLocale: "en",
  locales,
  pathnames,
  localePrefix,
});

export default auth((req) => {
  // get current url
  const { nextUrl } = req;

  // check if logged in
  const isLoggedIn = !!req.auth;

  // find the route is apiAuth & if apiAuth do nothing
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  if (isApiAuthRoute) return;

  // check if the route is public route
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicRoutes
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );

  const isPublicRoute = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicRoute) {
    return intlMiddelware(req);
  }

  // check if the route is auth route
  const authPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${authRoutes
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );

  const isAuthRoute = authPathnameRegex.test(req.nextUrl.pathname);

  // if auth and loggedIn redirect to default redirect page e.g. "/"
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return intlMiddelware(req);
  }

  // if not logged in and not public route , redirect to login ( with callback if available )
  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return Response.redirect(
      new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
    );
  }

  // check if the route is settings
  const isSettings = locales.some(
    (locale) =>
      nextUrl.pathname === `/${locale}/settings` ||
      nextUrl.pathname === "/settings"
  );

  // redirect to /settings/general if logged in and /${locale}/settings
  if (isSettings) {
    if (isLoggedIn) {
      return Response.redirect(new URL(`/settings/general`, nextUrl));
    }
  }

  return intlMiddelware(req);
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
