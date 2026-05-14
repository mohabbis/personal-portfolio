export type NavItem = {
  href: string;
  label: string;
};

export type StatItem = {
  label: string;
  value: string;
  detail: string;
};

export type FeatureItem = {
  title: string;
  description: string;
};

export type ExperienceItem = {
  title: string;
  organization: string;
  location: string;
  period: string;
  logoLabel: string;
  logoImage?: string;
  summary: string;
  bullets: string[];
  tags: string[];
};

export type ProjectItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  impact: string;
  tags: string[];
  href?: string;
  image: string;
  featured?: boolean;
};

export type GalleryItem = {
  title: string;
  image: string;
};

export type CinematicItem = {
  title: string;
  location: string;
  description: string;
  video: string;
  poster: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  note: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type DeviceItem = {
  name: string;
  category: string;
  status: string;
  detail: string;
  note: string;
  tags: string[];
};
