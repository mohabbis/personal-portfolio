import type { Metadata } from "next";
import Image from "next/image";

import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Muhammad Rafiq: product, strategy, and operations work at the intersection of financial thinking and product design."
};

const coreInterests = [
  {
    title: "Consulting and Strategy",
    description:
      "Helping organizations understand their bottlenecks and design the operational or product changes that unlock growth or efficiency."
  },
  {
    title: "Operations and Finance",
    description:
      "Building systems (budgets, processes, vendor relationships, automation) that scale the work without proportional increases in overhead or friction."
  },
  {
    title: "Product Design",
    description:
      "Designing interfaces and systems that make complexity accessible without oversimplifying. The goal is clarity, not minimalism."
  },
  {
    title: "Technology and Automation",
    description:
      "Smart home, web infrastructure, automation logic. Technology should remove friction from repeated work and make systems observable."
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

export default function AboutPage() {
  return (
    <SiteFrame currentPath="/about">
      <PageIntro
        eyebrow="About"
        title="Building products and operations that make systems easier to understand and use."
        description="Product, strategy, and operations work at the intersection of financial thinking and design."
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
                What I&apos;ve Done
              </h2>
              <p className="text-base leading-8 text-muted-foreground">
                Led student organizations through budget management, vendor relationships, and the financial structures that keep operations stable. Shipped consumer software on the App Store, built web properties for service businesses, and kept systems coherent through growth. Web design is a discipline where intent matters.
              </p>
            </div>

            <div className="space-y-5 border-t border-foreground/[0.07] pt-8">
              <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                How I Work
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-foreground">Constraints and leverage.</p>
                  <p className="mt-2 text-base leading-8 text-muted-foreground">
                    Every system has limits: time, information, resources, incentives. The productive move is finding where they actually bind, not working harder inside them. That means saying no to things that feel urgent but aren&apos;t blocking progress, and investing in the decisions that enable everything downstream.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Writing as a forcing function.</p>
                  <p className="mt-2 text-base leading-8 text-muted-foreground">
                    I document the thinking behind every significant decision: product specs, financial models, technical plans. Clear writing forces clear thinking. If the artifact isn&apos;t usable by someone other than me, the thinking wasn&apos;t finished.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Systems, not heroics.</p>
                  <p className="mt-2 text-base leading-8 text-muted-foreground">
                    The goal is always to build something that runs without me. That means choosing durable structures over clever workarounds, and being willing to slow down now to make the next mile easier to walk.
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
  );
}
