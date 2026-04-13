import React from 'react';
import { motion } from 'framer-motion';

const techBrands = [
  "n8n", "OpenAI", "Zapier", "Make", "WhatsApp API", "Airtable", "Notion", "Slack", "Webhooks"
];

export default function TechStack() {
  return (
    <section className="py-16 border-t border-b border-white/5 bg-navy relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-widest text-richCyan font-semibold mb-8">
          Technologies I Work With
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-80 mix-blend-screen">
          {techBrands.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 font-medium hover:border-richCyan/50 hover:text-white hover:shadow-[0_0_15px_rgba(0,200,255,0.2)] transition-all cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
