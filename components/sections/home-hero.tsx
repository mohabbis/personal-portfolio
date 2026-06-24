import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";

const visualCards = [
  {
    label: "CGI",
    title: "Spatial concepts",
    detail: "Product scenes, built environments, and visual studies."
  },
  {
    label: "Graphic Design",
    title: "Identity & layout",
    detail: "Posters, editorial systems, campaign visuals, and brand assets."
  },
  {
    label: "Web",
    title: "Editorial interfaces",
    detail: "Case-study pages, polished interactions, and structured storytelling."
  }
];

export function HomeHero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(99,61,42,0.12),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(31,23,18,0.08),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-x-6 top-8 h-px bg-gradient-to-r from-transparent via-foreground/12 to-transparent" />

      <Container className="relative grid gap-12 py-14 sm:py-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(340px,0.68fr)] lg:items-center lg:py-16">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-5 animate-hero-2">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent/80">
                Muhammad Rafiq
              </p>
              <span className="text-foreground/20" aria-hidden="true">
                /
              </span>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent/80">
                CGI · Graphic Design · Strategy
              </p>
            </div>
            <h1 className="max-w-4xl font-display text-[clamp(3.2rem,8vw,7.6rem)] leading-[0.9] tracking-[-0.055em] text-foreground">
              {siteConfig.hero.headline}
            </h1>
            <p className="max-w-[35rem] text-base font-light leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {siteConfig.hero.subheadline}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 animate-hero-3">
            <Link
              href={siteConfig.hero.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/12 bg-foreground px-5 py-3 text-sm font-light text-background shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-card"
            >
              {siteConfig.hero.primaryCta.label}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
            <Link
              href={siteConfig.hero.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/12 bg-card/60 px-5 py-3 text-sm font-light text-foreground shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-card/80"
            >
              {siteConfig.hero.secondaryCta.label}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="relative animate-hero-2 lg:justify-self-end">
          <div className="absolute -inset-8 rounded-[3rem] bg-accent/12 blur-2xl" />
          <div className="relative mx-auto w-full max-w-[28rem] overflow-hidden rounded-[2.1rem] border border-white/20 bg-white/[0.08] p-3 shadow-lift backdrop-blur-2xl">
            <div className="rounded-[1.6rem] border border-foreground/10 bg-card/70 p-4 shadow-card">
              <div className="grid aspect-[4/5] grid-rows-[0.9fr_1.1fr] gap-3 overflow-hidden rounded-[1.25rem]">
                <div className="relative overflow-hidden rounded-[1rem] border border-foreground/10 bg-[#efe4d4]">
                  <div className="absolute left-6 top-6 h-24 w-24 rounded-full border border-foreground/15 bg-background/65 blur-[1px]" />
                  <div className="absolute bottom-6 right-6 h-28 w-40 rounded-[2rem] border border-foreground/10 bg-foreground/[0.08] shadow-soft" />
                  <div className="absolute left-10 top-24 h-32 w-32 rotate-12 rounded-[1.8rem] border border-accent/20 bg-accent/15" />
                  <p className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45">
                    CGI study
                  </p>
                </div>
                <div className="grid grid-cols-[0.72fr_1fr] gap-3">
                  <div className="rounded-[1rem] border border-foreground/10 bg-foreground p-4 text-background">
                    <p className="font-display text-5xl leading-none tracking-[-0.08em]">M</p>
                    <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-background/55">
                      Identity
                    </p>
                  </div>
                  <div className="space-y-3 rounded-[1rem] border border-foreground/10 bg-background/80 p-4">
                    <div className="h-2 w-16 rounded-full bg-foreground/20" />
                    <div className="h-2 w-28 rounded-full bg-foreground/12" />
                    <div className="mt-8 grid grid-cols-2 gap-2">
                      <div className="h-16 rounded-[0.8rem] bg-accent/18" />
                      <div className="h-16 rounded-[0.8rem] bg-foreground/10" />
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/42">
                      Graphic system
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <section className="relative border-t border-foreground/[0.045] bg-background/45 py-10 sm:py-14">
        <Container>
          <div className="grid gap-3 lg:grid-cols-3">
            {visualCards.map((card) => (
              <article
                key={card.label}
                className="rounded-[1.35rem] border border-foreground/10 bg-card/55 p-5 shadow-soft backdrop-blur-xl"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent/80">
                  {card.label}
                </p>
                <h2 className="mt-4 font-display text-2xl tracking-[-0.045em] text-foreground">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm font-light leading-6 text-muted-foreground">
                  {card.detail}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </section>
  );
}
