import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full particle bg-richCyan blur-[1px]"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's',
              opacity: Math.random() * 0.4 + 0.1
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-darkBlue/40 via-navy to-navy"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-softLightBlue to-electricBlue leading-tight py-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I Build AI Systems That Work While You Sleep.
        </motion.h1>

        <motion.p 
          className="text-lg md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AI Automation Architect <span className="text-richCyan px-2">•</span> n8n Expert <span className="text-richCyan px-2">•</span> Digital Ecosystem Builder
        </motion.p>
        
        <motion.p 
          className="text-xl md:text-2xl text-white mb-16 font-medium tracking-widest uppercase font-sans"
          initial={{ opacity: 0, opacity: 0 }}
          animate={{ opacity: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          Joe Menaa
        </motion.p>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#pricing" className="inline-block px-8 py-4 bg-darkBlue text-richCyan font-bold rounded-lg border border-richCyan/50 shadow-[0_0_20px_rgba(0,200,255,0.2)] hover:glow-cyan-hover transition-all duration-300">
            See What I Can Do For You
          </a>
        </motion.div>
      </div>
    </section>
  );
}
