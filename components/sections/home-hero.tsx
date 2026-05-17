import { Lightbulb, Hammer, Sparkles } from "lucide-react";
import { SectorTimer } from "@/components/ui/sector-timer";
import { highlights, siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { ProfileImage } from "@/components/ui/profile-image";

const HIGHLIGHT_ICONS: Record<string, React.ReactNode> = {
  Frame: <Lightbulb className="h-5 w-5 text-accent" />,
  Build: <Hammer className="h-5 w-5 text-accent" />,
  Polish: <Sparkles className="h-5 w-5 text-accent" />,
};

export function HomeHero() {
  return (
    <section className="relative border-b border-white/10 bg-background">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.18),transparent_46%)]" />
      <div className="absolute inset-0 overflow-hidden" aria-hidden={true}>
        <span className="speed-line" style={{ top: "17%", width: 88, animationDuration: "1.1s", animationDelay: "0s" }} />
        <span className="speed-line" style={{ top: "34%", width: 52, animationDuration: "0.95s", animationDelay: "0.7s" }} />
        <span className="speed-line" style={{ top: "58%", width: 116, animationDuration: "0.82s", animationDelay: "0.3s" }} />
        <span className="speed-line" style={{ top: "76%", width: 68, animationDuration: "1.35s", animationDelay: "1.1s" }} />
      </div>
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="relative space-y-10">
          {/* F1 sector timing decoration */}
          <div
            aria-hidden={true}
            className="absolute bottom-0 right-0 hidden sm:flex flex-col items-end gap-2 pb-1"
          >
            <SectorTimer />
            <div className="flex items-end gap-3">
              {[
                { label: "S1", color: "#b47bff" },
                { label: "S2", color: "#00e676" },
                { label: "S3", color: "#ffd600" },
              ].map(({ label, color }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      background: color,
                      imageRendering: "pixelated",
                    }}
                  />
                  <span
                    style={{
                      fontSize: 6,
                      color: "hsl(34 14% 45%)",
                      fontFamily: "monospace",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-hero-1">
            <Tag className="bg-card/80">{siteConfig.hero.eyebrow}</Tag>
          </div>

          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start animate-hero-2">
            <ProfileImage className="h-24 w-24 sm:h-28 sm:w-28" priority />
            <div className="space-y-2">
              <h1 className="font-display text-5xl tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {siteConfig.hero.headline}
              </h1>
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                Muhammad Rafiq
              </p>
            </div>
          </div>

          <div className="space-y-5 max-w-2xl animate-hero-3">
            <p className="text-lg leading-8 text-foreground/88 sm:text-xl">
              {siteConfig.hero.subheadline}
            </p>
            <p className="text-base leading-7 text-muted-foreground">
              {siteConfig.hero.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 animate-hero-4">
            <ButtonLink href={siteConfig.hero.primaryCta.href}>
              {siteConfig.hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={siteConfig.hero.secondaryCta.href} variant="secondary">
              {siteConfig.hero.secondaryCta.label}
            </ButtonLink>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 animate-hero-5">
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
