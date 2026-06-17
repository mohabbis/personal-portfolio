import type { Metadata } from "next";
import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";
import { PhotoGallery } from "@/components/sections/photo-gallery";

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
      <section className="py-12 sm:py-16">
        <Container>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent/80">Visual studies</p>
          <h1 className="mt-4 font-display text-5xl tracking-[-0.045em]">Photography</h1>
          <p className="mt-5 max-w-2xl text-base font-light leading-8 text-muted-foreground">
            Photography is where I study light, structure, spacing, and atmosphere. The same eye carries into interface, brand, and environmental design work.
          </p>
          <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
            {categories.join("  ·  ")}
          </p>
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
