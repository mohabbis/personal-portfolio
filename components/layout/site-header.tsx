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
  const isContact = currentPath === "/contact";

  return (
    <header className="sticky top-0 z-30 border-b border-white/[0.08] bg-background/72 backdrop-blur-2xl shadow-[0_1px_0_hsl(var(--border)/0.35)]">
      <Container className="py-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            className="flex items-center gap-2 text-foreground"
          >
            <span className="text-base leading-none">〽️</span>
            <span className="font-mono text-sm font-semibold tracking-[0.18em] uppercase">MUHA</span>
          </Link>

          <nav className="flex flex-wrap gap-2 sm:justify-end">
            {navigation.map((item) => {
              const isActive = currentPath === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm transition-colors duration-200",
                    isActive
                      ? "bg-foreground text-background shadow-soft"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <ButtonLink
            href="/contact"
            variant="secondary"
            aria-current={isContact ? "page" : undefined}
            className={cn(
              "hidden sm:inline-flex",
              isContact && "bg-foreground text-background hover:bg-foreground/90"
            )}
          >
            Contact
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
