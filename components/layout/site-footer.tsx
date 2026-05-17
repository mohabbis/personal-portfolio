import Link from "next/link";

import { navigation } from "@/data/navigation";
import { siteConfig, socialLinks } from "@/data/site";
import { Container } from "@/components/ui/container";
import { DolphinEasterEgg } from "@/components/ui/dolphin-easter-egg";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border pb-[env(safe-area-inset-bottom)]">
      <Container className="grid gap-8 py-10 text-sm text-muted-foreground lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="space-y-3">
          <p className="font-medium text-foreground">{siteConfig.name}</p>
          <p className="max-w-xl">
            Portfolio of products, strategy work, and photography.
          </p>
          <p className="flex items-center gap-2 text-muted-foreground">
            <span>Built with Next.js.</span>
            <DolphinEasterEgg />
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="relative py-2 transition-colors hover:text-foreground after:absolute after:bottom-[1px] after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-1 focus-visible:ring-offset-background rounded-sm">
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
                className="relative py-2 transition-colors hover:text-foreground after:absolute after:bottom-[1px] after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-1 focus-visible:ring-offset-background rounded-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="lg:col-span-2">© {year} {siteConfig.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
