'use client';
import { useEffect, useRef, useState } from 'react';

export default function AboutPartners() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-32 px-4 overflow-hidden" 
      ref={sectionRef}
    >
      {/* Background Effects (kept subtle) */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-emerald-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="partner-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#partner-grid)" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        {/* Heading */}
        <div className={`mb-20 transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
              SGH Capital LLC
            </span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
          </h2>

          <div className="relative">
            <p className="text-lg sm:text-xl text-emerald-100/80 font-medium tracking-wide">
              in partnership with
            </p>
            <div className="flex justify-center items-center gap-4 mt-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-emerald-500"></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-emerald-500"></div>
            </div>
          </div>
        </div>

        {/* Partners (logos only, bigger, no boxes) */}
        <div className={`
          grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center justify-center max-w-5xl mx-auto
          transition-all duration-1200 ease-out delay-300
          ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
        `}>
          <PartnerCard
            imageSrc="/MBS-Logo-Horizontal-Inverse.png"
            alt="MBS Global"
            delay={0}
            visible={visible}
          />

          <PartnerCard
            imageSrc="/sheikh-nayef.png"
            alt="Office of Sheikh Nayef Bin Eid Al Thani"
            delay={200}
            visible={visible}
            featured={true}
          />
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full h-20 fill-current text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,64 Q360,0 720,64 T1440,64 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}

function PartnerCard({ imageSrc, alt, delay, visible, featured = false }) {
  return (
    <div 
      className={`
        relative flex justify-center items-center transition-all duration-1000 ease-out
        ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}
        ${featured ? 'lg:scale-110' : ''}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={imageSrc}
        alt={alt}
        className={`mx-auto transition-all duration-500 hover:scale-110 ${
          featured ? 'h-28 lg:h-32' : 'h-24 lg:h-28'
        }`}
      />
    </div>
  );
}
