import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | AGENTICTRIVE";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 px-6 max-w-4xl mx-auto text-white/90">
      {/* Header Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
        <span>Legal & Compliance</span>
      </div>

      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
        Privacy Policy
      </h1>
      <p className="text-sm text-white/50 mb-8">
        Effective Date: <span className="text-blue-400 font-medium">August 15, 2026</span> | Framed under DPDPA Act 2023 & IT Act 2000
      </p>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 space-y-8 text-sm md:text-base leading-relaxed text-white/80 backdrop-blur-md shadow-2xl">
        <section className="border-b border-white/10 pb-6">
          <p>
            This Privacy Policy explains how <strong className="text-white">AgenticTrive Technologies</strong>, operating as <strong className="text-blue-400">AGENTICTRIVE</strong> ("we", "us", "our"), collects, uses, stores, and protects personal information when you visit <a href="https://agentictrive.in" className="text-blue-400 hover:underline">https://agentictrive.in</a> (the "Website"), submit a form (including contact, lead, or AI audit forms), or engage us for services. This policy is framed in line with the <strong className="text-white">Digital Personal Data Protection Act, 2023 ("DPDPA")</strong> and other applicable Indian laws.
          </p>
          <p className="mt-3 text-white/60 text-xs md:text-sm">
            By using the Website or submitting your information to us, you agree to the practices described in this Policy.
          </p>
        </section>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">1.</span> Who We Are
          </h2>
          <p>
            <strong className="text-white">AgenticTrive Technologies</strong> is a Sole Proprietorship operating under the brand <strong className="text-white">AGENTICTRIVE</strong>, providing AI automation, business systems and workflow automation, website/web development, and related digital and AI integration services, based in India.
          </p>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1 text-xs md:text-sm">
            <p><strong className="text-white">Email:</strong> agentictrive@gmail.com</p>
            <p><strong className="text-white">Phone:</strong> +91-6303690660</p>
            <p><strong className="text-white">Address:</strong> 10-6-259, K.K.Layout, Tirupati, Andhra Pradesh, 517501</p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">2.</span> What Personal Data We Collect
          </h2>
          <p>We collect personal data in the following ways:</p>
          <ul className="list-disc list-inside space-y-2 text-white/70 pl-2">
            <li><strong className="text-white">Information you give us directly:</strong> Name, email address, phone number, company/business details, project scope shared via forms or WhatsApp.</li>
            <li><strong className="text-white">Information collected automatically:</strong> IP address, browser type, device info, operating system, referring URL, and browsing activity via cookies.</li>
            <li><strong className="text-white">Third-party business tools:</strong> Interactions through scheduling tools, analytics platforms, or WhatsApp communications linked to your enquiry.</li>
          </ul>
          <p className="text-xs text-white/50 bg-blue-500/10 border border-blue-500/20 p-3 rounded-lg">
            🔒 Note: We do <strong>not</strong> store or process sensitive credit/debit card numbers. All payments are handled directly by PCI-compliant payment gateways.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">3.</span> Why We Collect and Use Your Data
          </h2>
          <p>We use your data strictly for legitimate operational purposes, including to:</p>
          <ul className="list-disc list-inside space-y-1 text-white/70 pl-2">
            <li>Respond to enquiries submitted via contact, lead, or AI audit forms</li>
            <li>Prepare proposals, quotations, and Statements of Work</li>
            <li>Deliver contracted services (development, automation, integrations)</li>
            <li>Send invoices and process payments</li>
            <li>Provide continuous client support and project updates</li>
            <li>Comply with tax and legal obligations under Indian law</li>
          </ul>
          <p className="text-white font-medium text-xs md:text-sm">We never sell or rent your personal data to third parties.</p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">4.</span> Consent & User Rights
          </h2>
          <p>
            Under the DPDPA 2023, data is collected with your explicit consent given when submitting our web forms. You have the right to access, correct, or request erasure of your personal data at any time, or withdraw consent by emailing <a href="mailto:agentictrive@gmail.com" className="text-blue-400 hover:underline">agentictrive@gmail.com</a>.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">5.</span> How We Share Your Data
          </h2>
          <p>
            We only share data with verified third-party cloud tools necessary to run our service (hosting, email platforms, n8n automation servers, payment processors) or where legally mandated by Indian law enforcement agencies.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">6.</span> Data Security & Retention
          </h2>
          <p>
            We employ industry-standard encryption, firewall protection, and restricted access protocols to secure your data. Non-converting lead data is deleted or anonymized within a reasonable period.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">7.</span> Grievance Redressal Officer
          </h2>
          <p>
            In compliance with the Information Technology Act, 2000 and DPDPA Rules 2023, our designated Grievance Officer details are:
          </p>
          <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-4 text-xs md:text-sm space-y-1">
            <p><strong className="text-white">Name:</strong> Devesh Munagala</p>
            <p><strong className="text-white">Grievance Email:</strong> <a href="mailto:deveshmunagala23@gmail.com" className="text-blue-400 hover:underline">deveshmunagala23@gmail.com</a></p>
            <p><strong className="text-white">Address:</strong> 10-6-259, K.K.Layout, Tirupati, Andhra Pradesh, 517501</p>
          </div>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">8.</span> Governing Law & Jurisdiction
          </h2>
          <p>
            This Policy is governed by the laws of India. Courts at <strong className="text-white">Tirupati, Andhra Pradesh</strong> shall have exclusive jurisdiction over any disputes.
          </p>
        </section>

        {/* Contact CTA */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">Questions? Contact us at agentictrive@gmail.com</p>
          <Link to="/contact" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-full transition-all shadow-md">
            Contact Privacy Team →
          </Link>
        </div>
      </div>
    </div>
  );
}
