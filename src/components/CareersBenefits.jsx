'use client';
import { useEffect, useRef, useState } from 'react';

export default function CareersBenefits() {
  const benefits = [
    {
      icon: '/icon-service-benefit-1.svg',
      title: 'Work–Life Balance',
      desc: 'We believe in supporting a healthy work–life balance, with flexible work schedules and a supportive environment that ensures both personal and professional growth.',
    },
    {
      icon: '/icon-service-benefit-2.svg',
      title: 'Learning And Development',
      desc: "We invest in our team's growth by providing access to continuous learning opportunities, training programs, and career development initiatives."
    },
    {
      icon: '/icon-service-benefit-3.svg',
      title: 'Diverse And Inclusive Culture',
      desc: 'We celebrate diversity and foster an inclusive work culture that values collaboration and respects different perspectives.',
    },
    {
      icon: '/icon-service-benefit-4.svg',
      title: 'Competitive Compensation',
      desc: 'We offer competitive salaries and benefits packages, ensuring our team is rewarded for their hard work and dedication.',
    },
    {
      icon: '/icon-service-benefit-5.svg',
      title: 'Sustainability–Driven Mission',
      desc: 'Our commitment to sustainability is reflected in everything we do, and we encourage our team members to contribute to positive global change.',
    },
    {
      icon: '/icon-service-benefit-6.svg',
      title: 'Innovative Projects',
      desc: 'Join us in working on exciting, cutting-edge projects in renewable energy, solar technology, and more.',
    },
    {
      icon: '/icon-service-benefit-7.svg',
      title: 'Employee Well–Being',
      desc: 'We provide comprehensive health and wellness programs, ensuring our team stays healthy, happy, and productive.',
    },
    {
      icon: '/icon-service-benefit-8.svg',
      title: 'Collaborative Work Environment',
      desc: 'Our team thrives on collaboration, working together to achieve shared goals and drive innovation.',
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-slate-50 to-white py-32 px-6 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-32 left-1/6 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-1/5 w-80 h-80 bg-emerald-400/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/2 w-48 h-48 bg-emerald-600/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Premium grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="benefits-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#benefits-grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Enhanced Header Section */}
        <div className="mb-20">
          {/* Premium Badge */}
          <div className="mb-8">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 blur-lg rounded-full"></div>
              <div className="relative bg-gradient-to-r from-emerald-100/80 to-emerald-50/80 backdrop-blur-sm border border-emerald-300/50 text-emerald-700 px-8 py-4 rounded-full shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-500">
                <span className="text-sm font-black tracking-widest flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                  EMPLOYEE BENEFITS
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
            Benefits of Working{' '}
            <span className="relative">
              <span className="text-emerald-600">with Us</span>
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-emerald-400/30 to-emerald-600/30 rounded-full"></div>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Join a team that values your growth, well-being, and contribution to a sustainable future
          </p>

          {/* Decorative elements */}
          <div className="flex justify-center items-center space-x-4 pt-6">
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"></div>
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="w-16 h-1 bg-gradient-to-l from-emerald-500 to-emerald-600 rounded-full"></div>
          </div>
        </div>

        {/* Enhanced Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, i) => (
            <EnhancedBenefitCard key={i} item={item} delay={i * 100} />
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 bg-gradient-to-r from-emerald-50/80 to-emerald-100/50 backdrop-blur-sm border border-emerald-200/50 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
            Ready to Join Our Team?
          </h3>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            Experience these benefits and more while contributing to groundbreaking renewable energy projects
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold px-8 py-4 rounded-2xl hover:from-emerald-700 hover:to-emerald-800 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-500"
          >
            Explore Opportunities
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function EnhancedBenefitCard({ item, delay = 0 }) {
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
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        relative group cursor-pointer overflow-hidden bg-white/90 backdrop-blur-sm
        text-center py-12 px-6 min-h-[380px] shadow-xl rounded-3xl 
        border border-white/60 hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/10 
        hover:-translate-y-2 hover:scale-[1.02]
        transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}
      `}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/30 to-emerald-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Floating particles */}
        {Array.from({ length: 8 }).map((_, i) => (
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

      {/* Premium corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-emerald-400/30 rounded-tl-xl group-hover:border-emerald-500/50 transition-colors duration-500"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-emerald-400/30 rounded-br-xl group-hover:border-emerald-500/50 transition-colors duration-500"></div>

      {/* Glow effect */}
      <div className="absolute -inset-4 bg-emerald-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full space-y-6">
        {/* Enhanced Icon */}
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-400/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-100/80 to-emerald-200/60 rounded-2xl flex items-center justify-center border border-emerald-300/30 group-hover:scale-110 group-hover:border-emerald-400/50 transition-all duration-500">
            <img 
              src={item.icon} 
              alt={item.title} 
              className="h-10 w-10 group-hover:scale-110 transition-transform duration-500" 
            />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors duration-500 leading-tight px-2">
          {item.title}
        </h3>
        
        {/* Description */}
        <p className="text-sm sm:text-base font-medium text-slate-600 group-hover:text-slate-700 transition-colors duration-500 leading-relaxed px-2 flex-1 flex items-center">
          {item.desc}
        </p>

        {/* Progress indicator */}
        <div className="w-full pt-4">
          <div className="w-full bg-slate-200 rounded-full h-1 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-1000 ease-out group-hover:w-full"
              style={{ 
                width: visible ? '70%' : '0%', 
                transitionDelay: `${delay + 300}ms` 
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"></div>
    </div>
  );
}