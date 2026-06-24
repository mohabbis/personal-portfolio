import Link from "next/link";

import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig } from "@/data/site";

const contactLinks = [
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "LinkedIn", href: siteConfig.linkedIn, external: true }
];

export function HomeContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 border-t border-foreground/10 py-16 sm:py-24">
      <Container>
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-end">
            <div className="space-y-4">
              <h2 className="font-display text-4xl leading-tight tracking-[-0.04em] text-foreground sm:text-5xl">
                Let&apos;s work together
              </h2>
              <p className="max-w-xl text-base font-light leading-8 text-muted-foreground">
                For roles, projects, research, and useful introductions.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-foreground/10 bg-card/60 p-4 shadow-soft sm:p-5">
              <div className="grid gap-2 sm:grid-cols-2">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="rounded-[1rem] border border-transparent px-4 py-3 text-sm font-light text-foreground transition-colors hover:border-foreground/10 hover:bg-background/60"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
