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
      <main className="overflow-hidden">{children}</main>
      <SiteFooter />
    </>
  );
}
