import type { ExperienceItem } from "@/lib/types";
import { Tag } from "@/components/ui/tag";

export function ExperienceCard({
  title,
  organization,
  location,
  period,
  summary,
  bullets,
  tags
}: ExperienceItem) {
  return (
    <article className="rounded-[1.75rem] border border-border bg-card p-6 shadow-soft sm:p-8">
      <div className="flex flex-col gap-5 border-b border-border/80 pb-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <h3 className="font-display text-2xl text-foreground">{title}</h3>
          <p className="text-base font-medium text-foreground">
            {organization}
            <span className="text-muted-foreground"> • {location}</span>
          </p>
        </div>
        <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{period}</p>
      </div>

      <div className="mt-6 space-y-5">
        <p className="text-base leading-7 text-muted-foreground">{summary}</p>

        <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
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
    </article>
  );
}
