import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Store, Building2, PhoneCall, MonitorSmartphone, Globe, Users, 
  CheckCircle2, Plus, Minus, ArrowDown, XCircle, X, Check
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

const systems = [
  {
    id: "restaurant",
    title: "Restaurant Growth System",
    icon: <Store size={48} className="text-primary" />,
    challenges: "Missed reservations during rush hour, staff overwhelmed by phone calls instead of serving guests, and poor customer data collection.",
    who: "Fine dining, busy casual restaurants, and multi-location franchises.",
    workflow: ["Customer calls/messages", "AI Voice/Chat Agent Answers 24/7", "Books Table in CRM", "Sends SMS Confirmation"],
    included: ["AI Voice Booking Agent", "WhatsApp Automated Ordering", "CRM & Table Sync", "Review Automation"],
    outcome: "Higher table turnover, zero missed bookings, and staff completely freed from phone duty.",
    roi: "Average 20% increase in bookings within 30 days.",
    faq: [
      { q: "Does the voice agent sound natural?", a: "Yes, our voice agents use advanced models to sound completely human, handle interruptions, and understand menu questions." },
      { q: "Does it integrate with Resy or OpenTable?", a: "We build custom API integrations to sync directly with your existing reservation software." }
    ]
  },
  {
    id: "hotel",
    title: "Hotel Automation System",
    icon: <Building2 size={48} className="text-secondary" />,
    challenges: "Over-reliance on expensive OTAs (Booking.com), delayed responses to guest inquiries, and inefficient check-in processes.",
    who: "Boutique hotels, resorts, and mid-sized hotel chains.",
    workflow: ["Guest asks question via WhatsApp", "AI Concierge Answers instantly", "Offers direct booking discount", "Guest books directly"],
    included: ["24/7 Multilingual AI Concierge", "Direct Booking Optimizer", "Automated Upselling (Spa/Dining)", "Post-stay Review Gen"],
    outcome: "Increased direct bookings, higher margins, and instant guest support in any language.",
    roi: "Reduces OTA commission fees by driving 30% more direct bookings.",
    faq: [
      { q: "Can the AI handle room service requests?", a: "Yes, guests can text the AI on WhatsApp, which routes the specific order directly to the kitchen or housekeeping." },
      { q: "What languages are supported?", a: "Our AI systems fluently support over 50 languages, detecting the guest's language automatically." }
    ]
  },
  {
    id: "clinic",
    title: "Clinic Growth System",
    icon: <PhoneCall size={48} className="text-emerald-400" />,
    challenges: "High patient no-show rates, front desk bottlenecks, and poor post-appointment follow-ups.",
    who: "Dental clinics, private medical practices, and specialized healthcare centers.",
    workflow: ["Patient calls to book", "AI Receptionist handles booking & intake", "Sends automated reminders", "Follows up for review post-visit"],
    included: ["AI Voice Receptionist", "Smart SMS Reminders", "Automated Intake Forms", "Patient Reactivation Campaigns"],
    outcome: "Zero missed patient calls, drastically reduced no-shows, and streamlined front desk operations.",
    roi: "Saves the equivalent of one full-time receptionist salary.",
    faq: [
      { q: "Is the system HIPAA compliant?", a: "Yes, we utilize enterprise-grade, compliant architecture to ensure patient data is securely handled." },
      { q: "Can it handle rescheduling?", a: "Absolutely. The AI can process cancellations and immediately offer available slots to patients on the waitlist." }
    ]
  },
  {
    id: "realestate",
    title: "Real Estate Lead System",
    icon: <Globe size={48} className="text-blue-400" />,
    challenges: "Leads go cold quickly if not answered within 5 minutes, agents waste hours qualifying bad leads.",
    who: "Real estate agencies, property developers, and brokerages.",
    workflow: ["Lead submits form/calls", "AI qualifies budget & timeline", "Books viewing if qualified", "Adds to CRM & notifies agent"],
    included: ["Instant AI Qualification", "Automated Viewing Scheduler", "Multi-channel Outreach", "Drip Campaigns"],
    outcome: "Agents only talk to qualified, ready-to-buy leads, increasing close rates.",
    roi: "Convert leads up to 3x faster by ensuring a sub-30-second response time.",
    faq: [
      { q: "Does the AI know our property inventory?", a: "Yes, we connect the AI directly to your database or MLS feed so it can suggest matching properties." }
    ]
  }
];

export default function BusinessSystems() {
  const [activeFaq, setActiveFaq] = useState({});

  const toggleFaq = (systemId, faqIndex) => {
    setActiveFaq(prev => ({
      ...prev,
      [`${systemId}-${faqIndex}`]: !prev[`${systemId}-${faqIndex}`]
    }));
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-8 hero-gradient-bg flex items-center justify-center">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-headline-xl text-5xl lg:text-6xl font-bold mb-6">
            Business Systems Built <br/><span className="gradient-text-primary">Around Your Industry</span>
          </motion.h1>
          <motion.p custom={1} initial="hidden" animate="visible" variants={fadeUp} className="text-xl text-white/60 max-w-3xl mx-auto">
            Complete AI-powered operating systems designed specifically for your business—not just individual tools. We map to your exact workflows to guarantee ROI.
          </motion.p>
        </div>
      </section>

      {/* SYSTEMS ITERATION */}
      <div className="space-y-32 pt-6 pb-10">
        {systems.map((sys, idx) => (
          <section key={sys.id} id={sys.id} className="relative">
            {/* Divider line between systems except first */}
            {idx > 0 && <div className="absolute top-[-4rem] left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>}
            
            <div className="max-w-container-max mx-auto px-margin-desktop">
              <div className="glass-card-premium rounded-3xl p-8 lg:p-16 border border-white/10 relative overflow-hidden">
                {/* Background glow specific to card */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/5 rounded-full blur-[100px]"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  {/* Left Column: Details */}
                  <div>
                    <div className="mb-6">{sys.icon}</div>
                    <h2 className="font-headline-lg text-4xl font-bold mb-6">{sys.title}</h2>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-primary font-bold mb-2 uppercase tracking-wider text-xs">Who It's For</h4>
                        <p className="text-white/80">{sys.who}</p>
                      </div>
                      <div>
                        <h4 className="text-red-400 font-bold mb-2 uppercase tracking-wider text-xs">The Business Challenge</h4>
                        <p className="text-white/80">{sys.challenges}</p>
                      </div>
                      <div>
                        <h4 className="text-green-400 font-bold mb-2 uppercase tracking-wider text-xs">What's Included</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                          {sys.included.map((inc, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                              <CheckCircle2 size={16} className="text-white/40 shrink-0 mt-0.5" /> {inc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Workflow & Outcomes */}
                  <div className="flex flex-col justify-between">
                    {/* Animated Workflow Diagram */}
                    <div className="glass-card p-6 rounded-2xl border border-white/5 mb-8">
                      <h4 className="text-center font-bold text-white/50 text-sm mb-6 uppercase tracking-wider">Automated Workflow</h4>
                      <div className="flex flex-col gap-3 relative">
                        <div className="absolute left-6 top-6 bottom-6 w-px bg-white/10 z-0"></div>
                        {sys.workflow.map((step, i) => (
                          <motion.div 
                            key={i} 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 relative z-10"
                          >
                            <div className="w-12 h-12 rounded-full bg-[#09090B] border border-white/20 flex items-center justify-center shrink-0 text-white/50 text-xs font-mono-code">
                              0{i + 1}
                            </div>
                            <div className="bg-white/5 px-4 py-3 rounded-lg text-sm w-full font-medium text-white/90 border border-white/5">
                              {step}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
                      <h4 className="font-bold text-lg mb-2">Business Outcome</h4>
                      <p className="text-white/80 mb-4">{sys.outcome}</p>
                      <div className="inline-flex items-center gap-2 bg-black/30 px-4 py-2 rounded-lg border border-white/10">
                        <span className="text-primary font-bold">Expected ROI:</span>
                        <span className="text-sm">{sys.roi}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ specific to this system */}
                <div className="mt-16 pt-10 border-t border-white/10">
                  <h4 className="font-bold text-xl mb-6">Common Questions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sys.faq.map((faq, i) => (
                      <div key={i} className="border border-white/10 rounded-xl glass-card overflow-hidden">
                        <button 
                          onClick={() => toggleFaq(sys.id, i)}
                          className="w-full px-6 py-4 flex items-center justify-between font-bold text-left text-sm hover:bg-white/5 transition-colors"
                        >
                          {faq.q}
                          {activeFaq[`${sys.id}-${i}`] ? <Minus size={16} className="text-primary"/> : <Plus size={16} className="text-white/50"/>}
                        </button>
                        {activeFaq[`${sys.id}-${i}`] && (
                          <div className="px-6 pb-4 text-white/70 text-sm leading-relaxed">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10 text-center">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                    Book Consultation for {sys.title.split(' ')[0]}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* COMPARISON SECTION */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-margin-desktop text-center">
          <h2 className="font-headline-lg text-4xl font-bold mb-12">Business Systems vs. Individual Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left pt-4">
            <div className="glass-card p-8 rounded-2xl border border-white/10 opacity-70 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><ArrowDown size={20} className="text-white/50" /> Individual Solution</h3>
                <ul className="space-y-4 text-sm text-white/70">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={12} strokeWidth={2.5} />
                    </div>
                    <span>Solves one specific bottleneck (e.g. answering phones).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={12} strokeWidth={2.5} />
                    </div>
                    <span>Requires you to integrate it into your operations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={12} strokeWidth={2.5} />
                    </div>
                    <span>Good for dipping your toes into AI.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="glass-card-premium p-8 rounded-2xl border border-primary/30 relative flex flex-col justify-between">
              {/* Folded Paper Ribbon / Tab */}
              <div className="absolute -top-4 right-6 bg-gradient-to-r from-primary to-blue-400 text-black text-xs font-extrabold uppercase tracking-widest px-6 py-2 rounded-lg shadow-[0_10px_25px_rgba(59,130,246,0.6)] border border-white/40 flex items-center gap-1.5">
                RECOMMENDED
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">Complete Business System</h3>
              <ul className="space-y-4 text-sm text-white/90">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={2.5} />
                  </div>
                  <span>Solves an entire business vertical end-to-end.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={2.5} />
                  </div>
                  <span>Custom-mapped to your existing software stack.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={2.5} />
                  </div>
                  <span>Delivers measurable, guaranteed ROI and time-savings.</span>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL INTERNAL LINK */}
      <section className="py-24 border-t border-white/5 text-center">
        <p className="text-white/50 mb-3 uppercase tracking-widest text-xs font-bold">NEXT STEP</p>
        <h2 className="font-headline-lg text-3xl font-bold mb-4">Want to Know How We Build?</h2>
        <p className="text-white/60 mb-8 max-w-xl mx-auto">Discover our engineering methodology, core values, and proven deployment process.</p>
        <Link to="/about" className="text-xl font-bold text-white hover:text-primary transition-colors inline-flex items-center group">
          Learn About Our Process <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
        </Link>
      </section>
    </>
  );
}
