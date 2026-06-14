import type { Metadata } from "next";
import Image from "next/image";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";
import { perspectivesCards, perspectivesHero, perspectivesLead } from "@/data/perspectives";

export const metadata: Metadata = {
  title: "Perspectives",
  description: "Short notes on strategy, taste, and organization."
};

export default function PerspectivesPage() {
  return (
    <SiteFrame currentPath="/perspectives">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8efe3_0%,#f2e6d7_48%,#ebe0d3_100%)]">
        <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(67,46,28,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(67,46,28,0.05)_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="absolute -right-32 top-8 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(183,131,88,0.18),transparent_68%)] blur-3xl" />
        <div className="absolute -left-24 bottom-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(76,53,36,0.12),transparent_70%)] blur-3xl" />

        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end">
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.34em] text-foreground/45">
                <span>{perspectivesHero.eyebrow}</span>
                <span className="h-px w-10 bg-foreground/20" />
                <span>Notes</span>
              </div>

              <div className="max-w-4xl space-y-6">
                <h1 className="font-display text-6xl tracking-[-0.06em] text-foreground sm:text-7xl lg:text-[7.5rem] lg:leading-[0.84]">
                  {perspectivesHero.title}
                </h1>
                <p className="max-w-xl text-base leading-8 text-foreground/68 sm:text-lg">
                  {perspectivesHero.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {perspectivesCards.map((card) => (
                  <span
                    key={card.title}
                    className="rounded-full border border-foreground/10 bg-background/65 px-4 py-2 text-sm font-light text-foreground/72 shadow-[0_12px_30px_hsl(var(--foreground)/0.05)] backdrop-blur-sm"
                  >
                    {card.title}
                  </span>
                ))}
              </div>
            </div>

            <figure className="relative lg:translate-y-8">
              <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_35%_20%,hsl(var(--accent)/0.22),transparent_46%),radial-gradient(circle_at_70%_70%,rgba(102,71,43,0.14),transparent_40%)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-foreground/10 bg-[#efe7db] shadow-[0_28px_80px_hsl(var(--foreground)/0.1)]">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/perspectives/workbench-desk.png"
                    alt="Warm editorial desk with a laptop, camera, notebook, and architectural model"
                    fill
                    priority
                    sizes="(min-width: 1280px) 720px, (min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#24180f]/65 via-[#24180f]/20 to-transparent px-5 py-4">
                    <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#f7efe6]/75">
                      Desk study
                    </p>
                  </div>
                </div>
              </div>
            </figure>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {perspectivesCards.map((card, index) => (
              <article
                key={card.title}
                className={[
                  "rounded-[1.5rem] border border-foreground/10 bg-[#fffaf2]/85 p-6 shadow-[0_18px_48px_hsl(var(--foreground)/0.06)] backdrop-blur-sm",
                  index === 1 ? "md:-mt-6" : "",
                  index === 2 ? "md:mt-6" : ""
                ].join(" ")}
              >
                <p className="text-xs uppercase tracking-[0.28em] text-foreground/35">{card.title}</p>
                <p className="mt-4 text-sm leading-7 text-foreground/70">{card.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-foreground/10 pt-6 text-sm text-foreground/55 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl">{perspectivesLead}</p>
            <p>Warm neutrals. Quiet structure.</p>
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
