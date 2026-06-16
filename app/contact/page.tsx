import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Muhammad Rafiq for projects, roles, collaborations, and useful introductions.",
  alternates: {
    canonical: "/contact"
  }
};

const contactLinks = [
  {
    label: "Email me",
    href: `mailto:${siteConfig.email}?subject=Project%20%2F%20Role%20%2F%20Collaboration%20Inquiry`,
    external: false
  },
  {
    label: "Connect on LinkedIn",
    href: siteConfig.linkedIn,
    external: true
  },
  {
    label: "View GitHub",
    href: siteConfig.github,
    external: true
  }
];

const bestFor = [
  "Product and interface work",
  "Brand/web systems",
  "Strategy and operations projects",
  "Useful introductions"
];

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.muharafiq.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.muharafiq.com/contact" }
  ]
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <SiteFrame currentPath="/contact">
        <PageIntro
          eyebrow="Contact"
          title="Start a useful conversation."
          description="Best for projects, roles, collaborations, and useful introductions."
        />

        <section className="py-12 sm:py-16">
          <Container className="flex justify-center">
            <div className="w-full max-w-3xl rounded-[2rem] border border-foreground/[0.08] bg-card/70 p-5 shadow-soft sm:p-8 md:p-10">
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-light leading-7 text-muted-foreground sm:text-base">
                  Choose the channel that fits the conversation. Vague requests will, regrettably, still arrive through the same internet.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="group flex items-center justify-center gap-2 rounded-full border border-foreground/[0.12] bg-background/80 px-5 py-3 text-sm font-light text-foreground transition-all duration-200 ease-gentle hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-background hover:shadow-soft"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </a>
                ))}
              </div>

              <div className="mt-8 border-t border-foreground/[0.08] pt-6">
                <p className="text-center text-[10px] font-medium uppercase tracking-[0.18em] text-accent/80">Best for</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {bestFor.map((item) => (
                    <p key={item} className="rounded-full border border-foreground/[0.08] bg-background/65 px-4 py-2 text-center text-sm font-light text-muted-foreground">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-foreground/[0.08] pt-6 text-center">
                <p className="text-sm font-light leading-7 text-muted-foreground">
                  Based in {siteConfig.location}.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </SiteFrame>
    </>
  );
}
