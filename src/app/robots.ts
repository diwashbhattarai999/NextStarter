import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/privacy"],
      },
    ],
    sitemap: BASE_URL
      ? `${BASE_URL}/sitemap.xml`
      : `http://localhost:3000/sitemap.xml`,
  };
}
