import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import iconImg from '../assets/agentictrive_icon.svg';
import fullLogoImg from '../assets/agentictrive_logo.svg';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navLinkStyle = ({ isActive }) => 
    `text-sm font-medium transition-colors ${isActive ? 'text-primary font-bold' : 'text-white/70 hover:text-white'}`;

  const mobileNavLinkStyle = ({ isActive }) => 
    `text-lg font-semibold py-3 border-b border-white/5 transition-colors flex items-center justify-between ${isActive ? 'text-primary' : 'text-white/80 hover:text-white'}`;

  return (
    <div className="bg-[#09090B] min-h-screen text-white font-body-md overflow-x-hidden flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#09090B]/90 via-[#09090B]/75 to-[#09090B]/40 backdrop-blur-md border-b border-white/5 shadow-2xl h-20 flex items-center">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-4 md:px-margin-desktop w-full">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <img src={iconImg} alt="Agentictrive Icon" className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.7)] group-hover:scale-105 transition-transform" />
            <span className="font-headline-md text-base sm:text-lg lg:text-xl xl:text-2xl font-extrabold tracking-wider lg:tracking-widest uppercase flex items-center select-none">
              <span className="text-white drop-shadow-sm">AGENTIC</span>
              <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent ml-[2px] font-black drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">TRIVE</span>
            </span>
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
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-95 transition-all"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Slide-Down Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-[#09090B]/98 backdrop-blur-xl border-b border-white/10 shadow-2xl px-6 py-6 transition-all duration-300 animate-fadeIn">
            <div className="flex flex-col space-y-1 mb-6">
              <NavLink to="/" end onClick={scrollToTop} className={mobileNavLinkStyle}>
                <span>Home</span>
                <span className="text-white/40">➔</span>
              </NavLink>
              <NavLink to="/solutions" onClick={scrollToTop} className={mobileNavLinkStyle}>
                <span>Solutions</span>
                <span className="text-white/40">➔</span>
              </NavLink>
              <NavLink to="/systems" onClick={scrollToTop} className={mobileNavLinkStyle}>
                <span>Business Systems</span>
                <span className="text-white/40">➔</span>
              </NavLink>
              <NavLink to="/about" onClick={scrollToTop} className={mobileNavLinkStyle}>
                <span>About Us</span>
                <span className="text-white/40">➔</span>
              </NavLink>
              <NavLink to="/contact" onClick={scrollToTop} className={mobileNavLinkStyle}>
                <span>Contact</span>
                <span className="text-white/40">➔</span>
              </NavLink>
            </div>

            <Link 
              to="/contact" 
              onClick={scrollToTop} 
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-base py-3.5 rounded-xl hover:opacity-95 transition-all text-center block shadow-lg shadow-blue-500/25 active:scale-98"
            >
              Book Free AI Audit →
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050505] pt-16 pb-10 mt-auto">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div className="sm:col-span-2 md:col-span-1">
              <Link to="/" onClick={scrollToTop} className="flex items-center gap-3.5 mb-4 group">
                <img src={iconImg} alt="Agentictrive Icon" className="w-11 h-11 object-contain group-hover:scale-105 transition-transform" />
                <span className="font-headline-md text-xl md:text-2xl font-extrabold tracking-widest uppercase flex items-center select-none">
                  <span className="text-white drop-shadow-sm">AGENTIC</span>
                  <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent ml-[3px] font-black">TRIVE</span>
                </span>
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
                <li><Link to="/solutions" onClick={scrollToTop} className="hover:text-white transition-colors">AI Web Development</Link></li>
                <li><Link to="/solutions" onClick={scrollToTop} className="hover:text-white transition-colors">Voice AI Agents</Link></li>
                <li><Link to="/systems" onClick={scrollToTop} className="hover:text-white transition-colors">CRM Automation</Link></li>
                <li><Link to="/systems" onClick={scrollToTop} className="hover:text-white transition-colors">Enterprise Workflows</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-base text-white mb-4">Get in Touch</h5>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-center gap-2">
                  <span>📍</span> <span>Tirupati, AP, 517501</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✉️</span> <a href="mailto:agentictrive@gmail.com" className="hover:text-white transition-colors">agentictrive@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>📱</span> <a href="https://wa.me/916303690660" className="hover:text-white transition-colors">+91 63036 90660</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Agentictrive Agency. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/contact" onClick={scrollToTop} className="hover:text-white/80 transition-colors">Privacy Policy</Link>
              <Link to="/contact" onClick={scrollToTop} className="hover:text-white/80 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
