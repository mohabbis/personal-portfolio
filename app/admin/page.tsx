import type { Metadata } from "next";
import { currentUser } from "@clerk/nextjs/server";

import { GalleryCard } from "@/components/cards/gallery-card";
import { SiteFrame } from "@/components/layout/site-frame";
import { PageIntro } from "@/components/sections/page-intro";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ProfileImage } from "@/components/ui/profile-image";
import {
  draftPhotos,
  editorialChecklist,
  portraitStrategy,
  privateDraftLinks,
} from "@/data/admin";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Admin",
  description: "Private drafts and site notes."
};

export default async function AdminPage() {
  const user = await currentUser();
  const displayName = user?.fullName ?? user?.firstName ?? siteConfig.name;
  const email = user?.primaryEmailAddress?.emailAddress ?? siteConfig.email;

  return (
    <SiteFrame currentPath="/admin">
      <PageIntro
        eyebrow="Admin"
        title="Private drafts."
        description="Portrait choices, quick links, and site notes."
        actions={
          <ButtonLink href="/photography" variant="secondary">
            Photography
          </ButtonLink>
        }
        visual={
          <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-5 shadow-soft">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Account</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-[88px_minmax(0,1fr)] sm:items-center">
              <ProfileImage className="aspect-square w-full max-w-[88px]" variant="real" sizes="88px" />
              <div className="space-y-2 text-sm leading-6 text-muted-foreground">
                <p className="text-foreground">{displayName}</p>
                <p>{email}</p>
              </div>
            </div>
          </div>
        }
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-start">
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-3">
              {portraitStrategy.map((item) => (
                <article key={item.eyebrow} className="rounded-[1.5rem] border border-border bg-card p-5 shadow-soft">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.eyebrow}</p>
                  <p className="mt-3 font-display text-2xl text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.summary}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.note}</p>
                </article>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Drafts</p>
              <div className="grid gap-4 md:grid-cols-2">
                {draftPhotos.map((item) => (
                  <GalleryCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6 xl:sticky xl:top-28">
            <div className="rounded-[1.5rem] border border-border/70 bg-background/60 p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Quick links</p>
              <div className="mt-4 grid gap-3">
                {privateDraftLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-2xl border border-border bg-card px-4 py-3 transition-colors hover:border-foreground/20 hover:bg-muted/50"
                  >
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.description}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-border/70 bg-background/60 p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Checklist</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                {editorialChecklist.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </SiteFrame>
  );
}
