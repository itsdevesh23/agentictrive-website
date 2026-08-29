import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(true); // Default true to avoid flash on SSR/load

  useEffect(() => {
    const consent = localStorage.getItem('agentictrive_cookie_consent');
    if (!consent) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('agentictrive_cookie_consent', 'accepted');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[9999] bg-[#0d1117]/95 border border-blue-500/30 backdrop-blur-xl p-5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-white text-xs md:text-sm animate-fade-in flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-base">🍪</span>
          <h4 className="font-bold text-white text-sm">Cookie & Privacy Notice</h4>
        </div>
      </div>
      <p className="text-white/70 leading-relaxed text-xs">
        We use essential cookies and analytics to enhance your experience. By continuing to browse, you consent to our{' '}
        <Link to="/privacy-policy" className="text-blue-400 underline hover:text-blue-300">
          Privacy Policy
        </Link>{' '}
        and{' '}
        <Link to="/cookie-policy" className="text-blue-400 underline hover:text-blue-300">
          Cookie Policy
        </Link>.
      </p>
      <div className="flex items-center justify-end gap-3 pt-1">
        <button
          onClick={handleAccept}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-all shadow-md active:scale-95"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
