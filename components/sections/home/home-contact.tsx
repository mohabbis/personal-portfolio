import { Mail, Globe, LayoutGrid, Camera, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { FadeIn } from "@/components/ui/fade-in";
import { contactItems, siteConfig } from "@/data/site";

const CONTACT_ICONS: Record<string, React.ReactNode> = {
  Email: <Mail className="h-5 w-5" />,
  LinkedIn: <Globe className="h-5 w-5" />,
  Portfolio: <LayoutGrid className="h-5 w-5" />,
  Photography: <Camera className="h-5 w-5" />,
};

export function HomeContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 py-16 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
        <FadeIn>
          <div className="space-y-5">
            <p className="flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
              <span>Contact</span>
              <span className="disco-spin text-base leading-none" aria-hidden={true}>🪩</span>
            </p>
            <h2 className="font-display text-4xl text-foreground sm:text-5xl">
              Let's work together.
            </h2>
            <p className="max-w-prose text-base leading-8 text-muted-foreground">Open to new work.</p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${siteConfig.email}`}>Email</ButtonLink>
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
        </FadeIn>

        <div className="grid gap-4">
          {contactItems.map((item, i) => (
            <FadeIn key={item.label} delay={i * 80}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group rounded-[1.5rem] border border-white/10 bg-card p-6 transition-all duration-200 ease-gentle hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-soft block"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-background/60 text-muted-foreground group-hover:text-accent transition-colors">
                    {CONTACT_ICONS[item.label]}
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
                <p className="mt-4 text-lg font-medium text-foreground">{item.value}</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.note}</p>
              </a>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
