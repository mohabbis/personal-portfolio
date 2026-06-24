import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

const aboutMeta = [
  {
    label: "Into",
    value: "Business, finance, strategy, and research — and how good organizations actually run."
  },
  {
    label: "Open to",
    value: "Consulting, finance, research, and business development. Early-stage and scaling companies."
  },
  {
    label: "Currently",
    value: "Studying at the University of Michigan, between Ann Arbor and Chicago."
  }
];

export function HomeAboutSection() {
  return (
    <section id="about" className="border-t border-foreground/[0.07] bg-card/40 py-16 sm:py-24">
      <Container>
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="space-y-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent/80">
                About
              </p>
              <p className="max-w-prose text-base font-light leading-8 text-muted-foreground">
                I'm drawn to how capital flows, how organizations make trade-offs under constraints, and how decisions made today shape what becomes possible tomorrow. Patterns repeat, and the interesting part is finding where the leverage points are.
              </p>
              <p className="max-w-prose text-base font-light leading-8 text-muted-foreground">
                So I usually start by looking for the structure in a problem — what actually matters, and where the friction is — and work back from there. Most of what's on this site comes from following that curiosity.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-light text-foreground transition-colors hover:text-muted-foreground"
              >
                Read full bio <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid gap-4 self-start">
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
