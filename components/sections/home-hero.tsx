import Image from "next/image";

import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

const heroSignals = ["Strategy", "Product", "Creative technology"];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-foreground/[0.07] bg-background">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-foreground/5" />
      <div className="pointer-events-none absolute inset-x-6 top-10 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />

      <Container className="relative grid min-h-[760px] gap-12 py-16 sm:py-24 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.78fr)] lg:items-center lg:py-20">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-6 animate-hero-2">
            <h1 className="max-w-4xl font-display text-[clamp(3.45rem,8.4vw,8.2rem)] leading-[0.88] tracking-[-0.075em] text-foreground">
              Leaving every room a little brighter.
            </h1>
            <p className="max-w-[34rem] text-lg font-light leading-8 text-muted-foreground sm:text-xl">
              {siteConfig.hero.subheadline}
            </p>
          </div>

          <div className="flex flex-col gap-5 animate-hero-3 sm:flex-row sm:items-center">
            <ButtonLink href={siteConfig.hero.primaryCta.href} className="w-fit px-5 py-3">
              {siteConfig.hero.primaryCta.label}
            </ButtonLink>
            <div className="flex flex-wrap items-center gap-2 text-[11px] tracking-[0.16em] text-foreground/55">
              {heroSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-foreground/10 bg-card/60 px-3 py-1.5 shadow-card backdrop-blur-xl"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative animate-hero-2 lg:justify-self-end">
          <div className="absolute -inset-8 rounded-[3rem] bg-accent/10 blur-2xl" />
          <figure className="relative mx-auto w-full max-w-[27rem] overflow-hidden rounded-[2.35rem] border border-white/20 bg-white/[0.08] p-2 shadow-lift backdrop-blur-2xl lg:max-w-[31rem]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.85rem] bg-card">
              <Image
                src="/images/profile/headshot.jpg"
                alt="Portrait of Muha"
                fill
                priority
                sizes="(min-width: 1280px) 496px, (min-width: 1024px) 42vw, 92vw"
                className="object-cover object-[50%_16%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/25" />
            </div>
            <figcaption className="flex items-center justify-between px-3 py-3 text-[11px] tracking-[0.14em] text-foreground/55">
              <span>MUHA</span>
              <span>Ann Arbor · Chicago</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
