import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/sections/section-heading";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  visual?: ReactNode;
};

export function PageIntro({ eyebrow, title, description, actions, visual }: PageIntroProps) {
  return (
    <section className="border-b border-border/70 bg-background">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <SectionHeading eyebrow={eyebrow} title={title} description={description} actions={actions} />
          {visual ? <div className="order-first lg:order-last">{visual}</div> : null}
        </div>
      </Container>
    </section>
  );
}
