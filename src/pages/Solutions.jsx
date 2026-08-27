import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  PhoneCall, MessageSquare, LineChart, Clock, Database, 
  Workflow, Bot, Laptop, MonitorSmartphone, Code, Server, 
  BarChart3, BrainCircuit, ArrowRight
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

const categories = [
  {
    title: "AI Employees",
    desc: "Digital workforce that handles communication 24/7.",
    solutions: [
      {
        name: "AI Voice Employee",
        icon: <PhoneCall size={24} className="text-blue-400" />,
        problem: "Missing inbound calls and unable to afford 24/7 reception staff.",
        solution: "A hyper-realistic AI agent that answers calls, books appointments, and answers FAQs.",
        benefits: ["Zero missed calls", "Human-like voice", "Instant CRM sync"],
        useCases: "Clinics, Restaurants, Salons",
        tech: "Voice LLMs, Twilio, Deepgram",
        timeline: "1-2 Weeks"
      },
      {
        name: "AI Receptionist / Chatbot",
        icon: <Bot size={24} className="text-purple-400" />,
        problem: "Website visitors leaving because they can't get instant answers.",
        solution: "An intelligent widget trained on your entire company knowledge base.",
        benefits: ["Instant resolutions", "Multilingual support", "24/7 availability"],
        useCases: "E-commerce, SaaS, Agencies",
        tech: "RAG, Vector DBs, GPT-4",
        timeline: "1 Week"
      }
    ]
  },
  {
    title: "Automation",
    desc: "Eliminate manual data entry and repetitive tasks.",
    solutions: [
      {
        name: "WhatsApp Automation",
        icon: <MessageSquare size={24} className="text-green-400" />,
        problem: "Sales teams wasting time answering repetitive questions on WhatsApp.",
        solution: "Automated WhatsApp flows that qualify leads and process orders.",
        benefits: ["Instant replies", "High open rates", "Rich media support"],
        useCases: "Real Estate, Retail, Education",
        tech: "WhatsApp Cloud API, Make.com",
        timeline: "2 Weeks"
      },
      {
        name: "Workflow Automation",
        icon: <Workflow size={24} className="text-red-400" />,
        problem: "Copy-pasting data between CRM, email, and spreadsheets.",
        solution: "Custom Zapier/Make automations that connect your entire software stack.",
        benefits: ["Zero manual errors", "Saved staff hours", "Real-time sync"],
        useCases: "Operations, HR, Finance",
        tech: "Zapier, Make, Webhooks",
        timeline: "2-3 Weeks"
      }
    ]
  },
  {
    title: "Web Development & Digital Experiences",
    desc: "Bespoke, high-converting websites engineered to your exact requirements with built-in AI intelligence.",
    solutions: [
      {
        name: "Custom Business & Corporate Websites",
        icon: <Laptop size={24} className="text-cyan-400" />,
        problem: "Outdated, generic templates that fail to represent your premium brand and lose prospect trust.",
        solution: "100% custom-built, ultra-responsive modern websites tailored to your exact business requirements.",
        benefits: ["Tailored brand UI/UX", "Mobile-first speed (99+ PageSpeed)", "Built-in AI chatbot ready"],
        useCases: "Clinics, Law Firms, Real Estate, Hotels, Startups",
        tech: "React, Next.js, Tailwind CSS, Vercel",
        timeline: "1-2 Weeks"
      },
      {
        name: "High-Converting Landing Pages & Funnels",
        icon: <MonitorSmartphone size={24} className="text-blue-400" />,
        problem: "Spending on Google/Meta ads but losing visitors due to slow, unoptimized landing pages.",
        solution: "Laser-focused single-page funnels with interactive booking, instant lead capture, and persuasive copy.",
        benefits: ["Maximized ad ROI", "Sub-second load times", "Direct WhatsApp & CRM sync"],
        useCases: "Product Launches, Event Lead Gen, Campaigns",
        tech: "Next.js, Framer Motion, Lead Webhooks",
        timeline: "3-5 Days"
      },
      {
        name: "Website Modernization & Redesign",
        icon: <Code size={24} className="text-violet-400" />,
        problem: "Legacy WordPress/Wix website that is slow, clunky, insecure, and looks like it was built a decade ago.",
        solution: "Complete architectural revamp into a lightning-fast, futuristic web application with zero bloat.",
        benefits: ["10x faster performance", "Modern dark/light aesthetics", "Bank-grade SSL security"],
        useCases: "Established Businesses, Agencies, Consultants",
        tech: "Modern JavaScript, Jamstack, Headless CMS",
        timeline: "1-2 Weeks"
      },
      {
        name: "E-Commerce & Custom Web Portals",
        icon: <BrainCircuit size={24} className="text-amber-400" />,
        problem: "Needing custom client dashboards, appointment booking portals, or specialized online payment flows.",
        solution: "Full-stack custom web applications and e-commerce portals built precisely to your workflow specs.",
        benefits: ["Automated order flows", "Custom client login portals", "Seamless payment gateway"],
        useCases: "D2C Brands, Service Providers, SaaS",
        tech: "Node.js, PostgreSQL, Stripe/Razorpay, Next.js",
        timeline: "2-3 Weeks"
      }
    ]
  },
  {
    title: "Business Intelligence",
    desc: "Make decisions based on real-time data, not gut feelings.",
    solutions: [
      {
        name: "Analytics Dashboards",
        icon: <BarChart3 size={24} className="text-amber-400" />,
        problem: "Business data is scattered across platforms, making reporting impossible.",
        solution: "Unified, custom-built dashboards displaying all your KPIs in one place.",
        benefits: ["Real-time insights", "Beautiful UI", "Actionable data"],
        useCases: "CEOs, Sales Managers",
        tech: "React, Next.js, PowerBI API",
        timeline: "3-4 Weeks"
      },
      {
        name: "Lead Qualification Engine",
        icon: <LineChart size={24} className="text-emerald-400" />,
        problem: "Sales team spends hours calling leads who aren't ready to buy.",
        solution: "AI that instantly scores and categorizes leads based on behavior and form data.",
        benefits: ["Higher close rates", "Saved sales time", "Instant routing"],
        useCases: "B2B Sales, Real Estate",
        tech: "HubSpot API, Custom LLM Routing",
        timeline: "2 Weeks"
      }
    ]
  }
];

export default function Solutions() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-8 hero-gradient-bg flex items-center justify-center">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-headline-xl text-5xl lg:text-6xl font-bold mb-6">
            Powerful AI Solutions <br/><span className="gradient-text-primary">For Every Business</span>
          </motion.h1>
          <motion.p custom={1} initial="hidden" animate="visible" variants={fadeUp} className="text-xl text-white/60 max-w-3xl mx-auto">
            Choose a single solution to fix an immediate bottleneck, or combine multiple services into a complete Business System over time.
          </motion.p>
        </div>
      </section>

      {/* SOLUTIONS BY CATEGORY */}
      <div className="space-y-32 pt-6 pb-10">
        {categories.map((cat, idx) => (
          <section key={idx} className="max-w-container-max mx-auto px-margin-desktop">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 relative">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono-code font-bold uppercase tracking-wider mb-4">
                  Category 0{idx + 1}
                </div>
                <h2 className="font-headline-lg text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2">
                  {cat.title}
                </h2>
                <p className="text-white/60 text-lg max-w-xl">{cat.desc}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cat.solutions.map((sol, i) => (
                <motion.div 
                  key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all flex flex-col h-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                      {sol.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{sol.name}</h3>
                  </div>

                  <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-bold text-red-400 mb-1">Problem</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{sol.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-bold text-green-400 mb-1">Solution</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{sol.solution}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-xs uppercase tracking-wider font-bold text-white/40 mb-2">Benefits</h4>
                        <ul className="text-xs text-white/70 space-y-1 list-disc list-inside">
                          {sol.benefits.map((b, x) => <li key={x}>{b}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-wider font-bold text-white/40 mb-2">Details</h4>
                        <p className="text-xs text-white/70 mb-1"><span className="text-white/50">Used by:</span> {sol.useCases}</p>
                        <p className="text-xs text-white/70"><span className="text-white/50">Timeline:</span> {sol.timeline}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5">
                    <Link to="/contact" className="text-primary font-bold text-sm hover:underline flex items-center">
                      Request this solution <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* FINAL INTERNAL LINK */}
      <section className="py-24 bg-white/[0.02] border-t border-white/5 text-center">
        <p className="text-white/50 mb-3 uppercase tracking-widest text-xs font-bold">NEXT STEP</p>
        <h2 className="font-headline-lg text-3xl font-bold mb-4">Need a Complete Transformation?</h2>
        <p className="text-white/60 mb-8 max-w-xl mx-auto">Individual solutions fix single bottlenecks. Our complete Business Systems automate your entire vertical.</p>
        <Link to="/systems" className="text-xl font-bold text-white hover:text-primary transition-colors inline-flex items-center group">
          Explore Business Systems <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
        </Link>
      </section>
    </>
  );
}
