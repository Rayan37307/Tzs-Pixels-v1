
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px]" />
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black tracking-[0.2em] text-blue-400 mb-10 uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Modern Business Operating Systems
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.95] text-white uppercase">
          Build Once. <br className="hidden md:block" />
          <span className="text-gradient">Profit Forever.</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed font-medium">
          Tzs Pixels builds the automated engines of growth. We turn your digital presence into a 24/7 sales team that books leads, takes payments, and manages follow-ups — so you don't have to.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#contact" className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-2xl shadow-blue-600/30 active:scale-95">
            Book Your Free System Audit
          </a>
          <a href="#services" className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-95">
            View Our Solutions
          </a>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5">
          <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-10">Trusted to Run Critical Systems For</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale brightness-200">
             <div className="text-xl md:text-2xl font-black italic tracking-tighter">ELITE_CLINIC</div>
             <div className="text-xl md:text-2xl font-black italic tracking-tighter">CORE_GYMS</div>
             <div className="text-xl md:text-2xl font-black italic tracking-tighter">PRIME_LAW</div>
             <div className="text-xl md:text-2xl font-black italic tracking-tighter">SKY_TRAVEL</div>
             <div className="text-xl md:text-2xl font-black italic tracking-tighter">TECH_FORGE</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
