import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function RefundPolicy() {
  useEffect(() => {
    document.title = "Refund & Cancellation Policy | AGENTICTRIVE";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 px-6 max-w-4xl mx-auto text-white/90">
      {/* Header Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
        <span>Payment & Service Terms</span>
      </div>

      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
        Refund & Cancellation Policy
      </h1>
      <p className="text-sm text-white/50 mb-8">
        Effective Date: <span className="text-blue-400 font-medium">August 15, 2026</span> | Service Delivery & Advance Terms
      </p>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 space-y-8 text-sm md:text-base leading-relaxed text-white/80 backdrop-blur-md shadow-2xl">
        <section className="border-b border-white/10 pb-6">
          <p>
            This Refund & Cancellation Policy applies to digital services provided by <strong className="text-white">AgenticTrive Technologies</strong> ("<strong className="text-blue-400">AGENTICTRIVE</strong>"). Because our services (AI automation, custom website development, and workflow integrations) involve customized engineering, strategy, and third-party resource allocation from the outset, this policy outlines how cancellations and refunds are handled.
          </p>
        </section>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">1.</span> Advance & Booking Payments
          </h2>
          <p>
            Projects commence after receipt of an agreed advance payment (as stated in the project SOW/Proposal). Advance payments cover initial planning, discovery, architecture design, and dedicated developer allocation, and are <strong className="text-white">non-refundable</strong> once work has commenced.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">2.</span> Client Cancellations
          </h2>
          <ul className="list-disc list-inside space-y-2 text-white/70 pl-2">
            <li>
              <strong className="text-white">Before work starts:</strong> If cancelled prior to any design, code, or discovery work, the advance is refundable after deducting transaction gateway charges and third-party domain/hosting costs already incurred.
            </li>
            <li>
              <strong className="text-white">After work has commenced:</strong> If cancelled mid-project, completed work will be invoiced on a milestone or pro-rata basis, and remaining unearned advance (if any) will be refunded.
            </li>
            <li>
              <strong className="text-white">Retainers & Ongoing Support:</strong> Cancellation requires written notice as specified in your agreement (typically 15–30 days). Fees for current billing cycles are non-refundable.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">3.</span> Non-Refundable Deliverables
          </h2>
          <p>The following items are strictly non-refundable once purchased or built:</p>
          <ul className="list-disc list-inside space-y-1 text-white/70 pl-2">
            <li>Domain registrations, hosting server deployments, or SSL certificates</li>
            <li>Third-party API subscriptions, software licenses, or WhatsApp API setup fees</li>
            <li>Custom automation workflows or web pages already delivered and accepted</li>
            <li>Paid AI Audits or completed consultation sessions</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">4.</span> Revisions vs. Refunds
          </h2>
          <p>
            Client satisfaction is our priority. Minor modifications within the agreed scope are addressed through revisions rather than refunds. If you encounter issues with a deliverable, we will resolve them promptly per the Statement of Work criteria.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">5.</span> How to Request Cancellation
          </h2>
          <p>
            To submit a cancellation or refund request, email <a href="mailto:deveshmunagala23@gmail.com" className="text-blue-400 hover:underline">deveshmunagala23@gmail.com</a> with your invoice number and project details. Our team will review the request and respond within <strong className="text-white font-mono">10 business days</strong>.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-blue-500 font-mono text-lg">6.</span> Governing Law
          </h2>
          <p>
            This policy is governed by the laws of India, subject to exclusive court jurisdiction in <strong className="text-white">Tirupati, Andhra Pradesh</strong>.
          </p>
        </section>

        {/* Contact CTA */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">Need assistance? Email: deveshmunagala23@gmail.com</p>
          <Link to="/contact" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-full transition-all shadow-md">
            Support Form →
          </Link>
        </div>
      </div>
    </div>
  );
}
