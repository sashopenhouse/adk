import React from 'react';
import TownTemplate from '@/components/TownTemplate';
import StructuredData from '@/components/StructuredData';
import TownFAQSchema from '@/components/TownFAQSchema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Piseco Property Protection Services | Southern Adirondack Security | New York Sash',
  description:
    'Piseco property protection services - we protect your Adirondack property year-round, even when you\'re away. Weatherproof windows, moisture-resistant bathrooms, durable siding, and secure doors for seasonal and full-time homes.',
  keywords:
    'Piseco property protection, Piseco NY windows, Piseco bathroom remodel, seasonal home protection Adirondacks, Piseco siding installation, secure doors Piseco, lake property weatherproofing',
  alternates: {
    canonical: '/adk/piseco',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    title: 'Piseco Property Protection Services | New York Sash',
    description:
      'Protecting Piseco properties year-round with weatherproof windows, moisture-resistant bathrooms, siding, and secure doors.',
    url: '/adk/piseco',
    siteName: 'New York Sash - Adirondack Division',
    images: [
      {
        url: '/images/piseco-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Piseco property protection services by New York Sash',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piseco Property Protection | New York Sash',
    description:
      'Year-round property protection in Piseco, NY for windows, bathrooms, siding, and doors.',
    images: ['/images/piseco-image.jpeg'],
    creator: '@NewYorkSash',
  },
};

export default function PisecoPage() {
  const pisecoData = {
    name: 'Piseco',
    tagline: 'Year-Round Protection for Adirondack Retreats',
    heroImage: '/images/piseco-image.jpeg',
    description:
      'We protect your Piseco property through every season with weather-ready windows, moisture-resistant bathrooms, durable siding, and secure doors.',
    highlights: [
      {
        title: 'Weather-Ready Window Systems',
        description:
          'Replacement windows with advanced sealing to defend against wind, cold, and moisture while improving comfort and efficiency.',
      },
      {
        title: 'Moisture-Resistant Bathroom Upgrades',
        description:
          'Fast, durable bathroom remodel solutions built to handle seasonal humidity and temperature swings common in Adirondack homes.',
      },
      {
        title: 'Complete Exterior Defense',
        description:
          'Siding and door systems engineered for mountain weather, helping secure your investment whether occupied or seasonal.',
      },
    ],
    targetContent: {
      title: 'Piseco: Protecting Seasonal and Year-Round Homes',
      content: [
        'Piseco properties face constant pressure from changing mountain weather, long winters, and seasonal vacancy. We build complete protection systems that keep your home secure in every condition.',
        'From weather-sealed windows to moisture-managed bathrooms, and from durable siding to secure entry systems, every installation is designed to reduce maintenance risk and preserve long-term property value.',
        'Our factory-trained teams deliver clean, reliable installs backed by lifetime protection coverage so your Piseco home stays ready for every return trip.',
      ],
    },
    successStories: [
      {
        title: 'Cabin Comfort Upgrade',
        homeowner: 'The Reynolds Family',
        project: 'Window and Door Package',
        description:
          'Their seasonal cabin had drafts and inconsistent indoor temperatures, making shoulder seasons uncomfortable.',
        result:
          'The new windows and doors made a huge difference immediately. The cabin stays comfortable and feels far more secure.',
        timeframe: '2 days',
      },
      {
        title: 'One-Day Bathroom Refresh',
        homeowner: 'Elaine Foster',
        project: 'Bathroom Remodel',
        description:
          'An outdated bath needed an upgrade that could stand up to heavy summer use and winter downtime.',
        result:
          'The remodel is beautiful, easy to maintain, and exactly what we needed for a seasonal property.',
        timeframe: '1 day',
      },
    ],
    localFeatures: [
      {
        title: 'Seasonal Property Ownership',
        description:
          'Many homes in Piseco are part-time retreats that sit vacant for stretches of the year.',
        connection:
          'We install long-life systems designed to protect homes during occupancy and vacancy alike.',
      },
      {
        title: 'Mountain Weather Exposure',
        description:
          'Temperature swings, wind, and precipitation can accelerate wear on exterior materials.',
        connection:
          'Our weatherproof products and installation methods are selected for durability in Adirondack conditions.',
      },
      {
        title: 'Investment Preservation',
        description:
          'Adirondack properties are long-term family investments that need dependable protection.',
        connection:
          'We focus on reliable systems and lifetime-backed workmanship to help preserve property value.',
      },
    ],
  };

  return (
    <>
      <StructuredData type="townPage" townName="Piseco" townSlug="piseco" />
      <TownFAQSchema townName="Piseco" townSlug="piseco" />
      <TownTemplate townData={pisecoData} />
    </>
  );
}
