import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { PerspectivesAmbientScene } from "@/components/portfolio/perspectives-ambient-scene";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Perspectives",
  description:
    "A tighter view of Muhammad Rafiq's visual process across 3D modeling, video, systems, and detail-led execution.",
  alternates: {
    canonical: "/perspectives"
  }
};

const principles = [
  {
    title: "Model the real thing.",
    body: "Site flow. Massing. Signage. Scale. If the physical logic is wrong, the render is just expensive decoration."
  },
  {
    title: "Shoot for motion.",
    body: "Camera paths, pacing, reveals, and transitions should explain the idea before a paragraph has to."
  },
  {
    title: "Detail until it reads.",
    body: "Materials, shadows, labels, spacing, reflections, curb lines, and object placement carry trust."
  },
  {
    title: "Edit out noise.",
    body: "Less copy. Sharper framing. More useful visual evidence. The work should show its own logic."
  }
];

const craft = [
  "3D site studies",
  "traffic-flow overlays",
  "camera composition",
  "video pacing",
  "lighting passes",
  "brand-detail placement",
  "materials + surfaces",
  "spatial storytelling"
];

const detailChecks = [
  { label: "Scale", value: "cars, lanes, doors, signs" },
  { label: "Flow", value: "entry, queue, service, exit" },
  { label: "Camera", value: "angle, lens, motion, reveal" },
  { label: "Finish", value: "shadows, polish, cleanup" }
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
          title="Build the detail until it explains itself."
          description="3D modeling, video, spatial systems, and the small visual decisions that make work feel finished."
        />

        <section className="border-t border-foreground/[0.045] py-14 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[0.68fr_1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="max-w-sm font-display text-3xl leading-tight tracking-[-0.04em] text-foreground sm:text-4xl">
                Less explanation. More proof in the frame.
              </p>
              <p className="mt-5 max-w-sm text-sm font-light leading-7 text-foreground/58">
                The best visual systems are quiet: correct scale, clean sequence, readable movement, and details that survive a second look.
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
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">Craft focus</p>
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
