import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { PerspectivesAmbientScene } from "@/components/portfolio/perspectives-ambient-scene";
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
        <div className="relative bg-[#0b1626]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-0 h-[60vh] w-full max-w-3xl -translate-x-1/2 rounded-[50%] bg-[#1e3a5f] opacity-[0.45] blur-[170px]" />
            <div className="absolute bottom-0 right-0 h-[42vh] w-[56vw] rounded-[50%] bg-[#d99a3a] opacity-[0.06] blur-[170px]" />
          </div>

          <section className="relative overflow-hidden border-b border-white/[0.07] pb-16 pt-20 sm:pt-24">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-[480px] w-[600px] rounded-full bg-[#1e3a5f] opacity-[0.4] blur-[130px]" />
              <div className="absolute right-0 top-8 h-[300px] w-[420px] rounded-full bg-[#d99a3a] opacity-[0.08] blur-[120px]" />
            </div>
            <Container className="relative">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#e0b27a]">Perspectives</p>
              <h1 className="mt-5 max-w-3xl font-display text-4xl font-light leading-[1.05] tracking-[-0.04em] text-white/90 sm:text-6xl">
                Notes on systems, taste, and the parts people skip.
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-white/60">
                A living notes section on how things are built, why they break, and what makes them easier to actually use.
              </p>
            </Container>
          </section>

          <section className="relative py-14 sm:py-20">
            <Container className="grid gap-10 lg:grid-cols-[0.68fr_1fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <p className="max-w-sm font-display text-3xl font-light leading-tight tracking-[-0.04em] text-white/90 sm:text-4xl">
                  I pay attention to the parts of a system people usually ignore.
                </p>
                <p className="mt-5 max-w-sm text-sm font-light leading-7 text-white/55">
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
                      className="rounded-[1.35rem] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(30,58,95,0.32),rgba(14,28,48,0.22))] p-6 shadow-[0_18px_60px_rgba(8,18,33,0.4)] transition hover:border-[#e0b27a]/28 hover:shadow-[0_22px_80px_rgba(217,154,58,0.1)]"
                    >
                      <h2 className="font-display text-2xl tracking-[-0.04em] text-white/90">
                        {principle.title}
                      </h2>
                      <p className="mt-4 text-sm font-light leading-7 text-white/65">
                        {principle.body}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="rounded-[1.35rem] border border-white/[0.08] bg-white/[0.03] p-6 shadow-[0_18px_60px_rgba(8,18,33,0.4)]">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#e0b27a]">Notes index</p>
                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {noteSeeds.map((note) => (
                      <p key={note} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm font-light text-white/60">
                        {note}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.35rem] border border-white/[0.08] bg-white/[0.03] p-6 shadow-[0_18px_60px_rgba(8,18,33,0.4)]">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#e0b27a]">The practical version</p>
                  <p className="mt-4 max-w-xl text-sm font-light leading-7 text-white/65">
                    Most useful work is not dramatic. It is cleaning the data before building on it, writing the doc people keep asking for, making the next step obvious, and removing the process that only exists because nobody questioned it. It does not always look impressive, but it makes the whole thing run better.
                  </p>
                </div>
              </div>
            </Container>
          </section>
        </div>
      </SiteFrame>
    </>
  );
}
