import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";
import { GithubIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "About Muhammad Rafiq: design and UI/UX first, with curiosity across strategy, operations, technology, and AI.",
  path: "/about"
});

const emailHref = `mailto:${siteConfig.email}?subject=Project%20%2F%20Role%20%2F%20Collaboration%20Inquiry`;

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.muharafiq.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.muharafiq.com/about" }
  ]
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SiteFrame currentPath="/about">
        <section className="border-b border-foreground/[0.06] py-12 sm:py-18">
          <Container>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent/80">About</p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.02] tracking-[-0.035em] text-foreground sm:text-5xl">
              {siteConfig.about.intro}
            </h1>
            <div className="mt-6 max-w-2xl space-y-4">
              {siteConfig.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base font-light leading-7 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </Container>
        </section>

        <section id="contact" className="py-12 sm:py-16">
          <Container>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent/80">Contact</p>
            <h2 className="mt-4 max-w-2xl font-display text-2xl tracking-[-0.035em] text-foreground sm:text-3xl">
              For roles, projects, and introductions.
            </h2>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={emailHref}
                aria-label="Email"
                className="focus-ring flex h-12 w-12 items-center justify-center rounded-full border border-foreground/[0.10] bg-card/60 text-accent shadow-soft transition hover:-translate-y-0.5 hover:border-accent/30 hover:bg-card/80 hover:shadow-card"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              </a>
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="focus-ring flex h-12 w-12 items-center justify-center rounded-full border border-foreground/[0.10] bg-card/60 text-accent shadow-soft transition hover:-translate-y-0.5 hover:border-accent/30 hover:bg-card/80 hover:shadow-card"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="focus-ring flex h-12 w-12 items-center justify-center rounded-full border border-foreground/[0.10] bg-card/60 text-accent shadow-soft transition hover:-translate-y-0.5 hover:border-accent/30 hover:bg-card/80 hover:shadow-card"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-6 inline-flex items-center gap-1.5 text-xs font-light text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} aria-hidden />
              {siteConfig.location}
            </p>
          </Container>
        </section>
      </SiteFrame>
    </>
  );
}
