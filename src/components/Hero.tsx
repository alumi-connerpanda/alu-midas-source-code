import React from 'react';
import { AluMidasLogo } from './AluMidasLogo';
import { COMPANY_INFO } from '../data/companyData';
import heroImg from '../assets/images/alumidas_hero_architectural_1790940022575.jpg';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onViewWork }) => {
  return (
    <section id="home" className="relative pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden bg-white">
      {/* Subtle Architectural Hairline Grid Background */}
      <div className="absolute inset-0 architectural-grid opacity-70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Marker */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm text-slate-600 mb-6 font-medium">
          <span className="font-semibold text-navy-900 tracking-wide uppercase">
            {COMPANY_INFO.legalName}
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>Homagama, Sri Lanka</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="text-slate-800 font-semibold">{COMPANY_INFO.experienceYears} Years of Fabrication Excellence</span>
        </div>

        {/* Two-Column Asymmetric Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Brand Lockup & Value Proposition */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
            {/* Exact Official Logo Presentation without redesign or alteration */}
            <div className="mb-6 p-4 md:p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs inline-block max-w-md">
              <AluMidasLogo size="xl" />
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.12] text-balance">
              Elegant Aluminium.<br />
              <span className="text-navy-800">Exceptional Craftsmanship.</span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {COMPANY_INFO.subHeadline}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-lg shadow-sm transition-all whitespace-nowrap group cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onViewWork}
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 hover:bg-slate-200 active:scale-[0.98] rounded-lg border border-slate-300 transition-all whitespace-nowrap cursor-pointer"
              >
                <span>View Our Work</span>
              </button>
            </div>

            {/* Architectural Trust Points */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-4">
              <div>
                <p className="font-condensed text-2xl sm:text-3xl font-bold text-navy-900 tabular-nums">
                  25+
                </p>
                <p className="text-xs text-slate-600 font-medium mt-0.5">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="font-condensed text-2xl sm:text-3xl font-bold text-navy-900">
                  Custom
                </p>
                <p className="text-xs text-slate-600 font-medium mt-0.5">
                  Built to Spec
                </p>
              </div>

              <div>
                <p className="font-condensed text-2xl sm:text-3xl font-bold text-navy-900">
                  100%
                </p>
                <p className="text-xs text-slate-600 font-medium mt-0.5">
                  Quality Focus
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Worksite Architectural Image */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-950 group">
              <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 w-full overflow-hidden bg-slate-900">
                <img
                  src={heroImg}
                  alt="ALU MIDAS architectural aluminium doors and precision glazing installation"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Worksite Identification Banner */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-transparent text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                      Worksite Installation
                    </span>
                    <h2 className="text-sm sm:text-base font-semibold text-white mt-0.5">
                      Architectural Aluminium Sliding Systems & Glazing
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={onViewWork}
                    className="p-2 text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors border border-slate-600/60 cursor-pointer"
                    aria-label="View our project work"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-3 text-right text-xs text-slate-500">
              Photographed on-site · Custom fabrication by ALU MIDAS (PVT) LTD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
