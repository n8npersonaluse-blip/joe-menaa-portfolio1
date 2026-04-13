import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Founder, E-com Scale",
    quote: "Joe completely rewired our customer support. His AI chatbot handles 80% of our daily queries now, and the WhatsApp automation actually drives active sales while we sleep. Truly unparalleled engineering."
  },
  {
    name: "Marcus Thorne",
    role: "Director of Ops, NextGen Media",
    quote: "I thought automation was just Zapier templates. Joe built a continuous data ecosystem through n8n that connected all 5 of our department apps seamlessly. He eradicated 20 hours of manual data entry a week."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">System Validation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-panel p-8 rounded-xl border border-white/10 hover:shadow-[0_0_20px_rgba(168,216,255,0.15)] hover:border-softLightBlue/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-darkBlue rounded-full flex items-center justify-center font-bold text-richCyan text-lg border border-richCyan/20">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{t.name}</h4>
                  <p className="text-sm text-richCyan">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-300 font-light italic leading-relaxed">
                "{t.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
