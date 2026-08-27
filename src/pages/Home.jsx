import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, XCircle, X, Bot, 
  Workflow, LineChart, Users, Database, MessageSquare,
  Building2, Store, PhoneCall, Clock, SlidersHorizontal, Globe,
  Laptop, Code, Sparkles, Zap
} from 'lucide-react';
import hero3dImg from '../assets/hero_3d_render.png';

// Fade Up Variant
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
};

// Animated Number Component
const AnimatedNumber = ({ value, suffix = "" }) => {
  return (
    <motion.span 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="font-outfit text-[84px] font-extrabold leading-none gradient-text-primary tracking-tight block mb-2"
    >
      {value}{suffix}
    </motion.span>
  );
};

export default function Home() {
  const industries = [
    "Restaurants", "Hotels", "Clinics", "Dental Hospitals", "Real Estate", 
    "Construction", "Retail", "E-commerce", "Salons", "Gyms", 
    "Educational Institutions", "Travel Agencies", "Finance", "Accounting"
  ];
  const industries2 = [
    "Manufacturing", "Logistics", "Law Firms", "Insurance", "Healthcare", 
    "Automobile", "Interior Designers", "Architects", "Jewellery", "Pharmacies", 
    "Event Management", "Consultants", "SaaS Companies", "Cloud Kitchens"
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 hero-gradient-bg overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
                <h1 className="font-headline-xl text-3xl sm:text-5xl lg:text-[72px] leading-[1.15] lg:leading-[1.1] tracking-tight mb-4">
                  Build a business <br />
                  <span className="gradient-text-primary">that runs itself.</span>
                </h1>
              </motion.div>

              <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-base sm:text-lg text-white/60 max-w-lg leading-relaxed">
                From customer conversations to internal workflows, we create intelligent systems that work around the clock—so your team can focus on what matters most.
              </motion.p>

              <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 pt-2 sm:pt-4">
                <Link to="/contact" className="bg-white text-black font-bold text-base px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group shadow-xl">
                  Book Free AI Audit
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/solutions" className="glass-card text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-white/10 transition-all flex items-center justify-center active:scale-95">
                  Explore Solutions
                </Link>
              </motion.div>
            </div>

            {/* Right Content - 3D Architectural AI Hub */}
            <motion.div 
              custom={4} 
              variants={fadeUp} 
              initial="hidden" 
              animate="visible" 
              className="relative w-full flex items-center justify-center mt-8 lg:mt-0"
            >
              {/* Ambient Glows around the 3D installation */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-cyan-400/20 rounded-3xl blur-3xl opacity-70 pointer-events-none"></div>
              
              <div className="relative w-full max-w-lg lg:max-w-xl group">
                {/* 3D Render Container */}
                <motion.div 
                  className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-white/10 glass-card-premium"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <img 
                    src={hero3dImg} 
                    alt="Agentictrive Intelligent Business Systems 3D Hub" 
                    className="w-full h-auto object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* Subtle Interactive Lighting Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/60 via-transparent to-white/[0.04] pointer-events-none"></div>
                </motion.div>

                {/* Floating Micro Badge / Live Status */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-4 -left-2 sm:bottom-4 sm:-left-6 glass-card border border-white/15 px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-xl z-20"
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-wider text-white/50 font-mono-code font-bold">Autonomous Engine</p>
                    <p className="text-xs font-bold text-white">Intelligent Systems Active</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES MARQUEE */}
      <section className="py-24 overflow-hidden relative">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center mb-16">
          <h2 className="font-headline-lg text-4xl font-bold mb-4">Built for Businesses Ready to Scale</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Every industry has repetitive work. We replace it with intelligent systems.</p>
        </div>
        
        <div className="relative flex flex-col gap-6">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#09090B] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#09090B] to-transparent z-10 pointer-events-none"></div>

          <div className="flex whitespace-nowrap animate-marquee">
            {[...industries, ...industries].map((industry, i) => (
              <div key={i} className="mx-3 px-6 py-3 rounded-full border border-white/10 glass-card text-white/80 transition-all cursor-default text-sm">
                {industry}
              </div>
            ))}
          </div>
          
          <div className="flex whitespace-nowrap animate-marquee-reverse">
            {[...industries2, ...industries2].map((industry, i) => (
              <div key={i} className="mx-3 px-6 py-3 rounded-full border border-white/10 glass-card text-white/80 transition-all cursor-default text-sm">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS SECTION */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-headline-lg text-4xl font-bold mb-4">Every Growing Business Faces the Same Bottlenecks.</h2>
            <p className="text-white/60 text-lg">Without intelligent automation, manual tasks slow down growth and burn team bandwidth.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                num: "01",
                icon: <Clock size={20} className="text-white/70" />,
                title: "Slow Lead Response Times",
                desc: "Inbound inquiries grow cold within minutes. When prospects wait hours for a reply, over 70% move on to a competitor who responds first."
              },
              {
                num: "02",
                icon: <SlidersHorizontal size={20} className="text-white/70" />,
                title: "Repetitive Manual Workflows",
                desc: "Your team spends hundreds of hours monthly copying data between software, booking meetings, and sending manual updates instead of closing deals."
              },
              {
                num: "03",
                icon: <Globe size={20} className="text-white/70" />,
                title: "Low Website Conversions",
                desc: "High traffic with low sales engagement. Without a 24/7 intelligent assistant to capture and qualify visitors, hard-earned marketing budget goes to waste."
              },
              {
                num: "04",
                icon: <PhoneCall size={20} className="text-white/70" />,
                title: "Missed After-Hours Calls",
                desc: "Potential clients call when your office is closed or staff is busy. Every unhandled phone call represents lost revenue and missed trust."
              },
              {
                num: "05",
                icon: <Database size={20} className="text-white/70" />,
                title: "Disconnected Data Systems",
                desc: "Your CRM, chat channels, and internal software don't talk to each other, forcing your staff to act as manual human bridges between tools."
              },
              {
                num: "06",
                icon: <LineChart size={20} className="text-white/70" />,
                title: "Unpredictable Operational Scaling",
                desc: "As your business grows, labor costs scale linearly. Without intelligent systems, taking on 2x more clients requires hiring 2x more staff."
              }
            ].map((prob, i) => (
              <motion.div 
                key={i} 
                custom={i} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeUp}
                className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-red-500/40 transition-all group relative overflow-hidden"
              >
                <div>
                  {/* Top Header: Icon & Big Number */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-red-500/30 group-hover:bg-red-500/10 transition-colors">
                      {prob.icon}
                    </div>
                    <span className="font-headline-md text-3xl font-bold text-red-500/40 group-hover:text-red-400 transition-colors">
                      {prob.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors">
                    {prob.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-base leading-relaxed">
                    {prob.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Area below cards */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
            className="text-center bg-white/5 border border-white/10 p-8 rounded-3xl max-w-3xl mx-auto backdrop-blur-md"
          >
            <h4 className="text-2xl font-bold mb-3">Struggling with these bottlenecks in your business?</h4>
            <p className="text-white/60 mb-6 text-sm">We engineer custom intelligent systems to solve each of these problems and automate your growth.</p>
            <Link to="/contact" className="bg-white text-black font-semibold text-base px-8 py-4 rounded-full hover:bg-white/90 transition-all hover:scale-105 inline-flex items-center gap-2 group">
              Solve These Problems — Book Free AI Audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WEB DEVELOPMENT & BESPOKE EXPERIENCES SHOWCASE */}
      <section className="py-28 relative bg-white/[0.01] border-b border-white/5">
        <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-margin-desktop">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono-code font-bold uppercase tracking-wider mb-4">
              <Sparkles size={14} /> Bespoke Web Development
            </div>
            <h2 className="font-headline-lg text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              We Build Websites That Look Stunning & <span className="gradient-text-primary">Work 24/7</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Tailored completely to your requirements. Ultra-fast, mobile-first design with built-in AI chatbots, WhatsApp capture, and automated CRM pipelines from Day 1.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              {
                icon: <Laptop size={26} className="text-cyan-400" />,
                title: "Custom Business Websites",
                desc: "Bespoke design, animations, and high-converting layouts crafted precisely for your brand identity.",
                badge: "100% Custom"
              },
              {
                icon: <Zap size={26} className="text-blue-400" />,
                title: "High-Converting Funnels",
                desc: "Laser-focused landing pages engineered for high ad conversion rates and instant lead generation.",
                badge: "99+ PageSpeed"
              },
              {
                icon: <Code size={26} className="text-violet-400" />,
                title: "Website Redesign",
                desc: "Transform outdated, slow legacy websites into modern, ultra-responsive web applications.",
                badge: "Modern Stack"
              },
              {
                icon: <Bot size={26} className="text-emerald-400" />,
                title: "AI-Integrated Web Apps",
                desc: "Every website comes equipped with 24/7 AI receptionists, booking widgets, and Google Sheets sync.",
                badge: "AI-Supercharged"
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card-premium p-7 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-cyan-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                    <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-white/50 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-cyan-400">
                  <Link to="/solutions" className="flex items-center gap-1 hover:underline">
                    Explore Solution <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Web Tech Stack & Delivery Highlights */}
          <div className="bg-gradient-to-r from-blue-900/20 via-cyan-900/10 to-purple-900/20 border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white">Have a specific website requirement in mind?</h3>
              <p className="text-white/60 text-sm max-w-xl">
                From luxury corporate & clinic portfolios to e-commerce storefronts and custom web apps — we design, code, and deploy in 7 to 14 days.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
              <Link to="/contact" className="bg-white text-black font-bold text-sm px-7 py-3.5 rounded-full hover:bg-white/90 transition-all hover:scale-105 active:scale-95 text-center shadow-lg">
                Request Website Quote →
              </Link>
              <Link to="/solutions" className="glass-card text-white font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-white/10 transition-all text-center">
                View Web Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED BUSINESS SYSTEMS (PREVIEW) */}
      <section className="py-32 relative">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="mb-20 text-center">
            <h2 className="font-headline-lg text-4xl lg:text-5xl font-bold mb-6">Complete Business Systems</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">Instead of selling disconnected tools, we build complete systems that solve real business challenges.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Restaurant Growth System", icon: <Store size={32} />, desc: "Automate table bookings, ordering, and marketing." },
              { title: "Hotel Automation System", icon: <Building2 size={32} />, desc: "24/7 AI Concierge and direct booking optimization." },
              { title: "Clinic Growth System", icon: <PhoneCall size={32} />, desc: "Voice AI receptionists and zero missed patient calls." }
            ].map((sys, i) => (
              <motion.div 
                key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="glass-card-premium p-8 rounded-3xl group relative overflow-hidden text-center glow-border"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {sys.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{sys.title}</h3>
                <p className="text-white/60 mb-8">{sys.desc}</p>
                <Link to="/systems" className="inline-flex items-center text-primary font-medium group-hover:underline">
                  View Full Details <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/systems" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all inline-flex items-center">
              View All Business Systems <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <h2 className="font-headline-lg text-4xl font-bold mb-16 text-center">Why Businesses Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Business-first approach", desc: "Every solution starts with your goals, not technology." },
              { title: "Tailored Systems", desc: "Every business receives a custom-built solution." },
              { title: "Rapid Deployment", desc: "Launch in weeks, not months." },
              { title: "Future Ready", desc: "Scalable systems designed to grow with your business." },
              { title: "Ongoing Support", desc: "Long-term partnership beyond deployment." },
              { title: "ROI Focused", desc: "Every automation is designed to save time or increase revenue." }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-2xl glass-card hover:bg-white/5 transition-colors">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-secondary" /> {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS (SHORT) */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="max-w-container-max mx-auto px-margin-desktop relative z-10 text-center">
          <h2 className="font-headline-lg text-4xl lg:text-5xl font-bold mb-20">Smarter Business. Better Results.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <AnimatedNumber value="40+" />
              <p className="text-xl font-medium mt-2">Hours Saved Every Week</p>
            </div>
            <div>
              <AnimatedNumber value="24 / 7" />
              <p className="text-xl font-medium mt-2">Answers Every Customer</p>
            </div>
            <div>
              <AnimatedNumber value="100%" />
              <p className="text-xl font-medium mt-2">No Missed Leads</p>
            </div>
            <div>
              <AnimatedNumber value="More" />
              <p className="text-xl font-medium mt-2">Time to Grow Your Business</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient-bg opacity-50"></div>
        <div className="max-w-container-max mx-auto px-margin-desktop text-center relative z-10">
          <h2 className="font-headline-xl text-5xl lg:text-6xl font-bold mb-6">Ready to Build a Smarter Business?</h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">Let's identify where intelligent automation can create the biggest impact and highest ROI in your business.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link to="/contact" className="bg-white text-black font-semibold text-lg px-10 py-5 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all">
              Book Free AI Audit
            </Link>
          </div>
          <Link to="/solutions" className="text-primary hover:underline inline-flex items-center">
            Explore Solutions <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
