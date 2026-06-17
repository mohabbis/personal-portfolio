import type { Metadata } from "next";
import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";
import { PhotoGallery } from "@/components/sections/photo-gallery";
import { ClickSparks } from "@/components/ui/click-sparks";
import { CursorLabel } from "@/components/ui/cursor-label";

export const metadata: Metadata = {
  title: "Photography",
  description: "Photography studies across light, structure, spacing, atmosphere, architecture, interiors, city scenes, campus, and objects.",
  alternates: {
    canonical: "/photography"
  }
};

const categories = ["Architecture", "Interiors", "Street / city", "Campus", "Automotive / objects"];

export default function PhotographyPage() {
  return (
    <SiteFrame currentPath="/photography">
      <ClickSparks />
      <CursorLabel />
      <section className="py-12 sm:py-16">
        <Container>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent/80">Visual studies</p>
          <h1 className="mt-4 font-display text-5xl tracking-[-0.045em]">Photography</h1>
          <p className="mt-5 max-w-2xl text-base font-light leading-8 text-muted-foreground">
            Photography is where I study light, structure, spacing, and atmosphere. The same eye carries into interface, brand, and environmental design work.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span key={category} className="rounded-full border border-foreground/[0.10] bg-card/55 px-4 py-2 text-sm font-light text-muted-foreground">
                {category}
              </span>
            ))}
          </div>
        </Container>
      </section>
      <section className="pb-20">
        <Container>
          <PhotoGallery />
        </Container>
      </section>
    </SiteFrame>
  );
}
