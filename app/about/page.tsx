import type { Metadata } from "next";
import Image from "next/image";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { PixelLaptop } from "@/components/ui/pixel-laptop";
import { Tag } from "@/components/ui/tag";
import headshotSmiling from "@/public/images/profile/headshot-smiling.jpg";
import { siteConfig, workingPrinciples } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Muhammad Rafiq — consulting-focused analyst with a track record of structured problem-solving, clear communication, and polished client-facing work."
};

export default function AboutPage() {
  return (
    <SiteFrame currentPath="/about">
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-12 flex items-center gap-5 sm:mb-14">
            <PixelLaptop className="h-16 w-auto flex-shrink-0 sm:h-20" />
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">About</p>
              <h1 className="mt-1 font-display text-3xl text-foreground sm:text-4xl">I care about getting it right.</h1>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)] lg:items-start">
            <div className="space-y-6">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border border-white/15 bg-card shadow-soft sm:h-28 sm:w-28">
                <Image
                  src={headshotSmiling}
                  alt="Muhammad Rafiq"
                  fill
                  priority
                  sizes="(min-width: 640px) 128px, 112px"
                  className="object-cover object-[center_15%]"
                />
              </div>

              <h2 className="font-display text-3xl text-foreground sm:text-4xl">
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
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-card/38 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Where I Fit"
            title="Targeting management consulting. Open to strategy and operations roles."
            description="I bring structured analytical thinking, clear communication, and a track record of taking ambiguous problems to polished outcomes."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {siteConfig.whatIBring.bullets.map((bullet) => (
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
