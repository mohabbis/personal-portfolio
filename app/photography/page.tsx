import type { Metadata } from "next";
import Image from "next/image";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";
import { PixelCamera } from "@/components/ui/pixel-camera";
import { gallery } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Photography",
  description: "A collection of photographs capturing urban landscapes, nature, and everyday moments."
};

export default function PhotographyPage() {
  return (
    <SiteFrame currentPath="/photography">
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-12 flex items-center gap-5 sm:mb-14">
            <PixelCamera className="camera-click h-16 w-auto flex-shrink-0 sm:h-20" />
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Photography</p>
              <h1 className="mt-1 font-display text-3xl text-foreground sm:text-4xl">Moments, captured.</h1>
            </div>
          </div>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <figure
                key={index}
                className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-card/72 shadow-[0_16px_64px_hsl(var(--background)/0.5)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-white/[0.24] hover:shadow-[0_32px_80px_hsl(var(--background)/0.6)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    style={{ objectPosition: item.objectPosition ?? "center" }}
                    priority={index < 3}
                  />
                </div>
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
