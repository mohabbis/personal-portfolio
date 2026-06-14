import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { PerspectivesAmbientScene } from "@/components/portfolio/perspectives-ambient-scene";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Perspectives",
  description:
    "A concise view of how Muhammad Rafiq thinks about UX direction, visual polish, systems, and detail-led execution.",
  alternates: {
    canonical: "/perspectives"
  }
};

const principles = [
  {
    title: "Make it legible.",
    body: "A page should explain what matters quickly: where to look, what changed, and why the details are there."
  },
  {
    title: "Use motion carefully.",
    body: "Interactive pieces should guide attention, not perform for no reason. Movement works best when it clarifies sequence."
  },
  {
    title: "Design the details.",
    body: "Spacing, labels, hierarchy, surface treatment, and object placement make an interface feel considered."
  },
  {
    title: "Reduce the copy load.",
    body: "Less explaining. More visual structure. The page should feel easier to scan than a committee-generated PDF, which is a low bar humanity still misses."
  }
];

const craft = [
  "visual hierarchy",
  "interactive previews",
  "motion direction",
  "detail polish",
  "spatial clarity",
  "case-study framing",
  "mobile scanning",
  "brand consistency"
];

const detailChecks = [
  { label: "Hierarchy", value: "headline, proof, next step" },
  { label: "Flow", value: "scan, pause, inspect, act" },
  { label: "Interaction", value: "useful motion, not decoration" },
  { label: "Finish", value: "spacing, contrast, cleanup" }
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
          title="Make the interface do more of the talking."
          description="UX direction, visual hierarchy, interactive presentation, and the small details that make a page feel intentional."
        />

        <section className="border-t border-foreground/[0.045] py-14 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[0.68fr_1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="max-w-sm font-display text-3xl leading-tight tracking-[-0.04em] text-foreground sm:text-4xl">
                Less text. Better cues. Cleaner decisions.
              </p>
              <p className="mt-5 max-w-sm text-sm font-light leading-7 text-foreground/58">
                I like pages that use layout, interaction, rhythm, and detail to make the idea easier to understand before the copy has to work too hard.
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
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">UX direction</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {craft.map((item) => (
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
