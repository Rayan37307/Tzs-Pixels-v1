
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-600 selection:text-white bg-[#050505]">
      <Navbar />
      <main>
        <Hero />
        
        {/* Value Marquee */}
        <div className="bg-white py-5 overflow-hidden whitespace-nowrap border-y border-white/10">
          <div className="flex animate-marquee items-center gap-12 text-black font-black text-sm md:text-lg uppercase tracking-[0.2em] italic">
            <span>Automate Leads</span>
            <span>•</span>
            <span>Scale Bookings</span>
            <span>•</span>
            <span>Zero Manual Work</span>
            <span>•</span>
            <span>Fractional CTO</span>
            <span>•</span>
            <span>Conversion First</span>
            <span>•</span>
            <span>Automate Leads</span>
            <span>•</span>
            <span>Scale Bookings</span>
          </div>
        </div>

        <Services />
        <HowItWorks />
        <UseCases />
        <WhyChooseUs />
        <Pricing />
        
        {/* Strategic CTA */}
        <section className="py-32 bg-blue-600 text-center px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          </div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-10 uppercase tracking-tighter text-white leading-none">
              Build a Business <br /> That Runs Itself.
            </h2>
            <p className="text-blue-100 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
              Ready to stop being a bottleneck in your own growth? Book your free system audit and let us show you the roadmap to automation.
            </p>
            <button className="px-12 py-6 bg-white text-blue-600 font-black text-sm md:text-base uppercase tracking-widest rounded-3xl hover:scale-105 transition-all active:scale-95 shadow-2xl">
              Get Your Free System Audit
            </button>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }
        html {
          scrollbar-width: thin;
          scrollbar-color: #333 #050505;
        }
      `}</style>
    </div>
  );
}

export default App;
