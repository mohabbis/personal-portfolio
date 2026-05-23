import Image from "next/image";

import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-background">
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--accent)/0.14),transparent_60%)]" />

      <Container className="relative grid gap-10 py-24 sm:py-32 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.6fr)] lg:items-center lg:py-28">
        <div className="space-y-8">
          <div className="animate-hero-1">
            <Tag className="bg-card/80">{siteConfig.hero.eyebrow}</Tag>
          </div>

          <div className="space-y-5 animate-hero-2">
            <h1 className="font-display text-5xl tracking-tight text-foreground sm:text-6xl lg:text-7xl lg:leading-[0.92]">
              <span className="block">Leaving every room</span>
              <span className="block">a little brighter.</span>
            </h1>
            <p className="max-w-md text-lg leading-8 text-muted-foreground">
              {siteConfig.hero.subheadline}
            </p>
          </div>

          <div className="animate-hero-3">
            <ButtonLink href={siteConfig.hero.primaryCta.href}>
              {siteConfig.hero.primaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <div className="relative hidden lg:block animate-hero-2">
          <div className="relative h-[480px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-card shadow-soft">
            <Image
              src="/images/profile/headshot.jpg"
              alt="Muha Rafiq"
              fill
              priority
              sizes="(min-width: 1024px) 440px, 0px"
              className="object-cover object-[50%_18%]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
