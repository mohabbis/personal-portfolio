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
            {/* Warm (default): minimal M monogram + MUHA */}
            <span className="[.night-race_&]:hidden [.bright-mode_&]:hidden inline-flex h-[26px] w-[26px] items-center justify-center rounded-full border border-accent/30 bg-accent/[0.04] select-none pointer-events-none">
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
            <span className="[.night-race_&]:hidden [.bright-mode_&]:hidden font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-foreground">MUHA</span>

            {/* Bright mode: >_ badge + MUHA */}
            <span className="hidden [.bright-mode_&]:inline [.night-race_&]:hidden font-mono text-[10px] font-bold leading-none bg-foreground text-background px-1.5 py-1 rounded select-none">{">"}_</span>
            <span className="hidden [.bright-mode_&]:inline [.night-race_&]:hidden font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-foreground">MUHA</span>

            {/* Night race: 〽️ + UHA in yellow */}
            <span className="hidden [.night-race_&]:inline text-base leading-none select-none">〽️</span>
            <span className="hidden [.night-race_&]:inline font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-yellow-400">UHA</span>
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
