import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  currentPath: string;
};

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/82 backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-foreground uppercase">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-xs shadow-soft">
                {siteConfig.shortName}
              </span>
              <span>{siteConfig.name}</span>
            </Link>

            <span className="inline-flex w-fit items-center rounded-full border border-border bg-card/80 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              {siteConfig.availability}
            </span>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <nav className="flex flex-wrap gap-2 lg:justify-end">
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

            <ButtonLink href="/contact" variant="secondary" className="w-fit">
              Contact Muhammad
            </ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}
