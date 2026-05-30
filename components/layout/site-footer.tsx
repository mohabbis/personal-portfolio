import Link from "next/link";

import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";

const footerLinks = [
  { label: "Projects", href: "/portfolio" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/[0.06] bg-background py-12 sm:py-14">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div className="space-y-3">
            <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-foreground">MUHA</p>
            <p className="max-w-sm font-display text-2xl leading-tight tracking-[-0.03em] text-foreground sm:text-3xl">
              {siteConfig.title}
            </p>
            <p className="text-sm font-light text-muted-foreground">{siteConfig.location}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-light text-muted-foreground">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-foreground/[0.06] pt-6 text-xs font-light text-muted-foreground sm:flex-row">
          <p>2026 Muhammad Rafiq</p>
          <div className="flex gap-5">
            <Link href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-foreground">
              Email
            </Link>
            <Link href={siteConfig.linkedIn} className="transition-colors hover:text-foreground">
              LinkedIn
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
