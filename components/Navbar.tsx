
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center font-black text-black text-xl italic tracking-tighter">
            TZS
          </div>
          <span className="text-xl font-extrabold tracking-tight">PIXELS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Systems</a>
          <a href="#process" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Our Method</a>
          <a href="#pricing" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Investment</a>
          <a href="#contact" className="bg-white hover:bg-gray-200 text-black px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all active:scale-95">
            Book a Demo
          </a>
        </div>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
