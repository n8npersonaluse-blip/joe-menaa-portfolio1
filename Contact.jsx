import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-24 px-6 relative z-10 border-t border-b border-white/5 overflow-hidden bg-gradient-to-b from-navy to-[#050810]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight"
        >
          Let's Build Something That Works For You.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 mb-12 font-light"
        >
          Reach out on Instagram or fill out the Uplink form above.
        </motion.p>
        
        <motion.a 
          href="https://www.instagram.com/youcef_amin10/"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-richCyan shadow-[0_0_20px_rgba(0,200,255,0.1)] rounded-full text-richCyan hover:text-navy hover:bg-richCyan hover:shadow-[0_0_30px_rgba(0,200,255,0.8)] transition-all duration-300 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 group-hover:scale-110 transition-transform"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          <span className="font-bold tracking-widest uppercase">@youcef_amin10</span>
        </motion.a>
      </div>

      <div className="mt-24 text-center text-sm text-gray-600 font-medium pb-8 uppercase tracking-widest">
        © {new Date().getFullYear()} Joe Menaa. Engineering the Future.
      </div>
    </section>
  );
}
