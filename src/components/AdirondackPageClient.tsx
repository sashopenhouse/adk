'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function AdirondackPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const townGridRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const paralRefsRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced hero animation with parallax
      gsap.fromTo(heroRef.current, 
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }
      );

      // Parallax background on scroll
      gsap.to('.adk-hero-bg', {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Split text animation for title (word-based for better readability)
      const titleWords = ["Serving", "the", "Adirondacks"];
      titleWords.forEach((word, wordIndex) => {
        gsap.fromTo(`.hero-word-${wordIndex}`, 
          { y: 100, opacity: 0, rotationX: -90 },
          { 
            y: 0, 
            opacity: 1, 
            rotationX: 0,
            duration: 0.8,
            delay: 0.3 + (wordIndex * 0.2),
            ease: "back.out(1.7)"
          }
        );
      });

      // Floating logo animation
      gsap.to('.floating-logo', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Enhanced town cards with hover effects
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

      // Floating icons animation
      gsap.to('.floating-icon', {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });

      // Number counter animations
      const numberElements = numberRefs.current.filter(Boolean);
      numberElements.forEach((el, index) => {
        const targetNumber = el.dataset.target ? parseInt(el.dataset.target) : 35;
        gsap.fromTo(el, 
          { innerText: 0 },
          {
            innerText: targetNumber,
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 80%"
            },
            onUpdate() {
              el.innerText = Math.ceil(this.progress() * targetNumber).toString();
            }
          }
        );
      });

      // Enhanced content sections with sophisticated scroll animations
      gsap.fromTo(".content-section", 
        { y: 80, opacity: 0, scale: 0.95, rotationX: -15 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            end: "bottom 20%"
          }
        }
      );

      // Simple fade-in animations
      gsap.fromTo(".fade-in-text", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".fade-in-text",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Individual heading animations
      gsap.fromTo(".scroll-heading", 
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".scroll-heading",
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Text reveal animations
      gsap.fromTo(".scroll-text", 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".scroll-text",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Feature icons with bounce effect
      gsap.fromTo(".feature-icon", 
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(2)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".feature-icon",
            start: "top 80%"
          }
        }
      );

      // Background elements parallax
      gsap.to(".parallax-bg", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      // Progress bar animation
      gsap.fromTo(".progress-bar", 
        { width: "0%" },
        {
          width: "100%",
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".progress-container",
            start: "top 80%"
          }
        }
      );

      // Image reveals with mask effect
      gsap.fromTo(".image-reveal", 
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".image-reveal",
            start: "top 85%"
          }
        }
      );

      // CTA section animation
      gsap.fromTo(".cta-section", 
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 80%"
          }
        }
      );

      // Button hover reveal
      gsap.fromTo(".reveal-button", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".reveal-button",
            start: "top 85%"
          }
        }
      );

      // Decorative elements floating in
      gsap.fromTo(".decorative-element", 
        { x: -100, opacity: 0, rotation: -45 },
        {
          x: 0,
          opacity: 0.6,
          rotation: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".decorative-element",
            start: "top 90%"
          }
        }
      );

      // Section headers with underline animation
      gsap.fromTo(".section-header", 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".section-header",
            start: "top 85%"
          }
        }
      );

      gsap.fromTo(".header-underline", 
        { width: "0%" },
        {
          width: "100%",
          duration: 1.2,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".section-header",
            start: "top 85%"
          }
        }
      );

      // Sophisticated town card hover effects
      document.querySelectorAll('.town-card').forEach((card, index) => {
        const cardElement = card as HTMLElement;
        const imageElement = cardElement.querySelector('.town-image') as HTMLElement;
        const textElement = cardElement.querySelector('.town-content') as HTMLElement;
        
        let isHovering = false;
        
        cardElement.addEventListener('mouseenter', () => {
          isHovering = true;
          
          // Subtle lift and glow
          gsap.to(cardElement, {
            y: -12,
            scale: 1.02,
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            duration: 0.6,
            ease: "power3.out"
          });
          
          // Subtle background zoom
          gsap.to(imageElement, {
            scale: 1.08,
            duration: 1.2,
            ease: "power2.out"
          });
          
          // Text content lift
          gsap.to(textElement, {
            y: -4,
            duration: 0.5,
            ease: "power2.out"
          });
          
          // Sophisticated glow effect
          gsap.to(cardElement.querySelector('.town-glow'), {
            opacity: 0.3,
            scale: 1.05,
            duration: 0.8,
            ease: "power2.out"
          });
        });
        
        cardElement.addEventListener('mouseleave', () => {
          isHovering = false;
          
          gsap.to(cardElement, {
            y: 0,
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            duration: 0.8,
            ease: "elastic.out(1, 0.8)"
          });
          
          gsap.to(imageElement, {
            scale: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power2.out"
          });
          
          gsap.to(textElement, {
            y: 0,
            x: 0,
            duration: 0.7,
            ease: "power2.out"
          });
          
          gsap.to(cardElement.querySelector('.town-glow'), {
            opacity: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out"
          });
        });
        
        cardElement.addEventListener('mousemove', (e: MouseEvent) => {
          if (!isHovering) return;
          
          const rect = cardElement.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          // Very subtle 3D tilt (much less aggressive)
          const rotateX = (y - centerY) / 30;
          const rotateY = (centerX - x) / 30;
          
          // Sophisticated parallax movement
          const moveX = (x - centerX) / 20;
          const moveY = (y - centerY) / 20;
          
          gsap.to(cardElement, {
            rotationX: rotateX,
            rotationY: rotateY,
            duration: 0.4,
            ease: "power1.out"
          });
          
          // Parallax background movement (opposite direction)
          gsap.to(imageElement, {
            x: -moveX * 0.5,
            y: -moveY * 0.5,
            duration: 0.6,
            ease: "power1.out"
          });
          
          // Subtle text movement
          gsap.to(textElement, {
            x: moveX * 0.3,
            duration: 0.4,
            ease: "power1.out"
          });
        });
      });

      // Magnetic button effects
      document.querySelectorAll('.magnetic-button').forEach(button => {
        const btnElement = button as HTMLElement;
        
        btnElement.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = btnElement.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(btnElement, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        btnElement.addEventListener('mouseleave', () => {
          gsap.to(btnElement, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
          });
        });
      });

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
          {/* Floating Logo Above Hero Text */}
          <div className="mb-6">
            <img 
              src="/images/ny-sash-logo.png" 
              alt="New York Sash" 
              className="floating-logo h-16 md:h-20 w-auto mx-auto mb-4 drop-shadow-2xl opacity-95"
            />
          </div>
          
          {/* Main heading with word-based split animation */}
          <h1 className="hero-title heading-display text-6xl md:text-8xl lg:text-9xl text-creamy-white mb-6" style={{textShadow: '0 0 30px rgba(0,0,0,0.9), 0 0 60px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.9)'}}>
            <span className="hero-word-0 inline-block mr-4" style={{transformOrigin: '50% 50% -30px'}}>Serving</span>
            <span className="hero-word-1 inline-block mr-4" style={{transformOrigin: '50% 50% -30px'}}>the</span>
            <span className="hero-word-2 inline-block" style={{transformOrigin: '50% 50% -30px'}}>Adirondacks</span>
          </h1>
          
          <p className="body-serif text-xl md:text-2xl text-creamy-white max-w-3xl mx-auto mb-8" style={{textShadow: '0 0 15px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8)'}}>
            We protect your property year-round, even when you're away.
          </p>
          
          <p className="body-serif text-lg md:text-xl text-creamy-white/90 max-w-4xl mx-auto mb-12" style={{textShadow: '0 0 10px rgba(0,0,0,0.8)'}}>
            From weatherproof windows and moisture-resistant siding to secure doors and protected bathrooms, 
            our 35+ years of expertise ensures your Adirondack retreat stays safe and sound in every season.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="https://www.newyorksash.com/quote"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-button bg-warm-tan hover:bg-accent-gold text-charcoal px-8 py-4 body-sans font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-2xl rounded-lg"
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
            <h2 className="fade-in-text heading-primary text-5xl md:text-6xl text-charcoal mb-6">
              Towns We Serve
            </h2>
            <p className="fade-in-text body-serif text-xl text-soft-gray max-w-3xl mx-auto">
              Protecting Adirondack properties from mountains to lakes. Our factory-trained professionals deliver weatherproof solutions 
              in Boonville, Old Forge, Inlet, and Eagle Bay - keeping your home secure whether you're there or miles away.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {towns.map((town) => {
              return (
                <Link
                  key={town.slug}
                  href={`/adk/${town.slug}`}
                  className="town-card group"
                  style={{ perspective: '1000px' }}
                >
                  <div className="relative h-80 bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500">
                    {/* Sophisticated glow effect */}
                    <div className="town-glow absolute -inset-2 bg-warm-tan/10 rounded-lg opacity-0 blur-2xl"></div>
                    
                    {/* Stronger, multi-layered overlay for better text visibility */}
                    <div className="absolute inset-0 bg-linear-to-b from-charcoal/30 via-charcoal/60 to-charcoal/90 z-10" />
                    <div className="absolute inset-0 bg-gradient-radial from-transparent via-charcoal/20 to-charcoal/60 z-10" />
                    
                    <div 
                      className="town-image absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
                      style={{ backgroundImage: `url(${town.image})` }}
                    />
                    
                    <div className="town-content relative z-20 p-8 h-full flex flex-col justify-end">
                      <h3 className="fade-in-text heading-primary text-4xl text-creamy-white mb-4" style={{textShadow: '0 0 20px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8), 0 4px 15px rgba(0,0,0,0.7)'}}>
                        {town.name}
                      </h3>
                      
                      <div className="flex items-center text-accent-gold transition-colors duration-500">
                        <span className="fade-in-text body-sans font-bold text-lg" style={{textShadow: '0 0 10px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,0.8)'}}>Learn More →</span>
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
      <section ref={contentRef} className="py-24 px-6 bg-creamy-white parallax-section">
        <div className="parallax-bg absolute inset-0 bg-gradient-to-b from-white/5 to-emerald-50/20 -z-10" />
        <div className="max-w-6xl mx-auto">
          <div className="content-section text-center mb-20">
            <h2 className="fade-in-text section-header heading-primary text-5xl md:text-6xl text-charcoal mb-8">
              Total Property Protection for Adirondack Homes
              <div className="header-underline h-1 bg-gradient-to-r from-warm-tan to-accent-gold mx-auto mt-4 rounded-full w-24"></div>
            </h2>
            <p className="fade-in-text body-serif text-xl text-soft-gray max-w-4xl mx-auto leading-relaxed">
              Your Adirondack retreat faces unique challenges - from harsh winters to seasonal humidity. 
              For 35+ years, we've perfected protection systems that safeguard your investment, 
              whether you're enjoying your getaway or back home in the city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <div className="content-section text-center">
              <div className="feature-icon floating-icon w-24 h-24 bg-warm-tan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span
                  ref={(el) => {
                    if (el) {
                      numberRefs.current[0] = el;
                    }
                  }}
                  className="text-4xl font-bold text-warm-tan"
                  data-target="35"
                  style={{ lineHeight: 1, marginTop: '-15px' }}
                >
                  35
                </span>
                <span className="text-4xl font-bold text-warm-tan" style={{ lineHeight: 1, marginTop: '-15px' }}>+</span>
              </div>
              <h3 className="fade-in-text scroll-heading heading-primary text-2xl text-charcoal mb-4">Years Protecting Properties</h3>
              <p className="fade-in-text body-serif text-soft-gray">
                Since 1989, we've been safeguarding homes through every season. Our factory-trained installers 
                understand how to protect your property against Central NY winters and Adirondack extremes.
              </p>
            </div>

            <div className="content-section text-center">
              <div className="feature-icon floating-icon w-24 h-24 bg-warm-tan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl font-bold text-warm-tan" style={{ lineHeight: 1, marginTop: '-4px' }}>∞</span>
              </div>
              <h3 className="fade-in-text scroll-heading heading-primary text-2xl text-charcoal mb-4">Lifetime Protection Promise</h3>
              <p className="fade-in-text body-serif text-soft-gray">
                Your peace of mind is guaranteed. Every weatherproofing solution we install comes with 
                comprehensive lifetime warranty coverage - protecting your investment for years to come.
              </p>
            </div>

            <div className="content-section text-center">
              <div className="feature-icon floating-icon w-24 h-24 bg-warm-tan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-warm-tan" style={{ lineHeight: 1 }}>★</span>
              </div>
              <h3 className="fade-in-text scroll-heading heading-primary text-2xl text-charcoal mb-4">Trusted Protection Team</h3>
              <p className="fade-in-text body-serif text-soft-gray">
                No subcontractors, ever. Our own factory-trained security specialists ensure every 
                installation creates an impenetrable barrier against the elements year-round.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
