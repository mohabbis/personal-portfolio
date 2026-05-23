import { Camera, Home, Lightbulb, Network } from "lucide-react";

import { Container } from "@/components/ui/container";

const signals = [
  {
    label: "Room tone",
    value: "Warm light, walnut, cream, low contrast.",
    icon: <Lightbulb className="h-4 w-4" />,
  },
  {
    label: "Object logic",
    value: "Everything visible should earn its place.",
    icon: <Home className="h-4 w-4" />,
  },
  {
    label: "Systems layer",
    value: "Hidden tech, clean surfaces, useful defaults.",
    icon: <Network className="h-4 w-4" />,
  },
  {
    label: "Camera eye",
    value: "Composition first. Details over noise.",
    icon: <Camera className="h-4 w-4" />,
  },
];

export function CurrentSignalSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.08] bg-background py-16 sm:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:items-stretch">
          <div className="rounded-[1.75rem] border border-white/10 bg-card/70 p-6 shadow-soft sm:p-8">
            <h2 className="max-w-xl font-display text-4xl text-foreground sm:text-5xl">
              The room usually explains the work.
            </h2>

            <p className="mt-5 max-w-prose text-base leading-8 text-muted-foreground">
              I notice lighting, materials, systems, and small visual decisions before anything else. That is usually where the taste shows up.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <span>Chicago / Michigan</span>
              <span>Smart home logic</span>
              <span>Photography</span>
              <span>Editorial restraint</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {signals.map((signal) => (
              <article
                key={signal.label}
                className="group rounded-[1.35rem] border border-white/10 bg-card/70 p-5 shadow-soft transition duration-200 ease-gentle hover:-translate-y-0.5 hover:border-accent/30"
              >
                <div className="flex items-center gap-3 text-accent">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-background/60">
                    {signal.icon}
                  </span>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {signal.label}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-foreground/86">
                  {signal.value}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
