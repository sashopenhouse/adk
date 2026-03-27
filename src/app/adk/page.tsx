'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function AdirondackPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const townGridRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current, 
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }
      );

      gsap.fromTo(".hero-title", 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power2.out" }
      );

      gsap.fromTo(".hero-subtitle", 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: "power2.out" }
      );

      // Town cards stagger animation
      gsap.fromTo(".town-card", 
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: townGridRef.current,
            start: "top 80%"
          }
        }
      );

      // Content sections reveal
      gsap.fromTo(".content-section", 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%"
          }
        }
      );
    }, [heroRef, townGridRef, contentRef]);

    return () => ctx.revert();
  }, []);

  const towns = [
    {
      name: 'Boonville',
      slug: 'boonville',
      tagline: 'Complete Home Services',
      description: 'Full range of windows, bathrooms, siding, and doors for North Country homes. All services, lifetime warranties.',
      image: '/images/AdobeStock_301479907.jpeg'
    },
    {
      name: 'Old Forge',
      slug: 'old-forge',
      tagline: 'All Home Improvement Services',
      description: 'Windows, bathroom remodels, premium siding, and quality doors for lakefront and mountain living.',
      image: '/images/AdobeStock_342902991.jpeg'
    },
    {
      name: 'Inlet',
      slug: 'inlet',
      tagline: 'Windows • Bathrooms • Siding • Doors',
      description: 'Complete New York Sash services for luxury lakefront properties. Factory-trained installers.',
      image: '/images/AdobeStock_364798487.jpeg'
    },
    {
      name: 'Eagle Bay',
      slug: 'eagle-bay',
      tagline: 'Full Service Home Solutions',
      description: 'All New York Sash services available: windows, bathrooms, siding, and doors for wilderness homes.',
      image: '/images/AdobeStock_440321067.jpeg'
    }
  ];

  return (
    <main className="min-h-screen bg-creamy-white">
      {/* Header with Navigation Only */}
      <header className="absolute top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="flex justify-end">
          <Link 
            href="/" 
            className="text-creamy-white hover:text-warm-tan transition-colors duration-300 bg-charcoal/50 backdrop-blur-sm px-4 py-2 rounded-full body-sans font-medium"
          >
            ← Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-emerald-800 via-emerald-600 to-emerald-400 adk-hero-bg"
      >
        {/* Stronger overlay for text visibility */}
        <div className="absolute inset-0 bg-linear-to-b from-charcoal/40 via-charcoal/50 to-charcoal/70" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-charcoal/20 to-charcoal/40" />
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          {/* Small Logo Above Hero Text */}
          <div className="mb-6">
            <img 
              src="/images/ny-sash-logo.png" 
              alt="New York Sash" 
              className="h-16 md:h-20 w-auto mx-auto mb-4 drop-shadow-2xl opacity-95"
            />
          </div>
          
          {/* Main heading with strong text shadow */}
          <h1 className="hero-title heading-display text-6xl md:text-8xl lg:text-9xl text-creamy-white mb-6" style={{textShadow: '0 0 30px rgba(0,0,0,0.9), 0 0 60px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.9)'}}>
            Serving the Adirondacks
          </h1>
          
          <p className="text-2xl md:text-4xl text-warm-tan font-light tracking-wide mb-8" style={{textShadow: '0 0 20px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)'}}>
            Windows, Doors, Siding & Bathroom Remodels
          </p>
          
          <p className="hero-subtitle body-serif text-xl md:text-2xl text-creamy-white max-w-3xl mx-auto mb-12" style={{textShadow: '0 0 15px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8)'}}>
            Bringing 35+ years of trusted expertise to the Adirondacks. Quality windows, one-day bathroom remodels, premium siding, and durable doors - all backed by our lifetime warranty.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="https://www.newyorksash.com/quote"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-warm-tan hover:bg-accent-gold text-charcoal px-8 py-4 body-sans font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-2xl"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Town Navigation Grid */}
      <section ref={townGridRef} className="py-24 px-6 bg-oatmeal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="heading-primary text-5xl md:text-6xl text-charcoal mb-6">
              Our Adirondack Services
            </h2>
            <p className="body-serif text-xl text-soft-gray max-w-3xl mx-auto">
              From Central New York to the heart of the Adirondacks, New York Sash brings factory-trained professionals and lifetime warranties to every project in Boonville, Old Forge, Inlet, and Eagle Bay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {towns.map((town) => {
              return (
                <Link
                  key={town.slug}
                  href={`/adk/${town.slug}`}
                  className="town-card group"
                >
                  <div className="relative h-80 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    {/* Stronger, multi-layered overlay for better text visibility */}
                    <div className="absolute inset-0 bg-linear-to-b from-charcoal/30 via-charcoal/60 to-charcoal/90 z-10" />
                    <div className="absolute inset-0 bg-gradient-radial from-transparent via-charcoal/20 to-charcoal/60 z-10" />
                    
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${town.image})` }}
                    />
                    
                    <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                      <h3 className="heading-primary text-4xl text-creamy-white mb-4" style={{textShadow: '0 0 20px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8), 0 4px 15px rgba(0,0,0,0.7)'}}>
                        {town.name}
                      </h3>
                      
                      <div className="flex items-center text-accent-gold group-hover:text-warm-tan transition-colors duration-300">
                        <span className="body-sans font-bold text-lg" style={{textShadow: '0 0 10px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,0.8)'}}>Learn More →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Content Section */}
      <section ref={contentRef} className="py-24 px-6 bg-creamy-white">
        <div className="max-w-6xl mx-auto">
          <div className="content-section text-center mb-20">
            <h2 className="heading-primary text-5xl md:text-6xl text-charcoal mb-8">
              Why Choose New York Sash for Your Adirondack Home?
            </h2>
            <p className="body-serif text-xl text-soft-gray max-w-4xl mx-auto leading-relaxed">
              For over 35 years, we&apos;ve been Central New York&apos;s trusted home improvement company. 
              Now we&apos;re bringing our proven expertise, lifetime warranties, and factory-trained installers 
              to the unique challenges and beauty of Adirondack living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <div className="content-section text-center">
              <div className="w-24 h-24 bg-warm-tan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-warm-tan" style={{ lineHeight: 1, marginTop: '-15px' }}>35+</span>
              </div>
              <h3 className="heading-primary text-2xl text-charcoal mb-4">Years Experience</h3>
              <p className="body-serif text-soft-gray">
                Since 1989, we&apos;ve been perfecting our craft. Our factory-trained installers 
                understand both Central NY winters and Adirondack mountain conditions.
              </p>
            </div>

            <div className="content-section text-center">
              <div className="w-24 h-24 bg-warm-tan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl font-bold text-warm-tan" style={{ lineHeight: 1, marginTop: '-4px' }}>∞</span>
              </div>
              <h3 className="heading-primary text-2xl text-charcoal mb-4">Lifetime Warranty</h3>
              <p className="body-serif text-soft-gray">
                Every window, bathroom, siding project, and door installation is backed by 
                our comprehensive lifetime warranty - parts AND labor.
              </p>
            </div>

            <div className="content-section text-center">
              <div className="w-24 h-24 bg-warm-tan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-warm-tan" style={{ lineHeight: 1 }}>★</span>
              </div>
              <h3 className="heading-primary text-2xl text-charcoal mb-4">In-House Installers</h3>
              <p className="body-serif text-soft-gray">
                No subcontractors, ever. Our own factory-trained professionals handle every 
                installation with the care and precision your Adirondack home deserves.
              </p>
            </div>
          </div>

          <div className="content-section bg-oatmeal rounded-lg p-12 text-center">
            <h3 className="heading-primary text-3xl text-charcoal mb-6">
              Ready to Transform Your Adirondack Home?
            </h3>
            <p className="body-serif text-xl text-soft-gray mb-8 max-w-3xl mx-auto">
              From energy-efficient windows to one-day bathroom makeovers, premium siding to beautiful doors - 
              New York Sash brings trusted quality to the Adirondacks.
            </p>
            <a 
              href="https://www.newyorksash.com/quote"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal hover:bg-warm-tan text-creamy-white hover:text-charcoal px-8 py-4 body-sans font-medium tracking-wide transition-all duration-300 hover:scale-105"
            >
              Get Your Free Estimate
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}