import type { ProjectItem } from "@/lib/types";
import { FallbackImage } from "@/components/ui/fallback-image";
import { Tag } from "@/components/ui/tag";

export function ProjectCard({
  title,
  category,
  summary,
  impact,
  tags,
  href,
  image
}: ProjectItem) {
  const Wrapper = href ? "a" : "article";
  const wrapperProps = href
    ? { href, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Wrapper
      {...(wrapperProps as object)}
      className="group rounded-[1.5rem] border border-white/10 bg-card/72 shadow-[0_24px_80px_hsl(var(--background)/0.35)] transition-all duration-200 ease-gentle hover:-translate-y-0.5 hover:border-white/22 overflow-hidden"
    >
      <div className="relative h-48 w-full bg-background/60">
        <FallbackImage
          src={image}
          alt={title}
          fill
          fallbackLabel={title}
          sizes="(min-width: 1024px) 50vw, 100vw"
          imageClassName="object-cover"
        />
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{category}</p>
        <h3 className="mt-2 font-display text-2xl text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{summary}</p>

        {impact && (
          <p className="mt-3 text-sm leading-7 text-foreground/80">
            <span className="font-medium">Impact: </span>{impact}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
