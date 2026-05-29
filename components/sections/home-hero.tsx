import Image from "next/image";

import headshot from "@/public/images/profile/headshot.jpg";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-foreground/[0.06] bg-background">
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(ellipse_at_48%_0%,hsl(var(--accent)/0.12),transparent_62%)]" />

      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.82fr)] lg:gap-16">
          <div className="animate-hero-2 space-y-8">
            <h1 className="max-w-[16ch] font-display text-6xl tracking-[-0.05em] text-foreground sm:text-7xl lg:text-[7rem] lg:leading-[0.86]">
              <span className="block">Leaving every room</span>
              <span className="block">a little brighter.</span>
            </h1>
            <p className="max-w-md text-lg font-light leading-8 text-muted-foreground">
              {siteConfig.hero.subheadline}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <ButtonLink href={siteConfig.hero.primaryCta.href} trackEvent="hero_cta_click">
                {siteConfig.hero.primaryCta.label}
              </ButtonLink>
              <a
                href={siteConfig.hero.secondaryCta.href}
                className="border-b border-foreground/20 pb-1 text-sm font-light text-foreground/70 transition-colors hover:text-foreground"
              >
                {siteConfig.hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <figure className="animate-hero-3 relative mx-auto w-full max-w-[26rem] lg:mx-0 lg:ml-auto">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle,hsl(var(--accent)/0.16),transparent_70%)] blur-2xl" />
            <Image
              src={headshot}
              alt="Portrait of Muhammad Rafiq"
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 34vw, (min-width: 640px) 60vw, 90vw"
              className="aspect-[4/5] w-full rounded-[1.75rem] border border-foreground/10 object-cover object-[50%_18%] shadow-[0_30px_90px_hsl(var(--foreground)/0.14)]"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}
