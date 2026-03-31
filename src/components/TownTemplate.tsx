'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import Link from 'next/link';
import { linkifyServices } from '@/utils/serviceLinks';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

interface SuccessStory {
  title: string;
  homeowner: string;
  project: string;
  description: string;
  result: string;
  timeframe: string;
}

interface LocalFeature {
  title: string;
  description: string;
  connection: string;
}

interface TownData {
  name: string;
  tagline: string;
  heroImage: string;
  description: string;
  highlights: Array<{
    title: string;
    description: string;
  }>;
  successStories: SuccessStory[];
  localFeatures: LocalFeature[];
  targetContent: {
    title: string;
    content: string[];
  };
}

interface TownTemplateProps {
  townData: TownData;
}

export default function TownTemplate({ townData }: TownTemplateProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced hero animations with parallax
      gsap.fromTo(heroRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }
      );

      // Parallax hero background
      gsap.to('.town-hero-bg', {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Enhanced town title animation (word-based for readability)
      gsap.fromTo(".town-hero-title", 
        { y: 100, opacity: 0, rotationX: -90 },
        { 
          y: 0, 
          opacity: 1, 
          rotationX: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "back.out(1.7)"
        }
      );

      // Enhanced tagline animation
      gsap.fromTo(".town-hero-tagline", 
        { y: 60, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1, delay: 0.8, ease: "back.out(1.7)" }
      );

      // Floating back link
      gsap.fromTo(".back-link", 
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.3, ease: "elastic.out(1, 0.8)" }
      );

      // Floating logo animation
      gsap.to('.floating-town-logo', {
        y: -8,
        rotation: 2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Simple fade-in animations for town pages
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

      // Enhanced content animations with stagger
      gsap.fromTo(".content-highlight", 
        { y: 80, opacity: 0, scale: 0.95, rotationY: -15 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%"
          }
        }
      );

      // Additional scroll effect animations
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

      // Enhanced success cards with 3D effects
      gsap.fromTo(".success-card", 
        { y: 100, opacity: 0, scale: 0.8, rotationX: -20 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: storiesRef.current,
            start: "top 85%"
          }
        }
      );

      // Floating icons in testimonials
      gsap.to('.floating-testimonial-icon', {
        y: -10,
        rotation: 360,
        duration: 4,
        repeat: -1,
        ease: "none"
      });

      // Bubble animations for speech bubbles
      document.querySelectorAll('.speech-bubble').forEach((bubble, index) => {
        gsap.fromTo(bubble, 
          { scale: 0, rotation: -10 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: bubble,
              start: "top 90%"
            }
          }
        );
      });

    }, [heroRef, contentRef, storiesRef]);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-creamy-white">
      {/* Header with Logo */}
      <header className="absolute top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="flex justify-between items-center">
          <Link href="/adk" className="flex items-center">
            <img 
              src="/images/ny-sash-logo.png" 
              alt="New York Sash" 
              className="floating-town-logo h-12 w-auto drop-shadow-lg"
            />
          </Link>
          <Link 
            href="/adk"
            className="back-link text-creamy-white hover:text-warm-tan transition-colors duration-300 bg-charcoal/50 backdrop-blur-sm px-4 py-2 rounded-full body-sans font-medium"
          >
            ← Back to Adirondack
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="town-hero-bg relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${townData.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Multi-layered overlay for better text visibility */}
        <div className="absolute inset-0 bg-linear-to-b from-charcoal/40 via-charcoal/60 to-charcoal/80" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-charcoal/30 to-charcoal/50" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="town-hero-title heading-display text-6xl md:text-8xl text-creamy-white mb-6" style={{textShadow: '0 0 30px rgba(0,0,0,0.9), 0 0 60px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.9)'}}>
            {townData.name}
          </h1>
          
          <p className="fade-in-text town-hero-tagline body-serif text-2xl md:text-3xl text-accent-gold mb-8 font-medium" style={{textShadow: '0 0 20px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)'}}>
            {townData.tagline}
          </p>
          
          <p className="fade-in-text body-serif text-xl text-creamy-white max-w-3xl mx-auto" style={{textShadow: '0 0 15px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8)'}}>
            {linkifyServices(townData.description, `${townData.name.toLowerCase()}-hero`)}
          </p>
        </div>
      </section>

      {/* Targeted Content Section */}
      <section ref={contentRef} className="py-24 px-6 bg-oatmeal parallax-section">
        <div className="parallax-bg absolute inset-0 bg-gradient-to-b from-oatmeal/50 to-white/20 -z-10" />
        <div className="max-w-6xl mx-auto">
          <div className="content-highlight text-center mb-16">
            <h2 className="fade-in-text section-header heading-primary text-4xl md:text-5xl text-charcoal mb-8">
              {townData.targetContent.title}
              <div className="header-underline h-1 bg-gradient-to-r from-warm-tan to-accent-gold mx-auto mt-4 rounded-full w-24"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              {townData.targetContent.content.map((paragraph, index) => (
                <p key={index} className="fade-in-text content-highlight body-serif text-lg text-soft-gray mb-6 leading-relaxed">
                  {linkifyServices(paragraph, `${townData.name.toLowerCase()}-content`)}
                </p>
              ))}
            </div>
            
            <div className="space-y-8">
              {townData.highlights.map((highlight, index) => {
                return (
                  <div key={index} className="content-highlight flex flex-col space-y-4">
                    <div className="feature-icon">
                      <h3 className="fade-in-text scroll-heading heading-primary text-xl text-charcoal mb-2">
                        {linkifyServices(highlight.title, `${townData.name.toLowerCase()}-highlights`)}
                      </h3>
                      <p className="fade-in-text body-serif text-soft-gray">
                        {linkifyServices(highlight.description, `${townData.name.toLowerCase()}-highlights`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Local Features */}
      <section ref={storiesRef} className="py-24 px-6 bg-creamy-white parallax-section">
        <div className="parallax-bg absolute inset-0 bg-gradient-to-b from-emerald-50/30 to-white/10 -z-10" />
        <div className="max-w-7xl mx-auto">
          {/* Success Stories */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="section-header heading-primary text-4xl md:text-5xl text-charcoal mb-6">
                Success Stories from {townData.name}
                <div className="header-underline h-1 bg-gradient-to-r from-warm-tan to-accent-gold mx-auto mt-4 rounded-full w-32"></div>
              </h2>
              <p className="scroll-text body-serif text-xl text-soft-gray max-w-3xl mx-auto">
                Real transformations from your neighbors who trusted New York Sash 
                with their home improvement projects.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {townData.successStories.map((story, index) => (
                <div key={index} className="success-card image-reveal bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300" style={{ perspective: '1000px' }}>
                  {/* Icon header */}
                  <div className="flex items-center mb-6">
                    <div className="feature-icon w-12 h-12 bg-warm-tan/10 rounded-full flex items-center justify-center mr-4">
                      <span className="floating-testimonial-icon text-2xl text-warm-tan" style={{ lineHeight: 1 }}>★</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="scroll-heading heading-primary text-2xl text-charcoal mb-1">
                        {story.title}
                      </h3>
                      <p className="scroll-text body-sans text-warm-tan font-medium text-sm">
                        {story.homeowner} • {linkifyServices(story.project, `${townData.name.toLowerCase()}-stories`)}
                      </p>
                    </div>
                  </div>
                  
                  <p className="body-sans text-xs text-soft-gray mb-4 uppercase tracking-wide">
                    Completed in {story.timeframe}
                  </p>
                  
                  <p className="body-serif text-soft-gray mb-6 leading-relaxed">
                    {linkifyServices(story.description, `${townData.name.toLowerCase()}-stories`)}
                  </p>
                  
                  {/* Enhanced speech bubble style quote */}
                  <div className="speech-bubble relative bg-oatmeal p-6 rounded-2xl">
                    {/* Speech bubble tail with glow */}
                    <div className="absolute -top-2 left-6 w-4 h-4 bg-oatmeal transform rotate-45 shadow-lg"></div>
                    <div className="relative">
                      <div className="text-3xl text-warm-tan/30 absolute -top-2 -left-2" style={{ lineHeight: 1 }}>"</div>
                      <p className="body-serif text-charcoal font-medium italic pl-4">
                        {linkifyServices(story.result, `${townData.name.toLowerCase()}-stories`)}
                      </p>
                      <div className="text-3xl text-warm-tan/30 absolute -bottom-4 -right-2" style={{ lineHeight: 1 }}>"</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Local Features */}
          <div>
            <div className="text-center mb-16">
              <h2 className="heading-primary text-4xl md:text-5xl text-charcoal mb-6">
                Why We Love {townData.name}
              </h2>
              <p className="body-serif text-xl text-soft-gray max-w-3xl mx-auto">
                Every town in the Adirondacks has its own character. Here&apos;s what makes 
                {townData.name} special and how we tailor our services to fit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {townData.localFeatures.map((feature, index) => (
                <div key={index} className="success-card text-center bg-oatmeal p-8 rounded-lg">
                  {/* Icon for local features */}
                  <div className="w-16 h-16 bg-warm-tan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-warm-tan font-bold" style={{ lineHeight: 1 }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h3 className="heading-primary text-xl text-charcoal mb-4">
                    {feature.title}
                  </h3>
                  <p className="body-serif text-soft-gray mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <p className="body-sans text-warm-tan font-medium text-sm">
                    {feature.connection}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Simple Navigation CTA */}
      <section className="py-16 px-6 bg-oatmeal">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/adk"
            className="inline-flex items-center bg-warm-tan hover:bg-accent-gold text-charcoal px-8 py-4 body-sans font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-lg"
          >
            ← Explore Other Adirondack Towns
          </Link>
        </div>
      </section>
    </main>
  );
}