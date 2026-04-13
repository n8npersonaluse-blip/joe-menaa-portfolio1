import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function OrderForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('Transmitting...');

    window.emailjs.init("icOLOqIQyREdeoPvx");

    const params = {
      client_name: form.name.value,
      client_phone: form.phone.value,
      client_email: form.email.value,
      client_message: form.message.value
    };

    Promise.all([
      window.emailjs.send("service_t47hlxc", "template_nt7x7pq", params),
      window.emailjs.send("service_t47hlxc", "template_poqq9ud", params)
    ]).then(() => {
      setStatus("Uplink Established. Expect contact within 48 hours.");
      form.reset();
    }).catch(() => {
      setStatus("Transmission failed. Please try again.");
    });
  };

  return (
    <section id="uplink" className="py-24 px-6 relative z-10 border-t border-white/5 bg-navy/80">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white uppercase tracking-wider"
          >
            Establishing Uplink
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-richCyan drop-shadow-[0_0_8px_rgba(0,200,255,0.8)] font-light"
          >
            Confirm your mission. We'll handle the rest.
          </motion.p>
        </div>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-12 rounded-2xl border border-richCyan/20 shadow-[0_0_30px_rgba(0,200,255,0.05)] relative overflow-hidden"
        >

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm text-richCyan font-bold uppercase tracking-widest mb-2">Full Name</label>
              <input 
                type="text" 
                name="name"
                required
                className="w-full bg-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-richCyan focus:ring-1 focus:ring-richCyan transition-all placeholder:text-gray-600"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm text-richCyan font-bold uppercase tracking-widest mb-2">WhatsApp Phone Number</label>
              <input 
                type="tel" 
                name="phone"
                required
                className="w-full bg-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-richCyan focus:ring-1 focus:ring-richCyan transition-all placeholder:text-gray-600"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm text-richCyan font-bold uppercase tracking-widest mb-2">Email Address</label>
            <input 
              type="email" 
              name="email"
              required
              className="w-full bg-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-richCyan focus:ring-1 focus:ring-richCyan transition-all placeholder:text-gray-600"
              placeholder="john@company.com"
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm text-richCyan font-bold uppercase tracking-widest mb-2">Data Payload</label>
            <textarea 
              name="message"
              required
              rows={5}
              className="w-full bg-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-richCyan focus:ring-1 focus:ring-richCyan transition-all placeholder:text-gray-600 resize-none"
              placeholder="Describe your operational friction, systems you want automated, and the module/plan you need..."
            />
          </div>
          
          <button 
            type="submit"
            className="w-full py-4 bg-richCyan text-navy font-bold uppercase tracking-widest rounded-lg hover:shadow-[0_0_25px_rgba(0,200,255,0.6)] transition-all duration-300 flex justify-center items-center gap-3 animate-pulse"
          >
            <Send className="w-5 h-5" />
            Transmit Request
          </button>

          {status && (
            <div className={`mt-6 text-center font-bold font-mono text-sm p-4 rounded-lg border ${status.includes('Established') ? 'bg-richCyan/10 border-richCyan/50 text-richCyan' : 'bg-orange-500/10 border-orange-500/50 text-orange-500'}`}>
              {status}
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
