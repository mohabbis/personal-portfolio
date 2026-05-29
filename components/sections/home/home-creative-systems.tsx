import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

const systemWords = ["concepts", "canvases", "components", "circuits", "cloud"];

export function HomeCreativeSystemsSection() {
  return (
    <section id="creative-systems" className="bg-background py-14 sm:py-18">
      <Container>
        <FadeIn>
          <div className="border-y border-border py-10 sm:py-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(16rem,0.36fr)] lg:items-end">
              <div className="space-y-5">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Choose C
                </p>

                <h2 className="max-w-4xl font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  Visual ideas become working systems.
                </h2>

                <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Concepts, canvases, components, circuits, and cloud — built with care, structure, and security.
                </p>
              </div>

              <div className="space-y-5 lg:text-right">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                  Build 👷🔏
                </p>

                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {systemWords.map((word) => (
                    <span
                      key={word}
                      className="rounded-full border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/55"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
