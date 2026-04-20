import type { Metadata } from "next";

export const SITE = {
  name: "Cairnity",
  url: "https://cairnity.com",
  tagline: "AI that earns its place in your business.",
  description:
    "Cairnity helps small and mid-sized businesses understand, adopt, and implement AI — through workshops, audits, and custom builds led by experienced operators.",
  ogImage: "/opengraph-image",
};

export function buildMetadata(input: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const title = input.title ? `${input.title} — ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
  const description = input.description ?? SITE.description;
  const url = input.path ? `${SITE.url}${input.path}` : SITE.url;

  return {
    title,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: SITE.name,
      images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE.ogImage],
    },
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    },
  };
}
