import React from 'react';

interface TownFAQProps {
  townName: string;
  townSlug: string;
}

export default function TownFAQSchema({ townName, townSlug }: TownFAQProps) {
  const faqsByTown: Record<string, any> = {
    boonville: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do you protect Boonville properties during harsh North Country winters?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We install weatherproof windows with advanced sealing, storm-resistant siding, and secure doors designed for temperatures from -20°F to 90°F. Our protection systems keep your Boonville property secure whether you're there or away for the season."
          }
        },
        {
          "@type": "Question",
          "name": "Do you service vacation homes in the Boonville area?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in vacation home and seasonal property protection. Our systems are designed to protect your property during extended absences with moisture-resistant bathrooms and secure exterior barriers."
          }
        },
        {
          "@type": "Question",
          "name": "What makes your bathroom remodels moisture-protected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use moisture-barrier technology and humidity-resistant materials that protect against North Country seasonal humidity changes. Our one-day installations guard against temperature fluctuations year-round."
          }
        }
      ]
    },
    'old-forge': {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do you protect lakefront properties in Old Forge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We install storm-resistant windows, humidity-proof bathrooms, and weather-grade siding specifically designed for lakefront exposure. Our systems protect against ice damage, lake effect storms, and seasonal humidity extremes."
          }
        },
        {
          "@type": "Question",
          "name": "Can you work on recreational properties with heavy seasonal use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We specialize in recreational properties that need to handle both heavy guest use in summer and complete vacancy in winter. Our protection systems are designed for this unique usage pattern."
          }
        },
        {
          "@type": "Question",
          "name": "Do your windows maximize lake views while providing protection?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our protective windows are designed to maximize stunning lake views while maintaining security and energy efficiency. You get unobstructed views with complete weather protection."
          }
        }
      ]
    },
    inlet: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What luxury protection services do you offer in Inlet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide premium property security including impact-resistant windows, waterproof luxury bathrooms, premium protective siding, and high-security doors. All systems maintain aesthetic excellence while providing fortress-level protection."
          }
        },
        {
          "@type": "Question",
          "name": "How do you protect high-value properties during extended absences?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our integrated protection projects combine all security systems for ultimate peace of mind. We create invisible security that looks like luxury amenities but provides maximum protection during vacancy periods."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer whole-property security upgrades?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in comprehensive security upgrades combining windows, bathrooms, siding, and doors into integrated protection systems for luxury lakefront properties."
          }
        }
      ]
    },
    'eagle-bay': {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do you handle installations in remote Eagle Bay locations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide specialized remote installations including helicopter delivery for extreme locations. Our wilderness specialists create fortress-level protection for properties miles from civilization."
          }
        },
        {
          "@type": "Question",
          "name": "Can you restore Great Camps while adding modern protection?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in protective restoration that preserves historical character while adding fortress-level security and weather defense. We balance authenticity with modern performance."
          }
        },
        {
          "@type": "Question",
          "name": "What makes your Eagle Bay installations different?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every Eagle Bay defense system includes maximum weatherproofing, extended protection warranties, and detailed emergency protocols. We design for survival-critical property security in extreme isolation."
          }
        }
      ]
    }
  };

  const faqSchema = faqsByTown[townSlug];
  
  if (!faqSchema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema)
      }}
    />
  );
}