import { highlights, siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { HeroPortrait } from "@/components/sections/hero-portrait";
import { Tag } from "@/components/ui/tag";

export function HomeHero() {
  return (
    <section className="relative border-b border-white/10 bg-background">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.18),transparent_46%)]" />
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-center lg:py-24">
        <div className="relative space-y-8">
          <Tag className="bg-card/80">{siteConfig.hero.eyebrow}</Tag>

          <div className="space-y-5">
            <h1 className="max-w-4xl font-display text-5xl tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {siteConfig.hero.headline}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-foreground/88 sm:text-xl">
              {siteConfig.hero.subheadline}
            </p>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              {siteConfig.hero.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href={siteConfig.hero.primaryCta.href}>
              {siteConfig.hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={siteConfig.hero.secondaryCta.href} variant="secondary">
              {siteConfig.hero.secondaryCta.label}
            </ButtonLink>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-white/10 bg-card/72 p-5 shadow-soft">
                <p className="font-display text-xl text-foreground">{item.title}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <HeroPortrait />
      </Container>
    </section>
  );
}
