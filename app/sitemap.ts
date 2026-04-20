import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { SITE } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;

  const staticRoutes = ["/", "/services", "/about", "/case-studies", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
    }),
  );

  const studyRoutes = caseStudies.map((s) => ({
    url: `${base}/case-studies/${s.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...studyRoutes];
}
