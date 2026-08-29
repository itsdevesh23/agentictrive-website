import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import iconImg from '../assets/agentictrive_icon.png';
import fullLogoImg from '../assets/agentictrive_icon_2.png';
import textImg from '../assets/agentictrive_text.png';
import CookieBanner from './CookieBanner';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navLinkStyle = ({ isActive }) => 
    `text-sm font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-white/70 hover:text-white'}`;

  const mobileNavLinkStyle = ({ isActive }) => 
    `text-lg font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-between ${
      isActive 
        ? 'bg-blue-600/20 text-primary border border-blue-500/40' 
        : 'text-white/90 hover:text-white bg-white/5 hover:bg-white/10'
    }`;

  return (
    <div className="bg-[#09090B] min-h-screen text-white font-body-md overflow-x-hidden flex flex-col relative">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#09090B] via-[#09090B]/90 to-[#09090B]/70 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <nav className="h-20 flex items-center justify-between max-w-container-max mx-auto px-4 md:px-margin-desktop w-full">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center group shrink-0">
            <img src={fullLogoImg} alt="Agentictrive" className="h-6 sm:h-7 lg:h-8 w-auto max-w-[170px] sm:max-w-[200px] object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] group-hover:scale-105 transition-transform" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-8">
            <NavLink to="/" end onClick={scrollToTop} className={navLinkStyle}>Home</NavLink>
            <NavLink to="/solutions" onClick={scrollToTop} className={navLinkStyle}>Solutions</NavLink>
            <NavLink to="/systems" onClick={scrollToTop} className={navLinkStyle}>Business Systems</NavLink>
            <NavLink to="/about" onClick={scrollToTop} className={navLinkStyle}>About Us</NavLink>
            <NavLink to="/contact" onClick={scrollToTop} className={navLinkStyle}>Contact</NavLink>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block shrink-0">
            <Link to="/contact" onClick={scrollToTop} className="bg-white text-black font-semibold text-xs xl:text-sm px-4 xl:px-5 py-2.5 rounded-full hover:bg-white/90 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-md whitespace-nowrap">
              Book Free AI Audit
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-95 transition-all flex items-center justify-center z-50"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Fullscreen Menu Drawer (Rendered outside header to escape backdrop-filter CSS clipping) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-[#09090B] border-t border-white/10 shadow-2xl px-6 pt-6 pb-12 flex flex-col justify-between overflow-y-auto z-[999]">
          <div className="flex flex-col space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1 px-1">Navigation</span>
            <NavLink to="/" end onClick={scrollToTop} className={mobileNavLinkStyle}>
              <span>Home</span>
              <span className="text-[#3B82F6]">➔</span>
            </NavLink>
            <NavLink to="/solutions" onClick={scrollToTop} className={mobileNavLinkStyle}>
              <span>Solutions</span>
              <span className="text-[#3B82F6]">➔</span>
            </NavLink>
            <NavLink to="/systems" onClick={scrollToTop} className={mobileNavLinkStyle}>
              <span>Business Systems</span>
              <span className="text-[#3B82F6]">➔</span>
            </NavLink>
            <NavLink to="/about" onClick={scrollToTop} className={mobileNavLinkStyle}>
              <span>About Us</span>
              <span className="text-[#3B82F6]">➔</span>
            </NavLink>
            <NavLink to="/contact" onClick={scrollToTop} className={mobileNavLinkStyle}>
              <span>Contact</span>
              <span className="text-[#3B82F6]">➔</span>
            </NavLink>
          </div>

          <div className="pt-6 space-y-3">
            <Link 
              to="/contact" 
              onClick={scrollToTop} 
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-base py-4 rounded-xl hover:opacity-95 transition-all text-center block shadow-lg shadow-blue-500/25 active:scale-98"
            >
              Book Free AI Audit →
            </Link>
            
            <a 
              href="https://wa.me/916303690660" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-sm py-3 rounded-xl hover:bg-emerald-500/20 transition-all text-center flex items-center justify-center gap-2 active:scale-98"
            >
              <span>💬</span> Chat on WhatsApp (+91 63036 90660)
            </a>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050505] pt-14 pb-10 mt-auto">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div className="sm:col-span-2 md:col-span-1">
              <Link to="/" onClick={scrollToTop} className="flex items-center mb-4 group">
                <img src={fullLogoImg} alt="Agentictrive" className="h-7 md:h-8 w-auto max-w-[200px] md:max-w-[220px] object-contain group-hover:scale-105 transition-transform" />
              </Link>
              <p className="text-sm text-white/60 leading-relaxed max-w-sm">Building intelligent, autonomous systems for the modern workforce.</p>
            </div>

            <div>
              <h5 className="font-bold text-base text-white mb-4">Company</h5>
              <ul className="space-y-3 text-sm text-white/60">
                <li><Link to="/solutions" onClick={scrollToTop} className="hover:text-white transition-colors">Solutions</Link></li>
                <li><Link to="/systems" onClick={scrollToTop} className="hover:text-white transition-colors">Business Systems</Link></li>
                <li><Link to="/about" onClick={scrollToTop} className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" onClick={scrollToTop} className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-base text-white mb-4">Services</h5>
              <ul className="space-y-3 text-sm text-white/60">
                <li><Link to="/solutions" onClick={scrollToTop} className="hover:text-white transition-colors">Custom Web Development</Link></li>
                <li><Link to="/solutions" onClick={scrollToTop} className="hover:text-white transition-colors">Landing Pages & Funnels</Link></li>
                <li><Link to="/solutions" onClick={scrollToTop} className="hover:text-white transition-colors">Website Redesign & Speed</Link></li>
                <li><Link to="/solutions" onClick={scrollToTop} className="hover:text-white transition-colors">Voice AI & Automation</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-base text-white mb-4">Get in Touch</h5>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2">
                  <span className="shrink-0 mt-0.5">📍</span> <span className="text-xs sm:text-sm">22-6-45 Akkarampalli, Tirupati, AP, 517501</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✉️</span> <a href="mailto:agentictrive@gmail.com" className="hover:text-white transition-colors text-xs sm:text-sm">agentictrive@gmail.com</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="shrink-0 mt-0.5">📱</span>
                  <div className="flex flex-col space-y-1 text-xs sm:text-sm">
                    <a href="https://wa.me/916303690660" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+91 63036 90660</a>
                    <a href="https://wa.me/919182200626" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+91 91822 00626</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 text-center sm:text-left">
            <p>© {new Date().getFullYear()} AgenticTrive Technologies. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <Link to="/privacy-policy" onClick={scrollToTop} className="hover:text-white/80 transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" onClick={scrollToTop} className="hover:text-white/80 transition-colors">Terms & Conditions</Link>
              <Link to="/refund-policy" onClick={scrollToTop} className="hover:text-white/80 transition-colors">Refund Policy</Link>
              <Link to="/cookie-policy" onClick={scrollToTop} className="hover:text-white/80 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
      <CookieBanner />
    </div>
  );
}
