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
        title="How I think about work, systems, and useful execution."
        description="A working view of strategy, product, operations, and the habits that keep ambitious work from becoming decorative chaos."
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
                What I Manage
              </h2>
              <p className="text-base leading-8 text-muted-foreground">
                My work usually sits across several tracks at once: coursework, project deadlines, student organization leadership, alumni coordination, budgeting, vendor communication, web development, product planning, and technology systems. The challenge is not only doing the tasks. It is knowing which tasks deserve immediate attention, which ones need to be scheduled, which ones should be handed off, and which ones should quietly disappear before they waste more time.
              </p>
            </div>

            <div className="space-y-5 border-t border-foreground/[0.07] pt-8">
              <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                How I Work
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-foreground">Small tasks get contained.</p>
                  <p className="mt-2 text-base leading-8 text-muted-foreground">
                    Quick work gets handled quickly. Anything that requires more attention gets placed on a calendar, attached to a deadline, or turned into a clear next step. Letting small tasks float around is how people accidentally build an inbox-shaped prison.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Coordination needs structure.</p>
                  <p className="mt-2 text-base leading-8 text-muted-foreground">
                    Meetings, follow-ups, budgets, and handoffs only work when ownership is obvious. I try to make the next action visible so collaborators know what needs to happen without decoding a pile of messages like they are excavating an ancient ruin.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Systems beat clutter.</p>
                  <p className="mt-2 text-base leading-8 text-muted-foreground">
                    I remove outdated files, stale documents, dead ideas, and repeated manual work whenever they stop serving the goal. A clean system is not about looking organized. It is about making the important work easier to find and easier to finish.
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
