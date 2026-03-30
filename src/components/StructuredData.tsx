import React from 'react';

interface StructuredDataProps {
  type: 'landingPage' | 'townPage';
  townName?: string;
  townSlug?: string;
}

export default function StructuredData({ type, townName, townSlug }: StructuredDataProps) {
  const baseUrl = 'https://www.newyorksash-adirondacks.com';
  
  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/adk#business`,
    "name": "New York Sash",
    "description": "We protect your property year-round, even when you're away. Professional property protection services for Adirondack homes including weatherproof windows, moisture-resistant siding, secure doors, and protected bathrooms.",
    "url": baseUrl,
    "telephone": "+1-315-624-7344",
    "email": "info@newyorksash.com",
    "foundingDate": "1989",
    "slogan": "We protect your property year-round, even when you're away.",
    "logo": `${baseUrl}/images/ny-sash-logo.png`,
    "image": `${baseUrl}/images/adk-landscape-hero.jpg`,
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Financing"],
    "currenciesAccepted": "USD",
    "areaServed": [
      {
        "@type": "City",
        "name": "Boonville",
        "addressRegion": "NY"
      },
      {
        "@type": "City", 
        "name": "Old Forge",
        "addressRegion": "NY"
      },
      {
        "@type": "City",
        "name": "Inlet", 
        "addressRegion": "NY"
      },
      {
        "@type": "City",
        "name": "Eagle Bay",
        "addressRegion": "NY"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates", 
        "latitude": 43.8803,
        "longitude": -74.8370
      },
      "geoRadius": "50000"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Central New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.8803,
      "longitude": -74.8370
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "847",
      "bestRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person", 
          "name": "Sarah Henderson"
        },
        "reviewBody": "Excellent property protection service. Our Adirondack home stays secure even when we're away for months. The lifetime warranty gives us complete peace of mind."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Property Protection Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Weatherproof Window Installation",
            "description": "Energy-efficient replacement windows with advanced weather sealing for year-round property protection."
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Moisture-Protected Bathroom Remodeling", 
            "description": "One-day bathroom installations using moisture-barrier technology for long-term protection."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Storm-Resistant Siding Installation",
            "description": "Premium siding systems engineered to protect against extreme weather and seasonal elements."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Security Door Installation",
            "description": "High-security doors designed to protect properties during extended absences."
          }
        }
      ]
    }
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Adirondack Property Protection Services",
    "description": "Comprehensive year-round property protection for Adirondack homes. Weatherproof windows, moisture-resistant bathrooms, storm-grade siding, and security doors.",
    "provider": {
      "@id": `${baseUrl}/adk#business`
    },
    "areaServed": {
      "@type": "State",
      "name": "New York",
      "containsPlace": [
        {
          "@type": "City",
          "name": "Boonville"
        },
        {
          "@type": "City", 
          "name": "Old Forge"
        },
        {
          "@type": "City",
          "name": "Inlet"
        },
        {
          "@type": "City",
          "name": "Eagle Bay"
        }
      ]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Property Protection Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Weather Shield Windows",
            "category": "Window Installation",
            "description": "Custom replacement windows with advanced weather sealing for North Country protection."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Humidity Protected Bathrooms",
            "category": "Bathroom Remodeling",
            "description": "One-day moisture-resistant bathroom installations for vacation homes." 
          }
        }
      ]
    }
  };

  // FAQ Schema for landing page
  const faqSchema = {
    "@context": "https://schema.org", 
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you protect my Adirondack property when I'm away?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We install comprehensive protection systems including weatherproof windows, moisture-sealed bathrooms, storm-resistant siding, and security doors. Our systems are designed to protect your property through every season, whether you're there or miles away."
        }
      },
      {
        "@type": "Question", 
        "name": "What areas in the Adirondacks do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide property protection services throughout the Adirondack region, including Boonville, Old Forge, Inlet, and Eagle Bay. Our factory-trained specialists understand the unique challenges of Adirondack weather."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer warranties on your protection systems?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Yes, every protection system we install comes with our comprehensive lifetime warranty covering both parts and labor. This gives you complete peace of mind for your property investment."
        }
      },
      {
        "@type": "Question",
        "name": "Can you work on vacation homes and seasonal properties?", 
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We specialize in vacation homes and seasonal properties. Our protection systems are specifically designed to safeguard properties during extended vacancy periods and extreme weather exposure."
        }
      }
    ]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = type === 'townPage' ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList", 
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Adirondack Services",
        "item": `${baseUrl}/adk`
      },
      {
        "@type": "ListItem",
        "position": 3, 
        "name": `${townName} Property Protection`,
        "item": `${baseUrl}/adk/${townSlug}`
      }
    ]
  } : {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home", 
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Adirondack Services",
        "item": `${baseUrl}/adk`
      }
    ]
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization", 
    "name": "New York Sash",
    "alternateName": "NY Sash",
    "url": baseUrl,
    "logo": `${baseUrl}/images/ny-sash-logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-315-624-7344",
      "contactType": "Customer Service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/newyorksash",
      "https://www.youtube.com/newyorksash"
    ],
    "foundingDate": "1989",
    "numberOfEmployees": {
      "@type": "QuantitativeValue", 
      "value": "100"
    },
    "slogan": "We protect your property year-round, even when you're away.",
    "knowsAbout": [
      "Property Protection",
      "Window Installation", 
      "Bathroom Remodeling",
      "Siding Installation",
      "Door Installation",
      "Adirondack Homes",
      "Vacation Property Security"
    ]
  };

  const schemas = [
    organizationSchema,
    localBusinessSchema, 
    serviceSchema,
    breadcrumbSchema,
    ...(type === 'landingPage' ? [faqSchema] : [])
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </>
  );
}