import { stats } from "@/data/site";
import { FallbackImage } from "@/components/ui/fallback-image";
import { ProfileImage } from "@/components/ui/profile-image";

const HERO_PANEL_IMAGE = {
  src: "/contact-showcase/photos/chicago-skyline-light.jpeg",
  label: "Chicago skyline at night"
};

export function HeroPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[25rem] lg:mx-0 lg:justify-self-end">
      <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-accent/20 blur-3xl" />
      <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-card/72 shadow-soft">
        <div className="relative aspect-[4/5]">
          <FallbackImage
            src={HERO_PANEL_IMAGE.src}
            alt={HERO_PANEL_IMAGE.label}
            fill
            priority
            fallbackLabel="Hero image pending"
            sizes="(min-width: 1024px) 400px, 88vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <ProfileImage className="relative h-16 w-16" priority />
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-white/70">Snapshot</p>
            <p className="mt-2 font-display text-3xl">Muhammad Rafiq</p>
            <p className="mt-2 text-sm leading-6 text-white/82">
              Frontend, smart-home ideas, and car photography.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-4 -mt-12 rounded-[1.25rem] border border-white/12 bg-card/90 p-5 shadow-soft backdrop-blur sm:mx-6">
        <p className="font-display text-2xl text-foreground">Current focus</p>
        <div className="mt-4 space-y-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center justify-between gap-4 text-sm">
              <span className="text-foreground/82">{stat.label}</span>
              <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
