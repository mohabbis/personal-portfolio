import { SectionHeading } from "@/components/sections/section-heading";
import { Container } from "@/components/ui/container";
import { GalleryCard } from "@/components/cards/gallery-card";
import { galleryItems } from "@/data/gallery";

export function HomePhotographySection() {
  return (
    <section id="photography" className="scroll-mt-28 py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Photography"
          title="Car photos, night scenes, and visual direction."
          description="A selection of automotive shots I’ve taken and used to shape the look of the portfolio."
        />

        <div className="grid auto-rows-[220px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <GalleryCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

