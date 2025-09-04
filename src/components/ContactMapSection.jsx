'use client';
import { useEffect, useRef, useState } from 'react';
import { FaMapMarkerAlt, FaDirections, FaCar, FaTrain, FaBus } from 'react-icons/fa';

export default function ContactMapSection() {
  const sectionRef = useRef(null);
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-[#F6F8ED] via-white to-[#F6F8ED] py-32 px-4 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-emerald-400/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-2/3 w-48 h-48 bg-emerald-600/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-16 right-20 w-4 h-4 bg-emerald-400/20 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-16 w-3 h-3 bg-emerald-500/30 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-300/40 rounded-full animate-ping delay-1200"></div>
        
        {/* Premium grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="map-grid" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M 120 0 L 0 0 0 120" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#map-grid)" />
          </svg>
        </div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto transition-all duration-1000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <div className="mb-8">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 blur-lg rounded-full"></div>
              <div className="relative bg-gradient-to-r from-emerald-100/80 to-emerald-50/80 backdrop-blur-sm border border-emerald-300/50 text-emerald-700 px-8 py-4 rounded-full shadow-lg">
                <span className="text-sm font-black tracking-widest flex items-center gap-3">
                  <FaMapMarkerAlt className="animate-pulse" />
                  VISIT OUR OFFICE
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
            Find Us in{' '}
            <span className="relative">
              <span className="text-emerald-600">Colombo</span>
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-emerald-400/30 to-emerald-600/30 rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Located in the heart of Colombo's business district at the iconic World Trade Center
          </p>

          {/* Decorative elements */}
          <div className="flex justify-center items-center space-x-4 pt-6">
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"></div>
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="w-16 h-1 bg-gradient-to-l from-emerald-500 to-emerald-600 rounded-full"></div>
          </div>
        </div>

        {/* Enhanced Map Section */}
        <div className="relative group mb-16">
          {/* Glowing background */}
          <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/15 to-emerald-600/15 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl overflow-hidden group-hover:bg-white group-hover:shadow-3xl group-hover:shadow-emerald-500/10 transition-all duration-700">
            {/* Corner decorations */}
            <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-emerald-400/30 rounded-tl-2xl group-hover:border-emerald-500/50 transition-colors duration-500 z-10"></div>
            <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-emerald-400/30 rounded-tr-2xl group-hover:border-emerald-500/50 transition-colors duration-500 z-10"></div>
            
            {/* Map Header */}
            <div className="relative z-10 bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 text-white p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">33rd Floor, West Tower</h3>
                    <p className="text-emerald-200 text-sm">World Trade Center, Colombo 01</p>
                  </div>
                </div>
                
                <a
                  href="https://maps.google.com/?q=Supreme+Global+Holdings+Ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 group/btn"
                >
                  <FaDirections className="group-hover/btn:scale-110 transition-transform duration-300" />
                  Get Directions
                </a>
              </div>
            </div>
            
            {/* Enhanced Map Container */}
            <div className="relative">
              {/* Map overlay with hover effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              
              <iframe
                title="Supreme Global Holdings Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63322.641578498515!2d79.79915315403182!3d6.92707896325781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25923df92aef5%3A0x31f74658cf7fd726!2sSupreme%20Global%20Holdings%20Ltd!5e0!3m2!1sen!2slk!4v1719020052534!5m2!1sen!2slk"
                width="100%"
                height="600"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full border-0 group-hover:scale-[1.01] transition-transform duration-700 ease-out"
              ></iframe>
              
              {/* Interactive overlay indicators */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl p-4 z-20 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-slate-700">Supreme Solar Office</span>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}

function TransportCard({ icon, title, content, delay, visible }) {
  return (
    <div
      className={`relative group bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 transition-all duration-700 ease-out overflow-hidden ${
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/30 to-emerald-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
      
      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-emerald-400/30 rounded-tl-xl group-hover:border-emerald-500/50 transition-colors duration-500"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-emerald-400/30 rounded-br-xl group-hover:border-emerald-500/50 transition-colors duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-6">
        {/* Icon */}
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-400/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-100/80 to-emerald-200/60 rounded-2xl flex items-center justify-center border border-emerald-300/30 mx-auto group-hover:scale-110 group-hover:border-emerald-400/50 transition-all duration-500">
            {icon}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors duration-500">
          {title}
        </h3>
        
        {/* Content */}
        <div className="text-left">
          {content}
        </div>
      </div>

      {/* Floating particles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${Math.random() * 3}s`,
            transitionDelay: `${Math.random() * 500}ms`
          }}
        ></div>
      ))}
    </div>
  );
}