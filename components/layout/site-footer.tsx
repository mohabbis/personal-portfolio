import Link from "next/link";

import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-background py-12">
      <Container className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
        <div className="space-y-3">
          <p className="font-display text-2xl text-foreground sm:text-3xl">
            Let’s build something thoughtful.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-foreground"
          >
            Email
          </Link>

          <Link
            href={siteConfig.linkedIn}
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </Link>
        </div>
      </Container>
    </footer>
  );
}
