import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { CarWashGuysSiteModel } from "@/components/portfolio/car-wash-guys-site-model-flow-fixed";
import { LocalBusinessSiteModel } from "@/components/portfolio/local-business-site-model";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/lib/metadata";

const fancyLogo = "/images/projects/fancy-car-wash-logo%20(1)-Photoroom.png";
const carWashGuysLogo = "/images/projects/car-wash-guys-logo.svg";

export const metadata: Metadata = pageMetadata({
  title: "Modern Branding for Local Businesses | muharafiq",
  description:
    "Brand, web, and site work for two local car washes, focused on the whole customer experience: easier arrival, visible trust, and a cleaner finish from tunnel to vacuum.",
  path: "/portfolio/car-wash"
});

const pillars = [
  "Easy to notice from the road",
  "Clear entry, packages, and next steps",
  "A wash that feels clean before it starts",
  "A smoother handoff from tunnel to vacuum"
];

function MetadataGrid({ items }: { items: Array<{ label: string; value: string }> }) {
  return (
    <div className="mt-8 grid gap-5 border-t border-border pt-6 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">{item.label}</p>
          <p className="mt-1.5 font-mono text-sm leading-6 text-muted-foreground">{item.value}</p>
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
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">Brand &amp; Customer Experience</p>
                <h1 className="mt-5 font-display text-5xl font-normal leading-[1.05] tracking-[-0.04em] text-foreground sm:text-7xl">
                  Modern Branding for Local Businesses
                </h1>
                <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-muted-foreground">
                  Brand, web, and site work for two local car washes. I focused on the parts customers actually feel: finding the place, knowing where to go, trusting it before the first wash, and leaving with a clean car.
                </p>
              </div>
            </Container>
          </section>

          <section className="border-b border-border py-12 sm:py-16">
            <Container>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {pillars.map((pillar) => (
                  <div
                    key={pillar}
                    className="rounded-[1.15rem] border border-[#0a2244]/18 bg-[#fbf5ea] p-5 text-sm font-light leading-7 text-[#0a2244] shadow-[0_18px_50px_rgba(10,34,68,0.18)]"
                  >
                    {pillar}
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="border-b border-border py-14 sm:py-20">
            <Container>
              <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center lg:gap-16">
                <div className="rounded-[1.75rem] border border-[#0a2244]/20 bg-[#fffaf0] px-8 py-10 shadow-[0_24px_80px_rgba(10,34,68,0.28)]">
                  <div className="relative mx-auto h-24 w-full max-w-[18rem] sm:h-28 sm:max-w-[22rem]">
                    <Image src={fancyLogo} alt="Fancy Car Wash launch brand logo" fill sizes="(max-width: 640px) 72vw, 352px" className="object-contain" priority />
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">Fancy Car Wash</p>
                  <h2 className="mt-4 max-w-3xl font-display text-4xl font-light tracking-[-0.045em] text-foreground sm:text-5xl">
                    Launch visuals for a cleaner first impression.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base font-light leading-8 text-muted-foreground">
                    I treated Fancy Car Wash as a launch: signage, site structure, property visuals, and the small cues that make a place read as trustworthy before anyone pulls in.
                  </p>
                  <MetadataGrid items={[{ label: "Role", value: "Brand, website, launch visuals" }, { label: "Focus", value: "Trust, arrival clarity, clean-car payoff" }]} />
                </div>
              </div>
            </Container>
          </section>

          <section className="border-b border-border py-12 sm:py-16">
            <Container>
              <div className="rounded-[2rem] bg-[#f8efe0] p-2 shadow-[0_24px_80px_rgba(10,34,68,0.28)] sm:p-3">
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
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">Ongoing renovation</p>
                  <h2 className="mt-3 font-display text-3xl font-light tracking-[-0.04em] text-foreground sm:text-4xl">Car Wash Guys</h2>
                  <p className="mt-4 max-w-2xl text-base font-light leading-8 text-muted-foreground">
                    An in-progress renovation study for the Kenosha location: a clearer exterior, easier movement through the site, stronger brand presence, and a finish that feels clean, direct, and local.
                  </p>
                  <MetadataGrid items={[{ label: "Role", value: "Renovation visuals, website direction, site flow" }, { label: "Focus", value: "Exterior clarity, customer path, brand presence" }]} />
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
