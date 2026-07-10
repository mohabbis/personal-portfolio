import Link from "next/link";

import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";

const footerLinks = navigation;
const emailHref = `mailto:${siteConfig.email}?subject=Project%20%2F%20Role%20%2F%20Collaboration%20Inquiry`;

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/[0.06] bg-background py-8 sm:py-10">
      <Container>
        <div className="flex flex-col gap-6 text-xs font-light text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-foreground">MUHA</p>
            <p className="inline-flex items-center gap-2">
              2026 Muhammad Rafiq · {siteConfig.location}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </Link>
            ))}
            <Link href="/photography" className="transition-colors hover:text-foreground">
              Photography
            </Link>
            <Link href={emailHref} className="transition-colors hover:text-foreground">
              Email
            </Link>
            <Link
              href={siteConfig.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </Link>
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
