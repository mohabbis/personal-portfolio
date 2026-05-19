import Image from "next/image";
import type { ExperienceItem } from "@/lib/types";
import { FallbackImage } from "@/components/ui/fallback-image";
import { Tag } from "@/components/ui/tag";

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
    <article className="group rounded-[1.75rem] border border-white/[0.08] bg-card/72 p-4 shadow-[0_18px_56px_hsl(var(--background)/0.32)] transition-all duration-200 ease-gentle hover:-translate-y-0.5 hover:border-white/[0.16] sm:p-5">
      <div className="flex items-start gap-4">
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.10] bg-background/70 shadow-soft">
          {logoImage ? (
            <div className="absolute inset-1.5 overflow-hidden rounded-lg">
              <Image
                src={logoImage}
                alt={`${organization} logo`}
                fill
                sizes="44px"
                className="object-contain"
                unoptimized
              />
            </div>
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

      <div className="mt-4 space-y-3 sm:space-y-4">
        <p className="text-sm leading-6 text-muted-foreground sm:leading-7">{summary}</p>

        <ul className="space-y-1.5 text-sm leading-6 text-muted-foreground">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/80" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}
