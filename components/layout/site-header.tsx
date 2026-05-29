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
    <header className="sticky top-0 z-30 border-b border-white/[0.08] bg-background/80 backdrop-blur-2xl">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            className="flex shrink-0 items-center gap-2.5 text-foreground"
          >
            {/* Warm (default): minimal M monogram + MUHA */}
            <span className="[.night-race_&]:hidden [.bright-mode_&]:hidden inline-flex h-[26px] w-[26px] items-center justify-center rounded-full border border-accent/35 bg-accent/[0.06] select-none pointer-events-none">
              <svg viewBox="0 0 13 13" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                <path
                  d="M2 10.5V2.5L6.5 7.5L11 2.5V10.5"
                  stroke="hsl(var(--accent))"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="[.night-race_&]:hidden [.bright-mode_&]:hidden font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-foreground">MUHA</span>

            {/* Bright mode: >_ badge + MUHA */}
            <span className="hidden [.bright-mode_&]:inline [.night-race_&]:hidden font-mono text-[10px] font-bold leading-none bg-foreground text-background px-1.5 py-1 rounded select-none">{">"}_</span>
            <span className="hidden [.bright-mode_&]:inline [.night-race_&]:hidden font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-foreground">MUHA</span>

            {/* Night race: 〽️ + UHA in yellow */}
            <span className="hidden [.night-race_&]:inline text-base leading-none select-none">〽️</span>
            <span className="hidden [.night-race_&]:inline font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-yellow-400">UHA</span>
          </Link>

          <nav className="flex items-center gap-1 overflow-x-auto">
            {navigation.map((item) => {
              const isActive = currentPath === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "shrink-0 rounded-full px-3 py-1 text-sm transition-colors duration-200 sm:px-3.5",
                    isActive
                      ? "bg-foreground text-background [.bright-mode_&]:bg-accent [.bright-mode_&]:text-accent-foreground"
                      : "text-foreground/60 hover:bg-muted/60 hover:text-foreground"
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
