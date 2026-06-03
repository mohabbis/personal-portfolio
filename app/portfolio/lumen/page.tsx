import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Lumen Case Study",
  description:
    "A smart-home iOS app built around rooms and scenes, not device lists. Built in SwiftUI with HomeKit, Matter, Govee, and GE Cync behind a single protocol abstraction layer. Currently in TestFlight beta."
};

const metadata_items = [
  { label: "Role", value: "Product design, system architecture, iOS development" },
  { label: "Stack", value: "SwiftUI · HomeKit · URLSession · Xcode" },
  { label: "Timeline", value: "2026 - present" },
  { label: "Status", value: "TestFlight beta" }
];

const hierarchy = [
  { num: "01", name: "Rooms", desc: "Physical spaces. The primary lens for organizing the home." },
  { num: "02", name: "Devices", desc: "Hardware inside rooms. Accessible but not the primary interface." },
  { num: "03", name: "Scenes", desc: "Named room states — Reading, Movie Night, Evening Wind Down." },
  { num: "04", name: "Automations", desc: "Rules that trigger scenes. Motion, time, sensors." },
];

const appIcons = [
  {
    label: "Room glow",
    src: "/images/projects/lumen-app-icon-room.svg",
    alt: "Lumen app icon with a room glow and centered light mark"
  },
  {
    label: "Scene control",
    src: "/images/projects/lumen-app-icon-scene.svg",
    alt: "Lumen app icon with concentric scene control rings"
  },
  {
    label: "Shield mark",
    src: "/images/projects/lumen-app-icon-mark.svg",
    alt: "Lumen app icon with the shield-shaped light control mark"
  }
];

const protocols = [
  { icon: "⌂", name: "HomeKit", via: "HKHomeManager", detail: "Native Apple framework. Rooms, accessories, and scenes map directly to Lumen's model." },
  { icon: "◈", name: "Matter", via: "MatterSupport", detail: "Cross-vendor standard. Provisioned via Apple's Matter commissioning flow." },
  { icon: "☁", name: "Govee", via: "HTTP API", detail: "REST calls to Govee's cloud API. Device state polled and reconciled with local model." },
  { icon: "◎", name: "GE Cync", via: "Cloud", detail: "Cloud-based control abstracted behind the same adapter interface as other protocols." },
];

const swiftuiPatterns = [
  { label: "@Observable", desc: "HomeStore is an @Observable class — all views derive state from a single source of truth. No manual publishers." },
  { label: "NavigationStack", desc: "Room list → Scene list → Device control. Each level is a pushed view, not a modal." },
  { label: "HKHomeManager", desc: "Delegate-based HomeKit events drive local state updates. Accessory changes propagate without polling." },
  { label: "Custom controls", desc: "Brightness sliders and color temperature pickers built on DragGesture — no UIKit dependencies." },
];

const testflightItems = [
  { label: "Build pipeline", value: "Manual Xcode archive → App Store Connect upload → TestFlight" },
  { label: "Testers", value: "Internal group, select external beta testers" },
  { label: "Feedback channel", value: "TestFlight in-app feedback + direct" },
  { label: "Next milestone", value: "Xcode Cloud for automated builds on push" },
];

const learnings = [
  { label: "Architecture enables simplicity", text: "The system layer absorbs complexity so the interface does not have to. Good architecture is invisible to users." },
  { label: "Information models compound", text: "The rooms-first decision cascaded through every layer — UI structure, data models, automations, and onboarding all followed from it." },
  { label: "User models beat system models", text: "Users think in rooms and scenes, not devices and protocols. The interface reflects that even if the backend does not." },
  { label: "Separation of concerns scales", text: "New protocols added without touching any views. Interface refined without touching any protocol logic. The separation held under real conditions." },
];

export default function LumenCaseStudyPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <div className="relative bg-[#06070f]">
        {/* Page-level ambient — purple bloom top-center, blue wash bottom-left */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[70vh] w-full max-w-3xl -translate-x-1/2 rounded-[50%] bg-[#7c3aed] opacity-[0.08] blur-[180px]" />
          <div className="absolute bottom-0 left-0 h-[40vh] w-[60vw] rounded-[50%] bg-[#2563eb] opacity-[0.05] blur-[160px]" />
        </div>

        <article className="relative">

          {/* Header */}
          <section className="relative overflow-hidden pb-16 pt-16 sm:pt-24">
            {/* Hero ambient glows */}
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
                Smart-home control,<br />
                <em className="text-white/50">understood.</em>
              </h1>

              <p className="mt-7 max-w-lg text-lg font-light leading-8 text-white/40">
                A native iOS app built around how people actually think about their home — rooms and scenes, not device lists and vendor apps.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["🏠 HomeKit · Matter", "📱 SwiftUI", "🔒 Private by design"].map((tag) => (
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

          {/* Metadata strip */}
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

          {/* Hero image */}
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
              {/* Cinematic top + bottom vignette */}
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#06070f]/55 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#06070f] to-transparent" />
            </div>
          </section>

          {/* App icons */}
          <section className="border-t border-white/[0.06] bg-[#05060d] py-12 sm:py-16">
            <Container>
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">App icon system</p>
                  <h2 className="mt-4 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">The mark on the home screen.</h2>
                  <p className="mt-4 max-w-xl text-sm font-light leading-7 text-white/62">
                    The Lumen icon set keeps the interface language tactile and quiet: soft room light, graphite edges, and a centered control mark that feels closer to a dimmer than a generic smart-home symbol.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {appIcons.map((icon) => (
                    <figure
                      key={icon.label}
                      className="group rounded-[1.5rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_22px_50px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#a78bfa]/25 hover:shadow-[0_0_36px_rgba(167,139,250,0.13)]"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-[1.15rem] bg-white/[0.03]">
                        <Image
                          src={icon.src}
                          alt={icon.alt}
                          fill
                          sizes="(min-width: 1024px) 180px, 30vw"
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="mt-3 text-center text-[10px] font-medium uppercase tracking-[0.14em] text-white/38 transition-colors group-hover:text-[#a78bfa]/70">
                        {icon.label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* The Problem */}
          <section className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container className="max-w-3xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">The problem</p>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                Fragmented by design.
              </h2>
              <p className="mt-6 text-base font-light leading-8 text-white/42">
                Smart home apps organize around devices because that&apos;s how manufacturers think. Govee has a Govee app. GE has a GE app. The user ends up juggling four apps to turn off the lights in one room.
              </p>
              <p className="mt-4 text-base font-light leading-8 text-white/42">
                But users don&apos;t think in devices. They think in spaces. &ldquo;Set the living room to movie mode&rdquo; is a meaningful instruction. &ldquo;Set device ID govee-A3B2 to 30% brightness at 2700K&rdquo; is not. Lumen is built around that distinction.
              </p>
            </Container>
          </section>

          {/* PHASE 01 — Information Model */}
          <section id="phase-01" className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-[#c9a97e]/30 bg-[#c9a97e]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">Phase 01</span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-white/20">Information Architecture</span>
              </div>
              <h2 className="mt-5 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                Define the model first.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-light leading-8 text-white/42">
                Before writing a line of Swift, the information model had to be right. The entire app — data structures, UI hierarchy, automation rules, onboarding — would derive from this. Getting it wrong early meant refactoring everything later.
              </p>
              <p className="mt-4 max-w-2xl text-base font-light leading-8 text-white/42">
                The model settled on four hierarchical layers. Each layer has a clear owner: rooms are for users, devices are for the system, scenes are the primary control surface, automations are the intelligence layer.
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
              <div className="mt-6 rounded-[1.25rem] border border-white/[0.07] bg-white/[0.04] p-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#c9a97e]/65">Why this mattered</p>
                <p className="mt-2 text-sm font-light leading-7 text-white/38">
                  This hierarchy meant the Swift data model mirrored how users think. <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-xs text-white/50">Room</code> contains <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-xs text-white/50">[Device]</code> and <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-xs text-white/50">[Scene]</code>. Activating a scene tells the system which devices to update, at what state. The UI never needs to think about devices directly.
                </p>
              </div>
            </Container>
          </section>

          {/* PHASE 02 — System Architecture */}
          <section className="border-t border-white/[0.06] bg-[#080604] py-14 sm:py-20">
            <Container>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-[#c9a97e]/30 bg-[#c9a97e]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">Phase 02</span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-white/20">System Architecture</span>
              </div>
              <h2 className="mt-5 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                Intent, not commands.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-light leading-8 text-white/42">
                The iOS app sends intent: &ldquo;activate Evening Wind Down in Living Room.&rdquo; A system layer resolves that into protocol-specific commands — which devices, which API, which format, which fallback. The UI never touches a protocol directly.
              </p>
              <p className="mt-4 max-w-2xl text-base font-light leading-8 text-white/42">
                This separation was a deliberate design constraint. It meant the interface could be iterated without touching protocol logic, and new protocols could be wired in without touching any views.
              </p>

              {/* Architecture diagram */}
              <div className="mt-10 grid gap-3">
                <div className="rounded-[1.5rem] border border-[#a78bfa]/[0.12] bg-gradient-to-b from-[#a78bfa]/[0.06] to-white/[0.03] p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">iOS App — SwiftUI</p>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {["Rooms · Scenes", "HomeStore (@Observable)", "Controls + Sliders"].map((l) => (
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
                    <p className="text-[10px] tracking-widest text-[#c9a97e]/30">Intent → Commands</p>
                    <div className="h-5 w-px bg-[#c9a97e]/20" />
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-[#3b82f6]/[0.12] bg-gradient-to-b from-[#3b82f6]/[0.06] to-white/[0.03] p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#93c5fd]">System Layer</p>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {["Protocol Adapters", "State Manager", "Automation Engine", "Device Registry"].map((l) => (
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
                <div className="grid grid-cols-4 gap-3">
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

          {/* PHASE 03 — Design */}
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
                Smart home apps usually look like dashboards — grids of tiles, status indicators, toggles. Lumen was designed to feel like the home itself: calm, warm, ambient. The design language is built around large type, deep backgrounds, and warm amber accents.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.05] p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#c9a97e]/75">Rooms view</p>
                  <p className="mt-3 text-sm font-light leading-6 text-white/40">Each room card shows the active scene and device count. No icons, no status grids — just the name and current state.</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.05] p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#c9a97e]/75">Scenes view</p>
                  <p className="mt-3 text-sm font-light leading-6 text-white/40">Active scene shown large at top. Scene list below with emoji icon, name, and device summary. One tap to activate.</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.05] p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#c9a97e]/75">Device control</p>
                  <p className="mt-3 text-sm font-light leading-6 text-white/40">Brightness slider, color temperature swatches, and mode presets (Reading, Relax, Focus, Night). Live device illustration responds to state.</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.25rem] border border-white/[0.07] bg-white/[0.04] p-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#c9a97e]/65">Typography</p>
                  <p className="mt-2 text-sm font-light leading-7 text-white/38">
                    Section titles in large, light-weight serif (New York). Room and scene names given full visual weight — they&apos;re the most important information on screen.
                  </p>
                </div>
                <div className="rounded-[1.25rem] border border-white/[0.07] bg-white/[0.04] p-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#c9a97e]/65">Color</p>
                  <p className="mt-2 text-sm font-light leading-7 text-white/38">
                    Near-black background (#0c0a07) with warm amber accents. Cards at 5% white opacity. Active states in warm gold — not blue, not green. The palette matches what a warm room actually looks like.
                  </p>
                </div>
              </div>
            </Container>
          </section>

          {/* PHASE 04 — SwiftUI Build */}
          <section className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-[#c9a97e]/30 bg-[#c9a97e]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">Phase 04</span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-white/20">SwiftUI Development</span>
              </div>
              <h2 className="mt-5 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                Building in Xcode.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-light leading-8 text-white/42">
                Lumen is a native SwiftUI app targeting iOS 17+. The choice to go native — rather than React Native or Flutter — was deliberate. HomeKit integration, haptic feedback, and the kind of animation fidelity the design called for all work best with direct access to Apple&apos;s frameworks.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {swiftuiPatterns.map((p) => (
                  <div key={p.label} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.05] p-6">
                    <p className="font-mono text-xs font-medium text-[#c9a97e]/80">{p.label}</p>
                    <p className="mt-3 text-sm font-light leading-6 text-white/40">{p.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.25rem] border border-white/[0.07] bg-white/[0.04] p-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#c9a97e]/65">Protocol integration</p>
                <p className="mt-2 text-sm font-light leading-7 text-white/38">
                  Four protocols, each with different authentication models, rate limits, and event systems. Each gets its own adapter conforming to a common interface. The app only talks to the adapter — never the protocol directly.
                </p>
                <div className="mt-4 space-y-2">
                  {protocols.map((p) => (
                    <div key={p.name} className="flex items-start gap-4 rounded-[0.875rem] border border-white/[0.06] bg-white/[0.03] px-4 py-3">
                      <div className="flex w-24 shrink-0 items-center gap-2">
                        <span className="text-sm text-[#c9a97e]/50">{p.icon}</span>
                        <p className="text-xs font-medium text-white/65">{p.name}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-medium text-white/30">{p.via}</p>
                        <p className="mt-0.5 text-xs font-light leading-5 text-white/30">{p.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* PHASE 05 — TestFlight */}
          <section className="border-t border-white/[0.06] py-14 sm:py-20">
            <Container>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-[#c9a97e]/30 bg-[#c9a97e]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9a97e]">Phase 05</span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-white/20">TestFlight Beta</span>
              </div>
              <h2 className="mt-5 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">
                Shipping to real devices.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-light leading-8 text-white/42">
                Building in the Simulator only gets you so far. HomeKit devices, actual network latency, real light bulbs, and the physical experience of opening the app at night while trying to dim a lamp — these only surface on device. TestFlight made it possible to test Lumen in the real environment it was designed for.
              </p>
              <p className="mt-4 max-w-2xl text-base font-light leading-8 text-white/42">
                The current build goes from Xcode archive to App Store Connect to TestFlight manually. The next milestone is wiring Xcode Cloud to automate that pipeline on every push to main.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {testflightItems.map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.05] p-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/25">{item.label}</p>
                    <p className="mt-2 text-sm font-light leading-6 text-white/65">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.25rem] border border-[#c9a97e]/20 bg-[#c9a97e]/[0.04] p-5">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#c9a97e]/60" />
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#c9a97e]/70">Up next — Xcode Cloud</p>
                </div>
                <p className="mt-2 text-sm font-light leading-7 text-white/40">
                  Xcode Cloud will run tests, build the archive, and push to TestFlight automatically on every commit. No manual upload steps. The goal is a CI/CD pipeline that keeps beta testers on the latest build without friction.
                </p>
              </div>
            </Container>
          </section>

          {/* Learnings */}
          <section className="border-t border-white/[0.06] bg-[#080604] py-14 sm:py-20">
            <Container>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#a78bfa]">Learnings</p>
              <h2 className="mt-4 font-serif text-3xl font-light tracking-[-0.02em] text-white/85 sm:text-4xl">What compounded.</h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
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

          {/* Footer */}
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