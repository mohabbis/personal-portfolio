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
        title="Range Rover stills and cinematic cuts from the current automotive portfolio."
        description="The photography page now pulls in the newer Desktop assets directly, with a separate motion section for the cinematic clips and an expanded still gallery for the Range Rover set."
      />

      <section className="py-16 sm:py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Cinematics"
            title="Short motion studies give the portfolio a stronger opening than stills alone."
            description="These clips are embedded as lightweight quick reads so the page can show movement without turning into a full video reel."
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
            title="The expanded gallery leans into cleaner Range Rover compositions."
            description="The current edit mixes neighborhood context, a stronger side profile, and a couple of brighter location changes to keep the set from feeling repetitive."
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
