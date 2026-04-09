import React from 'react';
import TownTemplate from '@/components/TownTemplate';
import StructuredData from '@/components/StructuredData';
import TownFAQSchema from '@/components/TownFAQSchema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hinckley Property Protection Services | Adirondack Home Security | New York Sash',
  description:
    'Hinckley property protection services - we protect your Adirondack property year-round, even when you\'re away. High-performance windows, moisture-resistant bathrooms, protective siding, and secure doors for long-lasting durability.',
  keywords:
    'Hinckley property protection, Hinckley NY windows, Hinckley bathroom remodel, weatherproof siding Hinckley, secure entry doors Hinckley, Adirondack seasonal home protection',
  alternates: {
    canonical: '/adk/hinckley',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    title: 'Hinckley Property Protection Services | New York Sash',
    description:
      'Protecting Hinckley properties year-round with windows, bathrooms, siding, and secure doors.',
    url: '/adk/hinckley',
    siteName: 'New York Sash - Adirondack Division',
    images: [
      {
        url: '/images/hinckley-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Hinckley property protection services by New York Sash',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hinckley Property Protection | New York Sash',
    description:
      'Year-round property protection in Hinckley, NY for windows, bathrooms, siding, and doors.',
    images: ['/images/hinckley-image.jpeg'],
    creator: '@NewYorkSash',
  },
};

export default function HinckleyPage() {
  const hinckleyData = {
    name: 'Hinckley',
    tagline: 'Reliable Protection for Every Season',
    heroImage: '/images/hinckley-image.jpeg',
    description:
      'We protect your Hinckley home with complete weatherproofing solutions: replacement windows, bathroom upgrades, exterior siding, and secure doors.',
    highlights: [
      {
        title: 'Energy-Efficient Window Protection',
        description:
          'High-performance windows help control heat loss, reduce drafts, and improve comfort in tough winter conditions.',
      },
      {
        title: 'Durable Bathroom Renovation Systems',
        description:
          'Moisture-resistant materials and one-day installation options create bathrooms built for heavy use and long-term reliability.',
      },
      {
        title: 'Siding and Door Security Upgrades',
        description:
          'Protective siding and reinforced entry systems add weather resistance and security for year-round peace of mind.',
      },
    ],
    targetContent: {
      title: 'Hinckley: Smart Protection for Adirondack Homes',
      content: [
        'Hinckley homeowners need systems that perform across long winters, wet springs, and summer storms. We install complete protection packages that work together to defend your property all year.',
        'Every project is tailored to your home, from windows and bathrooms to siding and doors, with products chosen for durability, comfort, and low maintenance in rugged conditions.',
        'With experienced installers and lifetime-backed coverage, you get dependable upgrades that protect both your home and your long-term investment.',
      ],
    },
    successStories: [
      {
        title: 'Four-Season Exterior Upgrade',
        homeowner: 'The Malik Family',
        project: 'Siding and Entry Door Replacement',
        description:
          'Their home needed stronger exterior protection against weather and better year-round security.',
        result:
          'The house looks fantastic and feels much more protected. We noticed the comfort improvement right away.',
        timeframe: '3 days',
      },
      {
        title: 'Practical Bathroom Modernization',
        homeowner: 'Thomas and April Dunn',
        project: 'One-Day Bathroom Remodel',
        description:
          'They wanted a modern, easy-to-maintain bathroom without a long renovation timeline.',
        result:
          'The process was smooth and fast, and the finished space is exactly what we hoped for.',
        timeframe: '1 day',
      },
    ],
    localFeatures: [
      {
        title: 'Variable Adirondack Climate',
        description:
          'Hinckley homes experience significant seasonal weather shifts and moisture exposure.',
        connection:
          'Our installation approach prioritizes tight sealing, weather resistance, and long-term durability.',
      },
      {
        title: 'Primary and Seasonal Homes',
        description:
          'The area includes both full-time residences and second homes with different protection needs.',
        connection:
          'We design systems that perform consistently for daily living and extended vacancy periods.',
      },
      {
        title: 'Long-Term Home Value',
        description:
          'Homeowners want improvements that protect comfort today and value over time.',
        connection:
          'Our products and workmanship are selected for lasting performance backed by lifetime coverage.',
      },
    ],
  };

  return (
    <>
      <StructuredData type="townPage" townName="Hinckley" townSlug="hinckley" />
      <TownFAQSchema townName="Hinckley" townSlug="hinckley" />
      <TownTemplate townData={hinckleyData} />
    </>
  );
}
