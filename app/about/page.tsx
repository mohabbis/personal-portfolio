import type { Metadata } from "next";
import { AppWindow, BarChart3, Cpu, Database, Mail, MapPin } from "lucide-react";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";
import { GithubIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "About Muhammad Rafiq, a student working across strategy, operations, design, and technology, and the work behind the projects.",
  path: "/about"
});

const emailHref = `mailto:${siteConfig.email}?subject=Project%20%2F%20Role%20%2F%20Collaboration%20Inquiry`;

const focusAreas = [
  { icon: AppWindow, label: "Design & UI/UX", text: "Interfaces and details that decide how something feels, the work I do best." },
  { icon: BarChart3, label: "Strategy", text: "Clarifying the positioning and trade-offs decisions hinge on." },
  { icon: Database, label: "Operations", text: "Building the systems that keep things running." },
  { icon: Cpu, label: "Technology & AI", text: "Using software and AI where they genuinely move the work forward." }
];

const bestFor = ["Design", "UI/UX", "Strategy", "Operations", "Technology"];

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
              How I work.
            </h1>
            <p className="mt-5 max-w-2xl text-base font-light leading-7 text-muted-foreground">
              Design is what I do best, UI, UX, and the details that decide how something feels. Around it I'm broadly curious: strategy, the operations underneath, and the technology that ties it all together.
            </p>
          </Container>
        </section>

        <section className="border-b border-foreground/[0.06] py-12 sm:py-16">
          <Container>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent/80">Where I do my best work</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {focusAreas.map(({ icon: Icon, label, text }) => (
                <article key={label} className="rounded-[1.15rem] border border-foreground/[0.08] bg-card/60 p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-card">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden />
                  <h2 className="mt-4 font-display text-lg tracking-[-0.03em] text-foreground">{label}</h2>
                  <p className="mt-2 text-xs font-light leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="contact" className="py-12 sm:py-16">
          <Container>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent/80">Contact</p>
            <h2 className="mt-4 max-w-2xl font-display text-2xl tracking-[-0.035em] text-foreground sm:text-3xl">
              For roles, projects, and useful introductions.
            </h2>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={emailHref}
                aria-label="Email"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/[0.10] bg-card/60 text-accent shadow-soft transition hover:-translate-y-0.5 hover:border-accent/30 hover:bg-card/80 hover:shadow-card"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              </a>
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/[0.10] bg-card/60 text-accent shadow-soft transition hover:-translate-y-0.5 hover:border-accent/30 hover:bg-card/80 hover:shadow-card"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/[0.10] bg-card/60 text-accent shadow-soft transition hover:-translate-y-0.5 hover:border-accent/30 hover:bg-card/80 hover:shadow-card"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="mr-2 inline-flex items-center gap-1.5 text-xs font-light text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={1.5} aria-hidden />
                {siteConfig.location}
              </span>
              {bestFor.map((chip) => (
                <span key={chip} className="rounded-full border border-foreground/[0.08] bg-card/50 px-3 py-1.5 text-xs font-light text-muted-foreground">
                  {chip}
                </span>
              ))}
            </div>
          </Container>
        </section>
      </SiteFrame>
    </>
  );
}
