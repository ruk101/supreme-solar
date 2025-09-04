'use client';
import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';

export default function SolarOverview() {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleStats, setVisibleStats] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleStats(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#F6F8ED] via-white to-[#F6F8ED] py-20 px-4 md:px-6 pb-40 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-emerald-400/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-emerald-600/10 rotate-45 blur-lg animate-pulse delay-500"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content - Enhanced Typography */}
        <div className="space-y-8">
          {/* Premium Badge */}
          <div className="inline-flex items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 blur-lg rounded-full"></div>
              <div className="relative bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200/50 text-emerald-700 px-6 py-3 rounded-full shadow-lg backdrop-blur-sm group-hover:shadow-emerald-500/20 transition-all duration-500">
                <span className="text-sm font-bold tracking-wider flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                  SOLAR POWER PROJECT
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400/30 via-emerald-300/20 to-transparent px-2 py-1 rounded-lg -ml-2">
                700–MW Solar Power Plant
              </span>
            </span>
            <br />
            <span className="text-slate-700 font-medium">with</span>{' '}
            <span className="text-emerald-600 font-black">2,250 MWh</span>{' '}
            <span className="text-slate-700 font-medium">of Battery Energy Storage System</span>
            <br />
            <span className="text-lg sm:text-xl lg:text-2xl text-slate-600 font-medium leading-relaxed block mt-4">
              at the Poonakary Tank and its Irrigation Infrastructure of the Lower Tanks in{' '}
              <span className="text-emerald-700 font-bold">Kilinochchi, Sri Lanka</span>
            </span>
          </h2>

          {/* Decorative Elements */}
          <div className="flex items-center gap-4 pt-4">
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"></div>
            <div className="w-4 h-1 bg-gradient-to-r from-emerald-300 to-emerald-400 rounded-full"></div>
          </div>
        </div>

        {/* Right Content - Enhanced Video Player */}
        <div className="relative group">
          {/* Glowing background */}
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/50 backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-700">
            <img
              src="/project_durability.png"
              alt="Solar Power Plant"
              className="w-full h-auto group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            
            {/* Enhanced Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/60 group-hover:from-black/50 group-hover:to-black/70 transition-all duration-500"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsOpen(true)}
                className="relative w-20 h-20 rounded-full bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md flex items-center justify-center shadow-2xl hover:shadow-emerald-500/30 hover:scale-110 transition-all duration-500 group border border-white/30"
                title="Play Video"
              >
                {/* Pulsing ring */}
                <div className="absolute inset-0 rounded-full border-2 border-emerald-400 scale-125 animate-ping opacity-20"></div>
                <div className="absolute inset-0 rounded-full border border-emerald-500/30 scale-150 animate-pulse"></div>
                
                <FaPlay className="text-emerald-600 text-xl ml-1 group-hover:text-emerald-700 transition-colors duration-300" />
              </button>
            </div>

            {/* Corner accent */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-lg"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div ref={sectionRef} className="relative z-10 mt-32">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-emerald-500"></div>
            <span className="mx-4 text-emerald-600 font-bold tracking-wider text-sm">PROJECT HIGHLIGHTS</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-emerald-500"></div>
          </div>
          <h3 className="text-3xl font-black text-slate-900">Power Generation Statistics</h3>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <StatCard 
            icon="/panel.svg" 
            title="Rated System Power" 
            value={766} 
            suffix="MW"
            delay={0}
            visible={visibleStats}
          />
          <StatCard
            icon="/leaf.svg"
            title="Annual Energy Yield"
            value={1095}
            suffix="Million Units"
            delay={200}
            visible={visibleStats}
            extraClasses="lg:translate-y-8"
          />
          <StatCard
            icon="/wind.svg"
            title="CO₂ Saving Per Annum"
            value={1000000}
            suffix="MT"
            delay={400}
            visible={visibleStats}
          />
        </div>
      </div>

      {/* Enhanced Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center px-4">
          <div className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            {/* Modal background glow */}
            <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 blur-2xl rounded-3xl"></div>
            
            <iframe
              src="/projectVideo2.mp4"
              title="Project Overview"
              className="relative z-10 w-full h-full rounded-2xl"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
            
            {/* Enhanced Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-16 right-0 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-red-500/80 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
              title="Close Video"
            >
              <FaTimes className="text-xl group-hover:scale-110 transition-transform duration-200" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

// Enhanced StatCard Component
function StatCard({ icon, title, value, suffix = '', delay = 0, visible, extraClasses = '' }) {
  const cardRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (visible && count === 0) {
      let start = 0;
      const end = value;
      const duration = 2500;
      const step = (timestamp) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(step);
      };
      let startTime = performance.now();
      setTimeout(() => requestAnimationFrame(step), delay);
    }
  }, [visible, count, value, delay]);

  return (
    <div
      ref={cardRef}
      className={`
        relative group cursor-pointer overflow-hidden bg-white/80 backdrop-blur-sm
        text-center py-12 px-8 min-h-[350px] shadow-xl rounded-2xl border border-white/50
        hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/10 hover:scale-105
        transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
        ${extraClasses}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/50 to-emerald-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Decorative corner elements */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-emerald-400/30 rounded-tl-lg"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-emerald-400/30 rounded-br-lg"></div>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent z-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full space-y-6">
        {/* Icon with glow effect */}
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-400/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img 
            src={icon} 
            alt={title} 
            className="relative h-16 w-16 group-hover:scale-110 transition-transform duration-500" 
          />
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors duration-300 leading-tight">
          {title}
        </h3>
        
        {/* Animated Counter */}
        <div className="space-y-2">
          <p className="text-4xl font-black text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300">
            {count.toLocaleString()}
          </p>
          <p className="text-lg font-semibold text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
            {suffix}
          </p>
        </div>

        {/* Progress indicator */}
        <div className="w-full bg-slate-200 rounded-full h-1 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-2000 ease-out"
            style={{ width: visible ? '100%' : '0%', transitionDelay: `${delay + 500}ms` }}
          ></div>
        </div>
      </div>
    </div>
  );
}