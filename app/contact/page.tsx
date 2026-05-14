import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { contactItems, siteConfig } from "@/data/site";

const conversationPrompts = [
  "The role, project, or opportunity you want to discuss.",
  "What stood out to you from the site.",
  "Any timeline or next step I should know about."
];

export default function ContactPage() {
  return (
    <SiteFrame currentPath="/contact">
      <PageIntro
        eyebrow="Contact"
        title="Reach out if the work here aligns with something you are building or hiring for."
        description="LinkedIn or email are the best ways to reach me."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
          <div className="space-y-6">

            <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-soft sm:p-8">

              <Image
                src="/images/profile/headshot.jpg"
                alt="Muhammad Rafiq"
                width={120}
                height={120}
                className="mb-6 rounded-2xl object-cover border border-white/10 shadow-lg"
              />

              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                Availability
              </p>

              <h2 className="mt-4 font-display text-3xl text-foreground">
                Open to conversations around software, product, strategy, and technical work.
              </h2>

              <p className="mt-4 max-w-prose text-sm leading-7 text-muted-foreground">
                {siteConfig.availability}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                <ButtonLink
                  href={siteConfig.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </ButtonLink>

                <ButtonLink href={`mailto:${siteConfig.email}`} variant="secondary">
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
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
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
                className="rounded-[1.5rem] border border-border bg-card p-6 transition-all duration-200 ease-gentle hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-soft"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  {item.label}
                </p>

                <p className="mt-4 text-lg font-medium text-foreground">
                  {item.value}
                </p>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.note}
                </p>
              </a>
            ))}
          </div>
        </Container>

        <Container className="pt-10">
          <p className="text-sm leading-7 text-muted-foreground">
            Based in {siteConfig.location}. Open to project discussions, portfolio walkthroughs, and role-related outreach.
          </p>
        </Container>
      </section>
    </SiteFrame>
  );
}
