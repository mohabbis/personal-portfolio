import type { Metadata } from 'next';
import { SiteFrame } from '@/components/layout/site-frame';
import { Container } from '@/components/ui/container';
import { PhotoGallery } from '@/components/sections/photo-gallery';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Editorial photography archive.'
};

export default function GalleryPage() {
  return (
    <SiteFrame currentPath="/gallery">
      <section className="py-12 sm:py-16">
        <Container>
          <h1 className="font-display text-5xl">Gallery</h1>
        </Container>
      </section>
      <section className="pb-20">
        <Container>
          <PhotoGallery />
        </Container>
      </section>
    </SiteFrame>
  );
}
