import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

type SiteFrameProps = {
  currentPath: string;
  children: ReactNode;
};

export function SiteFrame({ currentPath, children }: SiteFrameProps) {
  const mainSpacing = currentPath === "/photography" ? "pt-6 pb-0 sm:pt-0" : "pt-6 pb-20 sm:pt-0 sm:pb-0";

  return (
    <>
      <SiteHeader currentPath={currentPath} />
      <main className={`overflow-hidden ${mainSpacing}`}>{children}</main>
      <SiteFooter />
    </>
  );
}
