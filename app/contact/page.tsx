import { ArrowUpRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { ProfileImage } from "@/components/ui/profile-image";
import { contactItems, siteConfig } from "@/data/site";

const conversationPrompts = [
  "What you'd like to discuss.",
  "What caught your attention.",
  "Any timeline in mind."
];

export default function ContactPage() {
  return (
    <SiteFrame currentPath="/contact">
      <PageIntro
        eyebrow="Contact"
        title="Let's talk."
        description="Reach me via email or LinkedIn."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-soft sm:p-8">
              <ProfileImage className="mb-8 h-28 w-28 sm:h-32 sm:w-32" priority />

              <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
                Open to consulting, strategy, and product roles.
              </h2>

              <p className="mt-4 max-w-prose text-sm leading-7 text-muted-foreground">
                Happy to discuss opportunities or walk through my work.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink
                  href={siteConfig.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full justify-center sm:w-auto"
                >
                  LinkedIn
                </ButtonLink>

                <ButtonLink href={`mailto:${siteConfig.email}`} variant="secondary" className="w-full justify-center sm:w-auto">
                  Email
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-border bg-card/70 p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                Helpful context
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                {conversationPrompts.map((prompt) => (
                  <li key={prompt} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>{prompt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={`${item.label}: ${item.value}`}
                className="group flex min-h-[12rem] flex-col justify-between rounded-[1.5rem] border border-border bg-card p-6 transition-all duration-200 ease-gentle hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                      {item.label}
                    </p>

                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>

                  <p className="mt-4 text-lg font-medium text-foreground">
                    {item.value}
                  </p>
                </div>

                <p className="mt-6 text-sm leading-7 text-muted-foreground">
                  {item.note}
                </p>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </SiteFrame>
  );
}
