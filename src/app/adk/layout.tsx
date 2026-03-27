import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adirondack Home Improvement',
  description:
    'Explore New York Sash services in the Adirondacks: replacement windows, one-day bathroom remodels, premium siding, and quality doors backed by a lifetime warranty.',
  alternates: {
    canonical: '/adk',
  },
  openGraph: {
    title: 'Adirondack Home Improvement | New York Sash',
    description:
      'Serving Boonville, Old Forge, Inlet, and Eagle Bay with trusted home improvement services.',
    url: '/adk',
    images: [
      {
        url: '/images/adk-landscape-hero-original.jpg',
        width: 1200,
        height: 630,
        alt: 'Adirondack home improvement by New York Sash',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adirondack Home Improvement | New York Sash',
    description:
      'Windows, bathrooms, siding, and doors across the Adirondacks with a lifetime warranty.',
    images: ['/images/adk-landscape-hero-original.jpg'],
  },
};

export default function AdirondackLayout({ children }: { children: React.ReactNode }) {
  return children;
}
