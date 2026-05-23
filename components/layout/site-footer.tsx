import Link from "next/link";

import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-card/18">
      <Container className="grid grid-cols-3 items-center py-6 text-sm text-muted-foreground">
        <Link
          href={`mailto:${siteConfig.email}`}
          className="transition-colors hover:text-foreground"
        >
          Email
        </Link>

        {/* day/warm theme only */}
        <span className="hidden justify-center text-xl select-none [html:not(.night-race)_&]:flex">
          <span className="animate-idle-bounce cursor-default">🐒</span>
        </span>

        <p className="text-right">© {year} {siteConfig.name}.</p>
      </Container>
    </footer>
  );
}
