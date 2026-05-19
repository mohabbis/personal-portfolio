import { Lightbulb, LayoutGrid, Sparkles } from "lucide-react";
import { highlights, siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";

const HIGHLIGHT_ICONS: Record<string, React.ReactNode> = {
  Frame: <Lightbulb className="h-5 w-5 text-accent" />,
  Build: <LayoutGrid className="h-5 w-5 text-accent" />,
  Refine: <Sparkles className="h-5 w-5 text-accent" />,
};

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-background">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.18),transparent_46%)]" />
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.72fr)] lg:items-end">
          <div className="space-y-7">
            <div className="animate-hero-1">
              <Tag className="bg-card/80">{siteConfig.hero.eyebrow}</Tag>
            </div>

            <div className="space-y-4 animate-hero-2">
              <h1 className="max-w-4xl font-display text-5xl tracking-tight text-foreground sm:text-6xl lg:text-[5.75rem] lg:leading-[0.9]">
                <span className="block">Leaving every room</span>
                <span className="block">a little brighter.</span>
              </h1>
              <p className="max-w-xl text-lg leading-8 text-foreground/88 sm:text-xl">
                {siteConfig.hero.subheadline}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 animate-hero-3">
              <ButtonLink href={siteConfig.hero.primaryCta.href}>
                {siteConfig.hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={siteConfig.hero.secondaryCta.href} variant="secondary">
                {siteConfig.hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>

          <div className="animate-hero-4 space-y-3 lg:pb-1">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/18 to-white/6" />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Current focus</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/[0.08] bg-card/72 p-3 shadow-soft backdrop-blur-sm sm:p-4"
                >
                  <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.10] bg-background/60">
                    {HIGHLIGHT_ICONS[item.title]}
                  </div>
                  <p className="font-display text-lg text-foreground sm:text-xl">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
