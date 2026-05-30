import type { Metadata } from "next";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Car Wash Marketing Case Study",
  description:
    "Brand strategy and web design for two local car washes with contrasting market positions: premium positioning versus community-focused membership strategy."
};

const fancyMetadata = [
  { label: "Role", value: "Brand strategy, visual design, web design, UX architecture" },
  { label: "Timeline", value: "2026 - present" },
  { label: "Scope", value: "Brand guidelines, website design, customer information architecture" },
  { label: "Status", value: "In development" }
];

const guysMetadata = [
  { label: "Role", value: "Brand strategy, web design, membership funnel design" },
  { label: "Timeline", value: "2026 - present" },
  { label: "Scope", value: "Brand identity, website, membership conversion, community features" },
  { label: "Status", value: "In development" }
];

const fancyLearnings = [
  {
    label: "Positioning is strategy, not marketing",
    text: "Choosing to compete on quality rather than price is a strategic choice that affects pricing, staffing, operations, and brand messaging. The website is simply the manifestation of this strategy. Good design alone cannot overcome weak positioning."
  },
  {
    label: "Transparency builds trust",
    text: "Displaying pricing, hours, and service details prominently signals confidence. Hiding information creates suspicion. The site is designed to earn customer trust by being forthright."
  },
  {
    label: "Information architecture drives behavior",
    text: "Where information appears on the page determines what customers see first. Placing location and hours prominently signals that local convenience is important. Placing pricing clearly signals that value is important. Structure is not neutral."
  },
  {
    label: "Friction reduction is revenue",
    text: "Every additional click or decision point is an opportunity for the customer to leave. Reducing the number of decisions required before a customer commits directly correlates with conversion."
  }
];

const guysLearnings = [
  {
    label: "Community identity is a moat",
    text: "Price competition erodes margins. Community identity is harder to replicate. The Car Wash Guys brand invests in local identity, member recognition, and the feeling of belonging to something. This is a durable competitive advantage."
  },
  {
    label: "Membership is a different product than single visits",
    text: "Membership is not a discount; it is a relationship. The website needed to communicate this distinction clearly. Members are not paying less per wash; they are investing in a relationship with a local business."
  },
  {
    label: "Trust is prerequisite to conversion",
    text: "Customers considering a membership subscription need to trust the business before committing. The website builds trust through local connection, transparency, and visible community engagement before asking for a subscription commitment."
  }
];

export default function CarWashCaseStudyPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <article>
        {/* Header */}
        <section className="border-b border-foreground/[0.07] pb-12 pt-16 sm:pt-20">
          <Container>
            <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
              Web Design &amp; Brand Strategy
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-[-0.055em] text-foreground sm:text-7xl">
              Car Wash Marketing
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-muted-foreground">
              Brand strategy and web design for two local car washes with contrasting market positions. Fancy Car Wash and Car Wash Guys represent different viable strategies for the same industry: premium positioning versus community-focused membership. The contrast demonstrates that strategic positioning is more powerful than execution alone. Both brand systems and sites are currently under construction.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-card/60 px-3 py-1.5 text-xs font-normal uppercase tracking-[0.08em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> In development
            </p>
          </Container>
        </section>

        {/* Fancy Car Wash */}
        <section className="py-12 sm:py-16">
          <Container>
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Fancy Car Wash</h2>
            <p className="mt-3 text-base font-light leading-8 text-muted-foreground">
              A premium car wash brand and web presence that differentiates through positioning, visual identity, and customer experience clarity. The work demonstrates how intentional design transforms a commoditized service into a defensible brand.
            </p>

            <div className="mt-8 grid gap-5 border-t border-foreground/[0.07] pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {fancyMetadata.map((item) => (
                <div key={item.label}>
                  <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-foreground/[0.07] bg-card/40 py-12 sm:py-16">
          <Container className="max-w-3xl">
            <h3 className="font-display text-2xl tracking-[-0.04em] text-foreground">The Opportunity</h3>
            <div className="mt-5 space-y-4 text-base font-light leading-8 text-muted-foreground">
              <p>
                Most car washes are perceived as interchangeable. Price and location drive decisions. Customers perceive no meaningful differentiation, so they choose based on proximity and cost. This creates a race to the bottom where all competitors operate on thin margins.
              </p>
              <p>
                Fancy Car Wash approached this differently. The business recognized that car ownership is a status signal. People take pride in their vehicles. There is an audience willing to pay more for premium service, attention to detail, and a polished brand experience. The website needed to reflect this positioning.
              </p>
            </div>

            <h3 className="mt-10 font-display text-2xl tracking-[-0.04em] text-foreground">Brand Strategy</h3>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">Positioning</p>
                <p className="mt-2 text-sm font-light leading-7 text-muted-foreground">
                  Premium car wash service for owners who care about their vehicles. Not the cheapest option, but the best. Positioned against both low-cost operators and dealership services. The value proposition is professional attention to detail, high-quality materials, and a refined customer experience.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">Visual Identity</p>
                <p className="mt-2 text-sm font-light leading-7 text-muted-foreground">
                  The brand uses a warm, sophisticated color palette that signals premium service without being ostentatious. Typography is refined but approachable. Every visual element reinforces the positioning: this is a business that takes pride in its work.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">Messaging</p>
                <p className="mt-2 text-sm font-light leading-7 text-muted-foreground">
                  The website copy emphasizes craftsmanship and care. Rather than listing services in technical terms, the messaging focuses on outcomes and the feeling of driving a clean vehicle. The tone is professional but warm, knowledgeable without being condescending.
                </p>
              </div>
            </div>

            <h3 className="mt-10 font-display text-2xl tracking-[-0.04em] text-foreground">Website Design</h3>
            <div className="mt-5 space-y-4 text-base font-light leading-8 text-muted-foreground">
              <p>
                The site is organized to reduce friction for customers. The homepage prominently displays location, hours, and pricing so visitors can determine relevance immediately. The design recognizes that most visitors are making a quick decision. They want to know: are you near me? Are you open? How much does it cost? The site answers these questions before requiring any navigation or additional clicks.
              </p>
              <p>
                Most customers research car washes on their phones. The design prioritizes mobile experience with large tap targets, readable text, and fast load times. Core information is visible on the mobile home screen without scrolling.
              </p>
            </div>

            <div className="mt-6 rounded-[1rem] border border-foreground/[0.07] border-l-2 border-l-foreground/60 bg-background/80 p-5">
              <p className="text-sm font-light leading-7 text-muted-foreground">
                <strong className="font-medium text-foreground">Design principle:</strong> Reduce the number of decisions required. Each additional click or decision point is an opportunity for the customer to leave. The site is designed to move customers toward action with minimal friction.
              </p>
            </div>
          </Container>
        </section>

        {/* Fancy Learnings */}
        <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
          <Container>
            <h3 className="font-display text-2xl tracking-[-0.04em] text-foreground">Learnings: Fancy Car Wash</h3>
            <div className="mt-6 space-y-4">
              {fancyLearnings.map((item) => (
                <div key={item.label} className="border-l-2 border-foreground/30 py-2 pl-5">
                  <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-light leading-7 text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Car Wash Guys divider */}
        <section className="border-t border-foreground/[0.07] bg-card/40 py-12 sm:py-16">
          <Container>
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Car Wash Guys</h2>
            <p className="mt-3 text-base font-light leading-8 text-muted-foreground">
              A community-focused car wash brand that differentiates through local engagement and transparency. The website serves as the hub for membership enrollment, service information, and customer relationship management in a neighborhood business.
            </p>

            <div className="mt-8 grid gap-5 border-t border-foreground/[0.07] pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {guysMetadata.map((item) => (
                <div key={item.label}>
                  <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
          <Container className="max-w-3xl">
            <h3 className="font-display text-2xl tracking-[-0.04em] text-foreground">The Challenge</h3>
            <div className="mt-5 space-y-4 text-base font-light leading-8 text-muted-foreground">
              <p>
                Car Wash Guys competes in the same market as Fancy Car Wash but with a fundamentally different strategy. Where Fancy Car Wash signals exclusivity and premium positioning, Car Wash Guys builds on community identity and membership loyalty. The challenge was to design a brand and web presence that makes &quot;local neighborhood car wash&quot; feel like a meaningful identity rather than a limitation.
              </p>
              <p>
                The recurring membership model requires a different conversion funnel than single-visit customers. The site must communicate not just service quality, but the value of ongoing membership: a relationship, not just a transaction.
              </p>
            </div>

            <h3 className="mt-10 font-display text-2xl tracking-[-0.04em] text-foreground">Brand Strategy</h3>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">Positioning</p>
                <p className="mt-2 text-sm font-light leading-7 text-muted-foreground">
                  The neighborhood car wash that knows your name. Not the cheapest, not the fanciest, but the one that is part of the community. Members are regulars, not just customers. The brand emphasizes local ownership, community engagement, and personal service.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">Visual Identity</p>
                <p className="mt-2 text-sm font-light leading-7 text-muted-foreground">
                  Approachable and warm. The brand avoids the clinical sterility of premium service brands. Instead it emphasizes friendliness, reliability, and community connection. The visual language is familiar and trustworthy rather than aspirational.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">Membership as Status</p>
                <p className="mt-2 text-sm font-light leading-7 text-muted-foreground">
                  Members are positioned as regulars: people who have made a decision to support a local business and belong to its community. The membership program is presented as an investment in the neighborhood, not just a discount on car washes.
                </p>
              </div>
            </div>

            <h3 className="mt-10 font-display text-2xl tracking-[-0.04em] text-foreground">Website Strategy</h3>
            <div className="mt-5 space-y-4 text-base font-light leading-8 text-muted-foreground">
              <p>
                The site is organized around a membership conversion funnel. Visitors first understand what the business is and how it is different from generic competitors. Then they see the membership options and their benefits. Then they can enroll. This linear journey is designed to build trust before asking for a commitment.
              </p>
              <p>
                Community features (member spotlights, local event involvement, neighborhood connection) appear throughout the site to reinforce the positioning. These elements are not decorative; they are the proof that the community identity is real.
              </p>
            </div>
          </Container>
        </section>

        {/* Guys Learnings */}
        <section className="border-t border-foreground/[0.07] bg-card/40 py-12 sm:py-16">
          <Container>
            <h3 className="font-display text-2xl tracking-[-0.04em] text-foreground">Learnings: Car Wash Guys</h3>
            <div className="mt-6 space-y-4">
              {guysLearnings.map((item) => (
                <div key={item.label} className="border-l-2 border-foreground/30 py-2 pl-5">
                  <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-light leading-7 text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Comparative insight */}
        <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
          <Container className="max-w-3xl">
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">The Contrast</h2>
            <p className="mt-5 text-base font-light leading-8 text-muted-foreground">
              Fancy Car Wash and Car Wash Guys are owned by the same group and operate in the same market. They succeed through opposite strategies. This is not a contradiction; it is a demonstration that market positioning is a genuine strategic choice with real implications for design, messaging, pricing, and customer acquisition.
            </p>
            <p className="mt-4 text-base font-light leading-8 text-muted-foreground">
              Premium positioning requires visual restraint, transparent pricing, and a customer experience that justifies higher prices. Community positioning requires warmth, visible engagement, and a conversion model built on relationship rather than transaction. The design choices for each brand follow from the strategic choice, not from aesthetic preference.
            </p>
            <p className="mt-4 text-base font-light leading-8 text-muted-foreground">
              Understanding this distinction, that design follows strategy, is the central lesson of working on both projects simultaneously.
            </p>
          </Container>
        </section>

        {/* Footer */}
        <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
          <Container>
            <p className="text-sm font-light leading-7 text-muted-foreground">
              Both brands are currently under construction. Live sites will be linked here once they launch.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
              >
                View other projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
              >
                Get in touch
              </Link>
            </div>
          </Container>
        </section>
      </article>
    </SiteFrame>
  );
}
