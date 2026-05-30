import type { Metadata } from "next";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Fraternal Operations Case Study",
  description:
    "Navigating the financial, legal, and operational realities of fraternity leadership: inherited debt, nationals relationships, housing management, and making sound decisions with incomplete information."
};

const metadata_items = [
  { label: "Role", value: "Chapter president, strategic planning, financial analysis, operations leadership" },
  { label: "Timeline", value: "2025 - present" },
  { label: "Organization", value: "Alpha Sigma Phi, University of Michigan" }
];

const challenges = [
  {
    label: "The Inheritance Problem",
    text: "Incoming leadership does not choose the chapter they inherit. Debt, vendor contracts, housing conditions, and the national organization's disposition toward the chapter are all pre-existing. You are elected and handed a situation you had no part in creating."
  },
  {
    label: "Nationals Relationships Vary Enormously",
    text: "How well a chapter functions is shaped heavily by its relationship with its national organization. Some chapters have nationals that are genuinely supportive. Others have nationals that are extractive, adversarial, or indifferent. Members have no way to know which they are joining."
  },
  {
    label: "Contract Liability Without Ethical Basis",
    text: "National organizations write agreements that assign liability to individuals and chapters regardless of who made the decisions or took the actions. The contracts are not written to be fair. They are written to protect nationals."
  },
  {
    label: "Housing and Property Complexity",
    text: "In Ann Arbor, a significant portion of fraternity property management is handled by a single company. Old houses bring maintenance disputes, deferred repairs, and disagreements about which party is responsible for what."
  }
];

const learnings = [
  {
    label: "Students don't choose their starting position",
    text: "The condition of a chapter when you take leadership is not a reflection of the people who take it over. Debt, poor nationals relations, and housing problems are inherited, not created by incoming members. This distinction matters when evaluating chapters and assigning responsibility."
  },
  {
    label: "What nationals says it provides and what it actually provides are different things",
    text: "National organizations sell chapters on liability protection, leadership development, and networking. In practice, the arrangement often looks more like a franchise where the chapter bears costs and risk while nationals collects fees and retains control."
  },
  {
    label: "Numbers force clarity",
    text: "Financial analysis is not a technical exercise. It is a tool for understanding reality. When leadership sees the actual numbers, what is owed and what nationals is charging for, conversations become grounded and decisions improve."
  },
  {
    label: "Documentation is the only real protection",
    text: "In a context where contracts are written against you and disputes are likely, the chapter's only durable protection is a clear record. Decisions, communications, financial transactions: all documented and archived."
  },
  {
    label: "Constraints are clarifying",
    text: "Understanding which constraints are genuine versus invented or negotiable is most of the work. Many chapters accept disadvantageous terms because no one questions whether those terms are actually enforceable."
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
              Fraternal Operations
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-muted-foreground">
              When my class got elected to chapter leadership, we had to reckon with what we had actually inherited. Debt, a strained relationship with nationals, aging housing managed by a third party, and contracts written to protect everyone except us. This is an account of navigating that.
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
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">The Information Problem</h2>
            <div className="mt-6 space-y-5 text-base font-light leading-8 text-muted-foreground">
              <p>
                When students join a fraternity, they are making a decision with almost no information about the thing that matters most: the condition of the chapter and the quality of its relationship with its national organization. You can see the house. You can meet the members. You cannot see the balance sheet, the outstanding obligations to nationals, or the contract terms that will govern your liability for the next four years.
              </p>
              <p>
                This information asymmetry is structural. It means the experience of being in a fraternity varies enormously, not because students in different chapters make different choices, but because they inherited different situations. Some chapters have nationals that are genuinely invested in the chapter's success. Others have nationals primarily interested in extracting fees and maintaining control. The members who join have no way to know which they are entering.
              </p>
              <p>
                At the University of Michigan, this plays out across chapters in ways that are visible once you know what to look for. Some chapters operate cleanly with productive nationals relationships. Others carry inherited debt, face fee structures that are difficult to justify, and deal with a nationals organization that is more adversarial than supportive. The chapters are not better or worse because of the people in them. They are in different positions because of history and structural design.
              </p>
            </div>
          </Container>
        </section>

        {/* Challenges */}
        <section className="border-t border-foreground/[0.07] bg-card/40 py-12 sm:py-16">
          <Container>
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">The Challenges</h2>
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

        {/* Nationals */}
        <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
          <Container className="max-w-3xl">
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">The Nationals Dynamic</h2>
            <div className="mt-6 space-y-5 text-base font-light leading-8 text-muted-foreground">
              <p>
                National organizations describe themselves as providing liability protection, leadership programming, networking, and institutional support. These are real benefits in theory. In practice, the value delivered varies widely, and the contractual structure almost always favors nationals regardless of what is actually provided.
              </p>
              <p>
                Chapters pay dues and receive access to risk management resources, programming, and the brand. What is rarely discussed clearly: the fee structure for additional services, the conditions under which nationals can intervene in chapter operations, and the liability language in membership agreements that assigns responsibility to chapter officers even where they had no decision-making authority.
              </p>
              <p>
                A specific pattern worth naming: manufactured fees. Nationals can issue invoices for charges not clearly defined in any agreement, inconsistently applied across chapters, and difficult to dispute because the process for disputing them runs through nationals itself. The chapter is asked to pay amounts it cannot verify, for services it may not have received, with limited recourse. Understanding this pattern and building the documentation infrastructure to challenge it is a core part of the operational work.
              </p>
            </div>
          </Container>
        </section>

        {/* Housing */}
        <section className="border-t border-foreground/[0.07] bg-card/40 py-12 sm:py-16">
          <Container className="max-w-3xl">
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Housing in Ann Arbor</h2>
            <div className="mt-6 space-y-5 text-base font-light leading-8 text-muted-foreground">
              <p>
                A significant portion of fraternity housing in Ann Arbor is managed by a single property management company. When one company manages most of the Greek housing stock, chapters have limited leverage in disputes and the company's priorities are not necessarily aligned with the chapter's.
              </p>
              <p>
                Many of these houses are very old, some dating to the 1860s. Age brings maintenance issues that are expensive to resolve and disputes about what qualifies as the chapter's responsibility versus the property manager's. Deferred maintenance from previous years compounds. Incoming leadership inherits buildings that were allowed to deteriorate before they arrived.
              </p>
              <p>
                Navigating this requires understanding what the lease actually obligates the chapter to, which fees are legitimate versus invented, and what recourse exists when property management does not uphold its side. Most chapter officers have not read the lease carefully. Getting clear on this is unglamorous, but it is the only basis for pushing back effectively.
              </p>
            </div>
          </Container>
        </section>

        {/* Approach */}
        <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
          <Container className="max-w-3xl">
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Approach</h2>

            <h3 className="mt-8 text-xl font-medium text-foreground">Start with the actual numbers</h3>
            <p className="mt-4 text-base font-light leading-8 text-muted-foreground">
              Pull the transaction history, reconcile the accounts, build a clear picture of what the chapter actually owes, what it is owed, and what it is spending. This picture is often worse than expected. Facing it is necessary before any other decision can be made well.
            </p>

            <h3 className="mt-8 text-xl font-medium text-foreground">Read the contracts</h3>
            <p className="mt-4 text-base font-light leading-8 text-muted-foreground">
              Most chapters have never systematically reviewed the agreements governing their liability. Member agreements, housing leases, nationals charters, and vendor contracts all contain terms that determine who bears risk. Reading these and getting outside perspective where needed is basic risk management that most chapters skip.
            </p>

            <h3 className="mt-8 text-xl font-medium text-foreground">Document everything</h3>
            <p className="mt-4 text-base font-light leading-8 text-muted-foreground">
              In an environment where contracts may not be written in good faith and disputes are likely, the chapter's only durable protection is a clear record. Decisions, communications with nationals and property management, financial transactions: all documented and archived. Less interesting than almost any other aspect of leadership, and also the most important.
            </p>

            <h3 className="mt-8 text-xl font-medium text-foreground">Separate negotiable from non-negotiable</h3>
            <p className="mt-4 text-base font-light leading-8 text-muted-foreground">
              Not every constraint is real. Some fees are invented. Some policy requirements are enforced inconsistently. Some liabilities that nationals or property management assert are not actually enforceable. Figuring out which constraints are genuine and which are negotiable is where most of the strategic work happens.
            </p>
          </Container>
        </section>

        {/* Alumni Database */}
        <section className="border-t border-foreground/[0.07] bg-card/40 py-12 sm:py-16">
          <Container className="max-w-3xl">
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Building the Alumni Database</h2>
            <div className="mt-6 space-y-5 text-base font-light leading-8 text-muted-foreground">
              <p>
                One of the most concrete deliverables from this work is an alumni database built almost entirely from scratch. The data nationals had on file was effectively unusable: first names, last names, and a handful of hometowns. Very few email addresses. Almost no phone numbers. For a chapter with decades of alumni, this is a significant gap with no way to reach people who care about the chapter and no basis for any kind of coordinated support.
              </p>
              <p>
                The database now covers roughly 1,400 members with verified contact information. Building it required cross-referencing multiple sources, doing manual research where records did not exist, and designing a structure that could support the chapter's operational needs going forward rather than just serving as a contact list.
              </p>
              <p>
                My role in the alumni program is infrastructure and organization. Outreach campaigns, marketing, and direct engagement will be led by others. What I am building is the system underneath it: the database, the process, the structure that makes coordinated alumni relations possible. Infrastructure work is invisible when it works, but it determines whether anything else can function.
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
              This work is ongoing. The situations that student organizations face are rarely resolved cleanly. They are managed, navigated, and handed forward.
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
