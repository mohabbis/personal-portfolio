import type { Metadata } from "next";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Lumen Case Study",
  description:
    "A native iOS home companion that uses presence, light, warmth, and slow scenes to make a room feel welcoming the moment you enter. Built in SwiftUI.",
  path: "/portfolio/lumen"
});

const metadata_items = [
  { label: "Role", value: "Product design, system architecture, SwiftUI" },
  { label: "Stack", value: "SwiftUI · Observation · NavigationStack · Xcode" },
  { label: "Timeline", value: "2026 - present" },
  { label: "Status", value: "In development" }
];

const hierarchy = [
  { num: "01", name: "Rooms", desc: "Opens around the space you are in, not a wall of device switches." },
  { num: "02", name: "Scenes", desc: "Warm presets for arrival, reading, evenings, and slower room states." },
  { num: "03", name: "Presence", desc: "Knows when you are there and lets the room respond without extra input." },
  { num: "04", name: "Automation", desc: "Quiet transitions that feel natural, predictable, and almost invisible." }
];


export default function LumenCaseStudyPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <div className="relative bg-[#100b05]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[70vh] w-full max-w-3xl -translate-x-1/2 rounded-[50%] bg-[#4a2c08] opacity-[0.45] blur-[180px]" />
          <div className="absolute bottom-0 right-0 h-[44vh] w-[58vw] rounded-[50%] bg-[#d99a3a] opacity-[0.07] blur-[170px]" />
        </div>

        <article className="relative">
          <section className="relative overflow-hidden border-b border-white/[0.06] pb-16 pt-16 sm:pt-24">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-[520px] w-[640px] rounded-full bg-[#3a2206] opacity-[0.55] blur-[130px]" />
              <div className="absolute right-0 top-8 h-[320px] w-[440px] rounded-full bg-[#d99a3a] opacity-[0.09] blur-[120px]" />
            </div>
            <Container className="relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[#e0b27a]">Case Study · Lumen</p>
                <h1 className="mt-4 max-w-3xl font-display text-5xl font-normal leading-[0.96] tracking-[-0.05em] text-white/92 sm:text-6xl lg:text-7xl">
                  A warm welcome as soon as you enter.
                </h1>
                <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-white/62">
                  Lumen is a native iOS home companion that makes a room feel calm, warm, and quietly aware. It notices presence, softens the light around you, and fades into the background once the room feels right.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="https://lumen.muharafiq.com" target="_blank" rel="noreferrer" className="rounded-full bg-[linear-gradient(135deg,#e8c089,#d99a3a)] px-5 py-3 text-sm font-medium text-[#1a0e04] shadow-[0_18px_60px_rgba(217,154,58,0.32)] transition hover:scale-[1.02] hover:shadow-[0_22px_80px_rgba(217,154,58,0.44)]">
                    Preview app
                  </a>
                  <Link href="/portfolio" className="rounded-full border border-white/[0.12] bg-white/[0.04] px-5 py-3 text-sm font-light text-white/72 transition hover:border-[#e0b27a]/40 hover:bg-white/[0.08]">
                    Back to work
                  </Link>
                </div>
              </div>
              <div className="group relative isolate overflow-visible rounded-[2rem]">
                <div className="pointer-events-none absolute left-[28%] top-[35%] -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,154,58,0.34),rgba(224,169,109,0.12)_42%,transparent_70%)] blur-3xl transition duration-700 group-hover:scale-105 group-hover:opacity-95 motion-safe:animate-[ambientGlow_12s_ease-in-out_infinite]" />
                <div className="pointer-events-none absolute right-[-8rem] top-[-2rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(90,52,12,0.45),rgba(60,34,8,0.16)_45%,transparent_72%)] blur-3xl transition duration-700 group-hover:scale-110" />
                <div className="pointer-events-none absolute -bottom-16 left-16 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(217,154,58,0.24),rgba(224,169,109,0.08)_45%,transparent_72%)] blur-3xl" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-[#8a6030]/40 bg-[#1a120a] shadow-[0_30px_110px_rgba(8,4,0,0.6)] ring-1 ring-[#e0b27a]/20">
                  <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(217,154,58,0.18),transparent_40%),radial-gradient(circle_at_85%_75%,rgba(90,52,12,0.22),transparent_45%)]" />
                  <img src="/images/projects/lumen_no_phone_ambient_loop.gif" alt="Ambient Lumen room scene showing warm responsive lighting" className="h-full w-full object-cover" />
                </div>
              </div>
            </Container>
          </section>

          <section className="relative border-b border-white/[0.06] bg-[#0d0905] py-14 sm:py-20">
            <Container className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {metadata_items.map((item) => (
                <div key={item.label} className="rounded-[1.2rem] border border-white/[0.07] bg-white/[0.03] p-5 shadow-[0_18px_60px_rgba(8,4,0,0.4)]">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#e0b27a]">{item.label}</p>
                  <p className="mt-3 font-mono text-sm leading-6 text-white/65">{item.value}</p>
                </div>
              ))}
            </Container>
          </section>

          <section className="relative border-b border-white/[0.06] py-14 sm:py-20">
            <Container>
              <h2 className="max-w-2xl font-display text-3xl font-normal tracking-[-0.04em] text-white/90 sm:text-4xl">
                Before: a room you have to manage. After: a room that already knows you are home.
              </h2>
              <p className="mt-4 max-w-2xl text-base font-light leading-7 text-white/58">
                Most home apps start with devices. Lumen starts with arrival: the right room, the right warmth, and the right scene already waiting without making the interface the center of attention.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {hierarchy.map((item) => (
                  <article key={item.name} className="rounded-[1.35rem] border border-white/[0.07] bg-[linear-gradient(135deg,rgba(80,48,12,0.32),rgba(40,24,6,0.22))] p-6 shadow-[0_20px_70px_rgba(8,4,0,0.4)] transition hover:border-[#e0b27a]/30 hover:shadow-[0_24px_90px_rgba(217,154,58,0.12)]">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-sm text-[#e0b27a]">{item.num}</span>
                      <h3 className="font-display text-2xl tracking-[-0.04em] text-white/90">{item.name}</h3>
                    </div>
                    <p className="mt-4 text-sm font-light leading-7 text-white/65">{item.desc}</p>
                  </article>
                ))}
              </div>
            </Container>
          </section>

        </article>
      </div>
    </SiteFrame>
  );
}
