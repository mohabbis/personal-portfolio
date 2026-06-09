import type { Metadata } from "next";
import Image from "next/image";

import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Perspective",
  description:
    "Muhammad Rafiq: perspective on strategy, product, operations, design, and the systems that make work easier to run."
};

const coreInterests = [
  {
    title: "Strategy and Prioritization",
    description:
      "Turning scattered goals into a clear operating order, then separating urgent noise from work that actually moves the system forward."
  },
  {
    title: "Operations and Finance",
    description:
      "Building budgets, timelines, vendor processes, and coordination habits that keep projects stable without adding unnecessary overhead."
  },
  {
    title: "Product and Design",
    description:
      "Designing interfaces, websites, and workflows that make complex systems easier to understand, use, and maintain."
  },
  {
    title: "Technology and Automation",
    description:
      "Using web infrastructure, smart-home systems, and automation logic to reduce repeated work and make important information easier to act on."
  }
];

const interestTags = [
  "Strategy",
  "Product",
  "Operations",
  "Design",
  "Finance",
  "Technology",
  "Consulting",
  "Early-stage"
];

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.muharafiq.com" },
    { "@type": "ListItem", position: 2, name: "Perspective", item: "https://www.muharafiq.com/about" }
  ]
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <SiteFrame currentPath="/about">
      <PageIntro
        eyebrow="Perspective"
        title="Clear beats clever. Systems beat clutter."
        description="A working view of strategy, product, operations, and the habits that keep ambitious work from becoming motion without progress."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(280px,0.55fr)_minmax(0,1fr)] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.5rem] border border-white/10 bg-card shadow-soft sm:max-w-md lg:mx-0">
              <Image
                src="/images/profile/headshot-smiling.jpg"
                alt="Muha Rafiq"
                fill
                priority
                sizes="(min-width: 1024px) 380px, 100vw"
                className="object-cover object-[50%_18%]"
              />
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-5">
              <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                Background
              </h2>

              {siteConfig.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="space-y-5 border-t border-foreground/[0.07] pt-8">
              <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                Core Interests
              </h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {coreInterests.map((interest) => (
                  <article
                    key={interest.title}
                    className="rounded-[1.25rem] border border-foreground/[0.07] bg-background/72 p-5 shadow-soft"
                  >
                    <h3 className="text-base font-medium text-foreground">{interest.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{interest.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="space-y-5 border-t border-foreground/[0.07] pt-8">
              <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                The Work Behind the Work
              </h2>
              <div className="space-y-5 text-base leading-8 text-muted-foreground">
                <p>
                  Most work does not fall apart because people lack effort. It falls apart because priorities are unclear, ownership is vague, and small tasks are allowed to multiply until they start managing the room.
                </p>
                <p>
                  My work often sits between strategy, operations, design, and technology. That means translating scattered inputs into a usable order: what needs attention now, what needs a real deadline, what belongs with someone else, and what should be removed before it becomes decorative friction.
                </p>
              </div>
            </div>

            <div className="space-y-5 border-t border-foreground/[0.07] pt-8">
              <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                My Bias Is Toward Structure
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-foreground">Make the next action visible.</p>
                  <p className="mt-2 text-base leading-8 text-muted-foreground">
                    Quick work gets handled quickly. Deeper work gets scheduled, scoped, or attached to a clear owner. I try to make the next action obvious before urgency starts making decisions for everyone.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Protect the important work.</p>
                  <p className="mt-2 text-base leading-8 text-muted-foreground">
                    A calendar, budget, document, or roadmap is useful only if it helps people choose well. The point is not to look organized. The point is to give high-priority work enough space to actually happen.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Remove what no longer earns its place.</p>
                  <p className="mt-2 text-base leading-8 text-muted-foreground">
                    Old files, stale documents, unclear commitments, and repeated manual work quietly tax every project. I prefer systems that stay light enough to use and clear enough to trust.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5 border-t border-foreground/[0.07] pt-8">
              <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                What I Look For
              </h2>
              <div className="flex flex-wrap gap-2">
                {interestTags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </SiteFrame>
    </>
  );
}
