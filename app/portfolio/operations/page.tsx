import type { Metadata } from "next";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Organizational Strategy — Case Study",
  description:
    "Managing complex financial and operational decisions for student organizations facing existential transitions."
};

const metadata_items = [
  { label: "Role", value: "Strategic planning, financial analysis, operations leadership" },
  { label: "Timeline", value: "2022 — present" },
  { label: "Organizations", value: "Student leadership, fraternal organizations" }
];

const challenges = [
  {
    label: "Financial Complexity",
    text: "Student organizations operate with multiple funding sources, unclear budgets, and high transaction volumes. Understanding actual financial position requires careful audit and documentation."
  },
  {
    label: "Operational Risk",
    text: "Liability exposure, membership management, vendor relationships, and property ownership create legal and financial risks that most student leaders do not anticipate."
  },
  {
    label: "Governance Gaps",
    text: "Universities impose constraints on student organizations. Understanding these constraints and working within them — while advocating for necessary changes — is essential."
  },
  {
    label: "Leadership Transitions",
    text: "Elections and graduation mean institutional knowledge walks out the door. Documentation and process design are necessary to survive transitions without losing progress."
  }
];

const learnings = [
  {
    label: "Numbers force clarity",
    text: "Financial analysis is not a technical exercise. It is a tool for understanding reality and making better decisions. When leadership sees the actual numbers, conversations become more grounded and decisions improve."
  },
  {
    label: "Constraints are clarifying",
    text: "Organizations often believe they have more options than they actually do. Understanding which decisions are constrained by policy, finance, or liability helps focus energy on choices that matter and accept constraints that are not negotiable."
  },
  {
    label: "Documentation is insurance",
    text: "The organizations that survive leadership transitions and challenges are the ones with clear processes and documented decisions. This takes time upfront but pays dividends across years."
  },
  {
    label: "Risk management is not risk avoidance",
    text: "The goal is not to eliminate all risk. It is to understand risk, price it appropriately, and decide consciously whether to accept it. Most organizations fail because they did not understand what they were risking."
  }
];

export default function OperationsCaseStudyPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <article>
        {/* Header */}
        <section className="border-b border-foreground/[0.07] pb-12 pt-16 sm:pt-20">
          <Container>
            <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
              Operations &amp; Strategy
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-[-0.055em] text-foreground sm:text-7xl">
              Organizational Strategy
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-muted-foreground">
              Managing complex financial and operational decisions for student organizations facing existential transitions. The work sits at the intersection of operations, finance, and governance — preserving organizational sustainability while managing risk and making decisions that hold up over time.
            </p>
          </Container>
        </section>

        {/* Metadata */}
        <section className="border-b border-foreground/[0.07] py-8">
          <Container>
            <div className="grid gap-6 sm:grid-cols-3">
              {metadata_items.map((item) => (
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

        {/* Overview */}
        <section className="py-12 sm:py-16">
          <Container className="max-w-3xl">
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Overview</h2>
            <div className="mt-6 space-y-5 text-base font-light leading-8 text-muted-foreground">
              <p>
                Student organizations operate under constraints that force hard choices. Limited budgets, volunteer leadership turnover, and operational complexity create scenarios where a single bad decision can derail years of work. My role has been to help organizations navigate these challenges through structured financial analysis, strategic planning, and clear communication of trade-offs.
              </p>
              <p>
                This work sits at the intersection of operations, finance, and governance. The goal is always the same: preserve the organization&apos;s sustainability and mission while managing risk and making decisions that hold up over time.
              </p>
            </div>
          </Container>
        </section>

        {/* Challenges */}
        <section className="border-t border-foreground/[0.07] bg-card/40 py-12 sm:py-16">
          <Container>
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">The Challenge</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {challenges.map((c) => (
                <div key={c.label} className="rounded-[1.25rem] border border-foreground/[0.07] bg-background/72 p-5 shadow-soft">
                  <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="mt-2 text-sm font-light leading-7 text-muted-foreground">{c.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Approach */}
        <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
          <Container className="max-w-3xl">
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Approach</h2>

            <h3 className="mt-8 text-xl font-medium text-foreground">Financial Audit and Transparency</h3>
            <div className="mt-4 space-y-4 text-base font-light leading-8 text-muted-foreground">
              <p>
                The first step in any organizational improvement is understanding the actual financial position. This means pulling transaction history, reconciling accounts, and building a clear picture of inflows, outflows, and reserves. Most organizations resist this because the picture is often worse than expected. Facing that reality is necessary to make good decisions.
              </p>
              <p>
                Once the baseline is clear, the organization can set realistic budgets, identify spending patterns, and plan for contingencies. Transparency also builds member trust. When leadership can explain where money goes and why, confidence increases.
              </p>
            </div>

            <h3 className="mt-8 text-xl font-medium text-foreground">Strategic Options Analysis</h3>
            <div className="mt-4 space-y-4 text-base font-light leading-8 text-muted-foreground">
              <p>
                When organizations face transitions or crises, the natural instinct is to panic or make emotional decisions. The antidote is structured analysis of options. This means explicitly laying out the pathways available, the costs and benefits of each, and the constraints that eliminate some options entirely.
              </p>
              <p>
                For example, if an organization is considering a change in governance structure or partnership, the analysis might model financial impact, operational implications, risk exposure, and alignment with university policy. Presenting this to leadership makes the decision rational rather than reactive.
              </p>
            </div>

            <h3 className="mt-8 text-xl font-medium text-foreground">Risk and Liability Management</h3>
            <div className="mt-4 space-y-4 text-base font-light leading-8 text-muted-foreground">
              <p>
                Student organizations often operate in legal and financial blindspots. Property ownership, member agreements, insurance coverage, and liability exposure are not well understood. My role has included mapping these risks, identifying gaps in protection, and designing structures that reduce exposure without paralyzing operations.
              </p>
              <p>
                This work involves understanding contracts, negotiating with vendors, and advising leadership on governance decisions that affect liability.
              </p>
            </div>

            <h3 className="mt-8 text-xl font-medium text-foreground">Documentation and Continuity</h3>
            <p className="mt-4 text-base font-light leading-8 text-muted-foreground">
              The most durable organizations have clear processes, well-documented decisions, and institutional memory that survives leadership transitions. This means writing manuals, maintaining archives, and treating documentation as a core responsibility rather than a nice-to-have.
            </p>
          </Container>
        </section>

        {/* Outcomes */}
        <section className="border-t border-foreground/[0.07] bg-card/40 py-12 sm:py-16">
          <Container className="max-w-3xl">
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Outcomes</h2>
            <div className="mt-6 space-y-5 text-base font-light leading-8 text-muted-foreground">
              <p>
                Organizations I have worked with have achieved clearer financial positions, reduced liability exposure, and improved decision-making processes. In cases of major transitions or crises, the structured analysis has helped leadership navigate complex choices with more confidence and fewer regrets.
              </p>
              <p>
                More importantly, these organizations are more resilient. They have documentation that survives leadership changes. They understand their constraints and opportunities. They make decisions consciously rather than reactively.
              </p>
              <p>
                The work also demonstrates a valuable principle: operational excellence and strategic clarity are competitive advantages even in non-profit or volunteer contexts. Organizations that think clearly about their constraints and opportunities outperform those that coast.
              </p>
            </div>
          </Container>
        </section>

        {/* Learnings */}
        <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
          <Container>
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Learnings</h2>
            <div className="mt-8 space-y-4">
              {learnings.map((item) => (
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

        {/* Footer */}
        <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
          <Container>
            <p className="text-sm font-light leading-7 text-muted-foreground">
              This work is ongoing and evolving as organizations face new challenges and opportunities.
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
