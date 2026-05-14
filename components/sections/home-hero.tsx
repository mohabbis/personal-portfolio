import { Lightbulb, BarChart3, FileText } from "lucide-react";
import { highlights, siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";

const HIGHLIGHT_ICONS: Record<string, React.ReactNode> = {
  Frame: <Lightbulb className="h-5 w-5 text-accent" />,
  Analyze: <BarChart3 className="h-5 w-5 text-accent" />,
  Communicate: <FileText className="h-5 w-5 text-accent" />,
};

export function HomeHero() {
  return (
    <section className="relative border-b border-white/10 bg-background">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.18),transparent_46%)]" />
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="relative space-y-8">
          <div className="animate-hero-1">
            <Tag className="bg-card/80">{siteConfig.hero.eyebrow}</Tag>
          </div>

          <div className="space-y-5 animate-hero-2">
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

          <div className="flex flex-wrap gap-3 animate-hero-3">
            <ButtonLink href={siteConfig.hero.primaryCta.href}>
              {siteConfig.hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={siteConfig.hero.secondaryCta.href} variant="secondary">
              {siteConfig.hero.secondaryCta.label}
            </ButtonLink>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 animate-hero-4">
            {highlights.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-white/10 bg-card/72 p-5 shadow-soft">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-background/60">
                  {HIGHLIGHT_ICONS[item.title]}
                </div>
                <p className="font-display text-xl text-foreground">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
