import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MessageSquare, Layers, TrendingUp, Bot, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import iconImg from '../assets/agentictrive_icon.svg';

export default function HeroVisualHub() {
  const pillars = [
    {
      icon: <Zap size={18} className="text-amber-400" />,
      title: "Automate",
      desc: "Workflows that run while you sleep"
    },
    {
      icon: <MessageSquare size={18} className="text-cyan-400" />,
      title: "Engage",
      desc: "AI that talks, listens and understands"
    },
    {
      icon: <Layers size={18} className="text-indigo-400" />,
      title: "Integrate",
      desc: "All your systems. One connected flow"
    },
    {
      icon: <TrendingUp size={18} className="text-emerald-400" />,
      title: "Grow",
      desc: "Real insights. Better decisions"
    }
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center select-none py-6">
      {/* Background Ambient Glows */}
      <div className="absolute -top-12 -right-8 w-72 h-72 bg-purple-600/25 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-blue-600/25 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main 3D Architectural Composition */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center">
        
        {/* 1. Background Concrete Slab with Dot Matrix */}
        <div className="absolute right-4 sm:right-8 top-2 sm:top-4 w-44 sm:w-60 h-64 sm:h-80 bg-gradient-to-b from-[#22222a] to-[#121217] rounded-2xl border border-white/10 shadow-2xl overflow-hidden opacity-90">
          {/* Dot matrix grid */}
          <div className="absolute top-4 right-4 grid grid-cols-4 gap-2 opacity-30">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="w-1 h-1 rounded-full bg-white"></span>
            ))}
          </div>
          {/* Subtle edge highlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]"></div>
        </div>

        {/* 2. Glowing Neon Purple Glass Arch */}
        <div className="absolute left-6 sm:left-12 bottom-12 sm:bottom-16 w-32 sm:w-44 h-48 sm:h-64 rounded-t-full bg-gradient-to-t from-purple-700/40 via-indigo-600/20 to-transparent border-t border-l border-r border-purple-400/30 blur-[1px] shadow-[0_0_50px_rgba(168,85,247,0.3)]"></div>

        {/* 3. Central System Dashboard Display (Angled 3D Monitor) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-4 sm:left-10 top-10 sm:top-12 w-[68%] sm:w-[62%] bg-[#0e0e13]/95 border border-white/15 rounded-2xl p-4 sm:p-5 shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl z-10"
        >
          {/* Window Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono-code text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
              <Activity size={10} className="animate-pulse" />
              <span>LIVE AI NODES</span>
            </div>
          </div>

          {/* Wireframe UI Content */}
          <div className="space-y-3">
            {/* Top Stat Row */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/5 border border-white/5 rounded-lg p-2">
                <p className="text-[9px] uppercase tracking-wider text-white/40 font-mono-code">Response Time</p>
                <p className="text-sm font-bold text-white font-mono-code">0.4s <span className="text-[10px] text-emerald-400">⚡ Instant</span></p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-lg p-2">
                <p className="text-[9px] uppercase tracking-wider text-white/40 font-mono-code">System Uptime</p>
                <p className="text-sm font-bold text-white font-mono-code">99.98% <span className="text-[10px] text-blue-400">● 24/7</span></p>
              </div>
            </div>

            {/* Wireframe Chart / Node Activity Flow */}
            <div className="bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 border border-white/5 rounded-xl p-3 relative overflow-hidden">
              <div className="flex items-center justify-between text-[11px] mb-2 font-medium">
                <span className="text-white/70 flex items-center gap-1.5">
                  <Bot size={13} className="text-primary" /> Autonomous Inbound Voice
                </span>
                <span className="text-emerald-400 font-mono-code text-[10px] font-bold">ACTIVE</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                  animate={{ width: ["30%", "85%", "60%", "95%"] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                />
              </div>
            </div>

            {/* Micro Activity Feed */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-[10px] bg-white/[0.02] px-2 py-1 rounded border border-white/5 text-white/60">
                <span className="flex items-center gap-1"><span>📞</span> Voice AI Appointment Booked</span>
                <span className="text-emerald-400 font-mono-code">CRM Synced</span>
              </div>
              <div className="flex items-center justify-between text-[10px] bg-white/[0.02] px-2 py-1 rounded border border-white/5 text-white/60">
                <span className="flex items-center gap-1"><span>🌐</span> Website Funnel Lead Qualified</span>
                <span className="text-cyan-400 font-mono-code">WhatsApp Sent</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. Front 3D Agentictrive Logo Obsidian Cube */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="absolute left-8 sm:left-16 bottom-8 sm:bottom-10 w-20 sm:w-28 h-20 sm:h-28 bg-gradient-to-br from-[#1c1c24] via-[#0d0d12] to-[#050508] border border-blue-500/40 rounded-2xl shadow-[0_15px_35px_rgba(59,130,246,0.35)] flex items-center justify-center z-30 group cursor-pointer"
        >
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-sm group-hover:bg-blue-500/20 transition-colors"></div>
          <img 
            src={iconImg} 
            alt="Agentictrive Emblem" 
            className="w-12 sm:w-16 h-12 sm:h-16 object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.9)] transform group-hover:scale-110 transition-transform duration-300"
          />
        </motion.div>

        {/* 5. Floating Frosted Glass Card with Corner Screws (Right Foreground) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="absolute right-2 sm:right-6 top-16 sm:top-16 w-[52%] sm:w-[48%] bg-white/[0.04] backdrop-blur-2xl border border-white/20 rounded-2xl p-3.5 sm:p-5 shadow-[0_25px_50px_rgba(0,0,0,0.8)] z-20"
        >
          {/* 4 Corner Screws */}
          <span className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-slate-400/60 border border-slate-600/80 shadow-inner"></span>
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-slate-400/60 border border-slate-600/80 shadow-inner"></span>
          <span className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-slate-400/60 border border-slate-600/80 shadow-inner"></span>
          <span className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-slate-400/60 border border-slate-600/80 shadow-inner"></span>

          {/* 4 Core Pillars List */}
          <div className="space-y-3 sm:space-y-3.5">
            {pillars.map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ x: 3 }}
                className="flex items-start gap-2.5 group cursor-default"
              >
                <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-white/10 transition-colors shadow-sm">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-white/55 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 6. Base Pedestal Platform (Stage Floor) */}
        <div className="absolute bottom-0 inset-x-2 sm:inset-x-6 h-3 sm:h-4 bg-gradient-to-r from-[#0d0d12] via-[#1a1a24] to-[#0d0d12] border-t border-white/15 rounded-lg shadow-2xl z-0">
          <div className="absolute inset-x-0 bottom-0 h-1 bg-black/80 rounded-b-lg"></div>
        </div>

      </div>
    </div>
  );
}
