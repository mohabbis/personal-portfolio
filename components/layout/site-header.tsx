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
      <Container className="py-3.5">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            className="flex items-center gap-2 text-foreground"
          >
            {/* Warm (default): dancing corgi + MUHA */}
            <img src="/images/dancing-corgi.svg" alt="" aria-hidden="true" className="[.night-race_&]:hidden [.bright-mode_&]:hidden h-6 w-6 select-none pointer-events-none" />
            <span className="[.night-race_&]:hidden [.bright-mode_&]:hidden font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-foreground">MUHA</span>

            {/* Bright mode: >_ badge + MUHA + Muhammad Rafiq */}
            <span className="hidden [.bright-mode_&]:inline [.night-race_&]:hidden font-mono text-[10px] font-bold leading-none bg-foreground text-background px-1.5 py-1 rounded select-none">{">"}_</span>
            <span className="hidden [.bright-mode_&]:inline [.night-race_&]:hidden font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-foreground">MUHA</span>
            <span className="hidden [.bright-mode_&]:inline [.night-race_&]:hidden font-mono text-[10px] text-muted-foreground tracking-wide select-none">/ Muhammad Rafiq</span>

            {/* Night race: 〽️ + UHA in yellow */}
            <span className="hidden [.night-race_&]:inline text-base leading-none select-none">〽️</span>
            <span className="hidden [.night-race_&]:inline font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-yellow-400">UHA</span>
          </Link>

          <nav className="flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = currentPath === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-sm transition-colors duration-200",
                    isActive
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
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
