import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | New York Sash Adirondack Property Protection',
  description: 'The page you\'re looking for doesn\'t exist. Explore our Adirondack property protection services in Boonville, Old Forge, Inlet, Eagle Bay, Piseco, and Hinckley.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-creamy-white px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-6xl font-bold text-charcoal mb-6">404</h1>
        <h2 className="text-3xl font-semibold text-soft-gray mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-soft-gray mb-8 max-w-xl mx-auto">
          Sorry, we couldn't find the page you're looking for. 
          Let us help you find our Adirondack property protection services.
        </p>
        
        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-semibold text-charcoal mb-4">
            Explore Our Services:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <Link 
              href="/adk"
              className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-oatmeal hover:border-warm-tan"
            >
              <h4 className="font-semibold text-charcoal mb-2">Adirondack Services</h4>
              <p className="text-sm text-soft-gray">Complete property protection overview</p>
            </Link>
            
            <Link 
              href="/adk/boonville"
              className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-oatmeal hover:border-warm-tan"
            >
              <h4 className="font-semibold text-charcoal mb-2">Boonville Protection</h4>
              <p className="text-sm text-soft-gray">North Country property security</p>
            </Link>
            
            <Link 
              href="/adk/old-forge"
              className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-oatmeal hover:border-warm-tan"
            >
              <h4 className="font-semibold text-charcoal mb-2">Old Forge Protection</h4>
              <p className="text-sm text-soft-gray">Lakefront property security</p>
            </Link>
            
            <Link 
              href="/adk/inlet"
              className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-oatmeal hover:border-warm-tan"
            >
              <h4 className="font-semibold text-charcoal mb-2">Inlet Protection</h4>
              <p className="text-sm text-soft-gray">Luxury property security</p>
            </Link>
          </div>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/adk"
            className="inline-block bg-warm-tan hover:bg-charcoal text-charcoal hover:text-creamy-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Return to Adirondack Services
          </Link>
          
          <div className="mt-4">
            <Link 
              href="/"
              className="text-soft-gray hover:text-warm-tan transition-colors underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}