import type { Metadata } from "next";
import Image from "next/image";

import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
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
        <Container className="grid gap-10 lg:grid-cols-[minmax(280px,0.55fr)_minmax(0,1fr)] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.5rem] border border-white/10 bg-card shadow-soft sm:max-w-md lg:mx-0">
              <Image
                src="/images/profile/Headshot Smiling With Watch.JPG"
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
