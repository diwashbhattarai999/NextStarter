import { MetadataRoute } from "next";

import { getBaseUrl } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/privacy"],
      },
    ],
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  };
}
