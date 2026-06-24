import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

function MichiganMark() {
  return (
    <svg viewBox="0 0 64 44" className="h-7 w-10 text-accent" fill="currentColor" aria-hidden>
      <path d="M2 42V2h16l14 18L46 2h16v40H46V23L32 41 18 23v19H2Z" />
    </svg>
  );
}

export function HomeStudioIndexSection() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <FadeIn>
          <div className="flex flex-col gap-5 border-y border-foreground/10 py-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <MichiganMark />
              <p className="max-w-2xl text-sm font-light leading-7 text-muted-foreground sm:text-base">
                University of Michigan student focused on economics, strategy, finance, risk management & design.
              </p>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/35">
              Ann Arbor · Chicago
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
