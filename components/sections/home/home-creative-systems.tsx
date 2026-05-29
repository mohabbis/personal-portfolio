import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

const systemWords = ["concepts", "canvases", "components", "circuits", "cloud"];

export function HomeCreativeSystemsSection() {
  return (
    <section id="creative-systems" className="border-y border-white/[0.06] bg-background py-16 sm:py-20">
      <Container>
        <FadeIn>
          <div className="grid gap-8 rounded-[2rem] border border-border bg-card/72 p-6 shadow-soft sm:p-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(18rem,0.48fr)] lg:items-stretch">
            <div className="flex min-h-[24rem] flex-col justify-between rounded-[1.5rem] border border-white/[0.08] bg-background/60 p-6 sm:p-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Choose C
                </p>

                <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  Visual ideas become working systems.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  I use image, code, design, automation, and smart-home tools to turn rough ideas into structured digital and physical systems.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {systemWords.map((word) => (
                  <span
                    key={word}
                    className="rounded-full border border-border bg-muted/45 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/60"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-background p-6 sm:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,hsl(var(--accent)/0.16),transparent_45%)]" />
              <div className="relative flex h-full min-h-[24rem] flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex rounded-full border border-accent/30 bg-accent/[0.06] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    Build 👷🔏
                  </div>

                  <p className="max-w-sm text-sm leading-7 text-muted-foreground">
                    A section for the tools and experiments that sit between art direction and implementation.
                  </p>
                </div>

                <div className="grid gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/55">
                  <div className="rounded-2xl border border-border bg-card/70 p-4">
                    <span className="text-accent">01</span> Frame the idea
                  </div>
                  <div className="rounded-2xl border border-border bg-card/70 p-4">
                    <span className="text-accent">02</span> Build with structure
                  </div>
                  <div className="rounded-2xl border border-border bg-card/70 p-4">
                    <span className="text-accent">03</span> Polish the system
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
