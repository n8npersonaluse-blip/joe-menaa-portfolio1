import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Uplink', href: '#uplink' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-white group">
          J<span className="text-richCyan group-hover:glow-cyan transition-all">M</span>
        </a>
        
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-white hover:text-shadow-[0_0_8px_rgba(0,200,255,0.8)] transition-all text-sm font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#uplink" 
            className="px-5 py-2 text-sm font-semibold rounded-md border border-richCyan/50 text-richCyan hover:glow-cyan-hover transition-all duration-300"
          >
            Start Project
          </a>
        </div>
      </div>
    </nav>
  );
}
