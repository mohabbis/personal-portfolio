import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/project-card";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export function HomeFeaturedWorkSection() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="scroll-mt-28 py-16 sm:py-20">
      <Container>
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Selected Work</p>
          <h2 className="mt-4 font-display text-4xl text-foreground">Case Studies & Projects</h2>
          <p className="mt-4 max-w-prose text-sm leading-7 text-muted-foreground">
            A selection of projects across strategy, brand, product, and web.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {featured.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 120}>
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
