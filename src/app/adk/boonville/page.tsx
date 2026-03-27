import React from 'react';
import TownTemplate from '@/components/TownTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boonville Window, Bathroom, Siding & Door Services',
  description:
    'Home improvement in Boonville, NY from New York Sash: replacement windows, one-day bathroom remodels, siding, and doors with a lifetime warranty.',
  alternates: {
    canonical: '/adk/boonville',
  },
  openGraph: {
    title: 'Boonville Home Improvement Services | New York Sash',
    description:
      'Trusted Boonville services for windows, bathrooms, siding, and doors by New York Sash.',
    url: '/adk/boonville',
    images: [
      {
        url: '/images/AdobeStock_301479907.jpeg',
        width: 1200,
        height: 630,
        alt: 'Boonville home improvement services by New York Sash',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boonville Home Improvement Services | New York Sash',
    description: 'Windows, bathrooms, siding, and doors in Boonville, NY.',
    images: ['/images/AdobeStock_301479907.jpeg'],
  },
};

export default function BoonvillePage() {
  const boonvilleData = {
    name: 'Boonville',
    tagline: 'All New York Sash Services Available',
    heroImage: '/images/AdobeStock_301479907.jpeg',
    description: 'New York Sash brings trusted expertise to North Country living with complete home improvement services: windows, bathrooms, siding, and doors.',
    highlights: [
      {
        title: 'Energy-Efficient Windows',
        description: 'Custom replacement windows designed for North Country winters. Lower energy costs and increased comfort.'
      },
      {
        title: 'One-Day Bathroom Remodels',
        description: 'Transform your bathroom in just one day with our innovative remodeling system. No lengthy construction disruption.'
      },
      {
        title: 'Premium Siding & Quality Doors',
        description: 'Complete exterior solutions including vinyl siding and energy-efficient doors for North Country homes.'
      }
    ],
    targetContent: {
      title: 'Boonville: New York Sash\'s North Country Expansion',
      content: [
        'Boonville serves as New York Sash\'s gateway into the Adirondacks, bringing our complete range of services to this historic North Country community. We provide windows, bathroom remodels, siding, and doors - all backed by 35+ years of expertise.',
        'Our factory-trained installers understand the unique challenges of North Country living and can help with any home improvement need. From energy-efficient windows and one-day bathroom remodels to durable siding and quality doors.',
        'Every New York Sash installation comes with our lifetime warranty on both parts and labor - because when you\'re dealing with North Country weather, you need comprehensive service you can trust for life.'
      ]
    },
    successStories: [
      {
        title: 'Historic Home Gets Modern Comfort',
        homeowner: 'The Hendersons',
        project: 'Complete Window Replacement',
        description: 'Living in a 1920s farmhouse meant charm but also drafty winters. After 15 years of high heating bills, the Hendersons decided it was time for new windows.',
        result: 'Our energy costs dropped 40% the first winter, and the house feels so much more comfortable. The new windows look perfect with our home\'s character.',
        timeframe: '2 days'
      },
      {
        title: 'From Outdated to Outstanding',
        homeowner: 'Maria & Robert Chen',
        project: 'One-Day Bathroom Remodel',
        description: 'Their 1980s bathroom was showing its age, but they dreaded a long renovation. Our one-day remodel gave them the spa-like retreat they wanted.',
        result: 'We couldn\'t believe the transformation happened in just one day. It\'s like having a luxury hotel bathroom in our North Country home.',
        timeframe: '1 day'
      }
    ],
    localFeatures: [
      {
        title: 'North Country Gateway',
        description: 'Boonville sits at the perfect crossroads - close enough to Utica for convenience, but surrounded by Adirondack beauty.',
        connection: 'We understand homes that need to handle both suburban comfort and mountain weather.'
      },
      {
        title: 'Four-Season Living',
        description: 'From summer festivals to winter sports, Boonville residents live actively year-round in challenging weather.',
        connection: 'Our windows and doors are built to handle temperature swings from -20°F to 90°F.'
      },
      {
        title: 'Historic Character',
        description: 'Many Boonville homes have incredible character and architectural details worth preserving.',
        connection: 'We specialize in updating historic homes while maintaining their original charm and character.'
      }
    ]
  };

  return <TownTemplate townData={boonvilleData} />;
}