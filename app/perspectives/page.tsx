import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { PerspectivesAmbientScene } from "@/components/portfolio/perspectives-ambient-scene";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Perspectives",
  description:
    "A concise view of how Muhammad Rafiq thinks about honesty, organized thinking, useful systems, and cleaner work.",
  alternates: {
    canonical: "/perspectives"
  }
};

const principles = [
  {
    title: "Practice what you preach.",
    body: "Honesty makes the work stronger. Say what is real, fix what is not, and do not dress up weak logic with better packaging."
  },
  {
    title: "Make thinking usable.",
    body: "Organized thinking should make life easier for other people. Clear structure, clear next steps, fewer loose ends."
  },
  {
    title: "Clean up the drag.",
    body: "Unnecessary pieces pile up quietly. Old files, extra steps, vague copy, and half-decisions slow the whole system down."
  },
  {
    title: "Leave it easier to use.",
    body: "The goal is not to make things look busy. The goal is to make the right choice easier to see and act on."
  }
];

const focus = [
  "honest framing",
  "organized thinking",
  "clear next steps",
  "cleaner handoffs",
  "less clutter",
  "better structure",
  "useful details",
  "easier decisions"
];

const detailChecks = [
  { label: "Truth", value: "say what is real" },
  { label: "Order", value: "make it easier to follow" },
  { label: "Cleanup", value: "remove what slows it down" },
  { label: "Use", value: "help people move" }
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
          title="Clean thinking should make life easier."
          description="A few principles for honest work, organized systems, and removing the extra pieces that slow people down."
        />

        <section className="border-t border-foreground/[0.045] py-14 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[0.68fr_1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="max-w-sm font-display text-3xl leading-tight tracking-[-0.04em] text-foreground sm:text-4xl">
                Be honest. Stay organized. Remove the drag.
              </p>
              <p className="mt-5 max-w-sm text-sm font-light leading-7 text-foreground/58">
                Good work is usually less about adding more and more about making the existing pieces easier to understand, use, and maintain.
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
