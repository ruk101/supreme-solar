'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function LeadershipSection() {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-white via-[#F6F8ED] to-white py-32 px-4 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-16 w-32 h-32 bg-emerald-500/8 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-emerald-400/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-emerald-600/10 rotate-45 blur-lg animate-pulse delay-500"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="leadership-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#leadership-grid)" />
          </svg>
        </div>
        
        {/* Dynamic light rays */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-emerald-400/30 via-transparent to-transparent transform rotate-12"></div>
          <div className="absolute top-0 right-2/3 w-px h-full bg-gradient-to-b from-emerald-300/20 via-transparent to-transparent transform -rotate-12"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16 space-y-8 lg:space-y-0">
          
          {/* Premium Badge */}
          <div className="lg:self-start">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 blur-lg rounded-full"></div>
              <div className="relative bg-gradient-to-r from-emerald-100/80 to-emerald-50/80 backdrop-blur-sm border border-emerald-300/50 text-emerald-700 px-8 py-4 rounded-full shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-500">
                <span className="text-sm font-black tracking-widest flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                  EXECUTIVE LEADERSHIP
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Description */}
          <div className="lg:max-w-[60%] text-right space-y-4">
            <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed font-medium">
              United Solar Energy is steered by a team of industry veterans and management experts with the local operations being headed by
            </p>
            <div className="text-2xl lg:text-3xl font-black text-emerald-700">
              Mr. Jayantha Samarakoon – <span className="text-slate-800">Director/CEO</span>
            </div>
            
            {/* Decorative line */}
            <div className="flex justify-end pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <div className="w-16 h-px bg-gradient-to-r from-emerald-500 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Leadership Card */}
        <div
          ref={cardRef}
          className={`
            relative group bg-gradient-to-br from-emerald-500/95 via-emerald-600/90 to-emerald-700/95 
            text-white px-8 sm:px-12 py-16 sm:py-20 rounded-3xl shadow-2xl 
            border border-emerald-400/20 backdrop-blur-xl overflow-hidden
            hover:shadow-3xl hover:shadow-emerald-500/20 hover:-translate-y-2
            transform transition-all duration-1000 ease-out 
            ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
          `}
        >
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-transparent to-emerald-800/30 group-hover:from-emerald-300/30 group-hover:to-emerald-900/40 transition-all duration-700"></div>
            
            {/* Floating particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  transitionDelay: `${Math.random() * 1000}ms`
                }}
              ></div>
            ))}
            
            {/* Premium shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          </div>

          {/* Enhanced Glow Effect */}
          <div className={`
            absolute -inset-8 z-0 rounded-3xl blur-3xl transition-all duration-1000 ease-out
            ${visible ? 'opacity-30 scale-105' : 'opacity-0 scale-100'}
            bg-gradient-to-br from-emerald-400/40 via-emerald-500/20 to-emerald-600/40
          `}></div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start lg:gap-12 text-center lg:text-left">
            
            {/* Enhanced Profile Image Section */}
            <div className="relative shrink-0 mb-8 lg:mb-0 group/image">
              {/* Multiple glow layers */}
              <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl group-hover/image:bg-white/20 transition-colors duration-500"></div>
              <div className="absolute -inset-6 bg-emerald-300/20 rounded-full blur-2xl group-hover/image:bg-emerald-300/30 transition-colors duration-700"></div>
              
              {/* Image container with enhanced styling */}
              <div className="relative w-32 h-32 lg:w-36 lg:h-36">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-full backdrop-blur-sm border-4 border-white/30 shadow-2xl group-hover/image:border-white/50 group-hover/image:scale-105 transition-all duration-500"></div>
                <Image
                  src="/jayantha-samarkoon.jpg"
                  alt="Jayantha Samarakoon"
                  width={144}
                  height={144}
                  className="relative w-full h-full rounded-full object-cover border-2 border-white/20 group-hover/image:border-white/40 transition-all duration-500"
                />
                
                {/* Status indicator */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center group-hover/image:scale-110 transition-transform duration-300">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Bio Content */}
            <div className="flex-1 space-y-8">
              {/* Name and Title */}
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-wider text-white group-hover:text-emerald-100 transition-colors duration-500">
                  JAYANTHA SAMARAKOON
                </h3>
                
                <div className="relative">
                  <p className="text-lg lg:text-xl font-semibold text-emerald-100 group-hover:text-white transition-colors duration-500 tracking-wide">
                    CONSORTIUM PARTNER | SUNPOWER SYSTEMS SRI LANKA
                  </p>
                  {/* Animated underline */}
                  <div className="mt-2 h-1 bg-gradient-to-r from-emerald-300 to-emerald-100 rounded-full group-hover:from-white group-hover:to-emerald-200 transition-all duration-500 w-0 group-hover:w-full"></div>
                </div>
              </div>

              {/* Biography Text */}
              <div className="space-y-6 text-base lg:text-lg leading-relaxed text-white/90 group-hover:text-white transition-colors duration-500 max-w-4xl">
                <p className="hover:text-emerald-100 transition-colors duration-300 p-4 rounded-xl hover:bg-white/5">
                  In the realm of Sri Lanka's solar and infrastructure landscape, Mr. Jayantha Samarakoon stands as a luminary force, serving as the esteemed Chairman of Sunpower Systems. Revered for his visionary leadership, Mr. Samarakoon has steered Sunpower Systems into a realm of unparalleled innovation and sustainable growth.
                </p>
                
                <p className="hover:text-emerald-100 transition-colors duration-300 p-4 rounded-xl hover:bg-white/5">
                  Under his guidance, Sunpower Systems has transcended its origins in solar technology, expanding into telecommunications infrastructure, power electronics, energy conservation, and water supply projects.
                </p>
                
                <p className="hover:text-emerald-100 transition-colors duration-300 p-4 rounded-xl hover:bg-white/5">
                  A true trailblazer, his strategic acumen has diversified the company's portfolio and positioned it as a beacon of innovation. His commitment to environmental responsibility underscores a dedication to fostering a sustainable future.
                </p>
                
                <p className="hover:text-emerald-100 transition-colors duration-300 p-4 rounded-xl hover:bg-white/5 font-medium">
                  In this dynamic landscape, Mr. Samarakoon's leadership propels Sunpower Systems to new heights of impact and national development.
                </p>
              </div>

              
            </div>
          </div>

          {/* Corner Decorative Elements */}
          <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-2xl group-hover:border-white/40 transition-colors duration-500"></div>
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-white/20 rounded-bl-2xl group-hover:border-white/40 transition-colors duration-500"></div>
        </div>
      </div>
    </section>
  );
}