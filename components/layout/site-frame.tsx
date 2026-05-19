import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
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
      <main className="overflow-hidden pt-6 pb-28 sm:pt-0 sm:pb-0">{children}</main>
      <RGBStripe />
      <PhotoBanner />
      <SiteFooter />
    </>
  );
}
