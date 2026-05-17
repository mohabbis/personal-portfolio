import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageTransition } from "@/components/ui/page-transition";
import { RGBStripe } from "@/components/ui/rgb-stripe";
import { PhotoBanner } from "@/components/ui/photo-banner";

type SiteFrameProps = {
  currentPath: string;
  children: ReactNode;
};

export function SiteFrame({ currentPath, children }: SiteFrameProps) {
  return (
    <>
      <SiteHeader currentPath={currentPath} />
      <main className="overflow-hidden">
        <PageTransition>{children}</PageTransition>
      </main>
      <RGBStripe />
      <PhotoBanner />
      <SiteFooter />
    </>
  );
}
