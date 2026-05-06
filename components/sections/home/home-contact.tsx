import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { contactItems, siteConfig } from "@/data/site";

export function HomeContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 py-16 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Contact</p>
          <h2 className="font-display text-4xl text-foreground sm:text-5xl">
            Reach out for roles, projects, or collaboration.
          </h2>
          <p className="max-w-prose text-base leading-8 text-muted-foreground">{siteConfig.availability}</p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${siteConfig.email}`}>Email Muhammad</ButtonLink>
            <ButtonLink
              href={siteConfig.linkedIn}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-4">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-[1.5rem] border border-white/10 bg-card p-6 transition-all duration-200 ease-gentle hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-soft"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{item.label}</p>
              <p className="mt-4 text-lg font-medium text-foreground">{item.value}</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.note}</p>
            </a>
          ))}
        </div>
      </Container>

      <Container className="pt-10">
        <p className="text-sm leading-7 text-muted-foreground">
          Based in {siteConfig.location}. Portfolio walkthroughs, collaboration ideas, and role-related outreach are welcome.
        </p>
      </Container>
    </section>
  );
}

