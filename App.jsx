import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Pricing from './components/Pricing';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import OrderForm from './components/OrderForm';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="relative font-sans text-gray-100 antialiased overflow-x-hidden min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <TechStack />
      <Testimonials />
      <OrderForm />
      <Contact />
      <Chatbot />
    </div>
  );
}

export default App;
