import React from 'react';
import TownTemplate from '@/components/TownTemplate';

export default function EagleBayPage() {
  const eagleBayData = {
    name: 'Eagle Bay',
    tagline: 'Full Service Remote Solutions',
    heroImage: '/images/AdobeStock_440321067.jpeg',
    description: 'Complete New York Sash services: windows, bathrooms, siding, and doors for remote wilderness homes. Specialized installation available.',
    highlights: [
      {
        title: 'All Services Available Remotely',
        description: 'Complete New York Sash services: windows, bathrooms, siding, and doors - delivered to any location with specialized logistics.'
      },
      {
        title: 'Custom Sizing & Solutions',
        description: 'Tailored windows, doors, siding, and bathroom solutions designed for unique architectural challenges and remote conditions.'
      },
      {
        title: 'Wilderness Durability',
        description: 'Products and installations specifically chosen and executed to withstand extreme isolation and weather exposure.'
      }
    ],
    targetContent: {
      title: 'Eagle Bay: New York Sash Wilderness Specialists',
      content: [
        'Eagle Bay represents New York Sash\'s most challenging and rewarding installations - serving remote wilderness properties that demand both exceptional craftsmanship and innovative logistics. Our specialized teams understand the unique requirements of off-grid and seasonal access properties.',
        'From custom-sized windows that maximize wilderness views to bathroom remodels completed with helicopter-delivered materials, Eagle Bay projects showcase New York Sash\'s ability to deliver quality anywhere. Our installations must withstand extreme weather with minimal maintenance access.',
        'Every Eagle Bay project includes enhanced weatherproofing, extended material warranties, and detailed maintenance guidance - because when you\'re miles from the nearest neighbor, New York Sash quality and reliability become even more critical.'
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
        connection: 'We specialize in historic preservation while incorporating modern energy efficiency and comfort.'
      },
      {
        title: 'Premier Location',
        description: 'As one of the most exclusive areas in the Adirondacks, Eagle Bay demands the highest quality craftsmanship.',
        connection: 'Our premium products and meticulous attention to detail match Eagle Bay\'s luxury standards.'
      },
      {
        title: 'Natural Splendor',
        description: 'Surrounded by pristine wilderness and crystal-clear lakes, properties here showcase nature\'s beauty.',
        connection: 'Our windows and design approach maximize natural views while respecting the environment.'
      }
    ]
  };

  return <TownTemplate townData={eagleBayData} />;
}