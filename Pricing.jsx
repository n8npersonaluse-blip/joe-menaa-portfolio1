import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$500',
    features: ['Single-channel chatbot', 'Basic FAQ responses', 'Product catalog', '1 week support'],
  },
  {
    name: 'Growth',
    price: '$1,200',
    features: ['Multi-channel (WA + IG + FB)', 'AI-powered smart replies', 'Order tracking', 'Monthly optimization'],
    isRecommended: true
  },
  {
    name: 'Scale',
    price: '$2,000+',
    features: ['Everything in Growth', 'Custom workflows', 'Analytics dashboard', 'Priority support'],
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-white"
          >
            Pricing & Offers
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-richCyan to-electricBlue mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`glass-panel p-8 rounded-2xl relative flex flex-col hover:glow-cyan-hover transition-all duration-300 ${tier.isRecommended ? 'border-richCyan shadow-[0_0_25px_rgba(0,200,255,0.15)] md:-translate-y-4 hover:-translate-y-6' : 'border-white/10'}`}
            >
              {tier.isRecommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-richCyan text-navy px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,200,255,0.7)]">
                  Recommended
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2 text-white">{tier.name}</h3>
              <div className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-richCyan to-electricBlue">
                {tier.price}
              </div>
              
              <ul className="space-y-4 flex-grow mb-8">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start text-gray-300 font-light">
                    <Check className="w-5 h-5 text-richCyan mr-3 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#uplink"
                className={`w-full py-4 text-center rounded-lg font-bold uppercase tracking-widest transition-all duration-300 ${tier.isRecommended ? 'bg-richCyan text-navy hover:shadow-[0_0_20px_rgba(0,200,255,0.5)]' : 'bg-white/5 border border-white/20 text-white hover:bg-white/10'}`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
