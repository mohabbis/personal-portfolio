import type { Metadata } from "next";
import { AppWindow, BarChart3, Database, Mail, MapPin, Search } from "lucide-react";

import { SiteFrame } from "@/components/layout/site-frame";
import { AmbientLattice } from "@/components/portfolio/ambient-lattice";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Muhammad Rafiq, a student into business, finance, and strategy, and the work behind the projects.",
  alternates: {
    canonical: "/about"
  }
};

const emailHref = `mailto:${siteConfig.email}?subject=Project%20%2F%20Role%20%2F%20Collaboration%20Inquiry`;

const focusAreas = [
  { icon: BarChart3, label: "Strategy", text: "The trade-offs most people skip." },
  { icon: Search, label: "Research", text: "Pressure-testing until it holds." },
  { icon: Database, label: "Operations", text: "The systems that decide if it runs." },
  { icon: AppWindow, label: "Product & design", text: "Building the actual thing." }
];

const fieldNotes = [
  "Clarity beats cleverness.",
  "Name the real question first.",
  "Talk to whoever does the work.",
  "Show the work. Don't oversell."
];

const bestFor = ["Strategy", "Research", "Operations", "Product", "Design"];

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.muharafiq.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.muharafiq.com/about" }
  ]
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

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
              Student into business, finance, and strategy. What pulls me in is the hard part: the trade-off no one wants to call, the system quietly breaking, the decision buried under the noise.
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

        <section className="border-b border-foreground/[0.06] py-12 sm:py-16">
          <Container className="grid gap-8 lg:grid-cols-[1fr_0.66fr] lg:items-start">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent/80">Things I believe</p>
              <ul className="mt-6 space-y-3.5">
                {fieldNotes.map((note) => (
                  <li key={note} className="flex items-baseline gap-3 font-display text-lg leading-snug tracking-[-0.02em] text-foreground sm:text-xl">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 self-start translate-y-2 rounded-full bg-accent" aria-hidden />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pt-8">
              <AmbientLattice />
              <p className="mt-4 text-center text-xs font-light text-muted-foreground">However it starts, it ends as something that works.</p>
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
