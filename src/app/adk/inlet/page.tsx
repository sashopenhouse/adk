import React from 'react';
import TownTemplate from '@/components/TownTemplate';
import StructuredData from '@/components/StructuredData';
import TownFAQSchema from '@/components/TownFAQSchema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inlet Luxury Lakefront Property Security | Premium Adirondack Protection | New York Sash',
  description:
    'Inlet luxury lakefront property security - we protect your premium property year-round, even when you\'re away. Impact-resistant windows, waterproof bathrooms, premium siding, high-security doors. Specialized for luxury Adirondack properties, Fulton Chain estates. 35+ years expertise, lifetime protection guarantee.',
  keywords: 'Inlet luxury property protection, premium lakefront security, Inlet window installation, impact resistant windows, luxury property security, Fulton Chain property protection, waterproof bathrooms Inlet, premium siding installation, high security doors, Adirondack luxury home protection',
  alternates: {
    canonical: '/adk/inlet',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    title: 'Inlet Luxury Lakefront Property Security | New York Sash Premium Division',
    description:
      'Protecting luxury properties year-round in Inlet, NY. Premium lakefront security systems - impact windows, waterproof systems, high-security installations.',
    url: '/adk/inlet',
    siteName: 'New York Sash - Adirondack Division',
    images: [
      {
        url: '/images/AdobeStock_364798487.jpeg',
        width: 1200,
        height: 630,
        alt: 'Inlet luxury lakefront property security - premium windows, waterproof systems, high-security installations',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inlet Luxury Property Protection | New York Sash',
    description: 'Premium lakefront property security in Inlet, NY - luxury protection systems, impact windows, high-security installations.',
    images: ['/images/AdobeStock_364798487.jpeg'],
    creator: '@NewYorkSash',
  },
};

export default function InletPage() {
  const inletData = {
    name: 'Inlet',
    tagline: 'Luxury Property Security Systems',
    heroImage: '/images/AdobeStock_364798487.jpeg',
    description: 'We protect your luxury lakefront property year-round, even when you\'re away. Premium security: reinforced windows, waterproof bathrooms, protective siding, and high-security doors.',
    highlights: [
      {
        title: 'Comprehensive Property Defense',
        description: 'Complete protection portfolio: impact-resistant windows, moisture-sealed bathrooms, storm-grade siding, and security doors - all engineered for luxury standards.'
      },
      {
        title: 'Premium Lakefront Security',
        description: 'Specialized high-end protection systems for luxury properties requiring maximum security, weather resistance, and aesthetic excellence.'
      },
      {
        title: 'Integrated Protection Projects',
        description: 'Seamless whole-property security upgrades combining all protection systems for ultimate peace of mind during extended absences.'
      }
    ],
    targetContent: {
      title: 'Inlet: Maximum Protection for Premium Lakefront Investments',
      content: [
        'Inlet represents our most sophisticated property protection installations, where luxury lakefront owners demand invisible security that never compromises aesthetics. We create fortress-level defense systems disguised as premium home features.',
        'Our Inlet clients receive comprehensive property security: impact-resistant windows with lake views, humidity-sealed luxury bathrooms, storm-deflecting premium siding, and reinforced entry doors with smart security features. Every element protects your investment during extended absences.',
        'Each Inlet installation demonstrates our commitment to invisible protection - maximum security that looks like luxury amenities, backed by lifetime coverage and monitored by our elite protection specialists who understand high-value property vulnerabilities.'
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
        connection: 'Our moisture-defense systems and materials provide complete protection for high-value lakefront properties.'
      },
      {
        title: 'Small Town Charm',
        description: 'This tight-knit community values quality craftsmanship and long-term relationships.',
        connection: 'Our lifetime protection guarantee and local security monitoring align with Inlet\'s premium property values.'
      },
      {
        title: 'Seasonal Residents',
        description: 'Many properties are seasonal camps that need to withstand months of vacancy and harsh weather.',
        connection: 'We design security installations that protect property investments reliably during extended vacancy periods.'
      }
    ]
  };

  return (
    <>
      <StructuredData type="townPage" townName="Inlet" townSlug="inlet" />
      <TownFAQSchema townName="Inlet" townSlug="inlet" />
      <TownTemplate townData={inletData} />
    </>
  );
}