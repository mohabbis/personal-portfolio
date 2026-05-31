import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

const archiveImageUrl =
  "https://www.dropbox.com/scl/fi/jj1u1su9nd7njrg4p3tsg/2014-07-26-03.53.48.jpg?rlkey=ddlq9rsqysx0mskqjybmkcyor&st=c8xy44kc&raw=1";

const aboutMeta = [
  {
    label: "Core Interests",
    value: "Consulting and strategy, product design, operations and finance, technology and automation."
  },
  {
    label: "Looking For",
    value: "Roles across strategy, product, operations, design, and finance. Early-stage and scaling companies."
  },
  {
    label: "Currently",
    value: "University of Michigan. Building across product, design, and operations."
  }
];

export function HomeAboutSection() {
  return (
    <section id="about" className="border-t border-foreground/[0.07] bg-card/40 py-16 sm:py-24">
      <Container>
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="space-y-6">
              <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
                About
              </p>
              <p className="max-w-prose text-base font-light leading-8 text-muted-foreground">
                I study financial operations and management at the University of Michigan, focused on how capital flows, how organizations make trade-offs under constraints, and how decisions made today shape what becomes possible tomorrow. History teaches that patterns repeat; financial management shows where the leverage points are.
              </p>
              <p className="max-w-prose text-base font-light leading-8 text-muted-foreground">
                This combination informs how I approach every domain. I look for the underlying structure in problems. Then I work backward from outcomes to build the systems that make the right outcome easier to reach.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-light text-foreground transition-colors hover:text-muted-foreground"
              >
                Read full bio <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid gap-4 self-start">
              <figure className="overflow-hidden rounded-[1.5rem] border border-foreground/[0.08] bg-background/72 p-2 shadow-soft">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.1rem] bg-card">
                  <img
                    src={archiveImageUrl}
                    alt="Personal archive image used as an editorial visual asset"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
                </div>
                <figcaption className="px-3 py-3 text-right text-[11px] tracking-[0.08em] text-foreground/55">
                  Personal archive · source material
                </figcaption>
              </figure>

              {aboutMeta.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.25rem] border border-foreground/[0.07] bg-background/72 p-5 shadow-soft"
                >
                  <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-light leading-7 text-muted-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
