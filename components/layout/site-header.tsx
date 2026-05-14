import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { SiteHeaderAuth } from "@/components/layout/site-header-auth";

type SiteHeaderProps = {
  currentPath: string;
};

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/82 backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="flex items-center gap-3 text-base font-semibold tracking-[0.16em] text-foreground uppercase">
            <span>{siteConfig.name}</span>
          </Link>

          <nav className="flex flex-wrap gap-2 lg:flex-1 lg:justify-center">
            {navigation.map((item) => {
              const isActive = currentPath === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm transition-colors duration-200",
                    isActive
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <ButtonLink href="/contact" variant="secondary" className="hidden sm:inline-flex">
              Contact
            </ButtonLink>
            <SiteHeaderAuth />
          </div>
        </div>
      </Container>
    </header>
  );
}
