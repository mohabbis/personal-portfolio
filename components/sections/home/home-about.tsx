import { Compass, PenTool, CheckCircle2 } from "lucide-react";
import { Tag } from "@/components/ui/tag";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig, workingPrinciples } from "@/data/site";

const PRINCIPLE_ICONS: Record<string, React.ReactNode> = {
  "Think clearly": <Compass className="h-4 w-4 text-[hsl(34_65%_46%)]" />,
  "Design matters": <PenTool className="h-4 w-4 text-[hsl(34_65%_46%)]" />,
  "Finish properly": <CheckCircle2 className="h-4 w-4 text-[hsl(34_65%_46%)]" />,
};

export function HomeAboutSection() {
  return (
    <section id="about" className="scroll-mt-28 border-y border-border bg-card/38 py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)] lg:items-start">
        <FadeIn>
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">About</p>

            <h2 className="font-display text-4xl text-foreground sm:text-5xl">
              {siteConfig.about.intro}
            </h2>

            {siteConfig.about.paragraphs.slice(0, 2).map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-muted-foreground">
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-3">
              {siteConfig.about.strengths.map((strength) => (
                <Tag key={strength}>{strength}</Tag>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {workingPrinciples.map((principle, i) => (
            <FadeIn key={principle.title} delay={i * 100}>
              <article className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-background/78 p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-border/80 hover:shadow-lift">
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(34_65%_46%_/_0.4)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-background to-card/70 shadow-soft">
                    {PRINCIPLE_ICONS[principle.title]}
                  </div>

                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-display text-[2rem] leading-none tracking-tight text-foreground">
                  {principle.title}
                </h3>

                <p className="mt-4 max-w-[32ch] text-sm leading-7 text-muted-foreground sm:text-[15px]">
                  {principle.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
