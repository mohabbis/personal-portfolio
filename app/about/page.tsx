import type { Metadata } from "next";

import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { ProfileImage } from "@/components/ui/profile-image";
import { Tag } from "@/components/ui/tag";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig, workingPrinciples } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Muhammad Rafiq — a portfolio shaped by strategy, design, systems, photography, and creative technology."
};

export default function AboutPage() {
  return (
    <SiteFrame currentPath="/about">
      <PageIntro
        eyebrow="About"
        title="Strategy, design, systems, and image-making."
        description="I like work that feels clear, warm, and finished."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="space-y-5">
            <div className="flex items-center gap-5">
              <ProfileImage className="h-24 w-24 flex-shrink-0 sm:h-28 sm:w-28" priority />
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
            eyebrow="What keeps recurring"
            title="Strategy, design, systems, and photography."
            description="The same themes show up again and again in different forms."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {siteConfig.focusAreas.bullets.map((bullet) => (
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
