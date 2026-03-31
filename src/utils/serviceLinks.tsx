import React from 'react';
import { trackEvent } from './analytics';

export const SERVICE_URLS = {
  windows: 'https://www.newyorksash.com/windows',
  bathrooms: 'https://www.newyorksash.com/bathrooms',
  siding: 'https://www.newyorksash.com/siding',
  doors: 'https://www.newyorksash.com/doors'
};

const serviceRegex = /\b(replacement windows?|windows?|bathroom remodels?|bathrooms?|siding|entry & patio doors|storm doors|doors?)\b/gi;

const defaultLinkClassName = 'text-warm-tan underline decoration-warm-tan/40 hover:text-accent-gold transition-colors duration-300';

function getServiceKey(match: string): keyof typeof SERVICE_URLS | null {
  const value = match.toLowerCase();

  if (value.includes('window')) return 'windows';
  if (value.includes('bath')) return 'bathrooms';
  if (value.includes('siding')) return 'siding';
  if (value.includes('door')) return 'doors';

  return null;
}

export function linkifyServices(
  text: string,
  location: string,
  linkClassName: string = defaultLinkClassName
): React.ReactNode[] | string {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;

  text.replace(serviceRegex, (match, _group, offset: number) => {
    if (offset > lastIndex) {
      nodes.push(text.slice(lastIndex, offset));
    }

    const serviceKey = getServiceKey(match);
    const serviceUrl = serviceKey ? SERVICE_URLS[serviceKey] : null;

    if (serviceUrl) {
      nodes.push(
        <a
          key={`${offset}-${match}`}
          href={serviceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
          onClick={() =>
            trackEvent('service_link_click', {
              link_text: match,
              link_url: serviceUrl,
              link_location: location,
              service: serviceKey || undefined
            })
          }
        >
          {match}
        </a>
      );
    } else {
      nodes.push(match);
    }

    lastIndex = offset + match.length;
    return match;
  });

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length ? nodes : text;
}
