import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/sections/section-heading";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageIntro({ eyebrow, title, description, actions }: PageIntroProps) {
  return (
    <section className="border-b border-border/70 bg-background">
      <Container className="py-16 sm:py-20">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} actions={actions} />
      </Container>
    </section>
  );
}
