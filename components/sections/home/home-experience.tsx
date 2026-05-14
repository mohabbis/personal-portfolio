import { SectionHeading } from "@/components/sections/section-heading";
import { Container } from "@/components/ui/container";
import { ExperienceCard } from "@/components/cards/experience-card";
import { FadeIn } from "@/components/ui/fade-in";
import { experiences } from "@/data/experience";

export function HomeExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 py-16 sm:py-20">
      <Container className="space-y-10">
        <FadeIn>
          <SectionHeading
            eyebrow="Background"
            title="Experience & Analytical Foundations"
            description="Hands-on project work, structured problem-solving, and quantitative foundations built for consulting and strategy roles."
          />
        </FadeIn>

        <div className="grid gap-5 lg:grid-cols-2">
          {experiences.map((experience, i) => (
            <FadeIn key={`${experience.organization}-${experience.title}`} delay={i * 100}>
              <ExperienceCard {...experience} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
