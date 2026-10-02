import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, MessageSquare, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-900 mb-2.5">
            <span className="w-6 h-0.5 bg-amber-400" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
            Contact ALU MIDAS
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Connect directly with our team for inquiries regarding aluminium fabrication, doors, windows, glass installations, and custom architectural solutions.
          </p>
        </div>

        {/* 3 Prominent Quick Action Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Click to Call */}
          <div className="p-7 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col justify-between hover:border-navy-900 hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center mb-5">
                <Phone className="w-6 h-6 text-amber-400" />
              </div>
              <span className="text-xs uppercase tracking-wider font-bold text-slate-500 block">
                Direct Telephone
              </span>
              <p className="mt-1 text-2xl font-bold text-navy-900 font-condensed tracking-wide">
                {COMPANY_INFO.phone}
              </p>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Call for immediate assistance, project discussions, and technical site consultations.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* WhatsApp Direct */}
          <div className="p-7 rounded-2xl border border-emerald-200 bg-emerald-50/60 flex flex-col justify-between hover:border-emerald-500 hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-5">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider font-bold text-emerald-800 block">
                WhatsApp Hotline
              </span>
              <p className="mt-1 text-2xl font-bold text-slate-900 font-condensed tracking-wide">
                {COMPANY_INFO.whatsapp}
              </p>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Send plans, site photos, or measurements directly on WhatsApp for quick review.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-emerald-200">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw.replace('+', '')}?text=${encodeURIComponent('Hello ALU MIDAS (PVT) LTD, I would like to inquire about an aluminium fabrication project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Open WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Direct Email */}
          <div className="p-7 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col justify-between hover:border-navy-900 hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center mb-5">
                <Mail className="w-6 h-6 text-amber-400" />
              </div>
              <span className="text-xs uppercase tracking-wider font-bold text-slate-500 block">
                Official Email
              </span>
              <p className="mt-1 text-base sm:text-lg font-bold text-navy-900 break-all">
                {COMPANY_INFO.email}
              </p>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Email architectural drawings, BOQs, and formal corporate inquiries.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200">
              <a
                href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent('Inquiry - ALU MIDAS (PVT) LTD')}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Company Registration & Registered Address Card */}
        <div className="mt-10 p-6 sm:p-8 bg-navy-950 text-white rounded-2xl border border-navy-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Registered Company
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {COMPANY_INFO.legalName}
            </h3>
            <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 pt-1">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-t md:border-t-0 md:border-l border-navy-800 pt-4 md:pt-0 md:pl-8 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <strong className="text-white block font-medium">Business Hours</strong>
                <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
              </div>
            </div>

            <a
              href={COMPANY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#1877F2] hover:bg-[#166fe5] text-white font-semibold transition-colors"
              title="ALU MIDAS Official Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook Page</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
