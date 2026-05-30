import Image from "next/image";

import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

const studies = [
  {
    title: "Materials",
    detail: "Walnut, linen, paper, and amber light translated into a warm surface system.",
    src: "/images/studies/materials-study.svg"
  },
  {
    title: "Interfaces",
    detail: "Room controls, automation states, and quiet product surfaces for Lumen.",
    src: "/images/studies/interfaces-study.svg"
  },
  {
    title: "Environments",
    detail: "Light zones, motion paths, and hidden infrastructure mapped as atmosphere.",
    src: "/images/studies/environments-study.svg"
  }
];

export function HomeVisualStudiesSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <div className="mb-10 flex flex-col justify-between gap-6 border-b border-foreground/10 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-light tracking-[0.08em] text-muted-foreground">Visual studies</p>
              <h2 className="mt-4 max-w-3xl font-display text-5xl leading-none tracking-[-0.055em] text-foreground sm:text-7xl">
                Generated studies for materials, interfaces, and environments.
              </h2>
            </div>
            <p className="max-w-sm text-sm font-light leading-7 text-muted-foreground">
              These are designed assets, not placeholder photography. They establish the visual language until real project imagery earns the space.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-5 lg:grid-cols-3">
          {studies.map((study, index) => (
            <FadeIn key={study.title} delay={index * 90}>
              <article className="group overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/[0.08] shadow-card backdrop-blur-2xl">
                <div className="relative aspect-[4/3] overflow-hidden bg-card">
                  <Image
                    src={study.src}
                    alt={`${study.title} visual study`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-gentle group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-3xl tracking-[-0.035em] text-foreground">{study.title}</h3>
                    <span className="font-mono text-xs text-foreground/35">0{index + 1}</span>
                  </div>
                  <p className="mt-3 text-sm font-light leading-7 text-muted-foreground">{study.detail}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
