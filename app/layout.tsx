import type { ReactNode } from "react";
import type { Metadata } from "next";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NightMode } from "@/components/ui/night-mode";
import { AsigEasterEgg } from "@/components/ui/asig-easter-egg";
import { siteConfig } from "@/data/site";
import "./globals.css";
import "./theme-fixes.css";

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
        <AsigEasterEgg />
        <SpeedInsights />
      </body>
    </html>
  );
}
