import type { Metadata } from "next";
import Image from "next/image";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";
import { PhotoGallery } from "@/components/sections/photo-gallery";
import chicagoPanorama from "@/public/images/gallery/chicago-panorama.jpg";

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
      <section className="pt-8 sm:pt-10 lg:pt-12">
        <Container>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-foreground text-background shadow-[0_24px_80px_rgba(43,31,24,0.18)] sm:rounded-[2.5rem]">
            <div className="relative min-h-[480px] sm:min-h-[560px] lg:min-h-[640px]">
              <Image
                src={chicagoPanorama}
                alt="Panorama of the Chicago skyline and a red arched bridge"
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1280px) 1180px, calc(100vw - 48px)"
                className="object-cover object-[48%_50%] sm:object-[50%_50%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0.2)_38%,rgba(0,0,0,0.74)_100%)] sm:bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.36)_44%,rgba(0,0,0,0.1)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-12">
                <div className="max-w-2xl">
                  <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-background/80">
                    Visual studies
                  </p>
                  <h1 className="mt-4 font-display text-[clamp(3.75rem,12vw,8rem)] leading-[0.86] tracking-[-0.07em] text-background">
                    Photography
                  </h1>
                  <p className="mt-6 max-w-xl text-sm font-light leading-7 text-background/78 sm:text-base sm:leading-8">
                    Photography is where I study light, structure, spacing, and atmosphere. The same eye carries into interface, brand, and environmental design work.
                  </p>
                  <p className="mt-7 font-mono text-[10px] uppercase leading-6 tracking-[0.18em] text-background/65 sm:text-[11px]">
                    {categories.join("  ·  ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 pt-10 sm:pt-12 lg:pt-14">
        <Container>
          <PhotoGallery />
        </Container>
      </section>
    </SiteFrame>
  );
}
