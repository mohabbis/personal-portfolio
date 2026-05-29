import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { gallery } from "@/data/gallery";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

// Curation strip: a handful of frames as a teaser into the full gallery,
// keeping breadth in the homepage without crowding the hero.
const strip = gallery.slice(0, 5);

export function HomeGallerySection() {
  return (
    <section id="gallery" className="scroll-mt-28 py-20 sm:py-28">
      <Container>
        <FadeIn>
          <div className="mb-10 flex items-end justify-between gap-6 border-b border-foreground/10 pb-6">
            <div>
              <p className="text-sm font-light text-muted-foreground">Photography</p>
              <h2 className="mt-4 font-display text-5xl leading-none text-foreground sm:text-6xl">Gallery</h2>
            </div>
            <Link
              href="/gallery"
              data-track="gallery_click"
              className="inline-flex shrink-0 items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-light text-foreground transition-colors hover:text-muted-foreground"
            >
              View all <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {strip.map((photo) => (
              <Link
                key={photo.alt}
                href="/gallery"
                data-track="gallery_click"
                aria-label={photo.alt}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-foreground/10 bg-card"
              >
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
                  className="object-cover object-center transition-transform duration-500 ease-gentle group-hover:scale-[1.04]"
                />
              </Link>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
