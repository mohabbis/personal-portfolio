import type { Metadata } from "next";
import Image from "next/image";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";
import { PhotoGallery } from "@/components/sections/photo-gallery";
import chicagoPanorama from "@/public/images/gallery/chicago-panorama.jpg";

export const metadata: Metadata = {
  title: "Light Archive",
  description: "A visual archive of light, structure, atmosphere, city scenes, campus details, interiors, and objects.",
  alternates: {
    canonical: "/photography"
  }
};

const categories = ["Architecture", "Interiors", "City studies", "Campus light", "Objects in place"];

export default function PhotographyPage() {
  return (
    <SiteFrame currentPath="/photography">
      <section className="pt-8 sm:pt-10 lg:pt-12">
        <Container>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-black shadow-[0_24px_80px_rgba(43,31,24,0.18)] sm:rounded-[2.5rem]">
            <div className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[640px]">
              <Image
                src={chicagoPanorama}
                alt="Panorama of the Chicago skyline and a red arched bridge"
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1280px) 1180px, calc(100vw - 48px)"
                className="object-cover object-[48%_50%] opacity-75 sm:object-[50%_50%] sm:opacity-80"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.32)_38%,rgba(0,0,0,0.9)_100%)] sm:bg-[linear-gradient(90deg,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.58)_42%,rgba(0,0,0,0.22)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-12">
                <div className="max-w-2xl rounded-[1.5rem] bg-black/28 p-5 backdrop-blur-[2px] sm:bg-transparent sm:p-0 sm:backdrop-blur-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80">
                    Visual studies
                  </p>
                  <h1 className="mt-4 font-display text-[clamp(3.5rem,11vw,8rem)] leading-[0.86] tracking-[-0.07em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]">
                    Light Archive
                  </h1>
                  <p className="mt-6 max-w-xl text-sm font-light leading-7 text-white/86 drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)] sm:text-base sm:leading-8">
                    A field note for light, structure, spacing, and atmosphere. The same eye carries into interface, brand, and environmental design work.
                  </p>
                  <p className="mt-7 font-mono text-[10px] uppercase leading-6 tracking-[0.18em] text-white/68 sm:text-[11px]">
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
