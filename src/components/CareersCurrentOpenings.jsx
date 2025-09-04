'use client';
import Image from 'next/image';
import { FaArrowRight, FaPaperPlane } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

export default function CareersCurrentOpenings() {
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
      className="relative bg-gradient-to-br from-[#F6F8ED] via-white to-[#F6F8ED] py-32 px-6 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-1/6 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/5 w-80 h-80 bg-emerald-400/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-2/3 w-48 h-48 bg-emerald-600/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-16 right-20 w-4 h-4 bg-emerald-400/20 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-16 w-3 h-3 bg-emerald-500/30 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-300/40 rounded-full animate-ping delay-1200"></div>
        
        {/* Premium grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="openings-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#openings-grid)" />
          </svg>
        </div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto transition-all duration-1000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <div className="mb-8">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 blur-lg rounded-full"></div>
              <div className="relative bg-gradient-to-r from-emerald-100/80 to-emerald-50/80 backdrop-blur-sm border border-emerald-300/50 text-emerald-700 px-8 py-4 rounded-full shadow-lg">
                <span className="text-sm font-black tracking-widest flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                  CURRENT OPPORTUNITIES
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
            Current{' '}
            <span className="relative">
              <span className="text-emerald-600">Openings</span>
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-emerald-400/30 to-emerald-600/30 rounded-full"></div>
            </span>
          </h2>

          {/* Decorative elements */}
          <div className="flex justify-center items-center space-x-4 pt-4">
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"></div>
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="w-16 h-1 bg-gradient-to-l from-emerald-500 to-emerald-600 rounded-full"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Enhanced Image Section */}
          <div className={`relative group transition-all duration-1000 delay-200 ease-out ${
            visible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-8 scale-95'
          }`}>
            {/* Glowing background */}
            <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-2xl group-hover:bg-white group-hover:shadow-3xl group-hover:shadow-emerald-500/10 group-hover:scale-105 transition-all duration-700 overflow-hidden">
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-emerald-400/30 rounded-tl-xl group-hover:border-emerald-500/50 transition-colors duration-500"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-emerald-400/30 rounded-br-xl group-hover:border-emerald-500/50 transition-colors duration-500"></div>
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/Stay_Tuned.png"
                  alt="Future Job Openings"
                  width={600}
                  height={400}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay with pulse effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Status indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full border border-white/50">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-slate-700">Stay Tuned</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ease-out ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            
            {/* Main content card */}
            <div className="relative group bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl p-8 lg:p-12 shadow-xl hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-700 overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/20 to-emerald-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="text-xl lg:text-2xl text-slate-700 leading-relaxed font-medium space-y-4">
                  <p className="group-hover:text-slate-800 transition-colors duration-300">
                    At the moment, we don't have any open positions, but we are always looking for driven individuals to join our team in the future.
                  </p>
                  <p className="group-hover:text-slate-800 transition-colors duration-300">
                    We encourage you to submit your CV, and we'll reach out when a role fits your skills and interests.
                  </p>
                </div>

                {/* Skills we're looking for */}
                <div className="bg-gradient-to-r from-emerald-50/80 to-emerald-100/50 backdrop-blur-sm border border-emerald-200/50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-emerald-800 mb-4">Future Opportunities in:</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Solar Engineering', 'Project Management', 'Environmental Science', 
                      'Business Development', 'Operations', 'Finance'
                    ].map((skill, i) => (
                      <span key={i} className="bg-white/70 backdrop-blur-sm border border-emerald-300/30 text-emerald-700 px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-emerald-100/70 hover:scale-105 transition-all duration-300 cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="space-y-6">
              {/* Primary CTA Button */}
              <div className="relative group/btn">
                {/* Button glow background */}
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl blur-lg opacity-0 group-hover/btn:opacity-30 transition-opacity duration-500"></div>
                
                <a
                  href="/contact"
                  className="relative inline-flex items-center gap-3 px-8 py-5 text-lg font-bold rounded-2xl text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 hover:-translate-y-1 transition-all duration-500 group/btn overflow-hidden"
                >
                  {/* Animated background */}
                  <span className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/10 transform scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-700 ease-out"></span>
                  
                  {/* Button content */}
                  <FaPaperPlane className="relative z-10 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-all duration-300" />
                  <span className="relative z-10 group-hover/btn:scale-105 transition-transform duration-300">Submit Your CV</span>
                  <FaArrowRight className="relative z-10 group-hover/btn:scale-110 group-hover/btn:translate-x-1 transition-all duration-300" />
                  
                  {/* Shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out"></span>
                </a>
              </div>

              {/* Additional info */}
              <div className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-6 text-center">
                <p className="text-slate-600 font-medium mb-2">
                  Send your resume directly to
                </p>
                <a 
                  href="mailto:careers@supremesolar.lk" 
                  className="text-emerald-600 hover:text-emerald-700 font-bold text-lg transition-colors duration-300"
                >
                  careers@supremesolar.lk
                </a>
                <p className="text-sm text-slate-500 mt-2">
                  We'll contact you when suitable positions become available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Notification signup section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-600 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative group bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 text-white rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-black mb-4">
                Get Notified When Positions Open
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed">
                Be the first to know about new career opportunities at United Solar Energy. 
                Join our talent community and stay updated on future openings.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-white/20 transition-all duration-300"
                />
                <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap">
                  Notify Me
                </button>
              </div>
            </div>
            
            {/* Corner decorations */}
            <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-2xl group-hover:border-white/40 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-white/20 rounded-bl-2xl group-hover:border-white/40 transition-colors duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}