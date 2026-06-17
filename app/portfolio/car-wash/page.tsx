import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { CarWashGuysSiteModel } from "@/components/portfolio/car-wash-guys-site-model-flow-fixed";
import { LocalBusinessSiteModel } from "@/components/portfolio/local-business-site-model";
import { Container } from "@/components/ui/container";

const fancyLogo = "/images/projects/fancy-car-wash-logo.png";
const carWashGuysLogo = "/images/projects/car-wash-guys-logo.svg";

export const metadata: Metadata = {
  title: "A Clean Car = A Clear Mind | muharafiq",
  description: "Brand, site, and cinematic 3D flow design for two local car wash businesses, built around the feeling of a clean reset, not a feature list.",
  alternates: {
    canonical: "/portfolio/car-wash"
  }
};

const pillars = [
  "Cinematic from the curb — the site sells the feeling before the visit",
  "Find it, pull in, done — no second-guessing the entrance",
  "Fast without feeling rushed",
  "Equipment quality you can see, not just take on faith",
  "The wash is the easy part of the customer's day"
];

function MetadataGrid({ items }: { items: Array<{ label: string; value: string }> }) {
  return (
    <div className="mt-8 grid gap-5 border-t border-white/[0.07] pt-6 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/25">{item.label}</p>
          <p className="mt-1.5 font-mono text-sm leading-6 text-white/65">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export default function CarWashCaseStudyPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <div className="relative bg-[#030c0f]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[70vh] w-full max-w-3xl -translate-x-1/2 rounded-[50%] bg-[#4a2c08] opacity-[0.35] blur-[180px]" />
          <div className="absolute bottom-0 right-0 h-[40vh] w-[60vw] rounded-[50%] bg-[#3a2206] opacity-[0.25] blur-[160px]" />
        </div>

        <article className="relative">
          <section className="relative overflow-hidden pb-16 pt-16 sm:pt-24">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-[520px] w-[640px] rounded-full bg-[#3a2206] opacity-[0.45] blur-[130px]" />
              <div className="absolute right-0 top-8 h-[300px] w-[420px] rounded-full bg-[#d99a3a] opacity-[0.07] blur-[100px]" />
            </div>
            <Container>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#e0b27a]">Web &amp; Brand Systems</p>
              <h1 className="mt-5 max-w-4xl font-display text-5xl font-normal leading-[1.05] tracking-[-0.04em] text-white/90 sm:text-7xl">
                A Clean Car = A Clear Mind
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-white/65">
                Two local car washes, one idea: the wash itself should be the easiest five minutes of someone&apos;s day. Brand, site, and cinematic 3D site flow for Fancy Car Wash and Car Wash Guys, built to sell that calm before a customer ever pulls in.
              </p>
            </Container>
          </section>

          <section className="border-t border-white/[0.07] py-10 sm:py-14">
            <Container>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pillars.map((pillar) => (
                  <li
                    key={pillar}
                    className="rounded-[1.25rem] border border-white/[0.07] bg-white/[0.04] p-5 font-light leading-7 text-white/70"
                  >
                    {pillar}
                  </li>
                ))}
              </ul>
            </Container>
          </section>

          <section className="border-t border-white/[0.07] py-10 sm:py-14">
            <Container>
              <div className="flex min-h-40 items-center justify-center py-4 sm:min-h-52">
                <div className="relative h-20 w-full max-w-[16rem] sm:h-28 sm:max-w-[22rem]">
                  <Image src={fancyLogo} alt="Fancy Car Wash launch brand logo" fill sizes="(max-width: 640px) 64vw, 352px" className="object-contain" priority />
                </div>
              </div>
            </Container>
          </section>

          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container>
              <h2 className="font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Fancy Car Wash</h2>
              <p className="mt-4 max-w-2xl text-base font-light leading-8 text-white/68">
                A launch site built to do the convincing before the doors open: a property that&apos;s easy to spot from the road, a tunnel customers can trust on sight, and a vacuum canopy that makes the last step feel just as fast as the first.
              </p>
              <MetadataGrid items={[{ label: "Role", value: "Brand, website, launch visuals" }, { label: "Focus", value: "Findability, trust at first glance" }]} />
              <div className="mt-10">
                <LocalBusinessSiteModel />
              </div>
            </Container>
          </section>

          <section className="border-t border-white/[0.06] py-10 sm:py-14">
            <Container>
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:gap-12">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/[0.07]">
                  <div className="relative min-h-64 bg-[#f5ede0] p-8 sm:min-h-80 sm:p-10">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_26%_20%,rgba(153,106,40,0.14),transparent_50%),radial-gradient(circle_at_74%_80%,rgba(198,128,42,0.09),transparent_44%)]" />
                    <div className="relative flex min-h-48 items-center justify-center sm:min-h-60">
                      <div className="relative h-36 w-full max-w-[25rem] sm:h-44">
                        <Image src={carWashGuysLogo} alt="Car Wash Guys brand logo" fill sizes="(max-width: 640px) 80vw, 400px" className="object-contain" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Car Wash Guys</h2>
                  <p className="mt-4 max-w-2xl text-base font-light leading-8 text-white/68">
                    A working site for a real, practical wash — designed around one straight, orthogonal flow from the street to the exit, so the equipment and the speed of the line do the selling, not a page of instructions.
                  </p>
                  <MetadataGrid items={[{ label: "Role", value: "Website, marketing, site flow" }, { label: "Focus", value: "Equipment quality, ease of entry" }]} />
                </div>
              </div>
            </Container>
          </section>

          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container>
              <CarWashGuysSiteModel />
            </Container>
          </section>

          <section className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.05] px-6 py-3 text-sm font-light text-white/55 transition-all duration-200 hover:border-white/[0.18] hover:bg-white/[0.09] hover:text-white/75">
                  View other projects
                </Link>
                <Link href="/about#contact" className="inline-flex items-center gap-2 rounded-full border border-[#e0b27a]/25 bg-[#e0b27a]/[0.07] px-6 py-3 text-sm font-light text-[#e0b27a]/70 transition-all duration-200 hover:border-[#e0b27a]/45 hover:bg-[#e0b27a]/[0.14] hover:text-[#e0b27a]">
                  Get in touch
                </Link>
              </div>
            </Container>
          </section>
        </article>
      </div>
    </SiteFrame>
  );
}
