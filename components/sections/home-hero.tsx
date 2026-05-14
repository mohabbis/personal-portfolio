import { Lightbulb, Hammer, FileText } from "lucide-react";
import { highlights, siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { ProfileImage } from "@/components/ui/profile-image";

const HIGHLIGHT_ICONS: Record<string, React.ReactNode> = {
  Think: <Lightbulb className="h-5 w-5 text-accent" />,
  Build: <Hammer className="h-5 w-5 text-accent" />,
  Explain: <FileText className="h-5 w-5 text-accent" />,
};

export function HomeHero() {
  return (
    <section className="relative border-b border-white/10 bg-background">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.18),transparent_46%)]" />
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.7fr)] lg:items-center">
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
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-background/60">
                    {HIGHLIGHT_ICONS[item.title]}
                  </div>
                  <p className="font-display text-xl text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="rounded-[2rem] border border-white/10 bg-card/72 p-4 shadow-soft">
              <ProfileImage
                className="aspect-square w-full"
                priority
                sizes="(max-width: 1024px) 80vw, 420px"
              />
              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Portrait</p>
                  <p className="mt-1 font-display text-xl text-foreground">Muhammad Rafiq</p>
                </div>
                <p className="max-w-32 text-right text-xs leading-5 text-muted-foreground">
                  Avatar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
