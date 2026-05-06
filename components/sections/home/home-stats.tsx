import { stats } from "@/data/site";
import { Container } from "@/components/ui/container";

export function HomeStatsSection() {
  return (
    <section className="border-b border-white/10 bg-card/45 py-16 sm:py-20">
      <Container className="grid gap-6 lg:grid-cols-3">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-[1.75rem] border border-white/10 bg-background/70 p-6 shadow-soft"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</p>
            <h2 className="mt-4 font-display text-3xl text-foreground">{stat.value}</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{stat.detail}</p>
          </article>
        ))}
      </Container>
    </section>
  );
}

