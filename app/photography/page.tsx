import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { FallbackImage } from "@/components/ui/fallback-image";
import { Tag } from "@/components/ui/tag";
import { gallery } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "A collection of photographs capturing urban landscapes, nature, and everyday moments."
};

export default function PhotographyPage() {
  return (
    <SiteFrame currentPath="/photography">
      <PageIntro
        eyebrow="Photography"
        title="Framing moments that catch my eye."
        description="A collection of photographs from Chicago, Ann Arbor, and places in between — focusing on light, structure, and the moments between."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <figure
                key={item.title}
                className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-card/72 shadow-[0_16px_64px_hsl(var(--background)/0.5)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-white/[0.24] hover:shadow-[0_32px_80px_hsl(var(--background)/0.6)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <FallbackImage
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    fallbackLabel={item.title}
                    imageClassName="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <figcaption className="p-5">
                  <Tag>{item.location}</Tag>
                  <h3 className="mt-2 font-display text-xl text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}