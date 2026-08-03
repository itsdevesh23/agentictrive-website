import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Mail, MapPin, Clock, MessageCircle, Plus, Minus, Loader2, CheckCircle2, AlertCircle
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phone: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const endpoint = window.location.hostname === 'localhost' 
        ? 'http://localhost:5001/api/contact' 
        : '/api/contact';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ firstName: '', lastName: '', workEmail: '', phone: '', company: '', message: '' });
      } else {
        setStatus({ loading: false, success: false, error: data.message || 'Submission failed.' });
      }
    } catch (err) {
      console.error(err);
      setStatus({ 
        loading: false, 
        success: false, 
        error: 'Unable to connect to the SMTP server (http://localhost:5001). Please verify the server is running.' 
      });
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-36 pb-16 hero-gradient-bg flex items-center justify-center">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-headline-xl text-5xl lg:text-6xl font-bold mb-6">
            Let's Build Something <br/><span className="gradient-text-primary">Intelligent Together</span>
          </motion.h1>
          <motion.p custom={1} initial="hidden" animate="visible" variants={fadeUp} className="text-xl text-white/60 max-w-2xl mx-auto">
            Book your free AI audit or leave us a message. We'll identify the highest-ROI automation opportunities for your specific business.
          </motion.p>
        </div>
      </section>

      {/* CONTACT LAYOUT */}
      <section className="py-10">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Left Side: Direct Contact & Form */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2}>
              <h3 className="font-headline-lg text-3xl font-bold mb-8">Send us a message</h3>
              
              {status.success ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-2xl mb-16 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-white">AI Audit Request Received!</h4>
                  <p className="text-white/70 text-sm leading-relaxed max-w-md mx-auto">
                    Thank you! A confirmation email has been sent to your inbox. Our Lead AI Strategist will contact you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setStatus({ loading: false, success: false, error: null })} 
                    className="text-primary text-sm font-bold underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={submitForm} className="space-y-6 mb-16">
                  {status.error && (
                    <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl text-red-400 text-sm flex items-center gap-3">
                      <AlertCircle size={18} className="shrink-0" />
                      <span>{status.error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/70 uppercase tracking-wider">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                        placeholder="Rohan" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/70 uppercase tracking-wider">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                        placeholder="Sharma" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/70 uppercase tracking-wider">Work Email</label>
                      <input 
                        type="email" 
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleChange}
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                        placeholder="rohan@company.in" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/70 uppercase tracking-wider">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                        placeholder="+91 98765 43210" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/70 uppercase tracking-wider">Company & Industry</label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                      placeholder="Acme Corp - Real Estate" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/70 uppercase tracking-wider">How can we help?</label>
                    <textarea 
                      rows="4" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" 
                      placeholder="We are looking to automate our lead qualification..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status.loading}
                    className="w-full bg-primary text-black font-bold py-4 rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {status.loading ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        Request AI Audit <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Direct Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/10 pt-12">
                <div>
                  <h4 className="font-bold flex items-center gap-2 mb-2"><Mail size={18} className="text-primary"/> Email</h4>
                  <a href="mailto:agentictrive@gmail.com" className="text-white/60 hover:text-white transition-colors">agentictrive@gmail.com</a>
                </div>
                <div>
                  <h4 className="font-bold flex items-center gap-2 mb-2"><MessageCircle size={18} className="text-green-400"/> WhatsApp</h4>
                  <div className="space-y-1">
                    <a href="https://wa.me/916303690660" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-white transition-colors">+91 63036 90660</a>
                    <a href="https://wa.me/919182200626" target="_blank" rel="noopener noreferrer" className="block text-white/60 hover:text-white transition-colors">+91 91822 00626</a>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold flex items-center gap-2 mb-2"><MapPin size={18} className="text-red-400"/> Location</h4>
                  <p className="text-white/60">22-6-45 Akkarampalli, Tirupati<br/>Andhra Pradesh 527501</p>
                </div>
                <div>
                  <h4 className="font-bold flex items-center gap-2 mb-2"><Clock size={18} className="text-purple-400"/> Business Hours</h4>
                  <p className="text-white/60">Mon-Sat: 9am - 8pm IST<br/>Support: 24 / 7 via AI</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Calendly Placeholder */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="h-full min-h-[600px]">
              <div className="w-full h-full glass-card-premium rounded-3xl border border-white/10 flex flex-col items-center justify-center p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full"></div>
                
                <h3 className="text-2xl font-bold mb-4 relative z-10">Prefer to skip the form?</h3>
                <p className="text-white/60 mb-8 relative z-10">Schedule a direct Zoom call with our Lead AI Strategist using the calendar below.</p>
                
                {/* Fake Calendly UI */}
                <div className="w-full max-w-sm bg-white/5 border border-white/10 rounded-2xl p-6 relative z-10 shadow-2xl">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-bold">Select a Date & Time</span>
                    <span className="text-xs text-white/40">Powered by Calendly</span>
                  </div>
                  <div className="grid grid-cols-7 gap-2 mb-6">
                    {['S','M','T','W','T','F','S'].map((d,i) => <div key={i} className="text-xs text-white/40 text-center">{d}</div>)}
                    {[...Array(31)].map((_,i) => (
                      <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm cursor-pointer ${i===14 ? 'bg-primary text-black font-bold' : 'hover:bg-white/10'}`}>
                        {i+1}
                      </div>
                    ))}
                  </div>
                  <button className="w-full border border-white/20 text-white font-bold py-3 rounded-xl hover:bg-white/10 transition-colors">
                    View Available Times
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* GENERAL FAQ */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-3xl mx-auto px-margin-desktop">
          <h2 className="font-headline-lg text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What happens during the Free AI Audit?", a: "We spend 30-45 minutes learning about your business operations. We'll identify bottlenecks and provide a roadmap showing exactly where AI can save you time and make you money." },
              { q: "Do I need technical knowledge to work with you?", a: "Not at all. We are a full-service agency. We handle the architecture, development, deployment, and maintenance. You just tell us your business goals." },
              { q: "How much does a typical project cost?", a: "Our projects range based on complexity. Standalone solutions start lower, while comprehensive Business Systems require a higher initial investment. We offer transparent pricing after the audit." },
              { q: "Do you work with businesses globally?", a: "Yes, we work with clients worldwide. Our AI systems can communicate fluently in over 50 languages." },
            ].map((faq, i) => (
              <div key={i} className="glass-card rounded-2xl border border-white/5 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-6 text-left font-bold text-lg flex justify-between items-center hover:text-primary transition-colors"
                >
                  {faq.q}
                  {activeFaq === i ? <Minus size={20} className="text-primary"/> : <Plus size={20} className="text-white/50"/>}
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-5 text-white/70 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL INTERNAL LINK */}
      <section className="py-24 border-t border-white/5 text-center">
        <p className="text-white/50 mb-3 uppercase tracking-widest text-xs font-bold">NEXT STEP</p>
        <h2 className="font-headline-lg text-3xl font-bold mb-4">Want to Explore Our Solutions First?</h2>
        <p className="text-white/60 mb-8 max-w-xl mx-auto">Return to our homepage to see how intelligent systems can transform your operational efficiency.</p>
        <Link to="/" className="text-xl font-bold text-white hover:text-primary transition-colors inline-flex items-center group">
          Return to Homepage <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
        </Link>
      </section>
    </>
  );
}
