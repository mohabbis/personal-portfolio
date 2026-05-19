import Link from "next/link";

import { navigation } from "@/data/navigation";
import { siteConfig, socialLinks } from "@/data/site";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-card/18">
      <Container className="grid gap-8 py-10 text-sm text-muted-foreground lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="space-y-3">
          <p className="font-medium text-foreground">{siteConfig.name}</p>
          <p className="max-w-xl">{siteConfig.title}</p>
          <p>{siteConfig.availability}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="lg:col-span-2">© {year} {siteConfig.name}. Built with Next.js.</p>
      </Container>
    </footer>
  );
}
