import Link from "next/link";

import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  currentPath: string;
};

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-foreground/[0.06] bg-background/72 backdrop-blur-2xl">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            className="flex shrink-0 items-center gap-2.5 text-foreground"
          >
            <span className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-full border border-accent/30 bg-accent/[0.04]">
              <span className="font-mono text-[11px] font-medium text-accent">M</span>
            </span>
            <span className="font-mono text-[11px] font-medium tracking-[0.18em] text-foreground">MUHA</span>
          </Link>

          <nav className="flex items-center gap-5 overflow-x-auto sm:gap-7">
            {navigation.map((item) => {
              const isActive = currentPath === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "shrink-0 border-b pb-1 text-[13px] font-light tracking-[0.01em] transition-colors duration-200",
                    isActive
                      ? "border-foreground/35 text-foreground"
                      : "border-transparent text-foreground/55 hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
}
