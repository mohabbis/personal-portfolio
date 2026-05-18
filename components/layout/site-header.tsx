"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

import { ButtonLink } from "@/components/ui/button-link";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
type SiteHeaderProps = {
  currentPath: string;
};

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const isContact = currentPath === "/contact";

  return (
    <header className="relative sticky top-0 z-30 border-b border-border/80 bg-background/82 backdrop-blur-xl pt-[env(safe-area-inset-top)]">
      <Container className="py-3 sm:py-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-foreground uppercase">
            <span>{siteConfig.name}</span>
          </Link>

          <nav
            className="flex flex-wrap gap-2 sm:justify-end"
            onMouseLeave={() => setHoveredHref(null)}
          >
            {navigation.map((item) => {
              const isActive = currentPath === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredHref(item.href)}
                  className={cn(
                    "relative inline-flex min-h-[44px] items-center rounded-full px-3 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-1 focus-visible:ring-offset-background",
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
                      className="absolute inset-0 rounded-full bg-muted/60"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
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
