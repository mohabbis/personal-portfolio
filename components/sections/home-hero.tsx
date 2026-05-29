import Image from "next/image";

import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-foreground/[0.06] bg-background">
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(ellipse_at_48%_0%,hsl(var(--accent)/0.12),transparent_62%)]" />
      <div className="absolute inset-x-8 bottom-0 hidden h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent lg:block" />

      <Container className="relative grid gap-12 py-24 sm:py-32 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-end lg:py-28">
        <div className="space-y-10 lg:pb-10">
          <div className="animate-hero-1 space-y-4">
            <p className="font-display text-2xl leading-none text-foreground sm:text-3xl">
              {siteConfig.name}
            </p>
            <div className="h-px w-24 bg-foreground/15" />
          </div>

          <div className="space-y-6 animate-hero-2">
            <h1 className="max-w-4xl font-display text-6xl tracking-[-0.045em] text-foreground sm:text-7xl lg:text-8xl lg:leading-[0.88]">
              <span className="block">Leaving every room</span>
              <span className="block">a little brighter.</span>
            </h1>
            <p className="max-w-md text-lg font-light leading-8 text-muted-foreground">
              {siteConfig.hero.subheadline}
            </p>
          </div>

          <div className="animate-hero-3 flex items-center gap-6">
            <ButtonLink href={siteConfig.hero.primaryCta.href}>
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

        <div className="relative hidden lg:block animate-hero-2">
          <div className="absolute -left-10 top-12 z-10 max-w-[11rem] border-l border-foreground/12 pl-5 text-sm font-light leading-7 text-muted-foreground">
            A living archive of work, rooms, interfaces, systems, and visual fragments.
          </div>
          <div className="relative ml-auto h-[620px] w-full max-w-[520px] overflow-hidden rounded-[2.75rem] border border-foreground/10 bg-card shadow-[0_40px_120px_hsl(var(--foreground)/0.12)]">
            <Image
              src="/images/profile/headshot.jpg"
              alt="Muha Rafiq"
              fill
              priority
              sizes="(min-width: 1024px) 520px, 0px"
              className="object-cover object-[50%_16%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/18 via-transparent to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}
