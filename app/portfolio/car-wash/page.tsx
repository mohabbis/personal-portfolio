import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { CarWashGuysSiteModel } from "@/components/portfolio/car-wash-guys-site-model-flow-fixed";
import { LocalBusinessSiteModel } from "@/components/portfolio/local-business-site-model";
import { MembershipPreview } from "@/components/portfolio/membership-preview";
import { Container } from "@/components/ui/container";

const fancyLogo = "/images/projects/fancy-car-wash-logo.png";
const carWashGuysLogo = "/images/projects/car-wash-guys-logo.svg";

export const metadata: Metadata = {
  title: "Modern Branding for Local Businesses | muharafiq",
  description: "Brand, web, customer flow, and prototype membership systems for local car wash businesses.",
  alternates: {
    canonical: "/portfolio/car-wash"
  }
};

const summary = [
  { label: "Context", value: "Local car wash brand/web systems" },
  { label: "Role", value: "Brand, website, UX, membership funnel" },
  { label: "Status", value: "Prototype / in development" }
];

const fancyMetadata = [
  { label: "Role", value: "Brand, website, launch visuals" },
  { label: "Timeline", value: "2026 - present" },
  { label: "Status", value: "Launch concept / in development" }
];

const guysMetadata = [
  { label: "Role", value: "Website, marketing, signup flow" },
  { label: "Timeline", value: "2026 - present" },
  { label: "Status", value: "Prototype / in development" }
];

function MetadataGrid({ items }: { items: typeof fancyMetadata }) {
  return (
    <div className="mt-8 grid gap-5 border-t border-white/[0.07] pt-6 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/25">{item.label}</p>
          <p className="mt-1.5 text-sm font-light leading-6 text-white/65">{item.value}</p>
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
          <div className="absolute left-1/2 top-0 h-[70vh] w-full max-w-3xl -translate-x-1/2 rounded-[50%] bg-[#06b6d4] opacity-[0.07] blur-[180px]" />
          <div className="absolute bottom-0 right-0 h-[40vh] w-[60vw] rounded-[50%] bg-[#0891b2] opacity-[0.05] blur-[160px]" />
        </div>

        <article className="relative">
          <section className="relative overflow-hidden pb-16 pt-16 sm:pt-24">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-[520px] w-[640px] rounded-full bg-[#0891b2] opacity-[0.10] blur-[130px]" />
              <div className="absolute right-0 top-8 h-[300px] w-[420px] rounded-full bg-[#06b6d4] opacity-[0.06] blur-[100px]" />
            </div>
            <Container>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]">Web &amp; Brand Systems</p>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-widest text-white/40">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#67e8f9]" />
                  Prototype / in development
                </span>
              </div>
              <h1 className="mt-5 max-w-4xl font-display text-5xl font-light leading-[1.05] tracking-[-0.04em] text-white/90 sm:text-7xl">
                Modern Branding for Local Businesses
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-white/65">
                Brand, web, and membership systems for two local car wash businesses at different stages of launch.
              </p>
            </Container>
          </section>

          <section className="border-t border-white/[0.07] py-10 sm:py-14">
            <Container>
              <div className="grid gap-4 sm:grid-cols-3">
                {summary.map((item) => (
                  <div key={item.label} className="rounded-[1.25rem] border border-[#67e8f9]/[0.16] bg-white/[0.04] p-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#67e8f9]/80">{item.label}</p>
                    <p className="mt-3 text-sm font-light leading-6 text-white/65">{item.value}</p>
                  </div>
                ))}
              </div>
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
              <LocalBusinessSiteModel />
            </Container>
          </section>

          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]">Project one</p>
              <h2 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Fancy Car Wash</h2>
              <p className="mt-4 max-w-2xl text-base font-light leading-8 text-white/68">
                Launch brand and website for presenting the business before opening.
              </p>
              <MetadataGrid items={fancyMetadata} />
            </Container>
          </section>

          <section className="border-t border-white/[0.06] py-10 sm:py-14">
            <Container>
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:gap-12">
                <div className="overflow-hidden rounded-[1.5rem] border border-[#67e8f9]/[0.18]">
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
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]">Project two</p>
                  <h2 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Car Wash Guys</h2>
                  <p className="mt-4 max-w-2xl text-base font-light leading-8 text-white/68">
                    Membership and customer-flow prototype for a practical local car wash.
                  </p>
                  <MetadataGrid items={guysMetadata} />
                </div>
              </div>
            </Container>
          </section>

          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container>
              <CarWashGuysSiteModel />
            </Container>
          </section>

          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container>
              <MembershipPreview />
            </Container>
          </section>

          <section className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.05] px-6 py-3 text-sm font-light text-white/55 transition-all duration-200 hover:border-white/[0.18] hover:bg-white/[0.09] hover:text-white/75">
                  View other projects
                </Link>
                <Link href="/about#contact" className="inline-flex items-center gap-2 rounded-full border border-[#67e8f9]/25 bg-[#67e8f9]/[0.07] px-6 py-3 text-sm font-light text-[#67e8f9]/70 transition-all duration-200 hover:border-[#67e8f9]/45 hover:bg-[#67e8f9]/[0.14] hover:text-[#67e8f9]">
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
