import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";
import { FallbackImage } from "@/components/ui/fallback-image";
import { gallery } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Photography",
  description: "Photographs from Chicago, Ann Arbor, and places in between."
};

export default function PhotographyPage() {
  return (
    <SiteFrame currentPath="/photography">
      <section className="py-16 sm:py-24">
        <Container>
          <h1 className="font-display text-4xl text-foreground sm:text-5xl">
            Photography
          </h1>

          <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>div]:mb-4">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-card/72 shadow-[0_16px_64px_hsl(var(--background)/0.5)] transition-all duration-500 ease-out hover:shadow-[0_32px_80px_hsl(var(--background)/0.6)]"
              >
                <FallbackImage
                  src={item.image}
                  alt=""
                  width={800}
                  height={600}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  imageClassName="w-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}