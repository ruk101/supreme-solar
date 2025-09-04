'use client';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { useEffect, useRef, useState } from 'react';

export default function CareersOpportunities() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#F6F8ED] via-white to-[#F6F8ED] py-32 px-4 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-emerald-400/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-emerald-600/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-16 right-20 w-4 h-4 bg-emerald-400/20 rotate-45 animate-bounce"></div>
        <div className="absolute bottom-40 left-16 w-3 h-3 bg-emerald-500/30 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-300/40 rounded-full animate-ping delay-1200"></div>
        
        {/* Premium grid overlay */}
        <div className="absolute inset-0 opacity-[0.015]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="opportunities-grid" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M 120 0 L 0 0 0 120" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#opportunities-grid)" />
          </svg>
        </div>
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto text-center transform transition-all duration-1200 ease-out
        ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
      >
        {/* Premium Badge */}
        <div className="mb-12">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 blur-lg rounded-full"></div>
            <div className="relative bg-gradient-to-r from-white/90 to-emerald-50/80 backdrop-blur-xl border border-emerald-300/50 text-emerald-700 px-8 py-4 rounded-full shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-500">
              <span className="text-sm font-black tracking-widest flex items-center gap-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                FUTURE OPPORTUNITIES
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Main Heading */}
        <div className="mb-12 space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
            Join Us for{' '}
            <span className="relative inline-block">
              <span className="text-emerald-600">Future</span>
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-emerald-400/30 to-emerald-600/30 rounded-full"></div>
            </span>
            <br className="hidden sm:block" />
            Opportunities
          </h2>
          
          {/* Decorative elements */}
          <div className="flex justify-center items-center space-x-4 pt-4">
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"></div>
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="w-16 h-1 bg-gradient-to-l from-emerald-500 to-emerald-600 rounded-full"></div>
          </div>
        </div>

        {/* Enhanced Content Card */}
        <div className="relative group mb-16">
          {/* Background glow */}
          <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-8 lg:p-12 shadow-xl group-hover:bg-white/90 group-hover:shadow-2xl group-hover:shadow-emerald-500/10 transition-all duration-500">
            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-emerald-400/30 rounded-tl-lg group-hover:border-emerald-500/50 transition-colors duration-500"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-emerald-400/30 rounded-br-lg group-hover:border-emerald-500/50 transition-colors duration-500"></div>
            
            {/* Main content */}
            <p className="text-xl lg:text-2xl leading-relaxed text-slate-700 group-hover:text-slate-800 transition-colors duration-500 mb-8 font-medium">
              While we currently don't have any open roles, we're always on the lookout
              for passionate individuals who want to make a difference in the renewable energy industry.
              Share your CV with us, and we'll get in touch when something exciting opens up!
            </p>
            
            {/* Skills highlight */}
            <div className="bg-gradient-to-r from-emerald-50/80 to-emerald-100/50 backdrop-blur-sm border border-emerald-200/50 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-bold text-emerald-800 mb-4">We're looking for professionals in:</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Renewable Energy', 'Project Management', 'Engineering', 
                  'Finance', 'Business Development', 'Sustainability'
                ].map((skill, i) => (
                  <span key={i} className="bg-white/70 backdrop-blur-sm border border-emerald-300/30 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-emerald-100/70 hover:scale-105 transition-all duration-300 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <div className="relative group">
          {/* Button glow background */}
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
          
          <a
            href="/contact"
            className="relative inline-flex items-center gap-3 text-white font-bold text-lg px-10 py-5 rounded-2xl overflow-hidden bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-1 transition-all duration-500 group"
          >
            {/* Animated background */}
            <span className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/10 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></span>
            
            {/* Button content */}
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">Submit Your CV</span>
            <FaArrowUpRightFromSquare className="relative z-10 w-5 h-5 group-hover:scale-110 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            
            {/* Shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
          </a>
        </div>

        {/* Contact Information */}
        <div className="mt-12 p-6 bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl">
          <p className="text-sm text-slate-600 font-medium">
            Send your resume to{' '}
            <a href="mailto:careers@supremesolar.lk" className="text-emerald-600 hover:text-emerald-700 font-bold transition-colors duration-300">
              careers@supremesolar.lk
            </a>
            {' '}or use the button above
          </p>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute bottom-0 right-0 z-0">
        <div className="flex items-end">
          <div className="w-12 h-12 bg-gradient-to-tl from-emerald-400/20 to-emerald-500/10 rounded-tl-2xl"></div>
          <div className="w-8 h-8 bg-gradient-to-bl from-emerald-300/15 to-emerald-400/10 rounded-bl-lg ml-2"></div>
        </div>
        <div className="flex items-end mt-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-emerald-400/20 to-emerald-500/10 rounded-tr-lg -ml-4"></div>
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-300/15 to-emerald-400/10 rounded-br-2xl ml-2"></div>
        </div>
      </div>
    </section>
  );
}