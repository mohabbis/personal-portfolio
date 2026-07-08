import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Muhammad Rafiq portfolio"
};

/**
 * Next.js does not deep-merge `openGraph`/`twitter` between the root layout
 * and a page — defining either at the page level replaces the whole object,
 * dropping the inherited image and card type. This rebuilds the full shape
 * per page so every route gets its own title/description/url in shares
 * without losing the preview image.
 */
export function pageMetadata({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@muharafiq",
      images: ["/opengraph-image"]
    }
  };
}
