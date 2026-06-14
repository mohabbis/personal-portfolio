import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { PerspectivesAmbientScene } from "@/components/portfolio/perspectives-ambient-scene";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Perspectives",
  description:
    "A concise view of how Muhammad Rafiq thinks about data, organized systems, useful technology, and cleaner work.",
  alternates: {
    canonical: "/perspectives"
  }
};

const principles = [
  {
    title: "Understand the system.",
    body: "I start with how things actually work: the data, tools, workflows, and decisions behind them."
  },
  {
    title: "Keep people close to the work.",
    body: "Good groups need people who notice what is slipping, clarify ownership, and keep momentum from disappearing between meetings."
  },
  {
    title: "Organize the inputs.",
    body: "Clean files, reliable data, and fewer manual steps make better decisions easier to reach."
  },
  {
    title: "Make it easier to use.",
    body: "Taste is operational. Clear interfaces and coherent details make systems easier to trust, use, and improve."
  }
];

const focus = [
  "reliable data",
  "organized systems",
  "useful technology",
  "clear ownership",
  "better workflows",
  "clean handoffs",
  "less friction",
  "faster decisions"
];

const detailChecks = [
  { label: "Data", value: "make it reliable" },
  { label: "Tools", value: "make them useful" },
  { label: "Ownership", value: "keep it clear" },
  { label: "Flow", value: "remove the drag" }
];

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.muharafiq.com" },
    { "@type": "ListItem", position: 2, name: "Perspectives", item: "https://www.muharafiq.com/perspectives" }
  ]
};

export default function PerspectivesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <SiteFrame currentPath="/perspectives">
        <PageIntro
          eyebrow="Perspectives"
          title="Clear systems make better work easier."
          description="A few principles for data, technology, organization, and the quiet cleanup that keeps groups moving."
        />

        <section className="border-t border-foreground/[0.045] py-14 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[0.68fr_1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="max-w-sm font-display text-3xl leading-tight tracking-[-0.04em] text-foreground sm:text-4xl">
                Clean data. Useful tools. Less drag.
              </p>
              <p className="mt-5 max-w-sm text-sm font-light leading-7 text-foreground/58">
                I like systems that make the next step obvious, keep ownership clear, and stay light enough to move.
              </p>
              <FadeIn delay={120}>
                <PerspectivesAmbientScene />
              </FadeIn>
            </div>

            <div className="space-y-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {principles.map((principle) => (
                  <article
                    key={principle.title}
                    className="rounded-[1.35rem] border border-border bg-card/70 p-6 shadow-soft"
                  >
                    <h2 className="font-display text-2xl tracking-[-0.04em] text-foreground">
                      {principle.title}
                    </h2>
                    <p className="mt-4 text-sm font-light leading-7 text-foreground/68">
                      {principle.body}
                    </p>
                  </article>
                ))}
              </div>

              <div className="rounded-[1.35rem] border border-border bg-card/70 p-6 shadow-soft">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">Working focus</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs font-light text-foreground/68"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-4">
                {detailChecks.map((item) => (
                  <article key={item.label} className="rounded-[1.1rem] border border-border bg-card/60 p-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-foreground/38">{item.label}</p>
                    <p className="mt-3 text-sm font-light leading-6 text-foreground/70">{item.value}</p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </SiteFrame>
    </>
  );
}
