'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  // Automatically redirect to Adirondack hub after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/adk');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-oatmeal to-creamy-white">
      <div className="text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <img 
            src="/images/ny-sash-logo.png" 
            alt="New York Sash" 
            className="h-20 md:h-24 w-auto mx-auto mb-4 drop-shadow-lg"
          />
          <h1 className="heading-display text-4xl md:text-6xl text-charcoal">
            New York Sash
          </h1>
        </div>
        
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-warm-tan font-light">
            Your Adirondack Home Improvement Specialists
          </p>
        </div>
        
        <p className="body-serif text-xl md:text-2xl text-soft-gray max-w-2xl mx-auto mb-8">
          Bringing 35+ years of trusted expertise in windows, bathrooms, siding, and doors 
          to the beautiful Adirondack region.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a 
            href="https://www.newyorksash.com/quote"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-charcoal hover:bg-warm-tan text-creamy-white hover:text-charcoal px-8 py-4 body-sans font-medium tracking-wide transition-all duration-300 hover:scale-105 flex items-center justify-center"
          >
            Explore Our Services →
          </a>
          
          <a 
            href="https://www.newyorksash.com/quote"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-warm-tan hover:bg-warm-tan text-warm-tan hover:text-charcoal px-8 py-4 body-sans font-medium tracking-wide transition-all duration-300 hover:scale-105 flex items-center justify-center"
          >
            Get Free Estimate
          </a>
        </div>

        <p className="body-sans text-sm text-soft-gray/70">
          Redirecting to Adirondack Hub in 3 seconds...
        </p>
      </div>
    </div>
  );
}
