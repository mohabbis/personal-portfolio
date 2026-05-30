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
    <footer className="border-t border-foreground/[0.06] bg-background py-8 sm:py-10">
      <Container>
        <div className="flex flex-col gap-6 text-xs font-light text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-foreground">MUHA</p>
            <p>2026 Muhammad Rafiq · {siteConfig.location}</p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </Link>
            ))}
            <Link href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-foreground">
              Email
            </Link>
            <Link href={siteConfig.linkedIn} className="transition-colors hover:text-foreground">
              LinkedIn
            </Link>
            <Link href={siteConfig.github} className="transition-colors hover:text-foreground">
              GitHub
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
