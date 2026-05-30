import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export function HomeContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 border-t border-foreground/10 py-12 sm:py-16">
      <Container>
        <FadeIn>
          <p className="max-w-xl font-display text-3xl leading-tight tracking-[-0.035em] text-foreground sm:text-4xl">
            Strategy, product, and creative technology.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
