'use client';
import { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaArrowRight, FaPaperPlane } from 'react-icons/fa';

export default function ContactFormSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={sectionRef}
      className={`relative bg-gradient-to-br from-white via-slate-50 to-white py-32 px-6 overflow-hidden transition-all duration-1000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-32 left-1/4 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-emerald-400/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-2/3 w-48 h-48 bg-emerald-600/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Premium grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <div className="mb-8">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 blur-lg rounded-full"></div>
              <div className="relative bg-gradient-to-r from-emerald-100/80 to-emerald-50/80 backdrop-blur-sm border border-emerald-300/50 text-emerald-700 px-8 py-4 rounded-full shadow-lg">
                <span className="text-sm font-black tracking-widest flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                  GET IN TOUCH
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
            Let's Start a{' '}
            <span className="relative">
              <span className="text-emerald-600">Conversation</span>
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

        {/* Enhanced Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Enhanced Contact Info Card */}
          <div className="lg:col-span-1">
            <div className="relative group bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl p-8 hover:bg-white hover:shadow-3xl hover:shadow-emerald-500/10 hover:-translate-y-2 transition-all duration-700 overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/30 to-emerald-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-emerald-400/30 rounded-tl-xl group-hover:border-emerald-500/50 transition-colors duration-500"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-emerald-400/30 rounded-br-xl group-hover:border-emerald-500/50 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-slate-800 group-hover:text-emerald-700 transition-colors duration-500">
                  Contact Information
                </h3>
                
                <ul className="space-y-6">
                  {[
                    { Icon: FaEnvelope, text: 'info@supremesolar.lk', href: 'mailto:info@supremesolar.lk' },
                    { Icon: FaPhone, text: '+94 11 2 434 000', href: 'tel:+94112434000' },
                    { 
                      Icon: FaMapMarkerAlt, 
                      text: (
                        <>
                          33<sup>rd</sup> Floor, West Tower, World Trade Center
                          <br />
                          Colombo 01, Sri Lanka
                        </>
                      ),
                      href: null
                    },
                  ].map(({ Icon, text, href }, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100/80 to-emerald-200/60 border border-emerald-300/30 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white group/item-hover:scale-110 transition-all duration-500">
                        <Icon className="text-lg" />
                      </div>
                      <div className="flex-1">
                        {href ? (
                          <a 
                            href={href}
                            className="text-slate-700 group-hover:text-slate-800 hover:text-emerald-600 transition-colors duration-300 font-medium leading-relaxed"
                          >
                            {text}
                          </a>
                        ) : (
                          <span className="text-slate-700 group-hover:text-slate-800 transition-colors duration-300 font-medium leading-relaxed">
                            {text}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Office hours */}
                <div className="mt-8 p-4 bg-emerald-50/50 backdrop-blur-sm border border-emerald-200/30 rounded-2xl">
                  <h4 className="font-bold text-emerald-800 mb-2">Office Hours</h4>
                  <p className="text-sm text-emerald-700">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <div className="relative group bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl p-8 lg:p-12 hover:bg-white hover:shadow-3xl hover:shadow-emerald-500/10 transition-all duration-700 overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/20 to-emerald-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-black mb-6 text-slate-900 group-hover:text-emerald-700 transition-colors duration-500">
                  How can we help you today?
                </h2>
                <p className="mb-10 text-lg text-slate-600 group-hover:text-slate-700 transition-colors duration-300 leading-relaxed">
                  Ready to power your future with sustainable energy? Let's discuss your renewable energy needs and explore how we can help you achieve your goals.
                </p>

                <form className="space-y-8">
                  {/* Form fields grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Enter your full name' },
                      { name: 'email', label: 'Your Email', type: 'email', placeholder: 'Enter your email address' },
                      { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Enter your phone number' }
                    ].map((field, i) => (
                      <div key={i} className="group/field">
                        <label className="block text-sm font-bold mb-3 text-slate-800 group-hover:text-emerald-700 transition-colors duration-300">
                          {field.label}
                        </label>
                        <div className="relative">
                          <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                            className="w-full border-2 border-slate-200 px-6 py-4 rounded-2xl text-slate-700 placeholder-slate-400 
                              focus:outline-none focus:ring-0 focus:border-emerald-500 focus:bg-emerald-50/30
                              hover:border-slate-300 transition-all duration-300 backdrop-blur-sm"
                          />
                          {/* Focus indicator */}
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full group-focus-within/field:w-full transition-all duration-500"></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message field */}
                  <div className="group/field">
                    <label className="block text-sm font-bold mb-3 text-slate-800 group-hover:text-emerald-700 transition-colors duration-300">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        placeholder="Tell us about your project or inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full border-2 border-slate-200 px-6 py-4 rounded-2xl text-slate-700 placeholder-slate-400 
                          focus:outline-none focus:ring-0 focus:border-emerald-500 focus:bg-emerald-50/30
                          hover:border-slate-300 transition-all duration-300 backdrop-blur-sm resize-none"
                      />
                      {/* Focus indicator */}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full group-focus-within/field:w-full transition-all duration-500"></div>
                    </div>
                  </div>

                  {/* Enhanced Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group/btn relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold text-lg rounded-2xl overflow-hidden hover:from-emerald-700 hover:to-emerald-800 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-1 transition-all duration-500"
                    >
                      {/* Animated background */}
                      <span className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/10 transform scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-700 ease-out"></span>
                      
                      {/* Button content */}
                      <FaPaperPlane className="relative z-10 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-all duration-300" />
                      <span className="relative z-10 group-hover/btn:scale-105 transition-transform duration-300">Send Message</span>
                      <FaArrowRight className="relative z-10 group-hover/btn:scale-110 group-hover/btn:translate-x-1 transition-all duration-300" />
                      
                      {/* Shine effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out"></span>
                    </button>

                    {/* Additional info */}
                    <p className="mt-4 text-sm text-slate-500 font-medium">
                      We typically respond within 24 hours during business days
                    </p>
                  </div>
                </form>
              </div>

              {/* Corner accents */}
              <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-emerald-400/30 rounded-tr-2xl group-hover:border-emerald-500/50 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-emerald-400/30 rounded-bl-2xl group-hover:border-emerald-500/50 transition-colors duration-500"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: '⚡', 
              title: 'Quick Response', 
              desc: 'We respond to all inquiries within 24 hours' 
            },
            { 
              icon: '🔒', 
              title: 'Secure & Private', 
              desc: 'Your information is protected and confidential' 
            },
            { 
              icon: '🎯', 
              title: 'Tailored Solutions', 
              desc: 'Custom renewable energy solutions for your needs' 
            }
          ].map((item, i) => (
            <div key={i} className="group text-center p-6 bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl hover:bg-white/80 hover:shadow-lg transition-all duration-500">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors duration-300">{item.title}</h3>
              <p className="text-slate-600 text-sm font-medium group-hover:text-slate-700 transition-colors duration-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}