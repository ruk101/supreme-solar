'use client';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection({ title, subtitle }) {
  const heroRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger loading animation
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black"
    >
      {/* Enhanced Background with Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Background Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ease-out transform ${
            isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          }`}
          style={{ 
            backgroundImage: "url('/project_durability.png')",
            willChange: 'transform'
          }}
        ></div>
        
        {/* Animated Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-emerald-900/20"></div>
        
        {/* Dynamic Light Rays */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-emerald-400/40 via-transparent to-transparent transform rotate-12"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-emerald-300/30 via-transparent to-transparent transform -rotate-12"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-8 text-center max-w-6xl mx-auto">
        {/* Animated Welcome Badge */}
        <div className={`inline-flex items-center mb-8 transition-all duration-1000 delay-300 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 blur-xl rounded-full animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-emerald-500/90 to-emerald-600/90 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-emerald-400/30 shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-500">
              <span className="text-sm font-semibold tracking-wider flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-300 rounded-full animate-ping"></div>
                Welcome To
              </span>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className={`transition-all duration-1200 delay-500 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`}>
          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
            {title.split(' ').map((word, index) => (
              <span 
                key={index} 
                className="inline-block mx-2 hover:text-emerald-400 transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-2"
                style={{ animationDelay: `${index * 200 + 700}ms` }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <div className={`mt-8 transition-all duration-1000 delay-900 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md rounded-2xl border border-white/10"></div>
              <p className="relative px-8 py-4 text-emerald-100 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed max-w-3xl">
                {subtitle}
              </p>
            </div>
          </div>
        )}

        {/* Scroll Indicator removed */}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full h-16 fill-current text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,64 Q360,0 720,64 T1440,64 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-emerald-400/30 rounded-tr-lg"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-emerald-400/30 rounded-bl-lg"></div>
    </section>
  );
}
