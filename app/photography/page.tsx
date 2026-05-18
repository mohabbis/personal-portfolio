import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";
import { PhotoGallery } from "@/components/sections/photo-gallery";

export const metadata: Metadata = {
  title: "Photography",
  description: "A collection of photographs capturing urban landscapes, nature, and everyday moments."
};

export default function PhotographyPage() {
  return (
    <SiteFrame currentPath="/photography">
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-12 sm:mb-14">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Photography</p>
            <h1 className="mt-1 font-display text-3xl text-foreground sm:text-4xl">Moments, captured.</h1>
          </div>
          <PhotoGallery />
        </Container>
      </section>
    </SiteFrame>
  );
}
