import React, { useEffect } from 'react';
import { X, Check, MessageSquare, Phone, ShieldCheck } from 'lucide-react';
import { ServiceDetail, COMPANY_INFO } from '../data/companyData';

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello ALU MIDAS, I would like to inquire about specifications and pricing for ${service.title}.`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${service.title} Detailed Specifications`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4.5 bg-navy-900 text-white border-b border-navy-800">
          <div>
            <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block">
              Detailed Specifications
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
              {service.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-slate-300 hover:text-white hover:bg-navy-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Scope and Tag */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs text-slate-500 font-medium">Application Scope</span>
              <p className="text-sm font-bold text-navy-900 mt-0.5">{service.scope}</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-500 font-medium">Fabrication Standard</span>
              <p className="text-sm font-bold text-amber-600 mt-0.5">Custom Built to Spec</p>
            </div>
          </div>

          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Overview & Engineering Approach
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Features & Technical Specifications */}
          <div className="pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3.5">
              Key Technical Features & Standards
            </h4>
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-md bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Warranty Note */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3 text-xs text-slate-600">
            <ShieldCheck className="w-5 h-5 text-navy-900 shrink-0" />
            <span>
              All {service.title} projects by ALU MIDAS (PVT) LTD include our manufacturing warranty and long-term after-service support.
            </span>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw.replace('+', '')}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Inquire on WhatsApp</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Direct</span>
            </a>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer text-center"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
