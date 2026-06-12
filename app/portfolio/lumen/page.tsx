import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFrame } from "@/components/layout/site-frame";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Lumen Case Study",
  description:
    "A calm iOS lighting companion for rooms, scenes, and ambient control. Built natively in SwiftUI and currently in TestFlight beta.",
  alternates: {
    canonical: "/portfolio/lumen"
  }
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
  { name: "HomeKit", via: "Native ecosystem" },
  { name: "GE Cync", via: "Device support planning" },
];

export default function LumenCaseStudyPage() {
  return (
    <SiteFrame currentPath="/portfolio">
      <article>
        <section className="border-b border-foreground/[0.06] py-14 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-foreground/45">Case Study · Lumen</p>
              <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.96] tracking-[-0.05em] text-foreground sm:text-6xl lg:text-7xl">
                Calm control for smart lighting.
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-foreground/68">
                Lumen is a native iOS concept for unified lighting control across rooms, scenes, and device ecosystems. The goal is less dashboard clutter and more ambient intelligence.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/portfolio" className="rounded-full border border-foreground/[0.14] px-5 py-3 text-sm font-light transition hover:border-foreground/30">
                  Back to work
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-foreground/[0.08] bg-card shadow-soft">
              <Image src="/images/projects/lumen-hero.png" alt="Lumen app interface preview" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" priority />
            </div>
          </Container>
        </section>
      </article>
    </SiteFrame>
  );
}
