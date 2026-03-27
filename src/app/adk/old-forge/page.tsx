import React from 'react';
import TownTemplate from '@/components/TownTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Old Forge Window, Bathroom, Siding & Door Services',
  description:
    'Old Forge home improvement by New York Sash: replacement windows, one-day bathroom remodels, siding, and doors for lakefront and mountain homes.',
  alternates: {
    canonical: '/adk/old-forge',
  },
  openGraph: {
    title: 'Old Forge Home Improvement Services | New York Sash',
    description:
      'Windows, bathrooms, siding, and doors in Old Forge with trusted installation and lifetime warranty.',
    url: '/adk/old-forge',
    images: [
      {
        url: '/images/AdobeStock_342902991.jpeg',
        width: 1200,
        height: 630,
        alt: 'Old Forge home improvement services by New York Sash',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Old Forge Home Improvement Services | New York Sash',
    description: 'Windows, bathrooms, siding, and doors in Old Forge, NY.',
    images: ['/images/AdobeStock_342902991.jpeg'],
  },
};

export default function OldForgePage() {
  const oldForgeData = {
    name: 'Old Forge',
    tagline: 'Complete Home Improvement Services',
    heroImage: '/images/AdobeStock_342902991.jpeg',
    description: 'Full range of New York Sash services: windows, bathrooms, siding, and doors designed for lakefront and mountain living.',
    highlights: [
      {
        title: 'Complete Window Services',
        description: 'Energy-efficient replacement windows designed for lakefront living. Reduce heating costs and enhance views.'
      },
      {
        title: 'One-Day Bathroom Remodels',
        description: 'Transform your lakefront bathroom in just one day. Perfect for vacation homes and permanent residences.'
      },
      {
        title: 'Siding & Door Solutions',
        description: 'Premium siding and energy-efficient doors built to withstand mountain weather and lakefront conditions.'
      }
    ],
    targetContent: {
      title: 'Old Forge: Complete New York Sash Services',
      content: [
        'Old Forge\'s position as the heart of Adirondack recreation creates unique challenges for homeowners. New York Sash brings our complete range of services - windows, bathrooms, siding, and doors - to handle the specific demands of lakefront and mountain properties.',
        'Whether you need energy-efficient windows with stunning lake views, a one-day bathroom remodel for your vacation home, weather-resistant siding, or durable doors that can handle heavy seasonal use, New York Sash has the expertise and products for Old Forge living.',
        'Every New York Sash installation comes with our comprehensive lifetime warranty, giving Old Forge property owners confidence that all their home improvement needs are covered for decades to come.'
      ]
    },
    successStories: [
      {
        title: 'Lake House Transformation',
        homeowner: 'The Morrison Family',
        project: 'Complete Window & Siding Update',
        description: 'Their 1970s lake house had beautiful views but needed serious updates to handle Adirondack weather and improve energy efficiency.',
        result: 'The new windows and siding completely transformed our lake house. We can enjoy those gorgeous views year-round now, and our heating bills are half what they used to be.',
        timeframe: '3 days'
      },
      {
        title: 'Resort-Style Bathroom Retreat',
        homeowner: 'Janet & Michael Torres',
        project: 'Master Bathroom One-Day Remodel',
        description: 'Wanted a spa-like bathroom to relax in after long days on the lake. The old bathroom felt cramped and outdated.',
        result: 'It feels like we have our own private resort bathroom. The one-day process was incredible - we left for the lake in the morning and came home to a completely new space.',
        timeframe: '1 day'
      }
    ],
    localFeatures: [
      {
        title: 'Tourist Town Living',
        description: 'Old Forge balances year-round residents with seasonal visitors, creating unique home improvement needs.',
        connection: 'We design solutions that work for both daily living and entertaining guests.'
      },
      {
        title: 'Extreme Weather',
        description: 'From summer heat to some of New York\'s coldest winters, Old Forge sees it all.',
        connection: 'Our products are tested for temperature extremes - perfect for Adirondack conditions.'
      },
      {
        title: 'Lake & Mountain Views',
        description: 'Many homes have stunning natural views that deserve the right windows to frame them.',
        connection: 'We specialize in maximizing views while maintaining energy efficiency and comfort.'
      }
    ]
  };

  return <TownTemplate townData={oldForgeData} />;
}