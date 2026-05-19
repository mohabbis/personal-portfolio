import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { PhotoGallery } from "@/components/sections/photo-gallery";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "A quiet gallery of places, light, and passing moments."
};

export default function PhotographyPage() {
  return (
    <SiteFrame currentPath="/photography">
      <PageIntro
        eyebrow="Photography"
        title="A quiet gallery of places and light."
        description="Chicago, Ann Arbor, and scenes in between."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <PhotoGallery />
        </Container>
      </section>
    </SiteFrame>
  );
}
