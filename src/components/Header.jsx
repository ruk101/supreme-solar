'use client';
import { useState, useEffect } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-500 ease-in-out ${
      scrolled 
        ? 'backdrop-blur-2xl bg-white/95 shadow-2xl border-b border-emerald-100/20' 
        : 'backdrop-blur-lg bg-white/10 border-b border-white/5'
    }`}>
      {/* Animated Top Bar */}
      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
        scrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'
      }`}>
        <div className="bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 text-white text-sm py-3 px-4 relative overflow-hidden">
          {/* Animated background particles */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-emerald-300 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-emerald-200 rounded-full animate-pulse delay-300"></div>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-white/90">
              <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaPhone className="text-xs text-white" />
                </div>
                <span className="font-medium tracking-wide">+94 112 434 000</span>
              </div>
              <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-xs text-white" />
                </div>
                <span className="font-medium tracking-wide">info@supremesolar.lk</span>
              </div>
            </div>
            
            <div className="flex gap-4 text-white/70">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center 
                           hover:bg-emerald-500 hover:text-white hover:scale-125 hover:-translate-y-1 
                           transition-all duration-300 ease-out group"
                >
                  <Icon className="text-sm group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="px-4 py-4 relative">
        {/* Floating glow effect behind navbar */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5 blur-xl"></div>
        
        <div className="flex justify-between items-center max-w-7xl mx-auto relative z-10">
          {/* Logo with enhanced animation */}
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400/20 blur-lg rounded-full group-hover:bg-emerald-400/40 transition-all duration-500"></div>
              <img
                src="/supreme_solar_header_logo.png"
                alt="Supreme Solar"
                className="h-12 w-auto sm:h-14 relative z-10 drop-shadow-lg group-hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-1 text-[15px] font-semibold">
            {[
              { name: 'Home', href: '/' },
              { name: 'About Us', href: '/about' },
              { name: 'The Project', href: '/the-project' },
              { name: 'Sustainability', href: '/sustainability' },
              { name: 'Leadership', href: '/leadership' },
              { name: 'Careers', href: '/careers' },
              { name: 'Contact Us', href: '/contact' },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full transition-all duration-500 ease-out group overflow-hidden
                           ${scrolled ? 'text-slate-800 hover:text-white' : 'text-white hover:text-slate-900'}
                           hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-600 
                           hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5`}
                >
                  {/* Animated background */}
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out rounded-full"></span>
                  
                  {/* Glowing dot indicator */}
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  
                  <span className="relative z-10 font-medium tracking-wide">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Enhanced Hamburger for Mobile */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110
                       ${scrolled ? 'text-slate-800 bg-white/80' : 'text-white bg-white/10'} 
                       backdrop-blur-sm border border-white/20 hover:bg-emerald-500 hover:text-white`}
            >
              <div className={`transition-all duration-300 ${menuOpen ? 'rotate-180 scale-75' : 'rotate-0 scale-100'}`}>
                {menuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Nav Panel */}
        <div className={`md:hidden transition-all duration-700 ease-out overflow-hidden ${
          menuOpen 
            ? 'max-h-screen opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        }`}>
          <div className="mt-6 mx-4 backdrop-blur-2xl bg-white/95 rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-white/50"></div>
            
            <ul className="relative z-10 py-4">
              {[
                { name: 'Home', href: '/index' },
                { name: 'About Us', href: '/about' },
                { name: 'The Project', href: '/the-project' },
                { name: 'Sustainability', href: '/sustainability' },
                { name: 'Leadership', href: '/leadership' },
                { name: 'Careers', href: '/careers' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link, i) => (
                <li key={i} style={{ animationDelay: `${i * 100}ms` }} 
                    className={`transform transition-all duration-500 ease-out ${
                      menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}>
                  <a
                    href={link.href}
                    className="block mx-4 my-1 py-3 px-4 rounded-xl text-slate-800 font-semibold
                             hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-600 
                             hover:text-white hover:shadow-lg hover:shadow-emerald-500/20
                             hover:scale-[0.98] transition-all duration-300 group"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="flex items-center justify-between">
                      {link.name}
                      <span className="w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}