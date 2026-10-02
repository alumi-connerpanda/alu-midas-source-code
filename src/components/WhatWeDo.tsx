import React, { useState } from 'react';
import { SERVICES, ServiceDetail } from '../data/companyData';
import { ServiceDetailModal } from './ServiceDetailModal';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const WhatWeDo: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const majorServices = [
    {
      title: 'Aluminium Fabrication',
      summary: 'Precision workshop fabrication with high-grade extruded aluminium profiles for residential and commercial structures.',
      serviceId: 'aluminium-fabrication',
      highlights: ['Custom dimensions', 'High-grade alloys', 'Clean miter joints'],
    },
    {
      title: 'Doors & Windows',
      summary: 'Architectural sliding doors, casements, pivot systems, and folding frames built with heavy-duty weather seals and hardware.',
      serviceId: 'doors-windows',
      highlights: ['Sliding & casements', 'Multi-point locks', 'Weather gaskets'],
    },
    {
      title: 'Glass Solutions',
      summary: 'High-strength tempered glass partitions, glass balustrades, staircase railings, and custom architectural glass canopies.',
      serviceId: 'tempered-glass',
      highlights: ['Toughened safety glass', 'Polished edges', 'Frameless systems'],
    },
    {
      title: 'Cladding & Facades',
      summary: 'Aluminium composite panel (ACP) exterior cladding, curtain wall glazing, and structural storefront facades.',
      serviceId: 'cladding',
      highlights: ['Aluminium composite panels', 'Curtain walls', 'UV & weather proof'],
    },
    {
      title: 'Ceiling Works',
      summary: 'Linear aluminium strip ceilings, moisture-resistant baffles, and suspended architectural ceiling frameworks.',
      serviceId: 'ceiling-works',
      highlights: ['Strip & baffle profiles', 'Moisture resistant', 'Zero timber rot'],
    },
    {
      title: 'Interior & Exterior Solutions',
      summary: 'Custom room dividers, architectural screens, office partitions, and specialized custom metal and glass assemblies.',
      serviceId: 'custom-solutions',
      highlights: ['Bespoke engineering', 'Tailored profiles', 'Site-specific fit'],
    },
  ];

  const handleCardClick = (serviceId: string) => {
    const found = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];
    setSelectedService(found);
  };

  return (
    <section id="what-we-do" className="py-20 md:py-28 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-900 mb-2.5">
            <span className="w-6 h-0.5 bg-amber-400" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
            What We Do
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            ALU MIDAS provides comprehensive interior and exterior aluminium fabrication and architectural solutions.
            Click any service below to view detailed specifications and technical standards.
          </p>
        </div>

        {/* Clean 6-Card Architectural Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {majorServices.map((service, index) => (
            <div
              key={service.serviceId}
              onClick={() => handleCardClick(service.serviceId)}
              className="group relative bg-white p-7 rounded-xl border border-slate-200/90 shadow-2xs hover:border-navy-900/60 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-condensed text-xs font-bold text-slate-400 tracking-widest">
                    0{index + 1}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-amber-400 group-hover:text-slate-950 flex items-center justify-center text-slate-500 transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-bold text-navy-900 tracking-tight group-hover:text-navy-700 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {service.summary}
                </p>

                {/* Key Bullet Highlights */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-2 text-xs text-slate-500">
                  {service.highlights.map((h, i) => (
                    <span key={i} className="inline-flex items-center gap-1 font-medium">
                      <span className="w-1 h-1 rounded-full bg-amber-400" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-navy-900 group-hover:text-amber-600 transition-colors">
                <span>View Detailed Specifications</span>
                <span className="text-amber-500 font-bold">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Window Showing Detailed Specifications */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};

export default WhatWeDo;
