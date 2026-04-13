import React from 'react';
import { motion } from 'framer-motion';
import { Search, Cog, Activity, TrendingUp } from 'lucide-react';

const steps = [
  {
    title: "Identify & Analyze",
    desc: "Map your workflow friction and locate operational bottlenecks.",
    icon: <Search className="w-6 h-6 text-richCyan" />
  },
  {
    title: "Build & Automate",
    desc: "Create custom n8n pipelines & AI agents specifically for your systems.",
    icon: <Cog className="w-6 h-6 text-richCyan" />
  },
  {
    title: "Deploy & Monitor",
    desc: "Launch live systems that execute perfectly 24/7 without fail.",
    icon: <Activity className="w-6 h-6 text-richCyan" />
  },
  {
    title: "Scale & Evolve",
    desc: "Continuous optimization ensuring architecture grows with your business.",
    icon: <TrendingUp className="w-6 h-6 text-richCyan" />
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 relative z-10 border-t border-white/5 bg-darkBlue/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-white"
          >
            How We Scale Your Business Using AI
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-richCyan to-electricBlue mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="glass-panel p-8 rounded-xl border border-white/10 hover:glow-cyan-hover transition-all duration-300 relative group cursor-default h-full flex flex-col"
            >
              <div className="absolute -top-4 -right-4 text-6xl font-black text-white/5 z-0 group-hover:text-richCyan/10 transition-colors">
                {index + 1}
              </div>
              <div className="w-14 h-14 rounded-full bg-navy border border-richCyan/30 flex items-center justify-center mb-6 z-10 group-hover:shadow-[0_0_15px_rgba(0,200,255,0.5)] transition-all">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 z-10">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
