import Link from "next/link";

import type { ProjectItem } from "@/lib/types";
import { Tag } from "@/components/ui/tag";

export function ProjectCard({
  title,
  category,
  summary,
  impact,
  tags,
  href
}: ProjectItem) {
  const content = (
    <div className="flex flex-1 flex-col gap-5 p-6 sm:p-7">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{category}</p>
        <h3 className="font-display text-2xl text-foreground">{title}</h3>
        <p className="text-sm leading-7 text-muted-foreground">{summary}</p>
      </div>

      <p className="text-sm leading-7 text-foreground/80">{impact}</p>

      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  );

  const sharedClassName =
    "group flex h-full min-h-[320px] flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-card/72 shadow-[0_24px_80px_hsl(var(--background)/0.35)] transition-all duration-200 ease-gentle hover:-translate-y-0.5 hover:border-white/22 hover:shadow-soft";

  if (href) {
    return (
      <Link href={href} className={sharedClassName}>
        {content}
      </Link>
    );
  }

  return <article className={sharedClassName}>{content}</article>;
}
