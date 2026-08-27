import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MessageSquare, Layers, TrendingUp, Sparkles } from 'lucide-react';
import iconImg from '../assets/agentictrive_icon.svg';

export default function HeroVisualHub() {
  const pillars = [
    {
      icon: <Zap size={20} className="text-amber-400" />,
      title: "Automate",
      desc: "Workflows that run while you sleep"
    },
    {
      icon: <MessageSquare size={20} className="text-cyan-400" />,
      title: "Engage",
      desc: "AI that talks, listens and understands"
    },
    {
      icon: <Layers size={20} className="text-blue-400" />,
      title: "Integrate",
      desc: "All your systems. One connected flow"
    },
    {
      icon: <TrendingUp size={20} className="text-emerald-400" />,
      title: "Grow",
      desc: "Real insights. Better decisions"
    }
  ];

  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto flex items-center justify-center select-none py-2 sm:py-6">
      
      {/* Soft Ambient Studio Lighting */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative w-full flex flex-col items-center">
        
        {/* Floating Frosted Glass Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full bg-[#111116]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Subtle Top Glow Accent */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

          {/* Header Row: Agentictrive Hub Brand & Live Status */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <img src={iconImg} alt="Agentictrive Emblem" className="w-7 h-7 object-contain drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-wide flex items-center gap-1.5">
                  Autonomous Hub
                </h3>
                <p className="text-xs text-white/50">Next-Gen Business OS</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold text-emerald-400 font-mono-code uppercase tracking-wider">Active</span>
            </div>
          </div>

          {/* 4 Clean Pillars List */}
          <div className="space-y-4">
            {pillars.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 group-hover:border-white/20 transition-all">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Micro Footer */}
          <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
            <span>⚡ 24/7 Intelligent Automation</span>
            <span className="font-mono-code text-primary/80 font-semibold">99.9% Uptime</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
