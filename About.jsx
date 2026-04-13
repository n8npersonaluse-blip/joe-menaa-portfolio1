import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden group shadow-xl"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-richCyan to-electricBlue"></div>
          
          <h2 className="text-3xl font-bold mb-8 text-white tracking-tight flex items-center gap-3">
            <span className="w-8 h-1 bg-richCyan rounded-full"></span>
            About Me
          </h2>
          
          <p className="text-gray-300 leading-relaxed text-lg font-light tracking-wide">
            I am Joseph Amin Menna, a 19-year-old AI Automation Architect dedicated to redefining how businesses operate. In an era where time is the most valuable currency, I help founders and companies reclaim theirs by building custom digital ecosystems that think, act, and scale independently. What I do is simple yet transformative: I identify the friction in your daily operations and eliminate it through intelligent automation. From advanced AI chatbots that close leads to complex cross-platform workflows, I bridge the gap between human creativity and machine efficiency. My mission is to ensure your business doesn't just run — it evolves, allowing you to focus on strategy while my code handles the execution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
