'use client';

import React from 'react';
import Link from 'next/link';
import { linkifyServices, SERVICE_URLS } from '@/utils/serviceLinks';
import { trackEvent } from '@/utils/analytics';

export default function GlobalFooter() {
  return (
    <footer className="bg-charcoal text-creamy-white">
      {/* Call to Action Section */}
      <div className="bg-warm-tan">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h3 className="heading-primary text-3xl md:text-4xl text-charcoal mb-6">
            Ready for Your Adirondack Project?
          </h3>
          <p className="body-serif text-lg text-charcoal/80 mb-8 max-w-2xl mx-auto">
            {linkifyServices(
              'Get expert guidance and a free estimate for your windows, bathroom remodel, siding, or door project in the Adirondacks.',
              'footer-cta',
              'text-charcoal underline decoration-charcoal/40 hover:text-charcoal/80 transition-colors duration-300'
            )}
          </p>
          
          <a 
            href="https://www.newyorksash.com/quote"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-charcoal text-creamy-white hover:bg-charcoal/90 transition-colors duration-300 rounded body-sans font-medium"
            onClick={() =>
              trackEvent('cta_click', {
                link_text: 'Get Your Free Estimate',
                link_url: 'https://www.newyorksash.com/quote',
                link_location: 'footer-cta'
              })
            }
          >
            Get Your Free Estimate →
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="mb-4">
              <a
                href="https://www.newyorksash.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent('main_site_link_click', {
                    link_text: 'New York Sash Logo',
                    link_url: 'https://www.newyorksash.com',
                    link_location: 'footer-brand'
                  })
                }
              >
                <img
                  src="/images/ny-sash-logo.png"
                  alt="New York Sash"
                  className="h-12 w-auto"
                />
              </a>
            </h3>
            <p className="text-warm-tan text-sm font-light mb-2">
              Your Adirondack Home Improvement Specialists
            </p>
            <p className="body-serif text-creamy-white/80 mb-6 max-w-md">
              {linkifyServices(
                'Bringing 35+ years of trusted expertise to the Adirondacks. Quality windows, one-day bathrooms, premium siding, and durable doors - all with lifetime warranties.',
                'footer-brand'
              )}
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-creamy-white/80">
                <span className="body-sans font-medium mr-3">Phone:</span>
                <span className="body-sans">(315) 624-7344</span>
              </div>
              <div className="flex items-center text-creamy-white/80">
                <span className="body-sans font-medium mr-3">Email:</span>
                <span className="body-sans">info@newyorksash.com</span>
              </div>
              <div className="flex items-center text-creamy-white/80">
                <span className="body-sans font-medium mr-3">Location:</span>
                <span className="body-sans">Expanding from Central NY to the Adirondacks</span>
              </div>
            </div>
          </div>

          {/* Communities */}
          <div>
            <h4 className="heading-primary text-lg text-warm-tan mb-4">
              Adirondack Locations
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/adk/boonville" 
                  className="body-sans text-creamy-white/80 hover:text-warm-tan transition-colors duration-300"
                >
                  Boonville
                </Link>
              </li>
              <li>
                <Link 
                  href="/adk/old-forge" 
                  className="body-sans text-creamy-white/80 hover:text-warm-tan transition-colors duration-300"
                >
                  Old Forge
                </Link>
              </li>
              <li>
                <Link 
                  href="/adk/inlet" 
                  className="body-sans text-creamy-white/80 hover:text-warm-tan transition-colors duration-300"
                >
                  Inlet
                </Link>
              </li>
              <li>
                <Link 
                  href="/adk/eagle-bay" 
                  className="body-sans text-creamy-white/80 hover:text-warm-tan transition-colors duration-300"
                >
                  Eagle Bay
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="heading-primary text-lg text-warm-tan mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 body-sans text-creamy-white/80">
              <li>
                <a
                  href={SERVICE_URLS.windows}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warm-tan transition-colors duration-300"
                  onClick={() =>
                    trackEvent('service_link_click', {
                      link_text: 'Replacement Windows',
                      link_url: SERVICE_URLS.windows,
                      link_location: 'footer-services',
                      service: 'windows'
                    })
                  }
                >
                  Replacement Windows
                </a>
              </li>
              <li>
                <a
                  href={SERVICE_URLS.bathrooms}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warm-tan transition-colors duration-300"
                  onClick={() =>
                    trackEvent('service_link_click', {
                      link_text: 'One-Day Bathroom Remodels',
                      link_url: SERVICE_URLS.bathrooms,
                      link_location: 'footer-services',
                      service: 'bathrooms'
                    })
                  }
                >
                  One-Day Bathroom Remodels
                </a>
              </li>
              <li>
                <a
                  href={SERVICE_URLS.siding}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warm-tan transition-colors duration-300"
                  onClick={() =>
                    trackEvent('service_link_click', {
                      link_text: 'Premium Vinyl Siding',
                      link_url: SERVICE_URLS.siding,
                      link_location: 'footer-services',
                      service: 'siding'
                    })
                  }
                >
                  Premium Vinyl Siding
                </a>
              </li>
              <li>
                <a
                  href={SERVICE_URLS.doors}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warm-tan transition-colors duration-300"
                  onClick={() =>
                    trackEvent('service_link_click', {
                      link_text: 'Entry & Patio Doors',
                      link_url: SERVICE_URLS.doors,
                      link_location: 'footer-services',
                      service: 'doors'
                    })
                  }
                >
                  Entry & Patio Doors
                </a>
              </li>
              <li>
                <a
                  href={SERVICE_URLS.doors}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warm-tan transition-colors duration-300"
                  onClick={() =>
                    trackEvent('service_link_click', {
                      link_text: 'Storm Doors',
                      link_url: SERVICE_URLS.doors,
                      link_location: 'footer-services',
                      service: 'doors'
                    })
                  }
                >
                  Storm Doors
                </a>
              </li>
              <li>Lifetime Warranties</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-tan/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="body-sans text-sm text-creamy-white/60">
              &copy; 2026 New York Sash. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://www.newyorksash.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="body-sans text-sm text-creamy-white/60 hover:text-warm-tan transition-colors duration-300"
              onClick={() =>
                trackEvent('main_site_link_click', {
                  link_text: 'Privacy Policy',
                  link_url: 'https://www.newyorksash.com/privacy',
                  link_location: 'footer-legal'
                })
              }
            >
              Privacy Policy
            </a>
            <a
              href="https://www.newyorksash.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="body-sans text-sm text-creamy-white/60 hover:text-warm-tan transition-colors duration-300"
              onClick={() =>
                trackEvent('main_site_link_click', {
                  link_text: 'Terms of Service',
                  link_url: 'https://www.newyorksash.com/terms',
                  link_location: 'footer-legal'
                })
              }
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}