import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImg from '../assets/agentictrive_logo.svg';
import { 
  ArrowRight, Users, Target, Shield, Zap, Code, Layout, 
  MessageSquare
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

export default function About() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-8 hero-gradient-bg flex items-center justify-center">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex justify-center mb-6">
            <img src={logoImg} alt="Agentictrive Official Logo" className="w-28 h-28 object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.6)] rounded-2xl" />
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="font-headline-xl text-5xl lg:text-6xl font-bold mb-6">
            Building the Future of <br/><span className="gradient-text-primary">Intelligent Businesses</span>
          </motion.h1>
          <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp} className="text-xl text-white/60 max-w-3xl mx-auto">
            We are a consultancy and engineering firm dedicated to eliminating manual work and accelerating business growth through automation.
          </motion.p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="pt-6 pb-20">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-10 rounded-3xl border border-white/5">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Target size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">
                To bridge the gap between complex artificial intelligence capabilities and real-world business operations, making enterprise-grade automation accessible to growing companies.
              </p>
            </div>
            <div className="glass-card p-10 rounded-3xl border border-white/5">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <Shield size={24} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/70 leading-relaxed">
                A world where human potential is liberated from repetitive tasks. We envision businesses where teams focus entirely on creativity, strategy, and human connection while intelligent systems handle the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <h2 className="font-headline-lg text-4xl font-bold mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Business First", desc: "Technology must serve a clear business goal. We don't build just for the sake of building." },
              { title: "Radical Transparency", desc: "Honest timelines, clear pricing, and straightforward communication." },
              { title: "Obsessive Quality", desc: "Enterprise-grade reliability in every system we deploy, no matter the client size." },
              { title: "Long-Term Partnership", desc: "We measure our success by your continued growth, not the initial launch." }
            ].map((val, i) => (
              <motion.div 
                key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="text-left"
              >
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center mb-4 text-white/50 font-mono-code text-xs">0{i+1}</div>
                <h4 className="text-xl font-bold mb-2">{val.title}</h4>
                <p className="text-white/60 text-sm">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS (Moved from Home and expanded) */}
      <section className="py-32">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-white/60 text-lg">A rigorous, proven methodology that ensures smooth deployment and guaranteed ROI.</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-primary/50 via-white/10 to-transparent z-0"></div>
            
            <div className="space-y-16 relative z-10">
              {[
                { num: "01", title: "Business Audit & Discovery", desc: "We begin with a deep dive into your operational bottlenecks. We map your existing software stack and identify high-ROI opportunities for automation." },
                { num: "02", title: "Strategic Roadmap", desc: "We design a comprehensive blueprint. You'll see exactly what we'll build, how it integrates, and the projected time/cost savings before we write a single line of code." },
                { num: "03", title: "System Development", desc: "Our engineering team builds your automation ecosystem using best-in-class technologies, ensuring enterprise-grade security and reliability." },
                { num: "04", title: "Testing & Deployment", desc: "Rigorous stress testing in staging environments. Once approved, we deploy seamlessly into your business without disrupting current operations." },
                { num: "05", title: "Optimization & Scaling", desc: "The launch is just the beginning. We actively monitor the systems, refine the AI's responses, and suggest new automations as your business grows." }
              ].map((step, i) => (
                <motion.div 
                  key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="flex gap-8 group"
                >
                  <div className="w-16 h-16 rounded-full bg-[#09090B] border-2 border-white/20 flex items-center justify-center font-mono-code text-xl font-bold text-white shrink-0 group-hover:border-primary group-hover:text-primary transition-colors">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-2xl font-bold mb-3">{step.title}</h4>
                    <p className="text-white/60 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECH PHILOSOPHY / STACK */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <h2 className="font-headline-lg text-4xl font-bold mb-16">Our Technology Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl">
              <Zap size={32} className="text-yellow-400 mb-6 mx-auto" />
              <h4 className="text-lg font-bold mb-2">Speed to Value</h4>
              <p className="text-sm text-white/60">We utilize modern frameworks and low-code orchestrators to deploy systems in weeks, not months.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <Layout size={32} className="text-blue-400 mb-6 mx-auto" />
              <h4 className="text-lg font-bold mb-2">Agnostic Integration</h4>
              <p className="text-sm text-white/60">We aren't tied to one platform. We build bridges between the software you already use.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <Code size={32} className="text-purple-400 mb-6 mx-auto" />
              <h4 className="text-lg font-bold mb-2">Scalable Architecture</h4>
              <p className="text-sm text-white/60">Built on cloud-native infrastructure capable of handling 10 interactions or 10,000 simultaneously.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL INTERNAL LINK */}
      <section className="py-24 border-t border-white/5 text-center">
        <p className="text-white/50 mb-3 uppercase tracking-widest text-xs font-bold">NEXT STEP</p>
        <h2 className="font-headline-lg text-3xl font-bold mb-4">Ready to Automate Your Operations?</h2>
        <p className="text-white/60 mb-8 max-w-xl mx-auto">Schedule a free 30-minute AI Audit with our lead strategist to identify your highest-ROI opportunities.</p>
        <Link to="/contact" className="text-xl font-bold text-white hover:text-primary transition-colors inline-flex items-center group">
          Book Your Free AI Audit <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
        </Link>
      </section>
    </>
  );
}
