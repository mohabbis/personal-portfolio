import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Perspectives",
  description:
    "A concise view of how Muhammad Rafiq thinks about systems, taste, strategy, and useful execution.",
  alternates: {
    canonical: "/perspectives"
  }
};

const principles = [
  {
    title: "Start with the room.",
    body:
      "Before changing a system, I try to understand the people inside it, the pressure they feel, and the decisions they avoid. Context usually explains more than the first complaint."
  },
  {
    title: "Make the next move obvious.",
    body:
      "Good strategy should reduce fog. A plan is useful when it clarifies what matters now, what can wait, and who owns the next step."
  },
  {
    title: "Taste is operational.",
    body:
      "Design is not decoration after the real work. Clear surfaces, restrained choices, and coherent details make systems easier to trust and use."
  },
  {
    title: "Remove the drag.",
    body:
      "Most projects collect clutter: extra steps, stale files, vague commitments, and repeated manual work. I like systems that stay light enough to move."
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
          title="How I think before I build."
          description="A short operating philosophy for strategy, systems, design, and the quiet work that makes ideas usable."
        />

        <section className="border-t border-foreground/[0.045] py-14 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="max-w-sm font-display text-3xl leading-tight tracking-[-0.04em] text-foreground sm:text-4xl">
                Clear thinking is usually less dramatic than people want it to be.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
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
          </Container>
        </section>
      </SiteFrame>
    </>
  );
}
