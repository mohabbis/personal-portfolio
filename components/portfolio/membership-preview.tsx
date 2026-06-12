"use client";

import { useState } from "react";
import { Check, CircleParking, Footprints, Hand, Wind } from "lucide-react";

type Plan = {
  id: string;
  name: string;
  tagline: string;
  features: string[];
  tone: string;
  badge?: string;
};

const PLANS: Plan[] = [
  {
    id: "best",
    name: "Best Wash",
    tagline: "Everything in Better, plus full protection",
    features: ["RainX", "Lava Bath", "Tire Shine", "Tricolor Foam Polish", "Rust Guard", "Buff & Dry"],
    tone: "from-[#3a2a52] to-[#241a36]",
    badge: "Most protection"
  },
  {
    id: "better",
    name: "Better Wash",
    tagline: "Everything in Good, plus shine and polish",
    features: ["Tire Shine", "Wheel Blast", "Bug Remover", "Triple Polish"],
    tone: "from-[#1e3a5c] to-[#142840]",
    badge: "Most popular"
  },
  {
    id: "good",
    name: "Good Wash",
    tagline: "A clean, quick everyday wash",
    features: ["Dirt Buster", "Foam Bath", "Soft Dry"],
    tone: "from-[#244b2e] to-[#16301e]"
  }
];

const INSTRUCTIONS = [
  { id: "neutral", label: "Neutral", note: "Shift into N", Icon: CircleParking },
  { id: "hands", label: "Hands off", note: "Let go of the wheel", Icon: Hand },
  { id: "pedals", label: "Off pedals", note: "No gas, no brake", Icon: Footprints },
  { id: "wipers", label: "Wipers off", note: "Turn them off", Icon: Wind }
];

export function MembershipPreview() {
  const [selected, setSelected] = useState<string>("better");

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#d99a3a]/[0.18] bg-[#0a0a0c] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.32)] sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(217,154,58,0.16),transparent_35%),radial-gradient(circle_at_82%_88%,rgba(217,154,58,0.08),transparent_42%)]" />
      <div className="relative space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#d99a3a]">Membership preview</p>
            <h3 className="mt-3 font-display text-3xl font-light tracking-[-0.04em] text-white/85 sm:text-4xl">Choose your unlimited plan</h3>
          </div>
          <p className="max-w-xl text-sm font-light leading-6 text-white/50">
            A preview of the planned unlimited wash membership, the signup flow that will run on DRB and National Car Wash Solutions once the new location is open. Tap a plan to see what is included. Pricing will be shared at launch.
          </p>
        </div>

        {/* Plan selector — kiosk-style stacked tiers */}
        <div className="grid gap-3">
          {PLANS.map((plan) => {
            const active = selected === plan.id;
            return (
              <button
                key={plan.id}
                type="button"
                onClick={() => setSelected(plan.id)}
                aria-pressed={active}
                className={`group relative w-full overflow-hidden rounded-[1.5rem] border bg-gradient-to-br p-5 text-left transition-all duration-300 sm:p-6 ${plan.tone} ${
                  active
                    ? "border-[#d99a3a]/70 shadow-[0_0_36px_rgba(217,154,58,0.20)]"
                    : "border-white/[0.08] opacity-85 hover:opacity-100 hover:border-white/[0.18]"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-display text-2xl font-light tracking-[-0.02em] text-white sm:text-3xl">{plan.name}</h4>
                      {plan.badge ? (
                        <span className="rounded-full border border-[#d99a3a]/40 bg-[#d99a3a]/15 px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-[0.14em] text-[#f0c878]">
                          {plan.badge}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1.5 text-sm font-light text-white/60">{plan.tagline}</p>
                    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-1.5 text-[13px] font-light text-white/75">
                          <Check className="h-3.5 w-3.5 shrink-0 text-[#d99a3a]" strokeWidth={2.5} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex shrink-0 flex-col items-end">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors ${
                        active
                          ? "border-[#d99a3a]/50 bg-[#d99a3a]/15 text-[#f0c878]"
                          : "border-white/15 text-white/40 group-hover:text-white/65"
                      }`}
                    >
                      <span className={`h-2 w-2 rounded-full ${active ? "bg-[#d99a3a]" : "border border-white/40"}`} />
                      {active ? "Selected" : "Tap to select"}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* In-tunnel guidance strip */}
        <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.03] p-5 sm:p-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#d99a3a]">In the tunnel, please</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {INSTRUCTIONS.map(({ id, label, note, Icon }) => (
              <div key={id} className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-[#0a0a0c]/60 p-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d99a3a]/15 text-[#d99a3a]">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-light text-white/85">{label}</p>
                  <p className="text-[11px] font-light text-white/45">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment badge */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/[0.07] pt-5">
          <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/30">Powered by</span>
          <span className="rounded-full border border-white/[0.12] bg-white/[0.05] px-3 py-1 text-xs font-medium tracking-wide text-white/70">DRB</span>
          <span className="rounded-full border border-white/[0.12] bg-white/[0.05] px-3 py-1 text-xs font-medium tracking-wide text-white/70">National Car Wash Solutions</span>
        </div>
      </div>
    </div>
  );
}
