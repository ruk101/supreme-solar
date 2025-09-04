'use client';
import { useEffect, useRef, useState } from 'react';

export default function InfoCardGrid({ title, description, icon = '', extraClasses = '' }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative group bg-white/95 backdrop-blur-xl px-8 py-16 sm:px-12 sm:py-20 
        shadow-2xl rounded-3xl overflow-hidden border border-white/60
        hover:bg-white hover:shadow-3xl hover:shadow-emerald-500/10 hover:-translate-y-1
        transform transition-all duration-700 ease-out cursor-pointer
        ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}
        ${extraClasses}
      `}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/40 to-emerald-100/0 rounded-3xl transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-emerald-400/30 rounded-full transition-all duration-700 ${
                isHovered ? 'animate-pulse opacity-100 scale-150' : 'opacity-0 scale-100'
              }`}
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 3}s`,
                transitionDelay: `${Math.random() * 500}ms`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Premium Decorative Corners */}
      <div className="absolute top-0 left-8 z-30">
        <div className="flex items-start">
          {/* Top decorative elements */}
          <div className="relative">
            <div className="w-6 h-6 bg-gradient-to-br from-emerald-500/30 to-emerald-600/40 rounded-full backdrop-blur-sm border border-emerald-300/30 group-hover:scale-125 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-md group-hover:bg-emerald-400/40 transition-colors duration-500"></div>
          </div>
          <div className="w-4 h-4 bg-gradient-to-bl from-emerald-400/20 to-emerald-500/30 rounded-full ml-3 mt-1 group-hover:scale-110 transition-transform duration-500 delay-100"></div>
        </div>
        
        {/* Side decorative line */}
        <div className="w-px h-16 bg-gradient-to-b from-emerald-400/40 to-transparent ml-3 mt-2 group-hover:h-20 transition-all duration-500"></div>
      </div>

      {/* Enhanced Background Icon */}
      {icon && (
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div
            className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 ease-out"
            style={{
              backgroundImage: `url('${icon}')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '140px 140px',
              width: '140px',
              height: '140px',
            }}
          ></div>
        </div>
      )}

      {/* Dynamic Glow Effects */}
      <div
        className={`absolute -inset-6 z-0 rounded-3xl blur-3xl pointer-events-none transition-all duration-1000 ease-out 
        ${visible ? 'opacity-20 scale-105' : 'opacity-0 scale-100'}
        ${isHovered ? 'opacity-40 scale-110' : ''}`}
        style={{
          background: `radial-gradient(ellipse at center, rgba(34, 197, 94, 0.2) 0%, rgba(34, 197, 94, 0.1) 50%, transparent 100%)`,
        }}
      ></div>

      {/* Interactive Hover Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-600/5 z-10 
        rounded-3xl transition-opacity duration-700 ease-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

      {/* Content Container */}
      <div className="relative z-30 text-center">
        {/* Title Section */}
        {title && (
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors duration-500 leading-tight">
              {title}
            </h3>
            {/* Animated underline */}
            <div className="mt-4 mx-auto">
              <div className={`h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-700 ease-out ${
                isHovered ? 'w-24 opacity-100' : 'w-12 opacity-60'
              }`}></div>
            </div>
          </div>
        )}

        {/* Description */}
        <div className="space-y-6">
          <p className="text-lg sm:text-xl leading-relaxed text-slate-700 group-hover:text-slate-800 
            transition-colors duration-500 font-medium tracking-wide max-w-5xl mx-auto">
            {description}
          </p>

          {/* Reading Progress Indicator */}
          <div className="flex justify-center pt-6">
            <div className="relative">
              <div className="w-32 h-1 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-1500 ease-out ${
                    visible ? 'w-full' : 'w-0'
                  }`}
                  style={{ transitionDelay: '500ms' }}
                ></div>
              </div>
              
              {/* Glowing dot at the end */}
              <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-out ${
                visible ? 'w-3 h-3 opacity-100' : 'w-1 h-1 opacity-0'
              }`}>
                <div className="w-full h-full bg-emerald-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 bg-emerald-400 rounded-full blur-sm animate-ping"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Elements */}
        <div className="mt-12 flex justify-center items-center space-x-6">
          {/* Engagement dots */}
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  isHovered 
                    ? 'bg-emerald-500 animate-pulse' 
                    : 'bg-slate-300'
                }`}
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
          
          {/* Hover indicator */}
          <div className={`text-sm font-semibold tracking-wider transition-all duration-500 ${
            isHovered 
              ? 'text-emerald-600 opacity-100 translate-x-0' 
              : 'text-slate-400 opacity-0 translate-x-2'
          }`}>
            READ MORE
          </div>
        </div>
      </div>

      {/* Corner Accent Lights */}
      <div className="absolute bottom-6 right-6 flex items-center space-x-2">
        <div className={`w-2 h-2 bg-emerald-400/40 rounded-full transition-all duration-700 ${
          isHovered ? 'animate-pulse scale-150' : 'scale-100'
        }`}></div>
        <div className={`w-1.5 h-1.5 bg-emerald-500/50 rounded-full transition-all duration-700 delay-100 ${
          isHovered ? 'animate-ping scale-125' : 'scale-100'
        }`}></div>
      </div>

      {/* Enhanced Border Glow */}
      <div className={`absolute inset-0 rounded-3xl pointer-events-none transition-all duration-700 ${
        isHovered 
          ? 'border-2 border-emerald-300/30 shadow-[0_0_30px_rgba(34,197,94,0.3)]' 
          : 'border border-white/60'
      }`}></div>

      {/* Ripple Effect on Hover */}
      <div className={`absolute inset-0 rounded-3xl pointer-events-none overflow-hidden transition-all duration-700 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-emerald-500/5 to-emerald-600/10 
          transform scale-0 group-hover:scale-150 transition-transform duration-1000 ease-out rounded-3xl"></div>
      </div>
    </div>
  );
}