import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

type SiteFrameProps = {
  currentPath: string;
  children: ReactNode;
};

export function SiteFrame({ currentPath, children }: SiteFrameProps) {
  return (
    <>
      <SiteHeader currentPath={currentPath} />
      <main className="overflow-hidden pt-6 pb-20 sm:pt-0 sm:pb-0">{children}</main>
      <SiteFooter />
    </>
  );
}
