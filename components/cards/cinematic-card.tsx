import type { CinematicItem } from "@/lib/types";

export function CinematicCard({ title, location, description, video, poster }: CinematicItem) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-border bg-card">
      <div className="aspect-[16/10] bg-black">
        <video
          className="h-full w-full object-cover"
          controls
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={video} type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="space-y-3 p-5 sm:p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{location}</p>
        <h3 className="font-display text-2xl text-foreground">{title}</h3>
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </div>
    </article>
  );
}
