import type { ReactNode } from "react";
import type { Metadata } from "next";

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
  icons: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon-96x96.png?v=20260511",
      sizes: "96x96"
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg?v=20260511"
    },
    {
      rel: "shortcut icon",
      href: "/favicon.ico?v=20260511"
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png?v=20260511"
    }
  ],
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
        <SpeedInsights />
      </body>
    </html>
  );
}
