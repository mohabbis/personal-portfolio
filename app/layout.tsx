import type { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NightMode } from "@/components/ui/night-mode";
import { AsigEasterEgg } from "@/components/ui/asig-easter-egg";
import { siteConfig } from "@/data/site";
import "./globals.css";
import "./theme-fixes.css";

const GTM_ID = "GTM-MJTD8TPC";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
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
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description
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
        <Script id="google-tag-manager" strategy="beforeInteractive" src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} />
      </head>
      <body className="bg-background text-foreground antialiased" suppressHydrationWarning>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <TooltipProvider>{children}</TooltipProvider>
        <NightMode />
        <AsigEasterEgg />
        <SpeedInsights />
      </body>
    </html>
  );
}
