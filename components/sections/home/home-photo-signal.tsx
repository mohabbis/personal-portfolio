import Image from "next/image";

import featuredPhoto from "@/public/images/gallery/IMG_2372.jpg";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export function HomePhotoSignalSection() {
  return (
    <section className="border-t border-foreground/[0.07] bg-card/30 py-10 sm:py-14">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] border border-foreground/[0.08] bg-background/70 p-2 shadow-soft sm:rounded-[2.5rem] sm:p-3">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.55rem] bg-muted/20 sm:rounded-[2rem]">
              <Image
                src={featuredPhoto}
                alt="Atmospheric photography frame"
                fill
                sizes="(min-width: 1280px) 1120px, 92vw"
                className="object-cover"
                priority={false}
                placeholder="blur"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/18 via-transparent to-transparent" />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
