import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { AluMidasLogo } from './AluMidasLogo';
import { MapPin, Phone, ShieldCheck, Check, Hammer } from 'lucide-react';
import fabricationImg from '../assets/images/alumidas_work_fabrication_craft_1790940074687.jpg';

export const AboutSection: React.FC = () => {
  const commitments = [
    {
      label: '25+ Years Experience',
      desc: 'Extensive hands-on field experience across residential and commercial architectural installations.',
    },
    {
      label: 'Custom Fabrication',
      desc: 'Every extrusion, sash, and joint is cut, prepared, and assembled strictly to custom site dimensions.',
    },
    {
      label: 'Uncompromising Quality',
      desc: 'We prioritize structural integrity and neat craftsmanship over rushed volume production.',
    },
    {
      label: 'Attention to Detail',
      desc: 'Clean miter corners, secure weather-stripping, and smooth rolling hardware on all systems.',
    },
    {
      label: 'Long-Term Service',
      desc: 'Direct after-service support, hardware adjustments, and ongoing care long after completion.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Asset & Workshop Snapshot */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900">
              <div className="aspect-4/3 w-full overflow-hidden">
                <img
                  src={fabricationImg}
                  alt="ALU MIDAS aluminium extrusion workshop fabrication craftsmanship in Homagama"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom workshop badge */}
              <div className="p-5 bg-slate-900 text-white border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-400 text-slate-950 rounded-lg">
                    <Hammer className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Workshop Fabrication & Assembly
                    </h4>
                    <p className="text-xs text-slate-400">
                      Homagama, Sri Lanka · Dedicated Fabrication Team
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Location & Contact Details */}
            <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-2 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-navy-900 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-navy-900 shrink-0" />
                <span>Direct Line: {COMPANY_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-900 mb-2.5">
              <span className="w-6 h-0.5 bg-amber-400" />
              <span>About The Company</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight text-balance">
              Precision Aluminium Fabrication with Quarter-Century Heritage
            </h2>

            <div className="mt-5 space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900 font-semibold">ALU MIDAS (PVT) LTD</strong> is an established aluminium fabrication and architectural solutions provider based in Homagama, Sri Lanka. With more than 25 years of specialized field experience, we supply, fabricate, and install premium aluminium and glass systems for both interior and exterior architectural projects.
              </p>
              <p>
                Rather than treating aluminium work as generic mass assembly, we approach every job with the mindset of custom workmanship. Whether fabricating slimline sliding doors for a contemporary private residence, heavy-duty commercial curtain wall facades, tempered glass roofs, or custom ceiling baffles, we fabricate to precise site requirements.
              </p>
              <p>
                Our team works fluidly across classic, modern, and luxury design styles, ensuring seamless integration with building plans while guaranteeing durability against local weather conditions.
              </p>
            </div>

            {/* Commitments List */}
            <div className="mt-8 space-y-3">
              {commitments.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-amber-700 stroke-[3]" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900">{item.label}</span>
                    <span className="text-sm text-slate-600"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-2xs"
              >
                Request Quotation
              </a>
              <a
                href="#services"
                className="text-xs font-semibold text-navy-900 hover:text-navy-700 underline underline-offset-4"
              >
                Browse All 9 Service Categories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
