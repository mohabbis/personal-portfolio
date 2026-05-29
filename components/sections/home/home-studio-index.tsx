import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

const practices = [
  {
    title: "Interfaces",
    summary: "Control surfaces for smart-home routines, room states, and everyday decisions.",
    detail: "Lumen · Muhome · IoT"
  },
  {
    title: "Systems",
    summary: "Operational structure, data hygiene, and workflows that make complex groups easier to run.",
    detail: "CRM · governance · process"
  },
  {
    title: "Atmosphere",
    summary: "Photography, materials, and visual identity treated as part of the same environment.",
    detail: "gallery · brand · space"
  }
];

const proof = ["Built", "Designed", "Shipped"];

export function HomeStudioIndexSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <div className="grid gap-10 border-y border-foreground/10 py-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="text-sm font-light tracking-[0.08em] text-muted-foreground">Studio index</p>
              <h2 className="mt-5 max-w-xl font-display text-5xl leading-none tracking-[-0.055em] text-foreground sm:text-7xl">
                Systems with a visible point of view.
              </h2>
              <p className="mt-6 max-w-lg text-base font-light leading-8 text-muted-foreground">
                MUHA should feel less like a resume and more like a working studio: product thinking, visual restraint, and proof that the details actually ship.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {proof.map((item) => (
                  <span key={item} className="rounded-full border border-foreground/10 bg-card/60 px-3 py-1.5 text-xs tracking-[0.12em] text-foreground/60 shadow-card">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {practices.map((practice, index) => (
                <article
                  key={practice.title}
                  className="group relative min-h-[360px] overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/[0.08] p-5 shadow-card backdrop-blur-2xl transition-transform duration-300 ease-gentle hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-foreground/5" />
                  <div className="absolute right-5 top-5 font-mono text-xs text-foreground/30">0{index + 1}</div>
                  <div className="relative flex h-full flex-col justify-between">
                    <p className="text-xs tracking-[0.14em] text-muted-foreground">{practice.detail}</p>
                    <div>
                      <h3 className="font-display text-4xl tracking-[-0.045em] text-foreground">{practice.title}</h3>
                      <p className="mt-4 text-sm font-light leading-7 text-muted-foreground">{practice.summary}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
