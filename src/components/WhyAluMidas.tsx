import React from 'react';
import { CORE_PILLARS } from '../data/companyData';
import { CheckCircle2, Shield, Clock, Compass, Layers, Headphones } from 'lucide-react';

export const WhyAluMidas: React.FC = () => {
  const icons = [Clock, Layers, CheckCircle2, Compass, Shield, Headphones];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-navy-900 text-white relative overflow-hidden">
      {/* Subtle Architectural Grid Overlay in Dark */}
      <div className="absolute inset-0 architectural-grid-dark opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2.5">
            <span className="w-6 h-0.5 bg-amber-400" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Why ALU MIDAS
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            With over 25 years of proven experience, ALU MIDAS is built on a simple foundation: quality over quantity, precision custom fabrication, and dependable client support.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_PILLARS.map((pillar, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={pillar.title}
                className="relative bg-navy-800/80 border border-navy-700/80 p-7 rounded-xl hover:border-amber-400/50 transition-colors duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-navy-900 border border-navy-700 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-navy-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-condensed text-xs font-bold text-slate-400 tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-navy-700/60 flex items-center gap-2 text-xs text-slate-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>ALU MIDAS Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Focus Quote */}
        <div className="mt-14 p-6 sm:p-8 bg-navy-950/90 rounded-2xl border border-navy-700/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              Our Core Philosophy
            </p>
            <p className="mt-1 text-lg sm:text-xl font-medium text-slate-100">
              “Quality over quantity, custom workmanship, practical solutions, and long-term customer service.”
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shadow-sm shrink-0"
          >
            Work With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyAluMidas;
