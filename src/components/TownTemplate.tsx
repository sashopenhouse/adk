'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

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
      // Hero animations
      gsap.fromTo(heroRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
      );

      gsap.fromTo(".town-hero-title", 
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.2, ease: "power2.out" }
      );

      gsap.fromTo(".town-hero-tagline", 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" }
      );

      gsap.fromTo(".back-link", 
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power2.out" }
      );

      // Content section animations
      gsap.fromTo(".content-highlight", 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%"
          }
        }
      );

      // Success cards stagger animation
      gsap.fromTo(".success-card", 
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: storiesRef.current,
            start: "top 85%"
          }
        }
      );
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
              className="h-12 w-auto drop-shadow-lg"
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
        className="relative h-screen flex items-center justify-center overflow-hidden"
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
          
          <p className="town-hero-tagline body-serif text-2xl md:text-3xl text-accent-gold mb-8 font-medium" style={{textShadow: '0 0 20px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)'}}>
            {townData.tagline}
          </p>
          
          <p className="body-serif text-xl text-creamy-white max-w-3xl mx-auto" style={{textShadow: '0 0 15px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8)'}}>
            {townData.description}
          </p>
        </div>
      </section>

      {/* Targeted Content Section */}
      <section ref={contentRef} className="py-24 px-6 bg-oatmeal">
        <div className="max-w-6xl mx-auto">
          <div className="content-highlight text-center mb-16">
            <h2 className="heading-primary text-4xl md:text-5xl text-charcoal mb-8">
              {townData.targetContent.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              {townData.targetContent.content.map((paragraph, index) => (
                <p key={index} className="content-highlight body-serif text-lg text-soft-gray mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="space-y-8">
              {townData.highlights.map((highlight, index) => {
                return (
                  <div key={index} className="content-highlight flex flex-col space-y-4">
                    <div>
                      <h3 className="heading-primary text-xl text-charcoal mb-2">
                        {highlight.title}
                      </h3>
                      <p className="body-serif text-soft-gray">
                        {highlight.description}
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
      <section ref={storiesRef} className="py-24 px-6 bg-creamy-white">
        <div className="max-w-7xl mx-auto">
          {/* Success Stories */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="heading-primary text-4xl md:text-5xl text-charcoal mb-6">
                Success Stories from {townData.name}
              </h2>
              <p className="body-serif text-xl text-soft-gray max-w-3xl mx-auto">
                Real transformations from your neighbors who trusted New York Sash 
                with their home improvement projects.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {townData.successStories.map((story, index) => (
                <div key={index} className="success-card bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  {/* Icon header */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-warm-tan/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl text-warm-tan" style={{ lineHeight: 1 }}>★</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-primary text-2xl text-charcoal mb-1">
                        {story.title}
                      </h3>
                      <p className="body-sans text-warm-tan font-medium text-sm">
                        {story.homeowner} • {story.project}
                      </p>
                    </div>
                  </div>
                  
                  <p className="body-sans text-xs text-soft-gray mb-4 uppercase tracking-wide">
                    Completed in {story.timeframe}
                  </p>
                  
                  <p className="body-serif text-soft-gray mb-6 leading-relaxed">
                    {story.description}
                  </p>
                  
                  <div className="bg-oatmeal p-4 rounded-lg relative">
                    <div className="text-4xl text-warm-tan/20 absolute top-2 left-3" style={{ lineHeight: 1 }}>"</div>
                    <p className="body-serif text-charcoal font-medium pl-6">
                      {story.result}
                    </p>
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
                    <span className="text-3xl text-warm-tan" style={{ lineHeight: 1 }}>
                      {index === 0 ? '🏔️' : index === 1 ? '🌲' : '🏡'}
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-primary text-4xl text-creamy-white mb-6">
            Ready to Start Your {townData.name} Project?
          </h2>
          <p className="body-serif text-xl text-creamy-white/80 mb-8 max-w-2xl mx-auto">
            Connect with our local experts who understand the unique characteristics 
            and requirements of building in {townData.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.newyorksash.com/quote"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-warm-tan hover:bg-accent-gold text-charcoal px-8 py-4 body-sans font-medium tracking-wide transition-all duration-300 hover:scale-105"
            >
              Get Local Quotes
            </a>
            <Link 
              href="/adk"
              className="border-2 border-warm-tan hover:bg-warm-tan text-warm-tan hover:text-charcoal px-8 py-4 body-sans font-medium tracking-wide transition-all duration-300 hover:scale-105 text-center"
            >
              Explore Other Towns
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}