import Link from "next/link";

import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-card/18">
      <Container className="flex items-center justify-between py-6 text-sm text-muted-foreground">
        <Link
          href={`mailto:${siteConfig.email}`}
          className="transition-colors hover:text-foreground"
        >
          Email
        </Link>
        <p>© {year} {siteConfig.name}.</p>
      </Container>
    </footer>
  );
}
