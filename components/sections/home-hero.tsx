import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-foreground/[0.06] bg-background">
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(ellipse_at_48%_0%,hsl(var(--accent)/0.12),transparent_62%)]" />
      <div className="absolute inset-x-8 bottom-0 hidden h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent lg:block" />

      <Container className="relative py-24 sm:py-32 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="animate-hero-1 flex items-center justify-between gap-8 border-b border-foreground/10 pb-8">
            <p className="font-display text-2xl leading-none text-foreground sm:text-3xl">
              {siteConfig.name}
            </p>
            <p className="hidden max-w-[13rem] text-right text-sm font-light leading-6 text-muted-foreground sm:block">
              A living archive of work, rooms, interfaces, systems, and visual fragments.
            </p>
          </div>

          <div className="grid gap-10 pt-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
            <div className="space-y-8 animate-hero-2">
              <h1 className="max-w-5xl font-display text-6xl tracking-[-0.05em] text-foreground sm:text-8xl lg:text-[8.75rem] lg:leading-[0.82]">
                <span className="block">Leaving every room</span>
                <span className="block">a little brighter.</span>
              </h1>
              <p className="max-w-md text-lg font-light leading-8 text-muted-foreground">
                {siteConfig.hero.subheadline}
              </p>
            </div>

            <div className="animate-hero-3 space-y-8 lg:pb-3">
              <div className="hidden h-48 rounded-[2rem] border border-foreground/10 bg-[linear-gradient(135deg,hsl(var(--card)),hsl(var(--accent)/0.08)),radial-gradient(circle_at_24%_24%,hsl(var(--accent)/0.2),transparent_32%)] p-5 shadow-[0_30px_90px_hsl(var(--foreground)/0.08)] lg:block">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-light text-foreground/45">
                    <span>MUHA</span>
                    <span>Archive</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-px w-full bg-foreground/12" />
                    <div className="h-px w-2/3 bg-foreground/10" />
                    <div className="h-px w-1/2 bg-foreground/8" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
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
          </div>
        </div>
      </Container>
    </section>
  );
}
