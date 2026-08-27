import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, Globe, Workflow, Bot, Sparkles, CheckCircle2, ArrowRight, Activity, Terminal, ShieldCheck, Zap } from 'lucide-react';
import iconImg from '../assets/agentictrive_icon.svg';

export default function HeroVisualHub() {
  const [activeTab, setActiveTab] = useState(0);

  const scenarios = [
    {
      id: "voice",
      tabTitle: "Voice AI Agent",
      tabIcon: <PhoneCall size={15} />,
      badge: "LIVE INBOUND CALL",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      caller: "Prospect (Hotel Owner)",
      callerMsg: "Hi, I need an automated booking system and modern website.",
      agent: "Agentictrive AI",
      agentMsg: "Understood! We can deploy a custom Next.js portal with 24/7 Voice AI booking within 7 days. I've sent a proposal to your WhatsApp.",
      action: "⚡ Lead qualified & WhatsApp booking link sent in 0.4s",
      stats: [
        { label: "Call Handling", value: "24/7/365" },
        { label: "Human Likeness", value: "99.4%" },
        { label: "Missed Calls", value: "0" }
      ]
    },
    {
      id: "web",
      tabTitle: "AI Web Funnel",
      tabIcon: <Globe size={15} />,
      badge: "ULTRA-FAST DIGITAL STOREFRONT",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      caller: "Visitor (Real Estate Lead)",
      callerMsg: "Looking for luxury villas in Bangalore under 3 Cr.",
      agent: "Smart Web Assistant",
      agentMsg: "Found 4 matching verified properties. Filtered by your budget and scheduled a direct site visit on your calendar.",
      action: "📈 Visitor converted to qualified client & synced to CRM",
      stats: [
        { label: "PageSpeed Score", value: "99/100" },
        { label: "Conversion Rate", value: "+340%" },
        { label: "Sync Latency", value: "< 1s" }
      ]
    },
    {
      id: "automation",
      tabTitle: "Autonomous CRM",
      tabIcon: <Workflow size={15} />,
      badge: "ZERO-TOUCH WORKFLOW",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      caller: "New Inbound Inquiry",
      callerMsg: "Client submitted form on agentictrive.in",
      agent: "Agentic Router",
      agentMsg: "Appended client row to Google Sheets, notified sales on Telegram & dispatched customized intro email via Gmail SMTP.",
      action: "✅ 3 systems updated automatically with 0 manual effort",
      stats: [
        { label: "Hours Saved / Mo", value: "160+ hrs" },
        { label: "Data Accuracy", value: "100%" },
        { label: "Pipeline Speed", value: "Instant" }
      ]
    }
  ];

  // Auto-cycle through tabs every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab(prev => (prev + 1) % scenarios.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [scenarios.length]);

  const current = scenarios[activeTab];

  return (
    <div className="relative w-full max-w-xl mx-auto flex flex-col items-center select-none py-2">
      
      {/* Background Volumetric Neon Glows */}
      <div className="absolute -top-12 -right-10 w-80 h-80 bg-blue-600/25 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-purple-600/25 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      {/* Main Interactive Live Console */}
      <div className="relative w-full bg-[#0D0D12] border border-white/15 rounded-3xl p-5 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl overflow-hidden">
        
        {/* Top Iridescent Edge Glow */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>

        {/* 1. Header Bar: Window Controls + Mode Switcher Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-sm"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm"></span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono-code font-bold text-white/70">
              <Terminal size={14} className="text-primary" />
              <span>AGENTIC_OS</span>
            </div>
          </div>

          {/* Interactive Mode Pills */}
          <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-xl border border-white/10 overflow-x-auto">
            {scenarios.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === idx 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {s.tabIcon}
                <span>{s.tabTitle}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Interactive Live Simulation Body */}
        <div className="min-h-[260px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-4"
            >
              {/* Badge & Live Indicator */}
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-mono-code font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${current.badgeColor}`}>
                  {current.badge}
                </span>
                
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono-code font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>SIMULATING</span>
                </div>
              </div>

              {/* Chat Simulation Bubble 1: Prospect */}
              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-3.5 space-y-1">
                <div className="flex items-center justify-between text-xs text-white/40">
                  <span className="font-bold text-white/70">{current.caller}</span>
                  <span className="text-[10px] font-mono-code">10:42 AM</span>
                </div>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-body-md">
                  "{current.callerMsg}"
                </p>
              </div>

              {/* Chat Simulation Bubble 2: Agentictrive AI */}
              <div className="bg-blue-950/20 border border-blue-500/25 rounded-2xl p-3.5 space-y-1.5 relative overflow-hidden shadow-lg shadow-blue-900/10">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-cyan-400 flex items-center gap-1.5">
                    <Bot size={14} /> {current.agent}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono-code bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    RESOLVED (0.4s)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-body-md">
                  "{current.agentMsg}"
                </p>
                
                {/* Live Action Pill */}
                <div className="pt-2 border-t border-white/10 flex items-center text-[11px] font-mono-code text-white/70">
                  <span>{current.action}</span>
                </div>
              </div>

              {/* 3. Live Stats Bar */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                {current.stats.map((st, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl p-2.5 text-center">
                    <p className="text-[10px] uppercase font-mono-code text-white/40 mb-0.5">{st.label}</p>
                    <p className="text-xs sm:text-sm font-extrabold text-white font-mono-code">{st.value}</p>
                  </div>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4. Bottom Footer: Direct CTA / Guarantee */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-white/60">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>100% Tailored to Your Stack</span>
          </div>
          <span className="text-[11px] font-mono-code text-primary font-bold">
            Live Deployment: 7–14 Days
          </span>
        </div>

      </div>
    </div>
  );
}
