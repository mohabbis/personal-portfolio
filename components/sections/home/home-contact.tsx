import Link from "next/link";

import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { siteConfig } from "@/data/site";

const contactLinks = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/muharafiq", href: siteConfig.linkedIn, external: true },
  { label: "GitHub", value: "github.com/mohabbis", href: siteConfig.github, external: true }
];

export function HomeContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 border-t border-foreground/10 py-16 sm:py-24">
      <Container>
        <FadeIn>
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="font-display text-4xl leading-tight tracking-[-0.04em] text-foreground sm:text-5xl">
                Let&apos;s work together
              </h2>
              <p className="max-w-xl text-base font-light leading-8 text-muted-foreground">
                I&apos;m interested in consulting, product strategy, design, and operations roles. If you have a project or problem you think I can help with, let&apos;s talk.
              </p>
            </div>

            <div>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="inline-block rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
              >
                Get in touch
              </Link>
            </div>

            <div className="grid gap-6 border-t border-foreground/10 pt-8 sm:grid-cols-3">
              {contactLinks.map((item) => (
                <div key={item.label}>
                  <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="mt-1 block text-sm font-light text-foreground underline-offset-2 hover:underline"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
