'use client';

import React from 'react';
import Link from 'next/link';

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
            Get expert guidance and a free estimate for your windows, bathroom remodel, siding, or door project in the Adirondacks.
          </p>
          
          <a 
            href="https://www.newyorksash.com/quote"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-charcoal text-creamy-white hover:bg-charcoal/90 transition-colors duration-300 rounded body-sans font-medium"
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
              <img
                src="/images/ny-sash-logo.png"
                alt="New York Sash"
                className="h-12 w-auto"
              />
            </h3>
            <p className="text-warm-tan text-sm font-light mb-2">
              Your Adirondack Home Improvement Specialists
            </p>
            <p className="body-serif text-creamy-white/80 mb-6 max-w-md">
              Bringing 35+ years of trusted expertise to the Adirondacks. Quality windows, 
              one-day bathrooms, premium siding, and durable doors - all with lifetime warranties.
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
              <li>Replacement Windows</li>
              <li>One-Day Bathroom Remodels</li>
              <li>Premium Vinyl Siding</li>
              <li>Entry & Patio Doors</li>
              <li>Storm Doors</li>
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
            >
              Privacy Policy
            </a>
            <a
              href="https://www.newyorksash.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="body-sans text-sm text-creamy-white/60 hover:text-warm-tan transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}