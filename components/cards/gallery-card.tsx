import type { GalleryItem } from "@/lib/types";

import { FallbackImage } from "@/components/ui/fallback-image";
import { cn } from "@/lib/utils";

type GalleryCardProps = {
  item: GalleryItem;
  featured?: boolean;
  priority?: boolean;
};

const ORIENTATION_STYLES: Record<GalleryItem["orientation"], string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/10]",
  square: "aspect-square"
};

export function GalleryCard({ item, featured = false, priority = false }: GalleryCardProps) {
  return (
    <article
      className={cn(
        "group break-inside-avoid overflow-hidden rounded-[1.5rem] border border-border/70 bg-card/75 shadow-[0_24px_80px_hsl(var(--background)/0.35)]",
        featured && "ring-1 ring-white/10"
      )}
    >
      <div className={cn("relative overflow-hidden bg-background/50", featured ? "aspect-[16/10]" : ORIENTATION_STYLES[item.orientation])}>
        <FallbackImage
          src={item.image}
          alt={item.title}
          fill
          priority={priority}
          fallbackLabel={item.title}
          sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
          className="absolute inset-0"
          imageClassName="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/16 to-transparent p-4 sm:p-5">
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/70">{item.location}</p>
          <h3 className="mt-2 font-display text-xl text-white sm:text-2xl">{item.title}</h3>
        </div>
      </div>

      <div className="space-y-2 p-4 sm:p-5">
        <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
      </div>
    </article>
  );
}
