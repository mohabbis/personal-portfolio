import type { DeviceItem } from "@/lib/types";
import { Tag } from "@/components/ui/tag";

const statusClassNames: Record<string, string> = {
  Online: "bg-emerald-500/12 text-emerald-700",
  Off: "bg-slate-500/12 text-slate-700",
  On: "bg-amber-500/12 text-amber-700",
  Pending: "bg-rose-500/12 text-rose-700",
  Active: "bg-emerald-500/12 text-emerald-700",
  Building: "bg-blue-500/12 text-blue-700",
  Current: "bg-amber-500/12 text-amber-700"
};

export function DeviceCard({
  name,
  category,
  status,
  detail,
  note,
  tags
}: DeviceItem) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-border bg-card p-6 shadow-soft transition-all duration-200 ease-gentle hover:-translate-y-0.5 hover:border-foreground/20">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{category}</p>
          <h3 className="font-display text-2xl text-foreground">{name}</h3>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            statusClassNames[status] ?? "bg-muted text-foreground"
          }`}
        >
          {status}
        </span>
      </div>

      <p className="mt-5 text-sm leading-7 text-muted-foreground">{detail}</p>
      <p className="mt-4 text-sm leading-7 text-foreground/80">{note}</p>

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </article>
  );
}
