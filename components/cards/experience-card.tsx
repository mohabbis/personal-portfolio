"use client";

import { motion } from "motion/react";
import { Car, Home, Globe } from "lucide-react";

import type { ExperienceItem } from "@/lib/types";
import { FallbackImage } from "@/components/ui/fallback-image";
import { Tag } from "@/components/ui/tag";

const LOGO_ICONS: Record<string, React.ReactNode> = {
  "Fancy Car Wash": <Car className="h-5 w-5 text-accent" />,
  "MuHome": <Home className="h-5 w-5 text-accent" />,
  "muharafiq.com": <Globe className="h-5 w-5 text-accent" />,
  "University of Michigan": <span className="text-lg leading-none">〽️</span>,
};

const spring = { type: "spring" as const, stiffness: 350, damping: 26 };

export function ExperienceCard({
  title,
  organization,
  location,
  period,
  logoLabel,
  logoImage,
  summary,
  bullets,
  tags
}: ExperienceItem) {
  return (
    <motion.article
      className="group rounded-[1.5rem] border border-white/10 bg-card/72 p-5 shadow-[0_24px_80px_hsl(var(--background)/0.35)] transition-[border-color] duration-200 ease-gentle hover:border-white/22 sm:p-6"
      whileHover={{ y: -4 }}
      transition={spring}
    >
      <div className="flex items-start gap-4">
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/12 bg-background/80 shadow-soft">
          {logoImage ? (
            <FallbackImage
              src={logoImage}
              alt={`${organization} logo`}
              fill
              fallbackLabel={logoLabel}
              sizes="56px"
              imageClassName="object-contain p-2"
            />
          ) : LOGO_ICONS[organization] ? (
            LOGO_ICONS[organization]
          ) : (
            <span className="px-2 text-center text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-foreground/82">
              {logoLabel}
            </span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{organization}</p>
              <h3 className="font-display text-2xl text-foreground">{title}</h3>
            </div>
            <p className="shrink-0 text-xs uppercase tracking-[0.18em] text-muted-foreground">{period}</p>
          </div>

          <p className="mt-2 text-sm text-muted-foreground">{location}</p>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <p className="text-sm leading-7 text-muted-foreground">{summary}</p>

        <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
