import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL || "https://localhost:3000",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
