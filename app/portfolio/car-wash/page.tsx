import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { ProjectPlate } from "@/components/portfolio/project-plate";
import { Container } from "@/components/ui/container";

const fancyLogo = "/images/projects/fancy-car-wash-logo.svg";
const carWashGuysLogo = "/images/projects/car-wash-guys-logo.svg";

export const metadata: Metadata = {
  title: "Car Wash Brands | muharafiq",
  description: "Brand identity and web direction for two local car wash concepts."
};

const fancyMetadata = [
  { label: "Role", value: "Brand direction, web design, customer flow" },
  { label: "Timeline", value: "2026 - present" },
  { label: "Scope", value: "Website structure, mobile experience, service clarity" },
  { label: "Status", value: "In development" }
];

const guysMetadata = [
  { label: "Role", value: "Brand identity, web design, membership funnel" },
  { label: "Timeline", value: "2026 - present" },
  { label: "Scope", value: "Identity, website, membership conversion" },
  { label: "Status", value: "In development" }
];

const fancyFocus = [
  {
    label: "Brand direction",
    text: "A cleaner visual system for a sharper automatic wash experience."
  },
  {
    label: "Website structure",
    text: "Pricing, location, services, and directions surfaced early."
  },
  {
    label: "Mobile flow",
    text: "Fast answers for customers making a quick decision from their phone."
  }
];

const guysFocus = [
  {
    label: "Local identity",
    text: "A warmer brand built around familiarity and repeat visits."
  },
  {
    label: "Membership funnel",
    text: "The site frames membership as part of a weekly routine."
  },
  {
    label: "Trust before signup",
    text: "The experience explains the business before asking customers to commit."
  }
];

function MetadataGrid({ items }: { items: typeof fancyMetadata }) {
  return (
    <div className="mt-8 grid gap-5 border-t border-foreground/[0.07] pt-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
            {item.label}
          </p>
          <p className="mt-1 text-sm leading-6 text-foreground">{item.value}</p>
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
          className="rounded-[1.1rem] border border-foreground/[0.07] bg-background/72 p-5 shadow-soft transition-colors hover:border-foreground/[0.16]"
        >
          <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
            {item.label}
          </p>
          <p className="mt-3 text-sm font-light leading-7 text-muted-foreground">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export default function CarWashCaseStudyPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <article>
        <section className="border-b border-foreground/[0.07] pb-12 pt-16 sm:pt-20">
          <Container>
            <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
              Web Design &amp; Brand Strategy
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-[-0.055em] text-foreground sm:text-7xl">
              Car Wash Brands
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-muted-foreground">
              Brand identity and web direction for two local car wash concepts: one built around a sharper automatic wash experience, the other around community membership.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-card/60 px-3 py-1.5 text-xs font-normal uppercase tracking-[0.08em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> In development
            </p>
          </Container>
        </section>

        <section className="border-b border-foreground/[0.07] py-10 sm:py-14">
          <Container>
            <ProjectPlate
              variant="system"
              title="Fancy Car Wash"
              image={fancyLogo}
              imageAlt="Fancy Car Wash logo"
              meta={["Automatic wash experience", "Milwaukee", "2026"]}
              backgroundClassName="bg-[#fdf6ec]"
              priority
            />
          </Container>
        </section>

        <section className="py-12 sm:py-16">
          <Container>
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Fancy Car Wash</h2>
            <p className="mt-3 max-w-3xl text-base font-light leading-8 text-muted-foreground">
              A clearer digital presence for a fast automatic car wash in Milwaukee. The site focuses on what customers need immediately: wash options, pricing, location, and directions.
            </p>
            <MetadataGrid items={fancyMetadata} />
          </Container>
        </section>

        <section className="border-t border-foreground/[0.07] bg-card/40 py-12 sm:py-16">
          <Container>
            <div className="max-w-3xl">
              <h3 className="font-display text-2xl tracking-[-0.04em] text-foreground">Focus</h3>
              <p className="mt-5 text-base font-light leading-8 text-muted-foreground">
                The goal was to make Fancy feel sharper than a generic local car wash without overcomplicating the experience. The site should answer the core questions quickly: what do you offer, where are you, how much does it cost, and how do I get there?
              </p>
            </div>
            <FocusGrid items={fancyFocus} />
          </Container>
        </section>

        <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:gap-12">
              <div className="overflow-hidden rounded-[1.5rem] border border-foreground/[0.07] bg-[#fdf6ec] shadow-soft">
                <div className="relative min-h-64 p-8 sm:min-h-80 sm:p-10">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_26%_20%,rgba(255,255,255,0.75),transparent_34%)]" />
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
                <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Car Wash Guys</h2>
                <p className="mt-3 max-w-3xl text-base font-light leading-8 text-muted-foreground">
                  A neighborhood car wash brand built around membership, familiarity, and repeat customers.
                </p>
                <MetadataGrid items={guysMetadata} />
              </div>
            </div>
          </Container>
        </section>

        <section className="border-t border-foreground/[0.07] bg-card/40 py-12 sm:py-16">
          <Container>
            <div className="max-w-3xl">
              <h3 className="font-display text-2xl tracking-[-0.04em] text-foreground">Focus</h3>
              <p className="mt-5 text-base font-light leading-8 text-muted-foreground">
                Car Wash Guys takes a different route than Fancy. The brand is less about polish and more about local trust: a familiar place customers return to, not just a one-time wash.
              </p>
            </div>
            <FocusGrid items={guysFocus} />
          </Container>
        </section>

        <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
          <Container className="max-w-3xl">
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">The Contrast</h2>
            <p className="mt-5 text-base font-light leading-8 text-muted-foreground">
              Same category, different strategy. Fancy Car Wash is built around speed, clarity, and a sharper automatic wash experience. Car Wash Guys is built around membership, familiarity, and local loyalty.
            </p>
            <p className="mt-4 text-base font-light leading-8 text-muted-foreground">
              The useful lesson: design should follow positioning, not the other way around.
            </p>
            <p className="mt-4 text-base font-light leading-8 text-muted-foreground">
              Both projects are in development. Live links will be added as each site launches.
            </p>
          </Container>
        </section>

        <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
              >
                View other projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
              >
                Get in touch
              </Link>
            </div>
          </Container>
        </section>
      </article>
    </SiteFrame>
  );
}
