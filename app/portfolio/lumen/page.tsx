import type { Metadata } from "next";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Lumen — Case Study",
  description:
    "A smart-home ecosystem designed around human intent. The interface organizes control around rooms and scenes; the system layer synchronizes state across heterogeneous devices and protocols."
};

const metadata_items = [
  { label: "Role", value: "Product design, system architecture, iOS development, Muhome integration" },
  { label: "Timeline", value: "2023 — present. Launched App Store 2024, active development ongoing." },
  { label: "Scope", value: "Consumer iOS app, backend infrastructure, device protocol abstraction, automation logic" },
  { label: "Status", value: "Production. Supporting GE Cync, Govee, HomeKit, and Matter protocols." }
];

const hierarchy = [
  {
    name: "Rooms",
    desc: "Physical spaces in the home. Kitchen, bedroom, living room. Users understand and organize their space around rooms. Each room maintains a collection of devices and scenes."
  },
  {
    name: "Devices",
    desc: "Physical hardware. Lights, switches, dimmers, sensors. Devices belong to rooms and expose capabilities (brightness, color, temperature). Users rarely interact with devices directly in the primary interface but can drill down for granular control."
  },
  {
    name: "Scenes",
    desc: "Named states combining multiple device commands. Reading mode (all lights to warm white, 40 percent). Movie mode (all lights off, one accent light to 10 percent). Scenes live at the room level and can be triggered manually or by automations."
  },
  {
    name: "Automations",
    desc: "Conditionally triggered actions. If motion detected after sunset, activate security scene. If time is 6 AM on weekdays, activate morning scene. Automations can target scenes or individual devices and can be scheduled or event-driven."
  }
];

const challenges = [
  {
    label: "Protocol Heterogeneity",
    text: "HomeKit, Matter, Zigbee, Z-Wave, Wi-Fi Direct, and proprietary protocols coexist. Devices speak different languages. The system must discover, identify, and communicate with devices across all protocols without user configuration or technical knowledge."
  },
  {
    label: "State Synchronization",
    text: "When a user taps a light in the app, that state change must propagate to the device, be reflected in the UI, and persist across app restarts and device reboots. Network latency, offline mode, manual physical overrides, and concurrent updates complicate this significantly."
  },
  {
    label: "Automation Logic",
    text: "Scenes combine multiple device commands into a named state. Automations trigger scenes based on conditions (time, motion, environmental sensors). The system must execute this logic reliably, handle partial failures, and allow users to understand and modify logic without a programming background."
  },
  {
    label: "User Onboarding",
    text: "Most users have a heterogeneous collection of devices already in their home. Getting them from zero to functional in under five minutes requires frictionless discovery, intelligent defaults, and guided room organization. This cannot feel like system configuration."
  }
];

const learnings = [
  {
    label: "Architecture enables simplicity",
    text: "A complex system can present a simple interface when the backend absorbs complexity. The smart home is genuinely complex. None of that complexity is visible in Lumen because Muhome carries the weight. Good architecture is invisible to users."
  },
  {
    label: "Information models compound over time",
    text: "The decision to organize around rooms and scenes cascaded through product design, backend architecture, automation logic, and onboarding. Small modeling decisions early on shape the entire system."
  },
  {
    label: "User mental models matter more than system models",
    text: "Users think in rooms and scenes, not devices and protocols. The interface should reflect user mental models, not system architecture. This sometimes means the interface and backend use different conceptual frameworks — that is fine."
  },
  {
    label: "Separation of concerns is non-negotiable for scale",
    text: "The independence between frontend and backend allowed both to evolve without breaking the other. Supporting new protocols, refining the interface, adding automations — each happened in isolation."
  },
  {
    label: "Onboarding is product strategy, not just UX",
    text: "The first-run experience shapes how users understand the product. Investing in frictionless discovery and guided room organization was as important as the main interface. If onboarding is weak, everything downstream feels broken."
  }
];

export default function LumenCaseStudyPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <article>
        {/* Header */}
        <section className="border-b border-foreground/[0.07] pb-12 pt-16 sm:pt-20">
          <Container>
            <p className="text-[11px] font-normal uppercase tracking-[0.08em] text-muted-foreground">
              Featured Project — Product &amp; System Architecture
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-[-0.055em] text-foreground sm:text-7xl">
              Lumen
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-muted-foreground">
              A smart-home ecosystem designed around human intent rather than device fragments. The interface organizes control around rooms and scenes; the system layer synchronizes state across heterogeneous devices and protocols. The work demonstrates how architecture decisions at the system level enable simplicity at the interface level.
            </p>
          </Container>
        </section>

        {/* Metadata grid */}
        <section className="border-b border-foreground/[0.07] py-8">
          <Container>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

        {/* Problem */}
        <section className="py-12 sm:py-16">
          <Container className="max-w-3xl">
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Problem</h2>
            <div className="mt-6 space-y-5 text-base font-light leading-8 text-muted-foreground">
              <p>
                Smart home control is fragmented by design. Each device vendor provides an app. HomeKit offers a unified interface for Apple devices. Matter promises protocol convergence. In the meantime, users live with multiple apps, inconsistent naming conventions, and the cognitive burden of managing device-level granularity rather than home-level intent.
              </p>
              <p>
                The deeper problem is architectural. A light is not meaningful to a user. A room at a particular brightness and color temperature, matching a named scene or responding to an automation trigger — that is meaningful. Current smart home systems force users to think in device terms when they should be thinking in intent terms (activate reading mode, set evening scene, activate motion-triggered security lighting).
              </p>
              <p>
                This gap between user mental models and system models creates friction at every interaction. Users forget which app controls which device. They get confused about why a command did not work. They give up on automation because setting up device-level triggers is tedious and fragile.
              </p>
            </div>
          </Container>
        </section>

        {/* Challenges */}
        <section className="border-t border-foreground/[0.07] bg-card/40 py-12 sm:py-16">
          <Container>
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Challenges</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
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

        {/* Solution — Information Model */}
        <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
          <Container className="max-w-3xl">
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Solution Architecture</h2>
            <h3 className="mt-8 text-xl font-medium text-foreground">Information Model</h3>
            <p className="mt-4 text-base font-light leading-8 text-muted-foreground">
              The design organizes smart home control around four hierarchical levels. This structure is fundamental to everything downstream — interface design, backend architecture, automation logic, and onboarding flow all derive from this model.
            </p>
            <div className="mt-6 space-y-3">
              {hierarchy.map((level) => (
                <div
                  key={level.name}
                  className="rounded-[1rem] border-l-2 border-foreground/40 bg-card/60 px-5 py-4"
                >
                  <p className="font-medium text-foreground">{level.name}</p>
                  <p className="mt-1 text-sm font-light leading-6 text-muted-foreground">{level.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-10 text-xl font-medium text-foreground">Interface Design</h3>
            <div className="mt-4 space-y-5 text-base font-light leading-8 text-muted-foreground">
              <p>
                The home view is room-first and scene-forward. Each room displays as a card with the room name, quick toggle for all lights, and a visual scene picker showing available scenes. Tapping into a room reveals device-level controls and allows creation or editing of scenes. This design serves the 80 percent use case (turn lights on, activate a scene) with zero friction while keeping the 20 percent (fine-grained controls, automation setup) accessible but not prominent.
              </p>
              <p>
                The information hierarchy is intentional. Most users do not care about individual device state; they care about the room state. Scene controls are visible because that is how users think about their space. Device controls exist for power users but are nested to avoid cognitive overload. The UI prioritizes feedback — optimistic updates make the interface feel responsive even with network latency.
              </p>
            </div>

            <h3 className="mt-10 text-xl font-medium text-foreground">System Layer (Muhome)</h3>
            <div className="mt-4 space-y-5 text-base font-light leading-8 text-muted-foreground">
              <p>
                The backend abstracts away protocol complexity. The frontend sends commands to Muhome; Muhome figures out the correct protocol, device address, and command format. This separation of concerns is critical. It allows the interface to assume all devices work the same way while the backend handles the messy reality of protocol diversity.
              </p>
              <p>
                Muhome also manages state synchronization. It maintains an authoritative view of device state by polling devices, listening for unsolicited state updates, and reconciling conflicts. It executes automations independently of the frontend, so rules fire even if the app is closed.
              </p>
            </div>

            <div className="mt-6 rounded-[1rem] border border-foreground/[0.07] border-l-2 border-l-foreground/60 bg-card/60 p-5">
              <p className="text-sm font-light leading-7 text-muted-foreground">
                <strong className="font-medium text-foreground">Architectural principle:</strong> The system layer is responsible for reliability and consistency. The interface is responsible for clarity and delightfulness. This split allows each layer to optimize without conflicting requirements.
              </p>
            </div>
          </Container>
        </section>

        {/* Architecture diagram */}
        <section className="border-t border-foreground/[0.07] bg-card/40 py-12 sm:py-16">
          <Container>
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Technical Architecture</h2>
            <div className="mt-8 overflow-x-auto rounded-[1.25rem] border border-foreground/[0.07] bg-background/80 p-6 shadow-soft">
              <pre className="font-mono text-xs leading-6 text-muted-foreground">{`┌─────────────────────────────────────────┐
│           iOS App (Lumen)               │
│  ┌────────────┐      ┌──────────────┐  │
│  │   UI       │      │  State Mgmt  │  │
│  │  Rooms     │ ←→   │  (Observ.)   │  │
│  │  Scenes    │      │              │  │
│  │  Controls  │      └──────────────┘  │
│  └────────────┘             ↕           │
└─────────────────────────────────────────┘
              ↓ WebSocket / HTTP
┌─────────────────────────────────────────┐
│          Muhome System Layer            │
│  ┌──────────────────────────────────┐  │
│  │   Protocol Adapters              │  │
│  │  ├── HomeKit (via Home framework)│  │
│  │  ├── Matter (via matter.js)      │  │
│  │  ├── Govee HTTP API              │  │
│  │  └── GE Cync (cloud)             │  │
│  └──────────────────────────────────┘  │
│  ┌──────────────────────────────────┐  │
│  │   State Manager & Sync Logic     │  │
│  │   Automation Engine              │  │
│  │   Discovery & Device Registry    │  │
│  └──────────────────────────────────┘  │
└─────────────────────────────────────────┘
       ↓        ↓        ↓        ↓
     HomeKit  Matter   Govee   GE Cync`}</pre>
            </div>
          </Container>
        </section>

        {/* Outcomes */}
        <section className="border-t border-foreground/[0.07] py-12 sm:py-16">
          <Container className="max-w-3xl">
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Outcomes</h2>
            <div className="mt-6 space-y-5 text-base font-light leading-8 text-muted-foreground">
              <p>
                Lumen launched on the App Store in 2024 and is actively used to manage heterogeneous smart home environments. The system has proven reliable managing GE Cync bulbs, Govee strips, HomeKit-compatible hardware, and mixed-protocol setups. Users onboard in approximately four minutes, and the room-and-scene model has proven intuitive for both simple toggles and complex automations.
              </p>
              <p>
                The separation of concerns between frontend and backend has proven its value. The interface has been refined multiple times without touching core logic. The system layer has added protocol support without requiring frontend changes. This independence of evolution is a characteristic of well-structured systems.
              </p>
              <p>
                The most important outcome is that smart-home control feels less technical. Users are no longer managing devices; they are managing their home experience. That shift in framing — enabled by the information architecture and system design — is the core contribution of this work.
              </p>
            </div>
          </Container>
        </section>

        {/* Learnings */}
        <section className="border-t border-foreground/[0.07] bg-card/40 py-12 sm:py-16">
          <Container>
            <h2 className="font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">Learnings &amp; Principles</h2>
            <div className="mt-8 space-y-4">
              {learnings.map((item) => (
                <div
                  key={item.label}
                  className="border-l-2 border-foreground/30 py-2 pl-5"
                >
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
              Lumen is live on the App Store. Source code is available at github.com/mohabbis/muhome. The Muhome system layer is documented separately.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/portfolio/muhome"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/80"
              >
                View Muhome architecture
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
              >
                View other projects
              </Link>
            </div>
          </Container>
        </section>
      </article>
    </SiteFrame>
  );
}
