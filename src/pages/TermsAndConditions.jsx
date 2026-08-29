import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
  useEffect(() => {
    document.title = "Terms & Conditions | AGENTICTRIVE";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 px-6 max-w-4xl mx-auto text-white/90">
      {/* Header Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
        <span>Legal Terms</span>
      </div>

      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
        Terms & Conditions
      </h1>
      <p className="text-sm text-white/50 mb-8">
        Effective Date: <span className="text-blue-400 font-medium">August 15, 2026</span> | Governing Website Use & Services
      </p>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 space-y-8 text-sm md:text-base leading-relaxed text-white/80 backdrop-blur-md shadow-2xl">
        <section className="border-b border-white/10 pb-6">
          <p>
            These Terms & Conditions ("Terms") govern your access to and use of <a href="https://agentictrive.in" className="text-blue-400 hover:underline">https://agentictrive.in</a> (the "Website") and any services offered by <strong className="text-white">AgenticTrive Technologies</strong>, operating as <strong className="text-blue-400">AGENTICTRIVE</strong> ("we", "us", "our"). By accessing the Website or engaging our services, you ("you", "client", "user") agree to be bound by these Terms.
          </p>
        </section>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">1.</span> About Us
          </h2>
          <p>
            <strong className="text-white">AGENTICTRIVE</strong> is a digital agency based in India, providing AI automation, business systems, workflow automation, custom web development, landing pages, and AI integrations.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">2.</span> Use of the Website
          </h2>
          <p>You agree to use the Website only for lawful purposes. You must not:</p>
          <ul className="list-disc list-inside space-y-1 text-white/70 pl-2">
            <li>Attempt to gain unauthorized access to the Website, servers, or database</li>
            <li>Interfere with Website security or performance (e.g., via malware, automated scraping, or overload attacks)</li>
            <li>Use Website graphics, brand code, or content without explicit written permission</li>
            <li>Submit fraudulent or deceptive enquiries through our lead forms</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">3.</span> Services & Client Agreements
          </h2>
          <p>
            Descriptions of services on the Website are for general information. Specific project scopes, deliverables, timelines, and costs for client engagements are governed by a separate signed <strong className="text-white">Proposal</strong>, <strong className="text-white">Statement of Work (SOW)</strong>, or <strong className="text-white">Master Service Agreement (MSA)</strong>.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">4.</span> Intellectual Property
          </h2>
          <p>
            All original website design, code, typography, animations, and logos on <strong className="text-white">agentictrive.in</strong> belong to AgenticTrive Technologies.
          </p>
          <p className="text-xs text-white/60">
            For client projects, full ownership of custom deliverables transfers to the client only upon <strong>full and final payment</strong> as specified in the applicable Statement of Work.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">5.</span> Third-Party Tools & API Dependencies
          </h2>
          <p>
            Our automation and AI solutions may rely on third-party services (e.g., cloud hosting, n8n, OpenAI, Ultravox, WhatsApp Business API). AGENTICTRIVE is not liable for service outages, policy updates, or API pricing revisions imposed by these third-party providers.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">6.</span> Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable Indian law, AgenticTrive Technologies's total liability arising out of Website use or services shall not exceed the total fees paid by the client for the specific service in the preceding 3 months.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">7.</span> Governing Law & Jurisdiction
          </h2>
          <p>
            These Terms are governed by the laws of India. Courts at <strong className="text-white">Tirupati, Andhra Pradesh</strong> shall have exclusive jurisdiction over any legal disputes.
          </p>
        </section>

        {/* Contact CTA */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">Questions? Contact: agentictrive@gmail.com</p>
          <Link to="/contact" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-full transition-all shadow-md">
            Get in Touch →
          </Link>
        </div>
      </div>
    </div>
  );
}
