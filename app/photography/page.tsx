import { CinematicCard } from "@/components/cards/cinematic-card";
import { GalleryCard } from "@/components/cards/gallery-card";
import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { SectionHeading } from "@/components/sections/section-heading";
import { Container } from "@/components/ui/container";
import { cinematicItems } from "@/data/cinematics";
import { galleryItems } from "@/data/gallery";

export default function PhotographyPage() {
  return (
    <SiteFrame currentPath="/photography">
      <PageIntro
        eyebrow="Photography"
        title="Car photos and short clips from the visual side of the portfolio."
        description="This page is mainly Range Rover and Porsche visuals. I wanted the site to have a real look instead of feeling like plain project cards."
      />

      <section className="py-16 sm:py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Cinematics"
            title="Short clips add movement without turning this into a full video reel."
            description="They are here to support the visual style of the site, not distract from the work."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {cinematicItems.map((item) => (
              <CinematicCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border/70 bg-card/40 py-16 sm:py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Stills"
            title="The stills focus on clean angles, lighting, and location."
            description="The gallery mixes neighborhood shots, stronger side profiles, and a few brighter scenes so the set does not feel repetitive."
          />

          <div className="grid auto-rows-[220px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item) => (
              <GalleryCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
