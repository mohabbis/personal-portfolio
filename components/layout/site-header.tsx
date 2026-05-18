"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

import { ButtonLink } from "@/components/ui/button-link";
import { navigation } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { ScrollProgress } from "@/components/ui/scroll-progress";

type SiteHeaderProps = {
  currentPath: string;
};

function TerminalMark() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-border/90 bg-card/80 text-[0.82rem] font-semibold tracking-[-0.08em] text-foreground shadow-soft transition-colors duration-200 group-hover:border-foreground/35 group-hover:bg-muted/70">
      <span>{">_"}</span>
    </span>
  );
}

function isActiveHref(currentPath: string, href: string) {
  if (href === "/") {
    return currentPath === "/";
  }

  if (href.startsWith("/#")) {
    return false;
  }

  return currentPath === href || currentPath.startsWith(href + "/");
}

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const isContact = currentPath === "/contact";

  return (
    <header className="relative sticky top-0 z-30 border-b border-border/70 bg-background/86 pt-[env(safe-area-inset-top)] backdrop-blur-xl">
      <Container className="py-3 sm:py-4">
        <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <Link
            href="/"
            className="group flex w-fit items-center gap-3 text-sm font-semibold text-foreground"
            aria-label="Muha home"
          >
            <TerminalMark />
            <span className="tracking-[0.12em] uppercase">Muha</span>
          </Link>

          <nav
            className="flex w-fit flex-wrap gap-1 rounded-full border border-border/80 bg-card/76 p-1 shadow-soft backdrop-blur-xl sm:justify-center"
            aria-label="Primary navigation"
            onMouseLeave={() => setHoveredHref(null)}
          >
            {navigation.map((item) => {
              const isActive = isActiveHref(currentPath, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onMouseEnter={() => setHoveredHref(item.href)}
                  className={cn(
                    "relative inline-flex min-h-[40px] items-center rounded-full px-3.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-1 focus-visible:ring-offset-background sm:px-4",
                    isActive
                      ? "text-background"
                      : hoveredHref === item.href
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-foreground"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {!isActive && hoveredHref === item.href && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 rounded-full bg-muted/70"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex sm:justify-end">
            <ButtonLink
              href="/contact"
              variant="secondary"
              aria-current={isContact ? "page" : undefined}
              className={cn(
                "hidden sm:inline-flex",
                isContact && "bg-foreground text-background hover:bg-foreground/90"
              )}
            >
              Let us build something
            </ButtonLink>
          </div>
        </div>
      </Container>
      <ScrollProgress />
    </header>
  );
}
