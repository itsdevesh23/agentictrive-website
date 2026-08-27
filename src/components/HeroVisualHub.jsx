import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, MessageSquare, Layers, TrendingUp, Bot, Sparkles, Activity, ShieldCheck, ArrowUpRight } from 'lucide-react';
import iconImg from '../assets/agentictrive_icon.svg';

export default function HeroVisualHub() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      icon: <Zap size={16} className="text-amber-400" />,
      title: "Automate",
      desc: "Workflows that run while you sleep",
      color: "from-amber-500/20 border-amber-500/30 text-amber-400"
    },
    {
      icon: <MessageSquare size={16} className="text-cyan-400" />,
      title: "Engage",
      desc: "AI that talks, listens and understands",
      color: "from-cyan-500/20 border-cyan-500/30 text-cyan-400"
    },
    {
      icon: <Layers size={16} className="text-indigo-400" />,
      title: "Integrate",
      desc: "All your systems. One connected flow",
      color: "from-indigo-500/20 border-indigo-500/30 text-indigo-400"
    },
    {
      icon: <TrendingUp size={16} className="text-emerald-400" />,
      title: "Grow",
      desc: "Real insights. Better decisions",
      color: "from-emerald-500/20 border-emerald-500/30 text-emerald-400"
    }
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center select-none py-4 sm:py-6 [perspective:1400px]">
      
      {/* 1. Volumetric Ambient Glows */}
      <div className="absolute -top-16 -right-12 w-80 h-80 bg-purple-600/30 rounded-full blur-[110px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute -bottom-12 -left-12 w-96 h-96 bg-blue-600/30 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-cyan-500/15 rounded-full blur-[90px] pointer-events-none"></div>

      {/* 2. Main 3D Architectural Stage */}
      <motion.div 
        initial={{ opacity: 0, rotateX: 6, rotateY: -6, y: 30 }}
        animate={{ opacity: 1, rotateX: 0, rotateY: 0, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center"
      >
        
        {/* === BACKSTAGE: Concrete Slab with Dot Grid === */}
        <div className="absolute right-4 sm:right-10 top-2 sm:top-4 w-48 sm:w-64 h-64 sm:h-84 bg-[#18181f] rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Subtle Concrete Texture & Dot Grid */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:14px_14px]"></div>
          
          {/* Dot Matrix Corner Accents */}
          <div className="absolute top-5 right-5 grid grid-cols-4 gap-2.5 opacity-40">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="w-1 h-1 rounded-full bg-white"></span>
            ))}
          </div>

          {/* Diagonal Rim Light */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.07] pointer-events-none"></div>
        </div>

        {/* === BACKSTAGE: Glowing Neon Violet Glass Arch === */}
        <div className="absolute left-6 sm:left-12 bottom-12 sm:bottom-16 w-36 sm:w-48 h-48 sm:h-64 rounded-t-full bg-gradient-to-t from-purple-700/50 via-indigo-600/30 to-transparent border-t border-l border-r border-purple-400/40 blur-[1px] shadow-[0_0_60px_rgba(168,85,247,0.4)]">
          <div className="absolute inset-2 rounded-t-full bg-gradient-to-t from-purple-900/40 via-transparent to-transparent opacity-80"></div>
        </div>

        {/* === MIDGROUND: Architectural System Display Tablet === */}
        <motion.div 
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute left-3 sm:left-8 top-8 sm:top-10 w-[72%] sm:w-[64%] bg-[#0B0B0F]/95 border border-white/15 rounded-2xl p-4 sm:p-5 shadow-[0_30px_70px_rgba(0,0,0,0.95)] backdrop-blur-2xl z-10 overflow-hidden"
        >
          {/* Window Control Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono-code text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/30 shadow-inner">
              <Activity size={11} className="animate-pulse text-cyan-400" />
              <span>AGENTIC ENGINE v2.4</span>
            </div>
          </div>

          {/* Minimalist Wireframe UI Content */}
          <div className="space-y-3 sm:space-y-3.5">
            
            {/* Top Stat Meters */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-2.5 hover:border-cyan-500/30 transition-colors">
                <p className="text-[9px] uppercase tracking-wider text-white/40 font-mono-code font-bold">Voice Latency</p>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-sm sm:text-base font-extrabold text-white font-mono-code">0.38s</span>
                  <span className="text-[10px] text-emerald-400 font-bold">⚡ Ultra Fast</span>
                </div>
              </div>
              
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-2.5 hover:border-purple-500/30 transition-colors">
                <p className="text-[9px] uppercase tracking-wider text-white/40 font-mono-code font-bold">Autonomous Sync</p>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-sm sm:text-base font-extrabold text-white font-mono-code">100%</span>
                  <span className="text-[10px] text-cyan-400 font-bold">● CRM Live</span>
                </div>
              </div>
            </div>

            {/* Interactive Live Node Stream */}
            <div className="bg-gradient-to-r from-blue-950/30 via-purple-950/20 to-cyan-950/30 border border-white/10 rounded-xl p-3 relative overflow-hidden">
              <div className="flex items-center justify-between text-[11px] mb-2 font-medium">
                <span className="text-white/80 flex items-center gap-2">
                  <Bot size={14} className="text-primary" /> Multi-Channel Automation
                </span>
                <span className="text-emerald-400 font-mono-code text-[10px] font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                  RUNNING
                </span>
              </div>
              
              {/* Dynamic Waveform Visualizer */}
              <div className="flex items-center gap-1 h-3.5 w-full bg-white/[0.03] rounded-md px-2 overflow-hidden">
                {[40, 70, 90, 60, 100, 45, 80, 55, 95, 70, 85, 40, 60, 90, 75, 50, 85, 60, 95, 40].map((h, i) => (
                  <motion.span 
                    key={i}
                    className="w-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-full inline-block"
                    animate={{ height: [`${h * 0.2}%`, `${h}%`, `${h * 0.4}%`] }}
                    transition={{ repeat: Infinity, duration: 1.2 + (i % 5) * 0.2, ease: "easeInOut" }}
                  />
                ))}
              </div>
            </div>

            {/* Micro Live Feed Items */}
            <div className="space-y-1.5 pt-0.5">
              <div className="flex items-center justify-between text-[10px] bg-white/[0.03] px-2.5 py-1.5 rounded-lg border border-white/5 text-white/70">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400 text-xs">✓</span> AI Voice Agent: Inbound Call Handled
                </span>
                <span className="text-cyan-400 font-mono-code font-semibold">CRM Logged</span>
              </div>
              
              <div className="flex items-center justify-between text-[10px] bg-white/[0.03] px-2.5 py-1.5 rounded-lg border border-white/5 text-white/70">
                <span className="flex items-center gap-1.5">
                  <span className="text-cyan-400 text-xs">✓</span> Web App Funnel: Lead Captured
                </span>
                <span className="text-emerald-400 font-mono-code font-semibold">WhatsApp Sent</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* === FOREGROUND: 3D Obsidian Logo Cube === */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.08, rotateY: 8 }}
          className="absolute left-6 sm:left-14 bottom-6 sm:bottom-8 w-22 sm:w-28 h-22 sm:h-28 bg-gradient-to-br from-[#20202a] via-[#101017] to-[#060609] border border-blue-500/50 rounded-2xl shadow-[0_20px_45px_rgba(59,130,246,0.45)] flex items-center justify-center z-30 group cursor-pointer"
        >
          {/* Beveled Rim Highlight */}
          <div className="absolute inset-0 rounded-2xl border-t border-l border-white/20 pointer-events-none"></div>
          
          {/* Inner Luminescence */}
          <div className="absolute inset-0 bg-blue-500/15 rounded-2xl blur-md group-hover:bg-blue-500/25 transition-colors"></div>
          
          <img 
            src={iconImg} 
            alt="Agentictrive 3D Emblem" 
            className="w-12 sm:w-16 h-12 sm:h-16 object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.95)] transform group-hover:scale-115 transition-transform duration-300 relative z-10"
          />
        </motion.div>

        {/* === FOREGROUND: Floating Frosted Glass Panel with Metallic Screws === */}
        <motion.div 
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
          className="absolute right-1 sm:right-5 top-12 sm:top-14 w-[54%] sm:w-[49%] bg-white/[0.04] backdrop-blur-2xl border border-white/25 rounded-2xl p-3.5 sm:p-5 shadow-[0_30px_60px_rgba(0,0,0,0.85)] z-20 overflow-hidden"
        >
          {/* Glass Glint Overlay */}
          <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent rotate-45 pointer-events-none"></div>

          {/* 4 Realistic Metallic Screws with Crosshead Detail */}
          <div className="absolute top-2.5 left-2.5 w-2 h-2 rounded-full bg-gradient-to-br from-slate-300 via-slate-500 to-slate-700 border border-slate-400/80 shadow-md flex items-center justify-center">
            <span className="w-1 h-[1px] bg-slate-800 rotate-45 block"></span>
          </div>
          <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-gradient-to-br from-slate-300 via-slate-500 to-slate-700 border border-slate-400/80 shadow-md flex items-center justify-center">
            <span className="w-1 h-[1px] bg-slate-800 rotate-45 block"></span>
          </div>
          <div className="absolute bottom-2.5 left-2.5 w-2 h-2 rounded-full bg-gradient-to-br from-slate-300 via-slate-500 to-slate-700 border border-slate-400/80 shadow-md flex items-center justify-center">
            <span className="w-1 h-[1px] bg-slate-800 rotate-45 block"></span>
          </div>
          <div className="absolute bottom-2.5 right-2.5 w-2 h-2 rounded-full bg-gradient-to-br from-slate-300 via-slate-500 to-slate-700 border border-slate-400/80 shadow-md flex items-center justify-center">
            <span className="w-1 h-[1px] bg-slate-800 rotate-45 block"></span>
          </div>

          {/* 4 Core Pillars List */}
          <div className="space-y-2.5 sm:space-y-3 relative z-10">
            {pillars.map((item, idx) => (
              <motion.div 
                key={idx} 
                onMouseEnter={() => setActivePillar(idx)}
                whileHover={{ x: 4, scale: 1.02 }}
                className={`flex items-start gap-2.5 p-2 rounded-xl border transition-all cursor-pointer ${
                  activePillar === idx 
                    ? `bg-white/10 ${item.color} shadow-lg` 
                    : 'bg-white/[0.02] border-transparent hover:bg-white/5 hover:border-white/10'
                }`}
              >
                <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                      {item.title}
                    </h4>
                    {activePillar === idx && (
                      <ArrowUpRight size={12} className="text-white/60" />
                    )}
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-white/60 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* === STAGE FLOOR: Heavy Obsidian Pedestal === */}
        <div className="absolute bottom-0 inset-x-2 sm:inset-x-6 h-3.5 sm:h-5 bg-gradient-to-r from-[#0a0a0e] via-[#1c1c28] to-[#0a0a0e] border-t border-white/20 rounded-lg shadow-2xl z-0">
          <div className="absolute inset-x-0 bottom-0 h-1.5 bg-black/90 rounded-b-lg"></div>
          {/* Subtle Stage Floor Reflection */}
          <div className="absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
        </div>

      </motion.div>
    </div>
  );
}
