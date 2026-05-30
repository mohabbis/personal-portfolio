import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig } from "@/data/site";

const links = [
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "LinkedIn", href: siteConfig.linkedIn },
  { label: "GitHub", href: siteConfig.github }
];

export function HomeContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 border-t border-foreground/10 py-12 sm:py-16">
      <Container>
        <FadeIn>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-light tracking-[0.01em] text-muted-foreground">Contact</p>
              <p className="mt-3 max-w-xl font-display text-3xl leading-tight tracking-[-0.035em] text-foreground sm:text-4xl">
                Strategy, product, and creative technology.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-light text-foreground/65">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="border-b border-transparent pb-1 transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
