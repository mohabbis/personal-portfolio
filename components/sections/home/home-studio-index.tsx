import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

const practices = [
  {
    title: "Strategy",
    summary: "How something's positioned, and the trade-offs behind a decision.",
    detail: "positioning · trade-offs"
  },
  {
    title: "Research",
    summary: "Digging into a market or an idea to see if it actually holds up.",
    detail: "markets · ideas"
  },
  {
    title: "Operations",
    summary: "The workflows and records that quietly keep things running.",
    detail: "workflows · systems"
  }
];

export function HomeStudioIndexSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <FadeIn>
          <div className="border-y border-foreground/10 py-10 sm:py-12">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14 lg:items-start">
              <div>
                <p className="text-sm font-light tracking-[0.01em] text-muted-foreground">What I'm into</p>
                <h2 className="mt-5 max-w-xl font-display text-5xl leading-none tracking-[-0.055em] text-foreground sm:text-7xl">
                  Things I like thinking about.
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {practices.map((practice, index) => (
                  <article
                    key={practice.title}
                    className="relative min-h-[280px] overflow-hidden rounded-[1.5rem] border border-foreground/[0.08] bg-card/62 p-5 transition-colors duration-300 hover:border-foreground/[0.16]"
                  >
                    <div className="absolute right-5 top-5 font-mono text-xs text-foreground/25">0{index + 1}</div>
                    <div className="flex h-full flex-col justify-between">
                      <p className="max-w-[9rem] text-xs tracking-[0.12em] text-muted-foreground">{practice.detail}</p>
                      <div>
                        <h3 className="font-display text-3xl tracking-[-0.045em] text-foreground">{practice.title}</h3>
                        <p className="mt-4 text-sm font-light leading-7 text-muted-foreground">{practice.summary}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
