import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, Zap, Globe, Cpu, Layers } from 'lucide-react';
import iconImg from '../assets/agentictrive_icon.png';

export default function HeroVisualHub() {
  return (
    <div className="relative w-full max-w-xl mx-auto flex items-center justify-center select-none py-6 sm:py-10">
      
      {/* 1. Volumetric Ambient Glows */}
      <div className="absolute w-80 sm:w-96 h-80 sm:h-96 bg-blue-600/30 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute w-72 sm:w-80 h-72 sm:h-80 bg-purple-600/30 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute w-60 h-60 bg-cyan-400/20 rounded-full blur-[90px] pointer-events-none"></div>

      {/* 2. Main Holographic 3D Stage Container */}
      <div className="relative w-full aspect-square max-w-[440px] sm:max-w-[480px] flex items-center justify-center">
        
        {/* Outer Orbital Rings (Dashed & Continuous) */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-dashed border-cyan-500/20 shadow-[0_0_50px_rgba(59,130,246,0.1)]"
        />

        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute inset-6 sm:inset-8 rounded-full border border-white/10 shadow-inner"
        >
          {/* Orbiting Satellite Light Nodes */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"></div>
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_15px_#c084fc]"></div>
        </motion.div>

        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute inset-14 sm:inset-16 rounded-full border border-blue-500/30"
        >
          <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"></div>
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"></div>
        </motion.div>

        {/* Floating Geometric Glass Satellite Chips */}
        {/* Top-Right Chip */}
        <motion.div 
          animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute top-2 right-4 sm:right-6 w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20"
        >
          <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            <Zap size={18} />
          </div>
        </motion.div>

        {/* Bottom-Right Chip */}
        <motion.div 
          animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-4 right-4 sm:right-8 w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20"
        >
          <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.3)]">
            <Globe size={18} />
          </div>
        </motion.div>

        {/* Bottom-Left Chip */}
        <motion.div 
          animate={{ y: [0, -6, 0], x: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-6 left-4 sm:left-6 w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20"
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.3)]">
            <Cpu size={18} />
          </div>
        </motion.div>

        {/* Top-Left Chip */}
        <motion.div 
          animate={{ y: [0, 7, 0], x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-4 left-6 sm:left-8 w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20"
        >
          <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <Layers size={18} />
          </div>
        </motion.div>

        {/* 3. Central Luminous AI Core Sphere */}
        <motion.div 
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative w-44 sm:w-52 h-44 sm:h-52 rounded-3xl bg-gradient-to-br from-[#1b1b26]/90 via-[#0d0d14]/95 to-[#06060a] border border-white/20 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.95)] backdrop-blur-2xl flex items-center justify-center z-10 group cursor-pointer"
        >
          {/* Multi-layered Internal Rings */}
          <div className="absolute inset-3 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent"></div>
          <div className="absolute inset-6 rounded-xl border border-white/10 bg-black/40 shadow-inner"></div>

          {/* Central Pulsing Energy Core */}
          <div className="relative w-24 sm:w-28 h-24 sm:h-28 rounded-2xl bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-purple-600/30 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.6)]">
            
            {/* Glowing Agentictrive Logo Emblem */}
            <motion.img 
              src={iconImg} 
              alt="Agentictrive AI Emblem" 
              className="w-14 sm:w-18 h-14 sm:h-18 object-contain drop-shadow-[0_0_25px_rgba(59,130,246,1)]"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
          </div>

          {/* Holographic Radar Sweeper Animation */}
          <div className="absolute inset-0 rounded-3xl border border-cyan-500/20 pointer-events-none overflow-hidden">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(59,130,246,0.25)_360deg)] origin-center"
            />
          </div>
        </motion.div>

        {/* 4. Bottom Base Laser Platform / Floor Flare */}
        <div className="absolute -bottom-6 w-3/4 h-3 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent blur-md"></div>

      </div>
    </div>
  );
}
