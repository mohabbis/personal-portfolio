import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { CarWashGuysSiteModel } from "@/components/portfolio/car-wash-guys-site-model-flow-fixed";
import { LocalBusinessSiteModel } from "@/components/portfolio/local-business-site-model";
import { Container } from "@/components/ui/container";

const fancyLogo = "/images/projects/fancy-car-wash-logo%20(1)-Photoroom.png";
const carWashGuysLogo = "/images/projects/car-wash-guys-logo.svg";

export const metadata: Metadata = {
  title: "A Clean Car = A Clear Mind | muharafiq",
  description: "Brand, site, and 3D flow design for two local car wash businesses, built around the feeling of a clean reset, not a feature list.",
  alternates: {
    canonical: "/portfolio/car-wash"
  }
};

const pillars = [
  "Curbside clarity that sells the feeling before the visit",
  "Find it, pull in, done, with no second guessing the entrance",
  "Fast without feeling rushed",
  "Equipment quality you can see, not just take on faith"
];

function MetadataGrid({ items, dark = false }: { items: Array<{ label: string; value: string }>; dark?: boolean }) {
  return (
    <div className={`mt-8 grid gap-5 border-t pt-6 sm:grid-cols-2 ${dark ? "border-white/15" : "border-border"}`}>
      {items.map((item) => (
        <div key={item.label}>
          <p className={`text-[10px] font-medium uppercase tracking-[0.14em] ${dark ? "text-[#c79a55]" : "text-muted-foreground/60"}`}>{item.label}</p>
          <p className={`mt-1.5 font-mono text-sm leading-6 ${dark ? "text-[#f8efe0]/78" : "text-muted-foreground"}`}>{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export default function CarWashCaseStudyPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <div className="relative bg-background pb-24">
        <article className="relative">
          <section className="relative overflow-hidden border-b border-border pb-16 pt-16 sm:pt-24">
            <Container>
              <div className="max-w-4xl">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">Web &amp; Brand Systems</p>
                <h1 className="mt-5 font-display text-5xl font-normal leading-[1.05] tracking-[-0.04em] text-foreground sm:text-7xl">
                  A Clean Car = A Clear Mind
                </h1>
                <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-muted-foreground">
                  Two local car washes, one idea: the wash itself should be the easiest five minutes of someone&apos;s day. Brand, site, and 3D site flow for Fancy Car Wash and Car Wash Guys, built to sell that calm before a customer ever pulls in.
                </p>
              </div>
            </Container>
          </section>

          <section className="bg-[#061a36] py-12 text-[#f8efe0] sm:py-16">
            <Container>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {pillars.map((pillar) => (
                  <div
                    key={pillar}
                    className="rounded-[1.25rem] border border-white/15 bg-white/[0.055] p-5 text-sm font-light leading-7 text-[#f8efe0]/82 shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
                  >
                    {pillar}
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="border-y border-[#c79a55]/30 bg-[#061a36] py-12 sm:py-16">
            <Container>
              <div className="mx-auto flex max-w-3xl items-center justify-center rounded-[2rem] border border-[#c79a55]/35 bg-[#f7efe2] px-10 py-12 shadow-[0_30px_100px_rgba(0,0,0,0.22)] sm:px-16 sm:py-14">
                <div className="relative h-24 w-full max-w-[20rem] sm:h-32 sm:max-w-[28rem]">
                  <Image src={fancyLogo} alt="Fancy Car Wash launch brand logo" fill sizes="(max-width: 640px) 80vw, 448px" className="object-contain" priority />
                </div>
              </div>
            </Container>
          </section>

          <section className="bg-[#061a36] py-16 text-[#f8efe0] sm:py-20">
            <Container>
              <div className="grid gap-10 lg:grid-cols-[0.52fr_0.48fr] lg:items-end lg:gap-16">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#c79a55]">Fancy Car Wash</p>
                  <h2 className="mt-4 font-display text-4xl font-light tracking-[-0.045em] text-[#f8efe0] sm:text-6xl">Launch site, editorial polish.</h2>
                </div>
                <div>
                  <p className="max-w-2xl text-base font-light leading-8 text-[#f8efe0]/76">
                    A launch site built to earn trust before the doors open: visible from the road, clear at first glance, and fast from tunnel entry to vacuum finish.
                  </p>
                  <MetadataGrid dark items={[{ label: "Role", value: "Brand, website, launch visuals" }, { label: "Focus", value: "Findability, trust at first glance" }]} />
                </div>
              </div>

              <div className="mt-12 rounded-[2.25rem] border border-white/15 bg-[#f8efe0] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.28)] sm:p-5">
                <LocalBusinessSiteModel />
              </div>
            </Container>
          </section>

          <section className="border-t border-border py-12 sm:py-16">
            <Container>
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:gap-12">
                <div className="overflow-hidden rounded-[1.5rem] border border-border">
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
                  <h2 className="font-display text-3xl font-light tracking-[-0.04em] text-foreground sm:text-4xl">Car Wash Guys</h2>
                  <p className="mt-4 max-w-2xl text-base font-light leading-8 text-muted-foreground">
                    A working site for a real, practical wash, designed around one straight, orthogonal flow from the street to the exit, so the equipment and the speed of the line do the selling, not a page of instructions.
                  </p>
                  <MetadataGrid items={[{ label: "Role", value: "Website, marketing, site flow" }, { label: "Focus", value: "Equipment quality, ease of entry" }]} />
                </div>
              </div>
            </Container>
          </section>

          <section className="border-t border-border py-12 sm:py-16">
            <Container>
              <CarWashGuysSiteModel />
            </Container>
          </section>

          <section className="border-t border-border py-14 sm:py-20">
            <Container>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-light text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-muted hover:text-foreground">
                  View other projects
                </Link>
                <Link href="/about#contact" className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-6 py-3 text-sm font-light text-accent transition-all duration-200 hover:border-accent/45 hover:bg-accent/[0.14]">
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
