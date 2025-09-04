'use client';
import { useEffect, useRef, useState } from 'react';

export default function AboutIntro() {
  return (
    <section className="relative bg-gradient-to-br from-[#F6F8ED] via-white to-[#F6F8ED] py-32 px-4 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-emerald-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-emerald-600/12 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-16 right-20 w-4 h-4 bg-emerald-400/20 rotate-45 animate-bounce"></div>
        <div className="absolute bottom-40 left-16 w-3 h-3 bg-emerald-500/30 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-300/40 rounded-full animate-ping delay-1200"></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.015]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-20">
        <div className="inline-flex items-center mb-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-emerald-500"></div>
          <span className="mx-6 text-emerald-600 font-black tracking-widest text-sm">ABOUT SGH CAPITAL</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-emerald-500"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
          Driving Innovation in{' '}
          <span className="text-emerald-600 relative">
            Renewable Energy
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
          </span>
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-24">
        <AnimatedBox 
          icon="/worldmap.svg"
          iconPosition="left"
          delay={0}
        >
          SGH Capital LLC, based in the UAE, is a globally diversified investment firm operating across renewable
          energy, infrastructure, and technology sectors. As a forward-thinking enterprise, SGH Capital is committed
          to driving innovation and sustainability through impactful investments that uplift the communities we serve.
          Backed by MBS Global Investments — the investment arm of the Private Office of His Royal Highness Sheikh
          Nayef Bin Eid Al Thani — we are strategically positioned to execute large-scale projects that contribute to
          a more sustainable and energy-secure future.
        </AnimatedBox>

        <AnimatedBox 
          icon="/leaf.svg"
          iconPosition="right"
          delay={300}
        >
          With a clear focus on renewable energy, SGH Capital plays a pivotal role in global sustainability efforts
          by harnessing the potential of solar power and green technologies. Our commitment is reflected in
          transformative projects like the 700 MW solar power plant in Sri Lanka — aligned with regional and global
          goals to transition toward a low-carbon economy. We believe in leveraging innovation to create a cleaner,
          smarter future while delivering strong returns to our partners and investors.
        </AnimatedBox>
      </div>
    </section>
  );
}

function AnimatedBox({ children, icon, iconPosition = "center", delay = 0 }) {
  const boxRef = useRef(null);
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

    if (boxRef.current) observer.observe(boxRef.current);
    return () => {
      if (boxRef.current) observer.unobserve(boxRef.current);
    };
  }, []);

  return (
    <div
      ref={boxRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        relative group bg-white/90 backdrop-blur-xl px-8 py-16 sm:px-12 sm:py-20 
        shadow-2xl rounded-3xl overflow-hidden border border-white/50
        hover:bg-white hover:shadow-3xl hover:shadow-emerald-500/10 hover:-translate-y-2
        transform transition-all duration-1000 ease-out
        ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}
      `}
    >
      {/* Enhanced Decorative Corner with Animation */}
      <div className="absolute top-0 left-8 z-30">
        <div className="flex">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500/20 to-emerald-600/30 rounded-tl-2xl backdrop-blur-sm border-l border-t border-emerald-300/20"></div>
          <div className="w-8 h-8 bg-gradient-to-bl from-emerald-400/15 to-emerald-500/25 rounded-tr-2xl backdrop-blur-sm border-r border-t border-emerald-300/20 ml-2"></div>
        </div>
        <div className="flex mt-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-emerald-500/20 to-emerald-600/30 rounded-bl-2xl backdrop-blur-sm border-l border-b border-emerald-300/20 -ml-4"></div>
          <div className="w-8 h-8 bg-gradient-to-tl from-emerald-400/15 to-emerald-500/25 rounded-br-2xl backdrop-blur-sm border-r border-b border-emerald-300/20 ml-2"></div>
        </div>
      </div>

      {/* Dynamic Background Icon */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute transition-all duration-1000 ease-out opacity-5 group-hover:opacity-10 group-hover:scale-110 ${
            iconPosition === 'left' ? 'left-8 top-1/2 -translate-y-1/2' :
            iconPosition === 'right' ? 'right-8 top-1/2 -translate-y-1/2' :
            'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
          }`}
          style={{
            backgroundImage: `url('${icon}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '120px 120px',
            width: '120px',
            height: '120px',
          }}
        ></div>
      </div>

      {/* Enhanced Glow Effects */}
      <div
        className={`absolute -inset-6 z-10 rounded-3xl blur-3xl pointer-events-none transition-all duration-1500 ease-out 
        ${visible ? 'opacity-30 scale-110' : 'opacity-0 scale-100'}`}
        style={{
          background: `radial-gradient(ellipse at center, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.05) 50%, transparent 100%)`,
          transitionDelay: `${delay + 200}ms`
        }}
      ></div>

      {/* Animated Particles Around the Box */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/40 rounded-full animate-pulse"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Premium Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-600/5 z-20 
        opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out rounded-3xl"></div>

      {/* Enhanced Content */}
      <div className="relative z-30">
        <p className="text-lg sm:text-xl leading-relaxed text-slate-700 group-hover:text-slate-800 
          transition-colors duration-500 max-w-5xl mx-auto font-medium text-center tracking-wide">
          {children}
        </p>
        
        {/* Reading Progress Indicator */}
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-2000 ease-out"
              style={{ 
                width: visible ? '100%' : '0%',
                transitionDelay: `${delay + 800}ms`
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Corner Accent Lights */}
      <div className="absolute bottom-4 right-4 w-3 h-3 bg-emerald-400/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-500/40 rounded-full animate-ping delay-500"></div>
    </div>
  );
}