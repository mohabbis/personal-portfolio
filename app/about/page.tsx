import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import headshotSmiling from "@/public/images/profile/headshot-smiling.jpg";
import { Tag } from "@/components/ui/tag";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig, workingPrinciples } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Muhammad Rafiq — strategy-minded builder focused on digital products, operational thinking, and client-ready execution."
};

export default function AboutPage() {
  return (
    <SiteFrame currentPath="/about">
      <PageIntro
        eyebrow="About"
        title="Strategy-minded builder focused on digital products and polished execution."
        description="My work sits at the intersection of strategy, systems thinking, and execution. I take ambiguous ideas, structure the problem, and carry the work through to a polished final product."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="space-y-5">
            <div className="flex items-center gap-5">
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full border border-white/15 bg-card shadow-soft sm:h-28 sm:w-28">
                <Image
                  src={headshotSmiling}
                  alt="Muhammad Rafiq"
                  fill
                  priority
                  sizes="(min-width: 640px) 128px, 112px"
                  className="object-cover object-[center_15%]"
                />
              </div>
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                About
              </p>
            </div>

            <h2 className="font-display text-4xl text-foreground sm:text-5xl">
              {siteConfig.about.intro}
            </h2>

            {siteConfig.about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-8 text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-3">
              {siteConfig.about.strengths.map((strength) => (
                <Tag key={strength}>{strength}</Tag>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {workingPrinciples.map((principle) => (
              <article
                key={principle.title}
                className="rounded-[1.5rem] border border-white/10 bg-background/72 p-6 shadow-soft"
              >
                <h3 className="font-display text-2xl text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-card/38 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Where I Fit"
            title="Looking for roles across consulting, strategy, product, and creative technology."
            description="I bring structured problem-solving, client communication skills, and digital product experience to strategy-focused roles."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {siteConfig.consultingReady.bullets.map((bullet) => (
              <article
                key={bullet}
                className="rounded-[1.5rem] border border-white/10 bg-background/72 p-6 shadow-soft"
              >
                <p className="text-sm leading-7 text-muted-foreground">{bullet}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}