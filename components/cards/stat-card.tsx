import type { StatItem } from "@/lib/types";

export function StatCard({ label, value, detail }: StatItem) {
  return (
    <article className="rounded-[1.75rem] border border-border bg-card p-6 transition-transform duration-200 ease-gentle hover:-translate-y-0.5">
      <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className="mt-6 font-display text-3xl text-foreground">{value}</p>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{detail}</p>
    </article>
  );
}
