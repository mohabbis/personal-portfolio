import type { ReactNode } from "react";
import type { Metadata } from "next";

import { TooltipProvider } from "@/components/ui/tooltip";
import { NightMode } from "@/components/ui/night-mode";
import { RaceIntro } from "@/components/ui/race-intro";
import { PitBoard } from "@/components/ui/pit-board";
import { TeamRadio } from "@/components/ui/team-radio";
import { AsigEasterEgg } from "@/components/ui/asig-easter-egg";
import { siteConfig } from "@/data/site";
import "./globals.css";
import "./theme-fixes.css";

const publishedTime = "2026-06-03T00:00:00.000Z";
const modifiedTime = "2026-06-12T00:00:00.000Z";
const authorName = "Muhammad Rafiq";
const siteUrl = "https://www.muharafiq.com";
const metadataBase = new URL(siteUrl);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: authorName, url: siteUrl }],
  creator: authorName,
  publisher: authorName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  keywords: [
    "Muhammad Rafiq",
    "Muha Rafiq",
    "portfolio",
    "strategy",
    "product design",
    "web design",
    "design systems",
    "photography",
    "creative technology",
    "smart home"
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteUrl,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Muhammad Rafiq portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@muharafiq",
    images: ["/opengraph-image"]
  },
  other: {
    author: authorName,
    "article:author": authorName,
    "article:published_time": publishedTime,
    "article:modified_time": modifiedTime
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
                  author: { "@id": `${siteUrl}/#person` },
                  inLanguage: "en-US",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: `${siteUrl}/portfolio?query={search_term_string}`,
                    "query-input": "required name=search_term_string"
                  }
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
        <RaceIntro />
        <PitBoard />
        <TeamRadio />
        <AsigEasterEgg />
      </body>
    </html>
  );
}
