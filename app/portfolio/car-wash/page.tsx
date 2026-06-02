import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";

const fancyLogo = "/images/projects/fancy-car-wash-logo.svg";
const carWashGuysLogo = "/images/projects/car-wash-guys-logo.svg";

export const metadata: Metadata = {
  title: "Car Wash Brands | muharafiq",
  description: "Web development, marketing, and DRB-ready technology integration for local car wash concepts."
};

const fancyMetadata = [
  { label: "Role", value: "Web development, marketing strategy, DRB integration planning" },
  { label: "Timeline", value: "2026 - present" },
  { label: "Scope", value: "Website build, conversion flow, service clarity, DRB readiness" },
  { label: "Status", value: "In development" }
];

const guysMetadata = [
  { label: "Role", value: "Web development, marketing, membership signup integration" },
  { label: "Timeline", value: "2026 - present" },
  { label: "Scope", value: "Website, membership funnel, DRB Car Wash systems integration" },
  { label: "Status", value: "In development" }
];

const fancyFocus = [
  {
    label: "Web development",
    text: "A clear site architecture built around services, pricing, location, and mobile-first decisions."
  },
  {
    label: "Marketing clarity",
    text: "Messaging that turns wash options, pricing, and directions into fast customer decisions."
  },
  {
    label: "Technology planning",
    text: "A foundation for connecting the customer-facing site with future operational systems."
  }
];

const guysFocus = [
  {
    label: "Membership funnel",
    text: "A simplified signup path that will make unlimited wash membership easy to understand and start."
  },
  {
    label: "DRB integration",
    text: "Planned code integration with DRB Car Wash systems once construction and system access are complete."
  },
  {
    label: "User ease",
    text: "The signup experience is being shaped around fewer steps, clearer choices, and less friction for customers."
  }
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
        {/* Page-level ambient — cyan bloom top-center, deep blue wash bottom-right */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[70vh] w-full max-w-3xl -translate-x-1/2 rounded-[50%] bg-[#06b6d4] opacity-[0.07] blur-[180px]" />
          <div className="absolute bottom-0 right-0 h-[40vh] w-[60vw] rounded-[50%] bg-[#0891b2] opacity-[0.05] blur-[160px]" />
        </div>

        <article className="relative">

          {/* Header */}
          <section className="relative overflow-hidden pb-16 pt-16 sm:pt-24">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-[520px] w-[640px] rounded-full bg-[#0891b2] opacity-[0.10] blur-[130px]" />
              <div className="absolute right-0 top-8 h-[300px] w-[420px] rounded-full bg-[#06b6d4] opacity-[0.06] blur-[100px]" />
            </div>
            <Container>
              <div className="flex items-center gap-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]">
                  Web Development &amp; Marketing Systems
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-widest text-white/40">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#67e8f9]" />
                  In development
                </span>
              </div>
              <h1 className="mt-5 font-display text-5xl font-light leading-[1.05] tracking-[-0.04em] text-white/90 sm:text-7xl">
                Car Wash Brands
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-white/65">
                Web development, marketing, and technology integration work for local car wash businesses, connecting customer-facing websites with clearer signup flows and future DRB Car Wash systems integration.
              </p>
            </Container>
          </section>

          {/* Fancy Car Wash — logo plate */}
          <section className="border-t border-white/[0.07] py-10 sm:py-14">
            <Container>
              <div className="overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0a1e27]">
                <div className="relative min-h-48 p-8 sm:min-h-64 sm:p-10">
                  {/* Pool shimmer overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(103,232,249,0.14),transparent_46%),radial-gradient(circle_at_72%_78%,rgba(6,182,212,0.08),transparent_40%)]" />
                  <div className="relative flex min-h-36 items-center justify-center sm:min-h-48">
                    <div className="relative h-24 w-full max-w-[18rem] sm:h-32 sm:max-w-[22rem]">
                      <Image
                        src={fancyLogo}
                        alt="Fancy Car Wash logo"
                        fill
                        sizes="(max-width: 640px) 70vw, 352px"
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Fancy — overview */}
          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]">Project one</p>
              <h2 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Fancy Car Wash</h2>
              <p className="mt-4 max-w-3xl text-base font-light leading-8 text-white/68">
                A clearer customer-facing website for a fast automatic car wash in Milwaukee. The work focuses on web development, marketing structure, and the practical details customers need immediately: wash options, pricing, location, and directions.
              </p>
              <MetadataGrid items={fancyMetadata} />
            </Container>
          </section>

          {/* Fancy — focus */}
          <section className="border-t border-white/[0.06] bg-[#020a0d] py-12 sm:py-16">
            <Container>
              <div className="max-w-3xl">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]">Focus</p>
                <h3 className="mt-4 font-display text-2xl font-light tracking-[-0.04em] text-white/85">What we&apos;re building</h3>
                <p className="mt-4 text-base font-light leading-8 text-white/68">
                  The goal is to make Fancy feel sharper than a generic local car wash while keeping the web experience simple. The site is structured to answer the core questions quickly, support marketing efforts, and leave room for future technology connections as operations come online.
                </p>
              </div>
              <FocusGrid items={fancyFocus} />
            </Container>
          </section>

          {/* Car Wash Guys — logo plate */}
          <section className="border-t border-white/[0.06] py-10 sm:py-14">
            <Container>
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:gap-12">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0a1e27]">
                  <div className="relative min-h-64 p-8 sm:min-h-80 sm:p-10">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_26%_20%,rgba(103,232,249,0.14),transparent_46%),radial-gradient(circle_at_74%_80%,rgba(6,182,212,0.08),transparent_40%)]" />
                    <div className="relative flex min-h-48 items-center justify-center sm:min-h-60">
                      <div className="relative h-36 w-full max-w-[25rem] sm:h-44">
                        <Image
                          src={carWashGuysLogo}
                          alt="Car Wash Guys logo"
                          fill
                          sizes="(max-width: 640px) 80vw, 400px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]">Project two</p>
                  <h2 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Car Wash Guys</h2>
                  <p className="mt-4 max-w-3xl text-base font-light leading-8 text-white/68">
                    A neighborhood car wash concept built around membership, familiarity, repeat customers, and an easier path into an unlimited wash plan.
                  </p>
                  <MetadataGrid items={guysMetadata} />
                </div>
              </div>
            </Container>
          </section>

          {/* Car Wash Guys — focus */}
          <section className="border-t border-white/[0.06] bg-[#020a0d] py-12 sm:py-16">
            <Container>
              <div className="max-w-3xl">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]">Focus</p>
                <h3 className="mt-4 font-display text-2xl font-light tracking-[-0.04em] text-white/85">What we&apos;re building</h3>
                <p className="mt-4 text-base font-light leading-8 text-white/68">
                  Car Wash Guys takes a different route than Fancy. The focus is on turning local trust into a smoother digital membership journey. Once construction is finished, membership signup will be integrated with DRB Car Wash systems, with my role centered on connecting the code and making signup feel as easy as possible for customers.
                </p>
              </div>
              <FocusGrid items={guysFocus} />
            </Container>
          </section>

          {/* The contrast */}
          <section className="border-t border-white/[0.06] py-12 sm:py-16">
            <Container className="max-w-3xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#67e8f9]">The difference</p>
              <h2 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">The Contrast</h2>
              <div className="mt-6 space-y-5 text-base font-light leading-8 text-white/68">
                <p>
                  Same category, different strategy. Fancy Car Wash is built around speed, clarity, and a sharper automatic wash experience. Car Wash Guys is built around membership, familiarity, local loyalty, and a DRB-connected signup path planned for launch readiness.
                </p>
                <p>
                  The useful lesson: local business websites work best when development, marketing, and operational technology are planned together instead of treated as separate pieces.
                </p>
                <p>
                  Both projects are in development. DRB membership integration will be completed after construction and system access are ready, and live links will be added as each site launches.
                </p>
              </div>
            </Container>
          </section>

          {/* Footer */}
          <section className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container>
              <p className="font-serif text-2xl font-light italic text-white/35 sm:text-3xl">Both in the water.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.05] px-6 py-3 text-sm font-light text-white/55 transition-all duration-200 hover:border-white/[0.18] hover:bg-white/[0.09] hover:text-white/75"
                >
                  View other projects
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#67e8f9]/25 bg-[#67e8f9]/[0.07] px-6 py-3 text-sm font-light text-[#67e8f9]/70 transition-all duration-200 hover:border-[#67e8f9]/45 hover:bg-[#67e8f9]/[0.14] hover:text-[#67e8f9]"
                >
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
