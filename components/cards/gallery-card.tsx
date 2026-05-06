import type { GalleryItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { FallbackImage } from "@/components/ui/fallback-image";

const orientationClasses = {
  portrait: "sm:row-span-2",
  landscape: "sm:col-span-2",
  square: ""
};

export function GalleryCard({ title, location, description, image, orientation }: GalleryItem) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[1.75rem] border border-border bg-card",
        orientationClasses[orientation]
      )}
    >
      <div className="relative min-h-[260px] sm:h-full">
        <FallbackImage
          src={image}
          alt={title}
          fill
          fallbackLabel={location}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          imageClassName="transition-transform duration-300 ease-gentle group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/12 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-white/70">{location}</p>
          <h3 className="mt-2 font-display text-2xl">{title}</h3>
          <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">{description}</p>
        </div>
      </div>
    </article>
  );
}
