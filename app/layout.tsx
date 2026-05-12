import type { ReactNode } from "react";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { siteConfig } from "@/data/site";
import "./globals.css";

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
    "front-end developer",
    "smart home",
    "product design",
    "software engineering"
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
  icons: {
    icon: [
      {
        url: "/favicon-96x96.png?v=20260511",
        sizes: "96x96",
        type: "image/png"
      },
      {
        url: "/favicon.svg?v=20260511",
        type: "image/svg+xml"
      },
      {
        url: "/favicon.ico?v=20260511"
      }
    ],
    apple: {
      url: "/apple-touch-icon.png?v=20260511",
      sizes: "180x180",
      type: "image/png"
    }
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
      <body className="bg-background text-foreground antialiased" suppressHydrationWarning>
        <TooltipProvider>{children}</TooltipProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
