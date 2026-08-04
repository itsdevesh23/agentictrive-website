import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logoImg from '../assets/agentictrive_logo.svg';

export default function Layout() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinkStyle = ({ isActive }) => 
    `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-white/70 hover:text-white'}`;

  return (
    <div className="bg-[#09090B] min-h-screen text-white font-body-md overflow-x-hidden flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b-0 border-white/5 shadow-sm h-20 flex items-center">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop w-full">
          <Link to="/" onClick={scrollToTop} className="flex items-center gap-3">
            <img src={logoImg} alt="Agentictrive Logo" className="w-9 h-9 object-contain rounded-lg shadow-md" />
            <span className="font-headline-md text-2xl font-bold text-white tracking-wide">Agentictrive</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" end onClick={scrollToTop} className={navLinkStyle}>Home</NavLink>
            <NavLink to="/solutions" onClick={scrollToTop} className={navLinkStyle}>Solutions</NavLink>
            <NavLink to="/systems" onClick={scrollToTop} className={navLinkStyle}>Business Systems</NavLink>
            <NavLink to="/about" onClick={scrollToTop} className={navLinkStyle}>About Us</NavLink>
            <NavLink to="/contact" onClick={scrollToTop} className={navLinkStyle}>Contact</NavLink>
          </div>
          <Link to="/contact" onClick={scrollToTop} className="bg-white text-black font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-white/90 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
            Book Free AI Audit
          </Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050505] pt-20 pb-10 mt-auto">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-2 md:col-span-1">
              <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 mb-6">
                <img src={logoImg} alt="Agentictrive Logo" className="w-8 h-8 object-contain rounded-lg" />
                <span className="font-headline-md text-2xl font-bold text-white tracking-wide">Agentictrive</span>
              </Link>
              <p className="text-sm text-white/50">Building intelligent systems for the modern workforce.</p>
            </div>
            <div>
              <h5 className="font-bold mb-6">Company</h5>
              <ul className="space-y-4 text-sm text-white/60">
                <li><Link to="/solutions" onClick={scrollToTop} className="hover:text-white transition-colors">Solutions</Link></li>
                <li><Link to="/systems" onClick={scrollToTop} className="hover:text-white transition-colors">Business Systems</Link></li>
                <li><Link to="/about" onClick={scrollToTop} className="hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6">Resources</h5>
              <ul className="space-y-4 text-sm text-white/60">
                <li><Link to="/contact" onClick={scrollToTop} className="hover:text-white transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6">Connect</h5>
              <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="mailto:agentictrive@gmail.com" className="hover:text-white transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-mono-code">
            <p>&copy; 2026 Agentictrive Agency. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
