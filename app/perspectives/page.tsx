import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { PerspectivesAmbientScene } from "@/components/portfolio/perspectives-ambient-scene";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Perspectives",
  description:
    "A few things Muhammad Rafiq has come to believe about data, tools, and the quiet work of keeping a group moving.",
  alternates: {
    canonical: "/perspectives"
  }
};

const principles = [
  {
    title: "Start with how it actually works",
    body: "Before I touch anything, I want to see the real workflow: where the data lives, who owns what, and which step everyone quietly dreads. Most of the problem is usually hiding right there."
  },
  {
    title: "Keep a person close to the work",
    body: "Tools don't notice when something starts to slip; people do. The role that keeps a group moving is usually someone catching the dropped thread before it turns into a fire drill."
  },
  {
    title: "Clean inputs beat clever fixes",
    body: "A reliable spreadsheet and two fewer manual steps will quietly outperform almost any dashboard. I'd rather fix the source than build something smart on top of a mess."
  },
  {
    title: "Make it pleasant to use",
    body: "Taste isn't decoration. When the interface is clear and the small details line up, people trust the thing — and a tool only helps if people actually keep reaching for it."
  }
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
          title="Notes on keeping things working."
          description="A few things I've come to believe about data, tools, and the quiet work of keeping a group moving."
        />

        <section className="border-t border-foreground/[0.045] py-14 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[0.68fr_1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="max-w-sm font-display text-3xl leading-tight tracking-[-0.04em] text-foreground sm:text-4xl">
                I'm drawn to systems that make the next step obvious.
              </p>
              <p className="mt-5 max-w-sm text-sm font-light leading-7 text-foreground/58">
                Most of what I do isn't glamorous. Tidying the inputs, naming the owner, cutting the step nobody needed. Done right, it just feels like things suddenly start to move.
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
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">The unglamorous version</p>
                <p className="mt-4 max-w-xl text-sm font-light leading-7 text-foreground/68">
                  None of this looks impressive on a slide. It's renaming files so the next person isn't lost, writing the one doc that answers the question people keep asking, deleting a step that only survived out of habit. Small on its own, but it compounds, and after a while the whole thing just runs quieter.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </SiteFrame>
    </>
  );
}
