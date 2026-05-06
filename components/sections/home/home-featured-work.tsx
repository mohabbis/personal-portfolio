import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/project-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function HomeFeaturedWorkSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="scroll-mt-28 py-16 sm:py-20">
      <Container className="space-y-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Featured Work</p>
            <h2 className="font-display text-4xl text-foreground sm:text-5xl">
              Selected projects with a clear professional focus.
            </h2>
            <p className="text-base leading-8 text-muted-foreground">
              A focused set of work that shows product thinking, frontend execution, and clear presentation without
              filler projects or unrelated media.
            </p>
          </div>

          <ButtonLink href="/portfolio/muhome" variant="secondary" className="w-fit">
            Open MuHome
          </ButtonLink>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
