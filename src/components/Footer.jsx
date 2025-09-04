import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-48 h-48 bg-emerald-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-emerald-600/10 rounded-full blur-lg animate-pulse delay-500"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
      </div>

      {/* Top decorative border */}
      <div className="relative">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full h-16 fill-current text-slate-800"
          preserveAspectRatio="none"
        >
          <path d="M0,0 Q360,60 720,0 T1440,0 L1440,120 L0,120 Z" />
        </svg>
      </div>

      <div className="relative z-10 pt-12 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          {/* Logo & About Section - Enhanced */}
          <div className="text-center md:text-left group">
            <div className="relative inline-block mb-8">
              {/* Glowing background for logo */}
              <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img
                src="/logo-footer.png"
                alt="Supreme Solar"
                className="relative h-16 mx-auto md:mx-0 drop-shadow-2xl group-hover:scale-105 transition-all duration-500"
              />
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-8 max-w-md mx-auto md:mx-0 text-base group-hover:text-white transition-colors duration-500">
              Delivering high-performance solar projects with cutting-edge technology.
              Backed by strong financial partnerships, executing sustainable energy
              solutions for economic and environmental growth.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex justify-center md:justify-start gap-4">
              {[
                { Icon: FaFacebookF, color: 'hover:bg-blue-600' },
                { Icon: FaTwitter, color: 'hover:bg-sky-500' },
                { Icon: FaLinkedinIn, color: 'hover:bg-blue-700' },
                { Icon: FaInstagram, color: 'hover:bg-pink-600' },
              ].map(({ Icon, color }, i) => (
                <a
                  key={i}
                  href="#"
                  className={`relative w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-400 ${color} hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 overflow-hidden group`}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
                  <Icon className="relative z-10 text-lg group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links - Enhanced */}
          <div className="text-center md:text-left">
            <div className="relative mb-8">
              <h3 className="text-xl font-bold mb-2 text-white flex items-center justify-center md:justify-start gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                Useful Links
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto md:mx-0 rounded-full"></div>
            </div>
            
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about.html' },
                { name: 'The Project', href: '/the-project.html' },
                { name: 'Careers', href: '/careers.html' },
                { name: 'Contact Us', href: '/contact.html' },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="relative text-slate-300 hover:text-white transition-all duration-300 group inline-flex items-center gap-3 text-base"
                  >
                    <div className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-emerald-400 group-hover:scale-150 transition-all duration-300"></div>
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Enhanced */}
          <div className="text-center md:text-left">
            <div className="relative mb-8">
              <h3 className="text-xl font-bold mb-2 text-white flex items-center justify-center md:justify-start gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-500"></div>
                Contact
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto md:mx-0 rounded-full"></div>
            </div>
            
            <ul className="space-y-6">
              {[
                { Icon: FaPhone, text: '+94 112 434 000', color: 'text-emerald-400' },
                { Icon: FaEnvelope, text: 'info@supremesolar.lk', color: 'text-emerald-400' },
                { 
                  Icon: FaMapMarkerAlt, 
                  text: (
                    <>
                      33<sup>rd</sup> Floor, West Tower, World Trade Center,<br />
                      Colombo 01, Sri Lanka
                    </>
                  ), 
                  color: 'text-emerald-400' 
                },
              ].map(({ Icon, text, color }, i) => (
                <li key={i} className="flex items-start justify-center md:justify-start gap-4 group">
                  <div className={`w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center ${color} group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-all duration-300`}>
                    <Icon className="text-lg group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300 text-base leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Divider */}
        <div className="mt-16 mb-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700/50"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-200"></div>
                  <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse delay-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - Enhanced */}
        <div className="text-center">
          <p className="text-slate-400 text-sm hover:text-slate-300 transition-colors duration-300">
            © 2024 Supreme Solar. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex justify-between items-end px-8 pb-4">
          <div className="w-16 h-16 border-l-2 border-b-2 border-emerald-400/20 rounded-bl-lg"></div>
          <div className="w-16 h-16 border-r-2 border-b-2 border-emerald-400/20 rounded-br-lg"></div>
        </div>
      </div>
    </footer>
  );
}