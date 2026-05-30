import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

const practices = [
  {
    title: "Systems",
    summary: "Operational structure, clean records, and workflows that make complex work easier to manage.",
    detail: "operations · CRM · continuity"
  },
  {
    title: "Product",
    summary: "Interfaces and experiences shaped around clarity, warmth, and everyday usability.",
    detail: "apps · interface · automation"
  },
  {
    title: "Brand",
    summary: "Visual systems, websites, and presentation layers that make work feel more intentional.",
    detail: "identity · web · atmosphere"
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
                <p className="text-sm font-light tracking-[0.01em] text-muted-foreground">Home base</p>
                <h2 className="mt-5 max-w-xl font-display text-5xl leading-none tracking-[-0.055em] text-foreground sm:text-7xl">
                  A place for the systems, images, and interfaces I’m building.
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
