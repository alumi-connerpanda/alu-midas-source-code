import React, { useState, useEffect } from 'react';
import { AluMidasLogo } from './AluMidasLogo';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'What We Do', href: '#what-we-do' },
    { label: 'Our Work', href: '#our-work' },
    { label: 'Why ALU MIDAS', href: '#why-us' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-2.5'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Exact Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
            aria-label="ALU MIDAS (PVT) LTD Home"
          >
            <AluMidasLogo size="md" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 transition-colors hover:text-navy-900 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-navy-900 px-3 py-2 rounded-lg transition-colors border border-slate-200 hover:border-slate-300"
              title="Call ALU MIDAS"
            >
              <Phone className="w-3.5 h-3.5 text-navy-900" />
              <span className="font-condensed text-sm tracking-wide">{COMPANY_INFO.phone}</span>
            </a>

            <a
              href="#contact"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-lg transition-all shadow-sm whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="p-2 text-navy-900 bg-amber-400 rounded-md"
              aria-label="Call ALU MIDAS"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-navy-900 rounded-lg hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 animate-fadeIn shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-navy-900 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-xs text-slate-600 px-3">
              <span>Homagama, Sri Lanka</span>
              <span className="font-semibold text-navy-900">{COMPANY_INFO.experienceYears} Years Exp.</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-900 bg-slate-100 rounded-lg"
              >
                <Phone className="w-4 h-4 text-navy-900" />
                <span>Call Us</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw.replace('+', '')}?text=${encodeURIComponent('Hello ALU MIDAS, I would like to inquire about an aluminium fabrication project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 rounded-lg border border-emerald-200"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm"
            >
              Contact ALU MIDAS
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
