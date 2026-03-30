import type { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Adirondack Property Protection Services | New York Sash - Year-Round Security',
  description:
    'We protect your Adirondack property year-round, even when you\'re away. Comprehensive property protection: weatherproof windows, moisture-resistant bathrooms, storm-grade siding, and security doors. Serving Boonville, Old Forge, Inlet, Eagle Bay with 35+ years expertise and lifetime warranties.',
  keywords: 'Adirondack property protection, vacation home security, weatherproof windows, storm siding, secure doors, moisture resistant bathrooms, seasonal property protection, Adirondack home improvement, remote property security, North Country property protection',
  alternates: {
    canonical: '/adk',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    title: 'Adirondack Property Protection Services | New York Sash',
    description:
      'We protect your property year-round, even when you\'re away. Comprehensive Adirondack property protection services in Boonville, Old Forge, Inlet, and Eagle Bay.',
    url: 'https://www.newyorksash-adirondacks.com/adk',
    siteName: 'New York Sash - Adirondack Division',
    images: [
      {
        url: '/images/adk-landscape-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Adirondack property protection services by New York Sash - weatherproof windows, secure doors, storm siding',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adirondack Property Protection | New York Sash',
    description:
      'Property protection services across the Adirondacks. We protect your home year-round with weatherproof windows, storm siding, and security systems.',
    images: ['/images/adk-landscape-hero.jpg'],
    creator: '@NewYorkSash',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function AdirondackLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StructuredData type="landingPage" />
      {children}
    </>
  );
}
