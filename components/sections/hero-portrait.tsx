import Image from "next/image";

import { stats } from "@/data/site";

const HERO_PANEL_IMAGE = "/images/profile/Mrafiqheadshot.JPG";

export function HeroPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[25rem] lg:mx-0 lg:justify-self-end">
      <div className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-card shadow-soft">
        <div className="relative aspect-[4/5]">
          <Image
            src={HERO_PANEL_IMAGE}
            alt="Portrait of Muhammad Rafiq"
            fill
            priority
            sizes="(min-width: 1024px) 400px, 88vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <p className="text-xs uppercase tracking-[0.18em] text-white/70">Portfolio Snapshot</p>
            <p className="mt-2 font-display text-3xl">Muhammad Rafiq</p>
            <p className="mt-2 text-sm leading-6 text-white/82">
              Builder of clean software, connected-device concepts, and media-rich digital experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-4 -mt-12 rounded-[1.25rem] border border-border/80 bg-card/95 p-5 shadow-soft backdrop-blur sm:mx-6">
        <p className="font-display text-2xl text-foreground">What this portfolio shows</p>
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
