import Link from "next/link";

import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";

const footerChips = [
  { label: "WARM", className: "border-accent/35 bg-accent/[0.07] text-accent" },
  { label: "LIVE", className: "border-emerald-400/25 bg-emerald-400/[0.05] text-emerald-300/75", live: true },
  { label: "SYSTEM", className: "border-white/[0.12] bg-white/[0.03] text-foreground/50" },
  { label: "ARCHIVE", className: "border-white/[0.08] bg-transparent text-foreground/30" },
  { label: "FIELD NOTES", className: "border-accent/20 bg-transparent text-accent/55" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-background py-12">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div className="space-y-3">
            <p className="font-display text-2xl text-foreground sm:text-3xl">
              Let's build something thoughtful.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link
              href={`mailto:${siteConfig.email}`}
              className="transition-colors hover:text-foreground"
            >
              Email
            </Link>

            <Link
              href={siteConfig.linkedIn}
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {footerChips.map((chip) => (
            <span
              key={chip.label}
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.16em] ${chip.className}`}
            >
              {chip.live && (
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/75 motion-safe:animate-pulse" />
              )}
              {chip.label}
            </span>
          ))}
        </div>
      </Container>
    </footer>
  );
}
