import type { ReactNode } from "react";
import type { Metadata } from "next";

import { TooltipProvider } from "@/components/ui/tooltip";
import { NightMode } from "@/components/ui/night-mode";
import { siteConfig } from "@/data/site";
import "./globals.css";
import "./theme-fixes.css";

const publishedTime = "2026-06-03T00:00:00.000Z";
const authorName = "Muhammad Rafiq";
const siteUrl = "https://www.muharafiq.com";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: authorName, url: siteUrl }],
  creator: authorName,
  publisher: authorName,
  keywords: [
    "Muhammad Rafiq",
    "portfolio",
    "Next.js",
    "strategy",
    "design systems",
    "photography",
    "creative technology"
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "article",
    publishedTime,
    authors: [authorName]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@muharafiq"
  },
  other: {
    author: authorName,
    "article:author": authorName,
    "article:published_time": publishedTime,
    "article:modified_time": publishedTime
  },
  manifest: "/site.webmanifest?v=20260511"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": `${siteUrl}/#person`,
                  name: authorName,
                  url: siteUrl,
                  email: siteConfig.email,
                  jobTitle: "Designer, Strategist, and Builder",
                  description: siteConfig.description,
                  sameAs: [siteConfig.linkedIn, siteConfig.github]
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  name: siteConfig.name,
                  url: siteUrl,
                  description: siteConfig.description,
                  author: { "@id": `${siteUrl}/#person` }
                }
              ]
            })
          }}
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y3865CHRM0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Y3865CHRM0');
`
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased" suppressHydrationWarning>
        <TooltipProvider>{children}</TooltipProvider>
        <NightMode />
      </body>
    </html>
  );
}
