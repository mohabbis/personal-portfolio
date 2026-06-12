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
    "Muhammad Rafiq: perspective on strategy, product, operations, design, and the systems that make work easier to run.",
  alternates: {
    canonical: "/about"
  }
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
                className="object-cover"
                sizes="(min-width: 1024px) 35vw, 90vw"
                priority
              />
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-5 text-lg font-light leading-8 text-foreground/72">
              {siteConfig.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {coreInterests.map((item) => (
                <article key={item.title} className="rounded-[1.25rem] border border-border bg-card/75 p-5 shadow-soft">
                  <h2 className="text-base font-medium text-foreground">{item.title}</h2>
                  <p className="mt-3 text-sm font-light leading-6 text-foreground/65">{item.description}</p>
                </article>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {interestTags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </Container>
      </section>
      </SiteFrame>
    </>
  );
}
