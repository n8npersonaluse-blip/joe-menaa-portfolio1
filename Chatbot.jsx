import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, ChevronDown, Send } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hello! I'm Joe's AI assistant. Do you have any questions about his n8n workflows, pricing, or how we can automate your operations?" }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    if (!apiKey || apiKey === "YOUR_API_KEY") {
      // Offline / Mock response mode if no valid key is provided
      setTimeout(() => {
         let reply = "I'm currently running in simulated mode because my API uplink isn't configured yet. I can tell you that Joe's services range from $500 to $2000+, focusing on deep n8n architectures. I encourage you to fill out the Establishing Uplink form to talk to the architect himself.";
         setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
         setLoading(false);
      }, 1000);
      return;
    }

    // Real OpenAI Integration
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": window.location.href,
          "X-Title": "Joe Menaa System"
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          messages: [
            { 
              role: "system", 
              content: "You are Joe's AI assistant on his portfolio website. Joe Menaa is a 19-year-old AI Automation Architect who builds custom n8n workflows, AI chatbots, and digital automation ecosystems for businesses. His services range from $500 (Starter) to $2,000+ (Scale). You answer visitor questions about his work, process, and pricing in a professional, friendly tone. Always end by encouraging them to fill out the Establishing Uplink form to get started." 
            },
            ...messages.map(m => ({ role: m.role, content: m.text })),
            { role: "user", content: userMsg }
          ],
          max_tokens: 150
        })
      });
      const data = await response.json();
      if (data.choices && data.choices[0]) {
        setMessages(prev => [...prev, { role: 'assistant', text: data.choices[0].message.content }]);
      } else {
        throw new Error("No response from AI");
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', text: "Error connecting to AI neural net. Please use the Uplink form." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Orb Widget */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-navy border-2 border-richCyan text-richCyan rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,200,255,0.6)] z-50 hover:bg-richCyan/20 hover:scale-110 transition-all"
      >
        <Bot className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-richCyan opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-richCyan shadow-[0_0_10px_#00c8ff]"></span>
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[340px] md:w-[400px] bg-navy/95 backdrop-blur-xl rounded-2xl border border-richCyan/30 shadow-[0_0_40px_rgba(0,0,0,0.8)] z-50 flex flex-col overflow-hidden"
            style={{ height: '550px', maxHeight: 'calc(100vh - 48px)' }}
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-darkBlue to-navy border-b border-richCyan/30 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-richCyan/20 flex items-center justify-center border border-richCyan shadow-[0_0_10px_currentColor] text-richCyan">
                   <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-md tracking-wide">Ask Joe's AI</h3>
                  <p className="text-xs text-richCyan flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-richCyan animate-pulse"></span> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors bg-white/5 p-1 rounded-full">
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-richCyan text-navy font-medium rounded-br-sm' 
                        : 'bg-darkBlue border border-white/10 text-gray-200 rounded-bl-sm shadow-[0_0_15px_rgba(0,200,255,0.05)]'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                   <div className="bg-darkBlue border border-white/10 text-richCyan p-3 rounded-2xl flex items-center gap-1">
                     <span className="w-2 h-2 bg-richCyan rounded-full animate-bounce"></span>
                     <span className="w-2 h-2 bg-richCyan rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
                     <span className="w-2 h-2 bg-richCyan rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 bg-darkBlue border-t border-white/10 flex gap-2 shrink-0 m-2 rounded-xl">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Joe's workflow..."
                className="flex-1 bg-transparent border-none px-2 text-sm text-white focus:outline-none placeholder:text-gray-500 font-sans"
              />
              <button 
                type="submit"
                disabled={!input.trim() || loading}
                className="bg-richCyan text-navy w-10 h-10 flex items-center justify-center rounded-lg shadow-lg disabled:opacity-50 hover:bg-white hover:text-richCyan transition-colors"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>

            <div className="text-center py-2 text-[10px] text-gray-500 uppercase tracking-widest bg-navy">
              Powered by Joe Menaa System Architecture
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
