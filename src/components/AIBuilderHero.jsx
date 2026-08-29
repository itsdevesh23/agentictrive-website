import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function AIBuilderHero() {
  const videoRef = useRef(null);
  const videoSrc = "https://stream.mux.com/T6oQJQ02cQ6N01TR6iHwZkKFkbepS34dkkIc9iukgy400g.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((e) => console.log("Auto-play prevented:", e));
      });
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch((e) => console.log("Auto-play prevented:", e));
      });
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#000000] text-white overflow-hidden flex flex-col items-center justify-center select-none font-['Instrument_Sans',sans-serif]">
      
      {/* NAVBAR COMPONENT */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 py-4 flex items-center justify-between">
        {/* Left Section: Sunburst Icon */}
        <div className="flex items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
            <path d="M12 0L13.8 8.2L20.5 3.5L16.8 10.8L24 12L16.8 13.2L20.5 20.5L13.8 15.8L12 24L10.2 15.8L3.5 20.5L7.2 13.2L0 12L7.2 10.8L3.5 3.5L10.2 8.2L12 0Z" fill="white" />
          </svg>
        </div>

        {/* Center Section: Navigation Links (hidden on mobile, visible md:flex) */}
        <div className="hidden md:flex items-center gap-8">
          <button className="flex items-center gap-1 font-['Instrument_Sans',sans-serif] text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer">
            <span>Products</span>
            <ChevronDown className="w-4 h-4 text-white/80" />
          </button>
          <a href="#stories" className="font-['Instrument_Sans',sans-serif] text-sm font-medium text-white/80 hover:text-white transition-colors">
            Customer Stories
          </a>
          <a href="#resources" className="font-['Instrument_Sans',sans-serif] text-sm font-medium text-white/80 hover:text-white transition-colors">
            Resources
          </a>
          <a href="#pricing" className="font-['Instrument_Sans',sans-serif] text-sm font-medium text-white/80 hover:text-white transition-colors">
            Pricing
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <a href="#demo" className="hidden sm:block font-['Instrument_Sans',sans-serif] text-sm font-medium text-white/80 hover:text-white transition-colors">
            Book A Demo
          </a>
          <button className="bg-white text-black rounded-full px-5 py-2.5 font-semibold text-sm font-['Instrument_Sans',sans-serif] hover:bg-white/90 transition-colors cursor-pointer">
            Get Started
          </button>
        </div>
      </nav>

      {/* BACKGROUND VIDEO LAYER */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5JTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3Njg5NzIyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
        className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
      />

      {/* VIDEO OVERLAY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] pointer-events-none"></div>

      {/* DECORATIVE GRADIENTS */}
      <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-900/20 blur-[120px] mix-blend-screen pointer-events-none rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-indigo-900/20 blur-[120px] mix-blend-screen pointer-events-none rounded-full"></div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center mt-20 space-y-12">
        
        {/* Pre-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Instrument_Serif',serif] text-3xl sm:text-5xl lg:text-[48px] leading-[1.1] text-white">
            Design at the speed of thought
          </h2>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-['Instrument_Sans',sans-serif] font-semibold text-6xl sm:text-8xl lg:text-[136px] leading-[0.9] tracking-tighter bg-gradient-to-b from-white via-white to-[#b4c0ff] bg-clip-text text-transparent"
        >
          Build Faster
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-['Instrument_Sans',sans-serif] text-lg sm:text-[20px] leading-[1.65] text-white max-w-xl mx-auto"
        >
          Create fully functional, SEO-optimized websites in seconds with our advanced AI engine.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center"
        >
          {/* Primary Button */}
          <button className="pl-6 pr-2 py-2 rounded-full bg-white flex items-center gap-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 group cursor-pointer">
            <span className="font-medium text-lg font-['Instrument_Sans',sans-serif] text-[#0a0400]">
              Start Building Free
            </span>
            <div className="w-10 h-10 rounded-full bg-[#3054ff] hover:bg-[#2040e0] flex items-center justify-center shrink-0 transition-colors">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </button>

          {/* Secondary Button */}
          <button className="text-white/70 hover:text-white backdrop-blur-sm hover:bg-white/5 px-4 py-2 rounded-lg font-['Instrument_Sans',sans-serif] text-sm font-medium transition-colors flex items-center gap-1 group cursor-pointer">
            <span>See Examples</span>
            <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </motion.div>

      </div>
    </div>
  );
}
