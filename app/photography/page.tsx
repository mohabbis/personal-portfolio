import type { Metadata } from "next";

import { GalleryCard } from "@/components/cards/gallery-card";
import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { gallery } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Photography",
  description: "Selected photography."
};

export default function PhotographyPage() {
  const totalPhotos = gallery.length;
  const portraitCount = gallery.filter((item) => item.orientation === "portrait").length;
  const landscapeCount = gallery.filter((item) => item.orientation === "landscape").length;

  return (
    <SiteFrame currentPath="/photography">
      <PageIntro
        eyebrow="Photography"
        title="Selected frames."
        description="Scenes, people, and studies."
        actions={
          <ButtonLink href="/portfolio" variant="secondary">
            Portfolio
          </ButtonLink>
        }
        visual={
          <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-5 shadow-soft">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Gallery summary</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-2xl border border-white/8 bg-background/50 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Photos</p>
                <p className="mt-2 font-display text-3xl text-foreground">{totalPhotos}</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-background/50 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Portrait</p>
                <p className="mt-2 font-display text-3xl text-foreground">{portraitCount}</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-background/50 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Landscape</p>
                <p className="mt-2 font-display text-3xl text-foreground">{landscapeCount}</p>
              </div>
            </div>
          </div>
        }
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-start">
          <div className="space-y-6">
            <GalleryCard item={gallery[0]} featured priority />

            <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
              {gallery.slice(1).map((item) => (
                <div key={item.title} className="mb-6">
                  <GalleryCard item={item} />
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6 xl:sticky xl:top-28">
            <div className="rounded-[1.5rem] border border-border/70 bg-card/75 p-6 shadow-[0_24px_80px_hsl(var(--background)/0.28)]">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Order</p>
              <h2 className="mt-3 font-display text-2xl text-foreground">Scene first.</h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                <p>Top frame first.</p>
                <p>Then the rest.</p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-border/70 bg-background/60 p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Notes</p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-foreground/80">
                <p>Scenes: sunrise and street light.</p>
                <p>People: candid portraits.</p>
                <p>Studies: textures and utility spaces.</p>
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </SiteFrame>
  );
}
