import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Lumen Case Study",
  description:
    "A calm iOS lighting companion for rooms, scenes, and ambient control. Built natively in SwiftUI and currently in TestFlight beta."
};

const metadata_items = [
  { label: "Role", value: "Product design, interface design, iOS development" },
  { label: "Stack", value: "SwiftUI · Observation · NavigationStack · Xcode" },
  { label: "Timeline", value: "2026 - present" },
  { label: "Status", value: "TestFlight beta" }
];

const hierarchy = [
  { num: "01", name: "Rooms", desc: "Spaces first. The app starts where people actually are." },
  { num: "02", name: "Devices", desc: "Hardware stays available without taking over the interface." },
  { num: "03", name: "Scenes", desc: "Named moods like Reading, Movie Night, and Evening Wind Down." },
  { num: "04", name: "Automations", desc: "Time, motion, and presence cues that make lighting feel responsive." },
];

const protocols = [
  { name: "Matter", via: "Local-ready" },
  { name: "Govee", via: "Lighting API" },
  { name: "GE Cync", via: "Device bridge" },
  { name: "Scenes", via: "Room logic" },
];

const buildPatterns = [
  { label: "State", desc: "One shared home state keeps rooms, scenes, and controls aligned." },
  { label: "Navigation", desc: "Room list to scenes to device controls, with each step feeling native." },
  { label: "Updates", desc: "Device changes refresh the interface without polling or manual reloads." },
  { label: "Controls", desc: "Brightness and warmth controls built with direct drag interactions." },
];

const learnings = [
  { label: "Less interface, more atmosphere", text: "The app works best when the lighting system fades into the room instead of demanding attention." },
  { label: "Rooms beat device lists", text: "People think in spaces and moments, not product names or hardware categories." },
  { label: "Native details matter", text: "Small gestures, transitions, and haptics make control feel calmer and more physical." },
];

export default function LumenCaseStudyPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <div className="relative bg-[#06070f]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[70vh] w-full max-w-3xl -translate-x-1/2 rounded-[50%] bg-[#7c3aed] opacity-[0.08] blur-[180px]" />
          <div className="absolute bottom-0 left-0 h-[40vh] w-[60vw] rounded-[50%] bg-[#2563eb] opacity-[0.05] blur-[160px]" />
        </div>

        <article className="relative">
          <section className="relative overflow-hidden pb-16 pt-16 sm:pt-24">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-[520px] w-[640px] rounded-full bg-[#6d28d9] opacity-[0.11] blur-[130px]" />
              <div className="absolute right-0 top-8 h-[300px] w-[420px] rounded-full bg-[#3b82f6] opacity-[0.06] blur-[100px]" />
            </div>
            <Container>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">☀ Lumen</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-widest text-white/40">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
                  TestFlight Beta
                </span>
              </div>

              <h1 className="mt-5 font-serif text-5xl font-light leading-[1.06] tracking-[-0.02em] text-white/90 sm:text-7xl">
                Your home,<br />
                <em className="text-white/50">in rhythm.</em>
              </h1>

              <p className="mt-7 max-w-lg text-lg font-light leading-8 text-white/40">
                A calm iOS lighting companion for rooms, scenes, and gentle automations that stay out of the way.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["🌙 Calm by design", "🏠 Rooms · scenes", "📱 SwiftUI · native"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-white/[0.10] bg-white/[0.04] px-4 py-1.5 text-xs font-light text-white/68"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="https://lumen.muharafiq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#6d28d9] px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_36px_rgba(109,40,217,0.45)] transition-all hover:bg-[#7c3aed] hover:shadow-[0_0_52px_rgba(124,58,237,0.55)]"
                >
                  Preview Lumen
                  <span aria-hidden="true">→</span>
                </a>
                <a href="#phase-01" className="text-sm font-light text-white/30 transition-colors hover:text-white/55">
                  Read the build ↓
                </a>
              </div>
            </Container>
          </section>

          <section className="border-t border-white/[0.07] py-8">
            <Container>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {metadata_items.map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/25">{item.label}</p>
                    <p className="mt-1.5 text-sm font-light leading-6 text-white/60">{item.value}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="bg-[#07080f]">
            <div className="relative mx-auto aspect-[16/9] max-w-[1400px] overflow-hidden">
              <Image
                src="/images/projects/lumen-iot-interface.svg"
                alt="Lumen interface"
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#06070f]/55 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#06070f] to-transparent" />
            </div>
          </section>

          <section className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container className="max-w-3xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">The problem</p>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                Home shouldn&apos;t feel like work.
              </h2>
              <p className="mt-6 text-base font-light leading-8 text-white/42">
                Most lighting apps organize around brands and devices. Lumen organizes around rooms, scenes, and the mood you actually want. The hardware stays behind the curtain until precision control is needed.
              </p>
            </Container>
          </section>

          <section id="phase-01" className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-[#c9a97e]/30 bg-[#c9a97e]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">Phase 01</span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-white/20">Information Architecture</span>
              </div>
              <h2 className="mt-5 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                Start with how people move through a home.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-light leading-8 text-white/42">
                The interface follows a simple mental model: choose a room, set a scene, fine-tune only when needed.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {hierarchy.map((level) => (
                  <div key={level.name} className="rounded-[1.5rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-5">
                    <p className="text-[10px] font-medium tracking-[0.18em] text-[#a78bfa]">{level.num}</p>
                    <p className="mt-4 text-lg font-medium text-white/75">{level.name}</p>
                    <p className="mt-2 text-sm font-light leading-6 text-white/65">{level.desc}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="border-t border-white/[0.06] bg-[#080604] py-14 sm:py-20">
            <Container>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-[#c9a97e]/30 bg-[#c9a97e]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">Phase 02</span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-white/20">Interaction Model</span>
              </div>
              <h2 className="mt-5 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                Intent, not menus.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-light leading-8 text-white/42">
                The app treats lighting as atmosphere. Users pick what they want the room to feel like, then the system handles the details.
              </p>

              <div className="mt-10 grid gap-3">
                <div className="rounded-[1.5rem] border border-[#a78bfa]/[0.12] bg-gradient-to-b from-[#a78bfa]/[0.06] to-white/[0.03] p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">iOS App — SwiftUI</p>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {["Rooms", "Scenes", "Controls"].map((l) => (
                      <div
                        key={l}
                        className="rounded-xl border border-[#a78bfa]/[0.10] bg-[#a78bfa]/[0.04] px-4 py-3 text-center text-xs font-light text-white/68"
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center py-1">
                  <div className="flex flex-col items-center gap-1">
                    <div className="h-5 w-px bg-[#c9a97e]/20" />
                    <p className="text-[10px] tracking-widest text-[#c9a97e]/30">Scene → Mood → Control</p>
                    <div className="h-5 w-px bg-[#c9a97e]/20" />
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-[#3b82f6]/[0.12] bg-gradient-to-b from-[#3b82f6]/[0.06] to-white/[0.03] p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#93c5fd]">Lighting Layer</p>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {["State", "Scenes", "Automation", "Device registry"].map((l) => (
                      <div
                        key={l}
                        className="rounded-xl border border-[#3b82f6]/[0.10] bg-[#3b82f6]/[0.04] px-4 py-3 text-center text-xs font-light text-white/68"
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center py-1">
                  <div className="h-5 w-px bg-gradient-to-b from-[#3b82f6]/20 to-transparent" />
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {protocols.map((p) => (
                    <div
                      key={p.name}
                      className="rounded-[1rem] border border-white/[0.06] bg-gradient-to-b from-white/[0.05] to-white/[0.02] px-3 py-3 text-center"
                    >
                      <p className="text-xs font-medium text-white/55">{p.name}</p>
                      <p className="mt-1 text-[10px] text-white/25">{p.via}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          <section className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-[#c9a97e]/30 bg-[#c9a97e]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">Phase 03</span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-white/20">Design System</span>
              </div>
              <h2 className="mt-5 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                Warm, dark, and spatial.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-light leading-8 text-white/42">
                The interface is designed to feel more like adjusting a room than operating a dashboard: deep backgrounds, warm accents, large room states, and quiet controls.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.05] p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#c9a97e]/75">Rooms</p>
                  <p className="mt-3 text-sm font-light leading-6 text-white/40">Each room card shows the current mood without turning the screen into a status grid.</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.05] p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#c9a97e]/75">Scenes</p>
                  <p className="mt-3 text-sm font-light leading-6 text-white/40">Scenes act like shortcuts for atmosphere: Reading, Relax, Focus, Night.</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.05] p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#c9a97e]/75">Fine control</p>
                  <p className="mt-3 text-sm font-light leading-6 text-white/40">Brightness and warmth controls stay close by, but never dominate the page.</p>
                </div>
              </div>
            </Container>
          </section>

          <section className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-[#c9a97e]/30 bg-[#c9a97e]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">Phase 04</span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-white/20">Native Build</span>
              </div>
              <h2 className="mt-5 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                Built to feel direct.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-light leading-8 text-white/42">
                Native SwiftUI keeps the experience fast, tactile, and simple: clear navigation, shared state, and custom drag controls.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {buildPatterns.map((p) => (
                  <div key={p.label} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.05] p-6">
                    <p className="font-mono text-xs font-medium text-[#c9a97e]/80">{p.label}</p>
                    <p className="mt-3 text-sm font-light leading-6 text-white/40">{p.desc}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="border-t border-white/[0.06] bg-[#080604] py-14 sm:py-20">
            <Container>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">Learnings</p>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">What compounded.</h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {learnings.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_1px_24px_rgba(0,0,0,0.24)]"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#a78bfa]/85">{item.label}</p>
                    <p className="mt-3 text-sm font-light leading-7 text-white/68">{item.text}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container>
              <p className="font-serif text-2xl font-light italic text-white/58 sm:text-3xl">See it in action.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.05] px-6 py-3 text-sm font-light text-white/55 transition-all duration-200 hover:border-white/[0.18] hover:bg-white/[0.09] hover:text-white/75"
                >
                  View other projects
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#a78bfa]/25 bg-[#a78bfa]/[0.07] px-6 py-3 text-sm font-light text-[#a78bfa]/70 transition-all duration-200 hover:border-[#a78bfa]/45 hover:bg-[#a78bfa]/[0.14] hover:text-[#a78bfa]"
                >
                  Get in touch
                </Link>
              </div>
            </Container>
          </section>
        </article>
      </div>
    </SiteFrame>
  );
}
