import type { ReactNode } from "react";
import type { Metadata } from "next";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { MotionConfig } from "motion/react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RaceIntro } from "@/components/ui/race-intro";
import { PageTransitionWrapper } from "@/components/ui/page-transition-wrapper";
import { TeamRadio } from "@/components/ui/team-radio";
import { BackToTop } from "@/components/ui/back-to-top";
import { ClickSparks } from "@/components/ui/click-sparks";
import { CursorLabel } from "@/components/ui/cursor-label";
import { PitBoard } from "@/components/ui/pit-board";
import { NightMode } from "@/components/ui/night-mode";
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
        <RaceIntro />
        <MotionConfig reducedMotion="user">
          <TooltipProvider>
            <PageTransitionWrapper>{children}</PageTransitionWrapper>
          </TooltipProvider>
        </MotionConfig>
        <TeamRadio />
        <BackToTop />
        <ClickSparks />
        <CursorLabel />
        <PitBoard />
        <NightMode />
        <SpeedInsights />
      </body>
    </html>
  );
}
// deployed at 1778888965
