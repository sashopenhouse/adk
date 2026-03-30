import React from 'react';
import TownTemplate from '@/components/TownTemplate';
import StructuredData from '@/components/StructuredData';
import TownFAQSchema from '@/components/TownFAQSchema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Old Forge Lakefront Property Protection | Adirondack Recreation Security | New York Sash',
  description:
    'Old Forge lakefront property protection - we protect your recreational property year-round, even when you\'re away. Storm-resistant windows, humidity-proof bathrooms, weather siding, reinforced doors. Specialized for Adirondack recreation properties, vacation homes, lake houses. 35+ years expertise, lifetime warranty.',
  keywords: 'Old Forge property protection, lakefront property security, Adirondack vacation home protection, Old Forge window installation, storm resistant windows, lake house security, weatherproof siding Old Forge, humidity resistant bathrooms, recreational property protection, Fulton Chain security',
  alternates: {
    canonical: '/adk/old-forge',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    title: 'Old Forge Lakefront Property Protection | New York Sash Adirondack Recreation Division',
    description:
      'Protecting recreational properties year-round in Old Forge, NY. Professional lakefront security systems - storm windows, weather siding, reinforced doors.',
    url: '/adk/old-forge',
    siteName: 'New York Sash - Adirondack Division',
    images: [
      {
        url: '/images/AdobeStock_342902991.jpeg',
        width: 1200,
        height: 630,
        alt: 'Old Forge lakefront property protection - storm windows, weather siding, secured doors for vacation homes',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Old Forge Lakefront Property Protection | New York Sash',
    description: 'Recreational property protection in Old Forge, NY - storm windows, weather siding, lakefront security systems.',
    images: ['/images/AdobeStock_342902991.jpeg'],
    creator: '@NewYorkSash',
  },
};

export default function OldForgePage() {
  const oldForgeData = {
    name: 'Old Forge',
    tagline: 'Lakefront Property Protection',
    heroImage: '/images/AdobeStock_342902991.jpeg',
    description: 'We protect your lakefront property year-round, even when you\'re away. Comprehensive security: weather-resistant windows, moisture-proof bathrooms, protective siding, and secure doors.',
    highlights: [
      {
        title: 'Lakefront Window Protection',
        description: 'Energy-efficient replacement windows with advanced weather sealing designed to protect lakefront properties while enhancing views.'
      },
      {
        title: 'Humidity-Resistant Bathrooms',
        description: 'One-day bathroom installations using moisture-barrier technology perfect for lakefront humidity and vacation home use.'
      },
      {
        title: 'Storm-Proof Exterior Systems',
        description: 'Premium siding and reinforced doors engineered to withstand mountain weather, lake effect storms, and seasonal property abandonment.'
      }
    ],
    targetContent: {
      title: 'Old Forge: Defending Your Adirondack Recreation Investment',
      content: [
        'Old Forge\'s position as the heart of Adirondack recreation means your property faces unique exposure - from heavy seasonal use to extended vacancy periods. We create comprehensive protection systems that safeguard your investment whether you\'re hosting summer guests or your property sits empty through winter.',
        'Our lakefront security specialists install windows that resist ice damage, bathrooms sealed against humidity extremes, siding that deflects mountain storms, and doors that maintain security during off-season months. Every system works together to protect your property 24/7.',
        'With our lifetime protection guarantee, Old Forge property owners gain peace of mind knowing their recreational retreat is defended against every seasonal challenge the Adirondacks can deliver.'
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
        connection: 'We design protection solutions that secure homes for both daily residents and visiting guests.'
      },
      {
        title: 'Extreme Weather',
        description: 'From summer heat to some of New York\'s coldest winters, Old Forge sees it all.',
        connection: 'Our protection systems are tested for temperature extremes - defending your property through every Adirondack season.'
      },
      {
        title: 'Lake & Mountain Views',
        description: 'Many homes have stunning natural views that deserve the right windows to frame them.',
        connection: 'We specialize in protective windows that maximize stunning views while maintaining security and energy efficiency.'
      }
    ]
  };

  return (
    <>
      <StructuredData type="townPage" townName="Old Forge" townSlug="old-forge" />
      <TownFAQSchema townName="Old Forge" townSlug="old-forge" />
      <TownTemplate townData={oldForgeData} />
    </>
  );
}