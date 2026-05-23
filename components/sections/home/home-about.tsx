import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export function HomeAboutSection() {
  return (
    <section id="about" className="bg-background py-24 sm:py-32">
      <Container className="max-w-4xl">
        <FadeIn>
          <div className="space-y-10">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              About
            </p>

            <div className="space-y-8">
              <h2 className="max-w-4xl font-display text-4xl leading-tight text-foreground sm:text-6xl sm:leading-[1.02]">
                Based between Chicago and Ann Arbor, I’m interested in how thoughtful systems, environments, and technology shape everyday experiences.
              </h2>

              <p className="max-w-2xl text-lg leading-9 text-muted-foreground">
                My work spans branding, digital experiences, operational systems, and environmental technology — with an emphasis on clarity, atmosphere, and intentional design.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
