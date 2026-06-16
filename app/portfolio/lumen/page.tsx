import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Lumen Case Study",
  description:
    "A SwiftUI smart-home platform focused on rooms, scenes, sensory calm, interoperability, and reducing the friction of fragmented home ecosystems.",
  alternates: {
    canonical: "/portfolio/lumen"
  }
};

const metadata_items = [
  { label: "Role", value: "Product design, system architecture, SwiftUI" },
  { label: "Stack", value: "SwiftUI · Observation · NavigationStack · Xcode" },
  { label: "Timeline", value: "2026 - present" },
  { label: "Status", value: "In development" }
];

const hierarchy = [
  { num: "01", name: "Rooms", desc: "The app starts with spaces people recognize, not a manufacturer-by-manufacturer list of hardware." },
  { num: "02", name: "Scenes", desc: "Common actions should be saved once and triggered quickly, instead of rebuilt every time from separate apps." },
  { num: "03", name: "Presence", desc: "A useful smart home should understand context, occupancy, and routine instead of waiting for constant manual input." },
  { num: "04", name: "Automation", desc: "Automations need to be predictable. If the user cannot understand why something happened, the system is not doing its job." }
];

const phases = [
  {
    title: "Problem",
    text: "Smart-home control is usually organized around devices and manufacturers, not how people actually live in rooms."
  },
  {
    title: "Information architecture",
    text: "Lumen organizes control around rooms, scenes, intent, and presence instead of app switching and vendor menus."
  },
  {
    title: "System architecture",
    text: "The product is designed as a native, on-device-first iOS companion with future support for multiple smart-home ecosystems."
  },
  {
    title: "Design system",
    text: "The interface language is warm, quiet, and low-friction, designed for calm interaction rather than command-center theater."
  },
  {
    title: "SwiftUI development",
    text: "The prototype focuses on navigation, room control, scenes, and future automation logic."
  },
  {
    title: "Learning",
    text: "Good smart-home design is not about adding more controls. It is about reducing the number of decisions required to feel comfortable in a space."
  }
];

export default function LumenCaseStudyPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <article className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-[-14rem] top-16 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.2),rgba(139,92,246,0.08)_42%,transparent_72%)] blur-3xl" />
        <div className="pointer-events-none absolute right-[-12rem] top-[24rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(79,209,255,0.2),rgba(79,209,255,0.07)_44%,transparent_74%)] blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-18rem] left-1/3 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,95,48,0.18),rgba(255,159,67,0.06)_44%,transparent_74%)] blur-3xl" />

        <section className="relative border-b border-foreground/[0.06] py-14 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#ff4fd8]">Case Study · Lumen</p>
              <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.96] tracking-[-0.05em] text-foreground sm:text-6xl lg:text-7xl">
                Building a smarter home without adding more complexity.
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-foreground/68">
                Lumen is a native smart-home companion designed around rooms, scenes, and sensory calm instead of device chaos. It starts from a simple problem: modern smart homes are powerful, but fragmented across apps, ecosystems, and automation layers.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://lumen.muharafiq.com" target="_blank" rel="noreferrer" className="rounded-full bg-[linear-gradient(135deg,#ff4fd8,#8b5cf6,#4fd1ff)] px-5 py-3 text-sm font-light text-white shadow-[0_18px_60px_rgba(255,79,216,0.28)] transition hover:scale-[1.02] hover:shadow-[0_22px_80px_rgba(79,209,255,0.34)]">
                  Preview app
                </a>
                <Link href="/portfolio" className="rounded-full border border-[#8b5cf6]/35 bg-[#8b5cf6]/[0.08] px-5 py-3 text-sm font-light text-foreground transition hover:border-[#4fd1ff]/50 hover:bg-[#4fd1ff]/[0.08]">
                  Back to work
                </Link>
              </div>
            </div>
            <div className="group relative isolate overflow-visible rounded-[2rem]">
              <div className="pointer-events-none absolute left-[28%] top-[35%] -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.46),rgba(139,92,246,0.18)_42%,transparent_70%)] blur-3xl transition duration-700 group-hover:scale-105 group-hover:opacity-95 motion-safe:animate-[ambientGlow_12s_ease-in-out_infinite]" />
              <div className="pointer-events-none absolute right-[-8rem] top-[-2rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(79,209,255,0.42),rgba(79,209,255,0.14)_45%,transparent_72%)] blur-3xl transition duration-700 group-hover:scale-110" />
              <div className="pointer-events-none absolute -bottom-16 left-16 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,95,48,0.34),rgba(255,159,67,0.1)_45%,transparent_72%)] blur-3xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-[#8b5cf6]/25 bg-card shadow-[0_30px_110px_rgba(139,92,246,0.24)] ring-1 ring-[#4fd1ff]/20">
                <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(255,79,216,0.2),transparent_36%),radial-gradient(circle_at_86%_30%,rgba(79,209,255,0.2),transparent_38%),radial-gradient(circle_at_55%_92%,rgba(255,95,48,0.18),transparent_45%)]" />
                <Image src="/images/projects/lumen-thumbnail.svg" alt="Annotated Lumen smart-home interface showing room and scene controls" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" priority />
              </div>
            </div>
          </Container>
        </section>

        <section className="relative border-b border-foreground/[0.06] bg-[linear-gradient(90deg,rgba(255,79,216,0.06),rgba(139,92,246,0.07),rgba(79,209,255,0.055),rgba(255,95,48,0.045))] py-14 sm:py-20">
          <Container className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {metadata_items.map((item) => (
              <div key={item.label} className="rounded-[1.2rem] border border-[#8b5cf6]/16 bg-card/45 p-5 shadow-[0_18px_60px_rgba(139,92,246,0.08)]">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#4fd1ff]">{item.label}</p>
                <p className="mt-3 text-sm font-light leading-6 text-foreground/72">{item.value}</p>
              </div>
            ))}
          </Container>
        </section>

        <section className="relative border-b border-foreground/[0.06] py-14 sm:py-20">
          <Container>
            <h2 className="max-w-2xl font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">
              Before: devices, manufacturers, app switching. After: rooms, scenes, intent, automation.
            </h2>
            <p className="mt-4 max-w-2xl text-base font-light leading-7 text-foreground/64">
              Most smart-home apps start with the device. Lumen starts with the room, the routine, and the action the user is trying to take. The goal is not to show every possible control. The goal is to make the useful ones easier to reach and easier to trust.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {hierarchy.map((item) => (
                <article key={item.name} className="rounded-[1.35rem] border border-[#8b5cf6]/16 bg-[linear-gradient(135deg,rgba(255,79,216,0.04),rgba(139,92,246,0.045),rgba(79,209,255,0.035),rgba(255,95,48,0.025))] p-6 shadow-[0_20px_70px_rgba(139,92,246,0.08)] transition hover:border-[#4fd1ff]/28 hover:shadow-[0_24px_90px_rgba(255,79,216,0.12)]">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-sm text-[#ff4fd8]">{item.num}</span>
                    <h3 className="font-display text-2xl tracking-[-0.04em] text-foreground">{item.name}</h3>
                  </div>
                  <p className="mt-4 text-sm font-light leading-7 text-foreground/68">{item.desc}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="relative border-b border-foreground/[0.06] py-14 sm:py-20">
          <Container>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#4fd1ff]">Case study structure</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl tracking-[-0.04em] text-foreground sm:text-4xl">
              From problem to system.
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {phases.map((phase) => (
                <article key={phase.title} className="rounded-[1.35rem] border border-[#8b5cf6]/16 bg-card/45 p-6 shadow-[0_18px_60px_rgba(139,92,246,0.08)]">
                  <h3 className="font-display text-2xl tracking-[-0.04em] text-foreground">{phase.title}</h3>
                  <p className="mt-3 text-sm font-light leading-7 text-foreground/68">{phase.text}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="relative py-14 sm:py-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,79,216,0.28),rgba(79,209,255,0.34),transparent)]" />
          <div className="pointer-events-none absolute right-1/4 top-8 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(79,209,255,0.14),transparent_70%)] blur-3xl" />
          <Container>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#4fd1ff]">Interoperability</p>
            <p className="mt-3 max-w-xl text-sm font-light leading-7 text-foreground/56">
              Smart homes only become useful when different ecosystems can coexist. Lumen is designed around interoperability instead of vendor lock-in, with local control treated as a priority wherever the hardware allows it. The integration layer matters because reliability matters. A system that depends on five separate apps and a cloud round trip for every basic action is not really smart. It is just fragile with better branding.
            </p>
          </Container>
        </section>
      </article>
    </SiteFrame>
  );
}
