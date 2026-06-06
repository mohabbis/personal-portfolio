import { ArrowUpRight } from "lucide-react";

import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    external: false
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedIn,
    external: true
  },
  {
    label: "GitHub",
    href: siteConfig.github,
    external: true
  }
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
        description="For projects, roles, collaborations, and useful introductions."
      />

      <section className="py-12 sm:py-16">
        <Container className="flex justify-center">
          <div className="w-full max-w-3xl rounded-[2rem] border border-foreground/[0.08] bg-card/70 p-5 shadow-soft sm:p-8 md:p-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-light leading-7 text-muted-foreground sm:text-base">
                Choose the channel that fits the conversation.
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
