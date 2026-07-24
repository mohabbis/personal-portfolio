import Image from "next/image";
import type { ReactNode } from "react";

const washorbitMark = "/images/logos/washorbit-mark.svg";

const NAV = [
  "Dashboard",
  "Customers",
  "Cases",
  "Claims",
  "Incidents",
  "Tasks",
  "Approvals",
  "Reports",
  "Integrations",
  "Settings"
];

type Tone = "gray" | "blue" | "green" | "amber" | "red" | "purple";

const toneClasses: Record<Tone, string> = {
  gray: "bg-slate-100 text-slate-700",
  blue: "bg-blue-100 text-blue-800",
  green: "bg-green-100 text-green-800",
  amber: "bg-amber-100 text-amber-800",
  red: "bg-red-100 text-red-800",
  purple: "bg-purple-100 text-purple-800"
};

function Badge({ children, tone = "gray" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-slate-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
      {children}
    </h4>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <span className="text-[10px] font-medium uppercase tracking-wide text-slate-500">
      {children}
    </span>
  );
}

/**
 * The command-center chrome that wraps every WashOrbit screen: a dark slate
 * sidebar (ink) with the orbital mark + nav, and a light slate work area —
 * mirroring the real app layout.
 */
function AppShell({
  active,
  url,
  role,
  children
}: {
  active: string;
  url: string;
  role: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-300/70 bg-white shadow-[0_24px_80px_rgba(11,18,32,0.28)]">
      {/* browser bar */}
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <div className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 font-mono text-[11px] text-slate-400">
          {url}
        </div>
      </div>

      <div className="flex min-h-[26rem] flex-col md:flex-row">
        {/* sidebar */}
        <aside className="flex shrink-0 flex-col bg-[#0b1220] md:w-52">
          <div className="flex items-center gap-2 px-4 py-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/15 ring-1 ring-blue-500/40">
              <Image src={washorbitMark} alt="" width={22} height={22} className="h-[22px] w-[22px]" />
            </span>
            <span>
              <span className="block text-sm font-semibold leading-tight text-white">WashOrbit</span>
              <span className="block text-[11px] leading-tight text-slate-400">Sunshine Car Wash</span>
            </span>
          </div>
          <nav className="flex flex-wrap gap-1 px-2 pb-3 md:flex-col md:gap-0.5">
            {NAV.map((item) => (
              <span
                key={item}
                className={`rounded-md px-3 py-1.5 text-[13px] ${
                  item === active
                    ? "bg-blue-600 font-medium text-white"
                    : "text-slate-300"
                }`}
              >
                {item}
              </span>
            ))}
          </nav>
          <div className="mt-auto hidden border-t border-[#1c2740] px-4 py-3 md:block">
            <div className="text-[13px] font-medium text-white">Alice Admin</div>
            <div className="mt-1">
              <Badge tone="blue">{role}</Badge>
            </div>
          </div>
        </aside>

        {/* work area */}
        <main className="flex-1 overflow-x-auto bg-slate-50 px-4 py-5 md:px-6">
          <div className="min-w-[34rem]">{children}</div>
        </main>
      </div>
    </div>
  );
}

function PageHeader({
  title,
  subtitle,
  actions,
  meta
}: {
  title: ReactNode;
  subtitle?: string;
  actions?: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        {subtitle ? <p className="mt-0.5 text-[13px] text-slate-500">{subtitle}</p> : null}
      </div>
      <div className="flex items-center gap-2">
        {meta}
        {actions}
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  tone
}: {
  label: string;
  value: string;
  tone: Tone;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
      <div className="text-[10px] font-medium uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-slate-900">{value}</div>
      <div className={`mt-2 h-1 w-8 rounded-full ${toneClasses[tone]}`} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Screen 1 — Operations Dashboard                                     */
/* ------------------------------------------------------------------ */

const recentCases = [
  { n: "1042", title: "Tires not cleaned after Premium Wash", customer: "Maria Alvarez", loc: "L3", sev: ["High", "amber"], status: ["In Progress", "amber"] },
  { n: "1041", title: "Scratch on driver-side door alleged after wash", customer: "James Chen", loc: "L1", sev: ["Critical", "red"], status: ["Awaiting Approval", "purple"] },
  { n: "1039", title: "Requests credit for two missed washes", customer: "Robert Okafor", loc: "L4", sev: ["Medium", "blue"], status: ["Awaiting Approval", "purple"] },
  { n: "1040", title: "Charged after membership pause", customer: "Priya Natarajan", loc: "L2", sev: ["Medium", "blue"], status: ["Triaged", "blue"] }
] as const;

export function WashOrbitDashboardMock() {
  return (
    <AppShell active="Dashboard" url="app.washorbit.com/dashboard" role="Org Admin">
      <PageHeader
        title="Operations Dashboard"
        subtitle="Sunshine Car Wash · signed in as Alice Admin"
        actions={
          <span className="rounded-md bg-blue-600 px-3 py-1.5 text-[13px] font-medium text-white">
            + New case
          </span>
        }
      />

      <div className="grid grid-cols-3 gap-3 lg:grid-cols-6">
        <Stat label="Open cases" value="7" tone="blue" />
        <Stat label="Overdue SLA" value="1" tone="red" />
        <Stat label="Pending approvals" value="2" tone="purple" />
        <Stat label="Open incidents" value="1" tone="amber" />
        <Stat label="Open claims" value="1" tone="amber" />
        <Stat label="Assigned to me" value="3" tone="green" />
      </div>

      <div className="mt-6">
        <SectionTitle>Recent cases</SectionTitle>
        <Card className="overflow-hidden">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="bg-slate-50 text-left text-[11px] font-medium text-slate-500">
                <th className="border-b border-slate-200 px-3 py-2">#</th>
                <th className="border-b border-slate-200 px-3 py-2">Title</th>
                <th className="border-b border-slate-200 px-3 py-2">Customer</th>
                <th className="border-b border-slate-200 px-3 py-2">Loc</th>
                <th className="border-b border-slate-200 px-3 py-2">Severity</th>
                <th className="border-b border-slate-200 px-3 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentCases.map((c) => (
                <tr key={c.n}>
                  <td className="border-b border-slate-100 px-3 py-2 font-medium text-blue-600">#{c.n}</td>
                  <td className="border-b border-slate-100 px-3 py-2 text-slate-800">{c.title}</td>
                  <td className="border-b border-slate-100 px-3 py-2 text-slate-600">{c.customer}</td>
                  <td className="border-b border-slate-100 px-3 py-2 text-slate-500">{c.loc}</td>
                  <td className="border-b border-slate-100 px-3 py-2">
                    <Badge tone={c.sev[1] as Tone}>{c.sev[0]}</Badge>
                  </td>
                  <td className="border-b border-slate-100 px-3 py-2">
                    <Badge tone={c.status[1] as Tone}>{c.status[0]}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </AppShell>
  );
}

/* ------------------------------------------------------------------ */
/* Screen 2 — Case detail (the primary surface)                        */
/* ------------------------------------------------------------------ */

function KeyValue({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="mt-0.5 text-[13px] text-slate-800">{children}</div>
    </div>
  );
}

export function WashOrbitCaseMock() {
  return (
    <AppShell active="Cases" url="app.washorbit.com/cases/1042" role="Org Admin">
      <PageHeader
        title="Case #1042 · Tires not cleaned after Premium Wash"
        subtitle="Wash Quality · opened Jul 18, 9:24 AM by Carmen Service"
        meta={
          <>
            <Badge tone="amber">High</Badge>
            <Badge tone="green">Resolved</Badge>
          </>
        }
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {/* main workflow column */}
        <div className="space-y-4 lg:col-span-2">
          <Card className="p-4">
            <SectionTitle>What happened</SectionTitle>
            <p className="text-[13px] leading-6 text-slate-800">
              Member reports the tire shine was not applied and tires still looked dirty after a
              Premium Wash + Tire Shine at Northgate.
            </p>
            <dl className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <KeyValue label="Customer">
                <span className="text-blue-600">Maria Alvarez</span>
              </KeyValue>
              <KeyValue label="Vehicle">Toyota RAV4 (MI-8842AA)</KeyValue>
              <KeyValue label="Visit">Jul 18 @ L3</KeyValue>
              <KeyValue label="Location">L3 — Northgate</KeyValue>
              <KeyValue label="Owner">Carmen Service</KeyValue>
              <KeyValue label="SLA">
                <Badge tone="gray">Met</Badge>
              </KeyValue>
            </dl>
          </Card>

          <Card className="p-4">
            <SectionTitle>Ownership &amp; what&apos;s due next</SectionTitle>
            <ul className="divide-y divide-slate-100">
              {[
                ["Inspect tire-shine coverage at Northgate", "Liam Location", "Done", "green"],
                ["Clear applicator #2 nozzle & restore pressure", "Morgan Maint.", "Done", "green"],
                ["Confirm return visit with member", "Carmen Service", "Done", "green"]
              ].map(([t, who, st, tone]) => (
                <li key={t} className="flex items-center justify-between gap-3 py-2">
                  <div>
                    <div className="text-[13px] text-slate-800">{t}</div>
                    <div className="text-[11px] text-slate-400">Assigned to {who}</div>
                  </div>
                  <Badge tone={tone as Tone}>{st}</Badge>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-4">
            <SectionTitle>Recovery &amp; approvals</SectionTitle>
            <div className="mb-3 rounded-md bg-slate-50 px-3 py-2 text-[13px] text-slate-700">
              <Label>Promised</Label>
              <div>Complimentary Premium Wash + Tire Shine and confirmation the line is fixed.</div>
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-slate-100 py-2">
              <div>
                <div className="text-[13px] text-slate-800">Complimentary Wash · $24.99</div>
                <div className="text-[11px] text-slate-400">
                  Approved by Alice Admin (Org Admin) · delivered
                </div>
              </div>
              <Badge tone="green">Delivered</Badge>
            </div>
            <p className="mt-2 text-[11px] text-slate-400">
              Recovery offers require leadership approval before delivery.
            </p>
          </Card>

          <Card className="p-4">
            <SectionTitle>Verify resolution &amp; close</SectionTitle>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-slate-200 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-slate-800">Operational correction</span>
                  <Badge tone="green">Verified</Badge>
                </div>
                <p className="mt-2 text-[11px] leading-5 text-slate-500">
                  Post-repair test cycles show full tire coverage; supervisor confirmed on 5 vehicles.
                </p>
              </div>
              <div className="rounded-md border border-slate-200 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-slate-800">Customer outcome</span>
                  <Badge tone="green">Verified</Badge>
                </div>
                <p className="mt-2 text-[11px] leading-5 text-slate-500">
                  Member returned for the complimentary wash; tires cleaned and shined correctly.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* right rail */}
        <div className="space-y-4">
          <Card className="p-4">
            <SectionTitle>Linked incident</SectionTitle>
            <div className="text-[13px] font-medium text-slate-800">
              Tire shine not reaching tires — Northgate (L3)
            </div>
            <dl className="mt-3 space-y-2.5">
              <KeyValue label="Equipment">Tire Shine Applicator #2</KeyValue>
              <KeyValue label="Root cause">
                Clogged nozzle and low product pressure prevented product from reaching tires.
              </KeyValue>
              <KeyValue label="Linked cases">
                <span className="inline-flex items-center gap-1">
                  3 complaints <Badge tone="blue">shared cause</Badge>
                </span>
              </KeyValue>
              <KeyValue label="Status">
                <Badge tone="green">Corrected &amp; verified</Badge>
              </KeyValue>
            </dl>
          </Card>

          <Card className="p-4">
            <SectionTitle>Financial impact</SectionTitle>
            <div className="flex items-center justify-between text-[13px] text-slate-700">
              <span>Recovery delivered</span>
              <span className="font-medium">$24.99</span>
            </div>
            <div className="mt-1 flex items-center justify-between text-[13px] text-slate-700">
              <span>Claim payout</span>
              <span className="font-medium">$0.00</span>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-2 text-[13px] font-semibold text-slate-900">
              <span>Total cost</span>
              <span>$24.99</span>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <SectionTitle>DRB sync</SectionTitle>
              <Badge tone="green">Synced</Badge>
            </div>
            <p className="text-[11px] leading-5 text-slate-500">
              Customer, vehicle, visit, and membership mirrored from DRB. Cached read-only — no card
              data stored.
            </p>
          </Card>

          <Card className="p-4">
            <SectionTitle>Audit trail</SectionTitle>
            <ol className="space-y-2 text-[11px] text-slate-500">
              <li>Case opened · Carmen Service</li>
              <li>Linked to shared incident · Carmen Service</li>
              <li>Corrective action recorded · Morgan Maint.</li>
              <li>Recovery approved · Alice Admin</li>
              <li>Both outcomes verified · case closed</li>
            </ol>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

/* ------------------------------------------------------------------ */
/* Screen 3 — Approvals queue                                          */
/* ------------------------------------------------------------------ */

export function WashOrbitApprovalsMock() {
  return (
    <AppShell active="Approvals" url="app.washorbit.com/approvals" role="Org Admin">
      <PageHeader
        title="Approvals"
        subtitle="Recovery offers and claim payouts require leadership sign-off before delivery"
      />

      <div className="space-y-3">
        {[
          {
            kind: "Recovery · Account credit",
            detail: "Two-wash account credit — Case #1039 · Robert Okafor",
            by: "Requested by Carmen Service",
            amount: "$39.98",
            tone: "purple" as Tone
          },
          {
            kind: "Damage claim payout",
            detail: "Alleged door scratch — Case #1041 · James Chen",
            by: "Requested by Liam Location",
            amount: "$180.00",
            tone: "purple" as Tone
          }
        ].map((a) => (
          <Card key={a.detail} className="flex flex-wrap items-center justify-between gap-4 p-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-medium text-slate-800">{a.kind}</span>
                <Badge tone={a.tone}>Pending</Badge>
              </div>
              <div className="mt-1 text-[13px] text-slate-600">{a.detail}</div>
              <div className="mt-0.5 text-[11px] text-slate-400">{a.by}</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-base font-semibold text-slate-900">{a.amount}</span>
              <span className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-[12px] font-medium text-slate-700">
                Deny
              </span>
              <span className="rounded-md bg-blue-600 px-3 py-1.5 text-[12px] font-medium text-white">
                Approve
              </span>
            </div>
          </Card>
        ))}
      </div>

      <p className="mt-4 text-[11px] text-slate-400">
        Every approval decision is written to the immutable audit log in the same transaction.
      </p>
    </AppShell>
  );
}
