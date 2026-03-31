import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tb-mixology-site.vercel.app";

  const pages = [
    "",
    "/services",
    "/services/bartending",
    "/services/classes",
    "/services/batched",
    "/services/glassware",
    "/services/caviar",
    "/drinks",
    "/events",
    "/reviews",
    "/about",
    "/faq",
    "/contact",
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path === "/services" ? 0.9 : 0.8,
  }));
}
