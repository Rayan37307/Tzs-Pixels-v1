
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Outcome-Driven Solutions</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We don't just write code. We build machines that solve specific business bottlenecks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="group bg-[#171717] p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:bg-blue-600/10 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <div className="space-y-4 mb-6 flex-grow">
                <div>
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-tight mb-1">The Problem</p>
                  <p className="text-sm text-gray-400">{service.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-400 uppercase tracking-tight mb-1">The Solution</p>
                  <p className="text-sm text-gray-300">{service.solution}</p>
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-white/5">
                <p className="text-xs font-semibold text-green-400 uppercase tracking-tight mb-1">Result</p>
                <p className="text-sm font-medium text-white italic">"{service.result}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
