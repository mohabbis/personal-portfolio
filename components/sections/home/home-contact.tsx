import type { ComponentType } from "react";

import { Mail } from "lucide-react";

import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { GithubIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { contactItems } from "@/data/site";

const icons: Record<string, ComponentType<{ className?: string }>> = {
  Email: ({ className }) => <Mail className={className} strokeWidth={1.5} aria-hidden />,
  LinkedIn: LinkedInIcon,
  GitHub: GithubIcon
};

export function HomeContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 border-t border-foreground/10 py-16 sm:py-24">
      <Container>
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-end">
            <div className="space-y-4">
              <h2 className="font-display text-4xl leading-tight tracking-[-0.04em] text-foreground sm:text-5xl">
                Say hi
              </h2>
              <p className="max-w-xl text-base font-light leading-8 text-muted-foreground">
                Always happy to talk: roles, projects, or just a good conversation.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-foreground/10 bg-card/60 p-4 shadow-soft sm:p-5">
              <div className="grid gap-2 sm:grid-cols-3">
                {contactItems.map((item) => {
                  const Icon = icons[item.label];
                  const external = item.href.startsWith("http");

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="flex flex-col items-start gap-2 rounded-[1rem] border border-transparent px-4 py-3 text-sm font-light text-foreground transition-colors hover:border-foreground/10 hover:bg-background/60"
                    >
                      {Icon ? <Icon className="h-4 w-4 text-accent" /> : null}
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
