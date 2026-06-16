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
  { label: "Problem", value: "Translate physical service businesses into clear digital experiences" },
  { label: "Role", value: "Brand direction, website architecture, UX, membership funnel planning" },
  { label: "Status", value: "Prototype / in development" }
];

const fancyMetadata = [
  { label: "Role", value: "Brand, website, launch visuals" },
  { label: "Timeline", value: "2026 - present" },
  { label: "Scope", value: "Website, services, customer flow" },
  { label: "Status", value: "Launch concept / in development" }
];

const guysMetadata = [
  { label: "Role", value: "Website, marketing, signup flow" },
  { label: "Timeline", value: "2026 - present" },
  { label: "Scope", value: "Membership funnel, site flow, DRB planning" },
  { label: "Status", value: "Prototype / in development" }
];

const designed = [
  "Brand direction",
  "Site architecture",
  "Membership funnel",
  "3D site-flow references",
  "DRB-ready signup path"
];

const fancyFocus = [
  { label: "Brand", text: "Logo, tone, site visuals." },
  { label: "Website", text: "Services, location, calls to action, and launch framing." },
  { label: "Launch", text: "A cleaner way to show the business before opening." }
];

const guysFocus = [
  { label: "Signup", text: "Make memberships easy to understand before the live provider flow is finalized." },
  { label: "Flow", text: "Show how customers enter, wash, vacuum, and exit." },
  { label: "Systems", text: "Prepare for DRB or provider-led integration after access is ready." }
];

function MetadataGrid({ items }: { items: typeof fancyMetadata }) {
  return (
    <div className="mt-8 grid gap-5 border-t border-white/[0.07] pt-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/25">{item.label}</p>
          <p className="mt-1.5 text-sm font-light leading-6 text-white/65">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

function FocusGrid({ items }: { items: typeof fancyFocus }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.label}
          className="rounded-[1.5rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-[#67e8f9]/20 hover:shadow-[0_0_28px_rgba(6,182,212,0.10)]"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#67e8f9]/85">{item.label}</p>
          <p className="mt-3 text-sm font-light leading-7 text-white/65">{item.text}</p>
        </article>
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
                Brand, web, customer-flow, and membership-system planning for local car wash businesses. The work separates launch storytelling from live operational promises, because apparently buttons can create legal ambiguity if left unsupervised.
              </p>
            </Container>
          </section>

          <section className="border-t border-white/[0.07] py-10 sm:py-14">
            <Container>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              <div className="overflow-hidden rounded-[1.5rem] border border-[#67e8f9]/[0.18]">
                <div className="relative min-h-48 bg-[#e8f9fc] p-8 sm:min-h-64 sm:p-10">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(6,182,212,0.22),transparent_50%),radial-gradient(circle_at_72%_78%,rgba(103,232,249,0.14),transparent_44%)]" />
                  <div className="relative flex min-h-36 items-center justify-center sm:min-h-48">
                    <div className="relative h-24 w-full max-w-[18rem] sm:h-32 sm:max-w-[22rem]">
                      <Image src={fancyLogo} alt="Fancy Car Wash launch brand logo" fill sizes="(max-width: 640px) 70vw, 352px" className="object-contain" priority />
                    </div>
                  </div>
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
              <p className="mt-4 max-w-3xl text-base font-light leading-8 text-white/68">
                A launch brand and website direction for presenting services, location context, and customer flow before opening.
              </p>
              <MetadataGrid items={fancyMetadata} />
            </Container>
          </section>

          <section className="border-t border-white/[0.06] bg-[#020a0d] py-12 sm:py-16">
            <Container>
              <div className="max-w-3xl">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]">What I designed</p>
                <h3 className="mt-4 font-display text-2xl font-light tracking-[-0.04em] text-white/85">Brand, site, funnel, and operational handoff.</h3>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-5">
                {designed.map((item) => (
                  <p key={item} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-center text-sm font-light text-white/60">{item}</p>
                ))}
              </div>
              <FocusGrid items={fancyFocus} />
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
                  <p className="mt-4 max-w-3xl text-base font-light leading-8 text-white/68">
                    A membership and customer-flow prototype for a practical local car wash site.
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

          <section className="border-t border-white/[0.06] bg-[#020a0d] py-12 sm:py-16">
            <Container>
              <div className="max-w-3xl">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]">Prototype guardrails</p>
                <h3 className="mt-4 font-display text-2xl font-light tracking-[-0.04em] text-white/85">Pricing and membership flows are not live commercial terms.</h3>
                <p className="mt-4 text-base font-light leading-8 text-white/68">
                  Interactive membership elements are framed as prototype/in-development. Final pricing, checkout, DRB/National Car Wash Solutions integration, and provider handoff depend on launch decisions.
                </p>
              </div>
              <FocusGrid items={guysFocus} />
            </Container>
          </section>

          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container>
              <MembershipPreview />
            </Container>
          </section>

          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container className="max-w-3xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]">The difference</p>
              <h2 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Two Local Builds</h2>
              <div className="mt-6 space-y-5 text-base font-light leading-8 text-white/68">
                <p>Fancy is a launch brand. Car Wash Guys is a membership funnel.</p>
                <p>Both need clear service pages, correct customer flow, mobile-friendly calls to action, and a clean provider handoff instead of making visitors decode the business like an archaeological tablet.</p>
              </div>
            </Container>
          </section>

          <section className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container>
              <p className="font-serif text-2xl font-light italic text-white/35 sm:text-3xl">Built before opening. Labeled before confusion.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.05] px-6 py-3 text-sm font-light text-white/55 transition-all duration-200 hover:border-white/[0.18] hover:bg-white/[0.09] hover:text-white/75">
                  View other projects
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[#67e8f9]/25 bg-[#67e8f9]/[0.07] px-6 py-3 text-sm font-light text-[#67e8f9]/70 transition-all duration-200 hover:border-[#67e8f9]/45 hover:bg-[#67e8f9]/[0.14] hover:text-[#67e8f9]">
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
