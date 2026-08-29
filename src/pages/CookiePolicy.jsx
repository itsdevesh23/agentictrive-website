import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookiePolicy() {
  useEffect(() => {
    document.title = "Cookie Policy | AGENTICTRIVE";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 px-6 max-w-4xl mx-auto text-white/90">
      {/* Header Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
        <span>Cookies & Tracking</span>
      </div>

      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
        Cookie Policy
      </h1>
      <p className="text-sm text-white/50 mb-8">
        Effective Date: <span className="text-blue-400 font-medium">August 15, 2026</span> | AGENTICTRIVE Privacy Standards
      </p>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 space-y-8 text-sm md:text-base leading-relaxed text-white/80 backdrop-blur-md shadow-2xl">
        <section className="border-b border-white/10 pb-6">
          <p>
            This Cookie Policy explains how <strong className="text-blue-400">AGENTICTRIVE</strong> (<a href="https://agentictrive.in" className="text-blue-400 hover:underline">https://agentictrive.in</a>) uses cookies and similar tracking technologies when you browse our website.
          </p>
        </section>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">1.</span> What Are Cookies?
          </h2>
          <p>
            Cookies are small text files placed on your computer or mobile device when you visit a website. They allow websites to work efficiently, recognize your device, and provide performance metrics.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">2.</span> Types of Cookies We Use
          </h2>
          <ul className="list-disc list-inside space-y-2 text-white/70 pl-2">
            <li><strong className="text-white">Essential Cookies:</strong> Critical for navigation, secure forms, and page loading.</li>
            <li><strong className="text-white">Analytics Cookies:</strong> Help us measure visitor engagement and optimize website speed (e.g., Google Analytics).</li>
            <li><strong className="text-white">Functionality Cookies:</strong> Remember your site preferences for a seamless experience.</li>
          </ul>
          <p className="text-xs text-white/50 bg-white/5 p-3 rounded-lg border border-white/10">
            We do not sell cookie data to third-party ad brokers.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">3.</span> Managing Cookies
          </h2>
          <p>
            You can control or disable cookies through your web browser settings. Note that disabling essential cookies may impact specific website features.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">4.</span> Contact Us
          </h2>
          <p>
            For questions about our cookie practices, email us at <a href="mailto:agentictrive@gmail.com" className="text-blue-400 hover:underline">agentictrive@gmail.com</a>.
          </p>
        </section>

        {/* Contact CTA */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">Read our full <Link to="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</Link></p>
          <Link to="/contact" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-full transition-all shadow-md">
            Contact Support →
          </Link>
        </div>
      </div>
    </div>
  );
}
