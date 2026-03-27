import React from 'react';
import TownTemplate from '@/components/TownTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inlet Window, Bathroom, Siding & Door Services',
  description:
    'Inlet home improvement services from New York Sash: windows, one-day bathroom remodels, siding, and doors for lakefront properties.',
  alternates: {
    canonical: '/adk/inlet',
  },
  openGraph: {
    title: 'Inlet Home Improvement Services | New York Sash',
    description:
      'Premium windows, bathrooms, siding, and doors in Inlet, NY by New York Sash.',
    url: '/adk/inlet',
    images: [
      {
        url: '/images/AdobeStock_364798487.jpeg',
        width: 1200,
        height: 630,
        alt: 'Inlet home improvement services by New York Sash',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inlet Home Improvement Services | New York Sash',
    description: 'Windows, bathrooms, siding, and doors in Inlet, NY.',
    images: ['/images/AdobeStock_364798487.jpeg'],
  },
};

export default function InletPage() {
  const inletData = {
    name: 'Inlet',
    tagline: 'Windows • Bathrooms • Siding • Doors',
    heroImage: '/images/AdobeStock_364798487.jpeg',
    description: 'All New York Sash services available for luxury lakefront properties: windows, bathrooms, siding, and doors with lifetime warranties.',
    highlights: [
      {
        title: 'Complete Service Portfolio',
        description: 'Full range of New York Sash services available: energy-efficient windows, one-day bathrooms, premium siding, and beautiful doors.'
      },
      {
        title: 'Luxury Lakefront Focus',
        description: 'Specialized experience with high-end lakefront properties requiring premium materials and flawless installation.'
      },
      {
        title: 'Coordinated Projects',
        description: 'Seamless project management for whole-home transformations combining multiple New York Sash services.'
      }
    ],
    targetContent: {
      title: 'Inlet: New York Sash\'s Premium Lakefront Showcase',
      content: [
        'Inlet represents the premium market for New York Sash\'s Adirondack expansion, where discerning lakefront property owners demand the highest quality in every aspect of home improvement. Here, we showcase the full range of our capabilities.',
        'Our Inlet clients often choose comprehensive projects combining energy-efficient replacement windows with stunning lake views, luxurious one-day bathroom remodels, premium siding that complements the natural setting, and elegant entry doors that make a statement.',
        'Every project in Inlet demonstrates New York Sash\'s commitment to excellence, backed by our lifetime warranty and delivered by our most experienced factory-trained professionals who understand both luxury expectations and lakefront challenges.'
      ]
    },
    successStories: [
      {
        title: 'Waterfront Cabin Revival',
        homeowner: 'Bob & Susan Mitchell',
        project: 'Siding & Window Package',
        description: 'Their family cabin had beautiful lake access but the exterior was weathered from decades of Adirondack storms. Time for a complete refresh.',
        result: 'The cabin looks brand new but still has that classic Adirondack feel. The new siding and windows will protect our investment for generations.',
        timeframe: '4 days'
      },
      {
        title: 'Cozy Bathroom Upgrade',
        homeowner: 'The Kawasaki Family',
        project: 'Compact Bathroom Remodel',
        description: 'Their small cabin bathroom needed to be both functional and relaxing after long days exploring the Fulton Chain.',
        result: 'They maximized every inch perfectly. Now we have a beautiful bathroom that feels spacious despite the small footprint.',
        timeframe: '1 day'
      }
    ],
    localFeatures: [
      {
        title: 'Fulton Chain Access',
        description: 'Inlet serves as a gateway to the famous Fulton Chain of Lakes, attracting boaters and water enthusiasts.',
        connection: 'Our moisture-resistant materials and finishes are perfect for lakefront properties.'
      },
      {
        title: 'Small Town Charm',
        description: 'This tight-knit community values quality craftsmanship and long-term relationships.',
        connection: 'Our lifetime warranty and local service commitment fit perfectly with Inlet\'s values.'
      },
      {
        title: 'Seasonal Residents',
        description: 'Many properties are seasonal camps that need to withstand months of vacancy and harsh weather.',
        connection: 'We design installations that perform reliably even when homes are unoccupied during winter.'
      }
    ]
  };

  return <TownTemplate townData={inletData} />;
}