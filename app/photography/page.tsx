import type { Metadata } from 'next';
import { SiteFrame } from '@/components/layout/site-frame';
import { Container } from '@/components/ui/container';
import { PhotoGallery } from '@/components/sections/photo-gallery';

export const metadata: Metadata = {
  title: 'Photography',
  description: 'Editorial photography archive.'
};

export default function PhotographyPage() {
  return (
    <SiteFrame currentPath="/photography">
      <section className="py-12 sm:py-16">
        <Container>
          <h1 className="font-display text-5xl">Photography</h1>
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
