import type { Metadata } from "next";
import Image from "next/image";

import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { perspectivesCards, perspectivesHero, perspectivesLead } from "@/data/perspectives";

export const metadata: Metadata = {
  title: "Perspectives",
  description: "Short notes on strategy, taste, and organization."
};

export default function PerspectivesPage() {
  return (
    <SiteFrame currentPath="/perspectives">
      <PageIntro
        eyebrow={perspectivesHero.eyebrow}
        title={perspectivesHero.title}
        description={perspectivesHero.description}
      />

      <section className="bg-background py-14 sm:py-18">
        <Container className="space-y-8">
          <figure className="overflow-hidden rounded-[2rem] border border-foreground/10 bg-[#f4ede1] shadow-[0_24px_80px_hsl(var(--foreground)/0.08)]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/perspectives/workbench-desk.png"
                alt="Warm editorial desk with a laptop, camera, notebook, and architectural model"
                fill
                priority
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover"
              />
            </div>
          </figure>

          <div className="grid gap-4 md:grid-cols-3">
            {perspectivesCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.5rem] border border-foreground/10 bg-card/55 p-6 shadow-soft"
              >
                <h2 className="font-display text-2xl text-foreground">{card.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.description}</p>
              </article>
            ))}
          </div>

          <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            {perspectivesLead}
          </p>
        </Container>
      </section>
    </SiteFrame>
  );
}
