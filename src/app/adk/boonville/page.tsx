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
    tagline: 'Protecting North Country Properties',
    heroImage: '/images/AdobeStock_301479907.jpeg',
    description: 'We protect your North Country property year-round, even when you\'re away. Complete weatherproofing services: windows, bathrooms, siding, and doors.',
    highlights: [
      {
        title: 'Weather-Shield Windows',
        description: 'Custom replacement windows that protect against North Country winters while lowering energy costs and increasing comfort.'
      },
      {
        title: 'Moisture-Protected Bathrooms',
        description: 'Transform your bathroom in one day with moisture-resistant materials that guard against humidity and temperature fluctuations.'
      },
      {
        title: 'Armor-Grade Siding & Secure Doors',
        description: 'Premium exterior protection systems including impact-resistant siding and security doors designed for North Country conditions.'
      }
    ],
    targetContent: {
      title: 'Boonville: Your First Line of Defense Against Adirondack Elements',
      content: [
        'As your gateway to the Adirondacks, Boonville properties face unique protection challenges. We safeguard your investment with comprehensive weatherproofing: windows that seal out winter winds, bathrooms protected from seasonal humidity, and exterior barriers that defend against ice, snow, and summer storms.',
        'Our factory-trained protection specialists understand that North Country homes need more than standard installation - they need fortress-level defense systems. Whether you\'re away for the season or just at work, your property stays secure against the elements.',
        'Every protection system we install comes with our lifetime warranty because when you\'re defending against Adirondack weather patterns, you need guaranteed coverage that lasts as long as your property ownership.'
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
        connection: 'We design protection systems that secure homes during both occupied and unoccupied periods.'
      },
      {
        title: 'Four-Season Living',
        description: 'From summer festivals to winter sports, Boonville residents live actively year-round in challenging weather.',
        connection: 'Our weatherproofing systems are engineered to protect your property through extreme temperature swings from -20°F to 90°F.'
      },
      {
        title: 'Historic Character',
        description: 'Many Boonville homes have incredible character and architectural details worth preserving.',
        connection: 'We specialize in protective upgrades that preserve character while adding modern security and weather resistance.'
      }
    ]
  };

  return <TownTemplate townData={boonvilleData} />;
}