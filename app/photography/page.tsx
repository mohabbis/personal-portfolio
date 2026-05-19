import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { FallbackImage } from "@/components/ui/fallback-image";
import { gallery } from "@/data/gallery";

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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-card/72 shadow-[0_18px_56px_hsl(var(--background)/0.38)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/[0.16] hover:shadow-[0_28px_70px_hsl(var(--background)/0.52)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <FallbackImage
                    src={item.image.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    fallbackLabel=""
                    aria-hidden="true"
                    role="presentation"
                    imageClassName="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
