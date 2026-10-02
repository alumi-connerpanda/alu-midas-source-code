import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { AluMidasLogo } from './AluMidasLogo';
import { Phone, MessageSquare, Mail, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-white border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-5">
            {/* Logo in clean light container */}
            <div className="inline-block p-3 bg-white rounded-xl mb-5 shadow-xs">
              <AluMidasLogo size="lg" />
            </div>

            <p className="text-base font-bold text-white tracking-tight">
              {COMPANY_INFO.legalName}
            </p>

            <p className="mt-1 text-sm text-amber-400 font-medium">
              {COMPANY_INFO.tagline}
            </p>

            <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Specialists in interior and exterior custom aluminium fabrication, architectural doors, windows, tempered glass roofs, facades, and cladding solutions. Based in Homagama, Sri Lanka.
            </p>

            {/* Official Facebook Page Button */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-bold tracking-wide transition-all shadow-sm group cursor-pointer"
                title="ALU MIDAS Official Facebook Page"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Official Facebook Page</span>
                <span className="text-white/80 group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-amber-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#what-we-do" className="hover:text-amber-300 transition-colors">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#our-work" className="hover:text-amber-300 transition-colors">
                  Worksite Project Gallery
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-300 transition-colors">
                  Why ALU MIDAS
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  About Us (25+ Years)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Contact & Workshop
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  Tel:{' '}
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-white hover:text-amber-300 font-condensed tracking-wide"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  WhatsApp:{' '}
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappRaw.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-300 font-condensed tracking-wide"
                  >
                    {COMPANY_INFO.whatsapp}
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  Email:{' '}
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-white hover:text-amber-300 break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-navy-800">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-navy-900/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
          </p>
          <p>
            Homagama, Sri Lanka · Custom Aluminium Fabrication & Architectural Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
