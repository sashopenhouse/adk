import React from 'react';
import TownTemplate from '@/components/TownTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eagle Bay Window, Bathroom, Siding & Door Services',
  description:
    'Eagle Bay home improvement by New York Sash: windows, one-day bathroom remodels, siding, and doors for remote and wilderness properties.',
  alternates: {
    canonical: '/adk/eagle-bay',
  },
  openGraph: {
    title: 'Eagle Bay Home Improvement Services | New York Sash',
    description:
      'Reliable windows, bathrooms, siding, and doors in Eagle Bay, NY with lifetime warranty coverage.',
    url: '/adk/eagle-bay',
    images: [
      {
        url: '/images/AdobeStock_440321067.jpeg',
        width: 1200,
        height: 630,
        alt: 'Eagle Bay home improvement services by New York Sash',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eagle Bay Home Improvement Services | New York Sash',
    description: 'Windows, bathrooms, siding, and doors in Eagle Bay, NY.',
    images: ['/images/AdobeStock_440321067.jpeg'],
  },
};

export default function EagleBayPage() {
  const eagleBayData = {
    name: 'Eagle Bay',
    tagline: 'Wilderness Property Fortress Systems',
    heroImage: '/images/AdobeStock_440321067.jpeg',
    description: 'We protect your wilderness property year-round, even when you\'re away. Specialized remote defense: reinforced windows, sealed bathrooms, armor-grade siding, and fortress doors.',
    highlights: [
      {
        title: 'Complete Remote Property Defense',
        description: 'Full protection arsenal: reinforced windows, sealed bathrooms, armor siding, and fortress doors - all designed for extreme isolation security.'
      },
      {
        title: 'Custom Wilderness Security Solutions',
        description: 'Tailored protection systems engineered for unique remote challenges and extreme weather exposure with minimal maintenance access.'
      },
      {
        title: 'Maximum Wilderness Durability',
        description: 'Military-grade products and installations designed to defend remote properties against total isolation, extreme weather, and wildlife exposure.'
      }
    ],
    targetContent: {
      title: 'Eagle Bay: Ultimate Wilderness Property Protection',
      content: [
        'Eagle Bay represents our most extreme property protection challenges - defending remote wilderness investments where failure isn\'t an option. Our specialized fortress teams create impenetrable defense systems that protect properties during months of complete isolation.',
        'From hurricane-grade windows that defend wilderness views to bathroom sealing systems resistant to freeze-thaw cycles, Eagle Bay installations must function flawlessly with zero maintenance access. Our protection specialists deliver fortress-level security disguised as luxury amenities.',
        'Every Eagle Bay defense system includes maximum weatherproofing, extended protection warranties, and detailed emergency protocols - because when you\'re hours from civilization, absolute property security becomes survival-critical.'
      ]
    },
    successStories: [
      {
        title: 'Mountain Retreat Restoration',
        homeowner: 'The Hamilton Estate',
        project: 'Historic Window Restoration & Siding',
        description: 'A 1930s Great Camp needed careful restoration to preserve its character while updating for modern comfort and efficiency.',
        result: 'They perfectly balanced historical authenticity with modern performance. Our Great Camp looks exactly as it should but performs like a modern home.',
        timeframe: '6 days'
      },
      {
        title: 'Lakeside Luxury Upgrade',
        homeowner: 'Dr. & Mrs. Patterson',
        project: 'Master Suite Bathroom Remodel',
        description: 'Wanted a spa-quality bathroom to match the stunning lake views from their Eagle Bay retreat.',
        result: 'The new bathroom is absolutely stunning. Waking up to lake views and having this beautiful space to start the day - it\'s like living in a five-star resort.',
        timeframe: '1 day'
      }
    ],
    localFeatures: [
      {
        title: 'Great Camp Heritage',
        description: 'Eagle Bay is home to historic Adirondack Great Camps, requiring specialized restoration expertise.',
        connection: 'We specialize in protective restoration that preserves historical character while adding fortress-level security and weather defense.'
      },
      {
        title: 'Premier Location',
        description: 'As one of the most exclusive areas in the Adirondacks, Eagle Bay demands the highest quality craftsmanship.',
        connection: 'Our premium protection products and meticulous security details meet Eagle Bay\'s luxury fortress standards.'
      },
      {
        title: 'Natural Splendor',
        description: 'Surrounded by pristine wilderness and crystal-clear lakes, properties here showcase nature\'s beauty.',
        connection: 'Our protective windows and security-conscious design maximize natural views while defending against wilderness threats.'
      }
    ]
  };

  return <TownTemplate townData={eagleBayData} />;
}