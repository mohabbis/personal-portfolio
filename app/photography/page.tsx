import type { Metadata } from "next";
import Image from "next/image";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";
import { PhotoGallery } from "@/components/sections/photo-gallery";
import chicagoPanorama from "@/public/images/gallery/chicago-panorama.jpg";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual archive of light, interiors, exteriors, cities, campus, objects, and architecture.",
  alternates: {
    canonical: "/photography"
  }
};

const categories = ["Light", "Interiors", "Exteriors", "Cities", "Campus", "Objects", "Architecture"];

export default function PhotographyPage() {
  return (
    <SiteFrame currentPath="/photography">
      <section className="pt-8 sm:pt-10 lg:pt-12">
        <Container>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-black shadow-[0_24px_80px_rgba(43,31,24,0.18)] sm:rounded-[2.5rem]">
            <div className="relative aspect-[16/10] sm:aspect-[21/9] lg:aspect-[24/9]">
              <Image
                src={chicagoPanorama}
                alt="Panorama of the Chicago skyline and a red arched bridge"
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1280px) 1180px, calc(100vw - 48px)"
                className="object-cover object-[50%_50%] opacity-90"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.08)_46%,rgba(0,0,0,0.58)_100%)] sm:bg-[linear-gradient(90deg,rgba(0,0,0,0.44)_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.04)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8 lg:p-10">
                <div className="max-w-2xl">
                  <h1 className="font-display text-[clamp(2.35rem,6vw,5.25rem)] leading-[0.95] tracking-[-0.045em] text-white/92 drop-shadow-[0_3px_18px_rgba(0,0,0,0.55)]">
                    A Place Of Light
                  </h1>
                  <p className="mt-4 max-w-2xl font-mono text-[9px] uppercase leading-5 tracking-[0.15em] text-white/66 sm:mt-5 sm:text-[11px] sm:leading-6">
                    {categories.join("  ·  ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-2 pt-10 sm:pb-20 sm:pt-12 lg:pt-14">
        <Container>
          <PhotoGallery />
        </Container>
      </section>
    </SiteFrame>
  );
}
