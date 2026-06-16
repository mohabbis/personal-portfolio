import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { PerspectivesAmbientScene } from "@/components/portfolio/perspectives-ambient-scene";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Perspectives",
  description:
    "Notes from Muhammad Rafiq on systems, design, tools, and the small decisions that make work easier to manage.",
  alternates: {
    canonical: "/perspectives"
  }
};

const principles = [
  {
    title: "Understand the actual workflow first",
    body: "Before I redesign anything, I want to know how it works right now. Where the information starts, where it gets lost, who owns the next step, and which part everyone has quietly accepted as annoying. That is usually where the real problem is."
  },
  {
    title: "Good systems still need judgment",
    body: "Automation is useful, but it is not a substitute for knowing what matters. A tool can move faster than a person, but it cannot tell when the situation changed, the context got weird, or someone needs to step in."
  },
  {
    title: "Fix the source, not the symptoms",
    body: "A messy spreadsheet with a nice dashboard on top is still a messy spreadsheet. I would rather clean the inputs, remove duplicate steps, and make the process easier to trust before pretending the interface solved everything."
  },
  {
    title: "Design should make things easier to keep using",
    body: "Taste matters because people notice when something feels careless. Clear labels, better spacing, fewer dead ends, and small visual decisions all affect whether people actually use the thing after the first week."
  }
];

const noteSeeds = [
  "Why good systems start with bad spreadsheets",
  "Design follows strategy",
  "Automation still needs judgment",
  "Public credibility vs. private operations",
  "What smart homes get wrong"
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
          title="Notes on systems, taste, and the parts people skip."
          description="A living notes section on how things are built, why they break, and what makes them easier to actually use."
        />

        <section className="border-t border-foreground/[0.045] py-14 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[0.68fr_1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="max-w-sm font-display text-3xl leading-tight tracking-[-0.04em] text-foreground sm:text-4xl">
                I pay attention to the parts of a system people usually ignore.
              </p>
              <p className="mt-5 max-w-sm text-sm font-light leading-7 text-foreground/58">
                The naming, the handoff, the missing owner, the extra click, the file nobody can find. Small problems look harmless until they become the reason nothing moves cleanly.
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
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">Notes index</p>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {noteSeeds.map((note) => (
                    <p key={note} className="rounded-full border border-foreground/[0.08] bg-background/65 px-4 py-2 text-sm font-light text-muted-foreground">
                      {note}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.35rem] border border-border bg-card/70 p-6 shadow-soft">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">The practical version</p>
                <p className="mt-4 max-w-xl text-sm font-light leading-7 text-foreground/68">
                  Most useful work is not dramatic. It is cleaning the data before building on it, writing the doc people keep asking for, making the next step obvious, and removing the process that only exists because nobody questioned it. It does not always look impressive, but it makes the whole thing run better.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </SiteFrame>
    </>
  );
}
