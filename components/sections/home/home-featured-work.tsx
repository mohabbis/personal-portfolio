import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/project-card";
import { Container } from "@/components/ui/container";

export function HomeFeaturedWorkSection() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Selected Work</p>
        <h2 className="mt-4 font-display text-4xl text-foreground">Featured Projects</h2>
        <p className="mt-4 max-w-prose text-sm leading-7 text-muted-foreground">
          Projects and product work.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
