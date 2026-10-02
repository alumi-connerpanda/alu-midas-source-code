import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import OurWork from './components/OurWork';
import WhyAluMidas from './components/WhyAluMidas';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { COMPANY_INFO } from './data/companyData';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const handleScrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToWork = () => {
    const workElem = document.getElementById('our-work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans">
      {/* Navigation Bar with Exact Logo */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Prominent Exact Logo */}
        <Hero
          onContactClick={handleScrollToContact}
          onViewWork={handleScrollToWork}
        />

        {/* 2. What We Do (Clicking any card opens Detailed Specifications Pop-up Window) */}
        <WhatWeDo />

        {/* 3. Our Work (Photographic Worksite Gallery with Lightbox) */}
        <OurWork />

        {/* 4. Why ALU MIDAS (6 Key Pillars) */}
        <WhyAluMidas />

        {/* 5. About ALU MIDAS (Heritage, Custom Focus, Homagama Base) */}
        <AboutSection />

        {/* 6. Contact & Direct Inquiries (Telephone, WhatsApp, Email, Registered Address) */}
        <ContactSection />
      </main>

      {/* Footer with Exact Logo */}
      <Footer />

      {/* Persistent Quick WhatsApp Float */}
      <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-30 flex flex-col gap-2.5">
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappRaw.replace('+', '')}?text=${encodeURIComponent('Hello ALU MIDAS, I would like to inquire about an aluminium fabrication project.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-103 active:scale-95 group"
          title="Chat directly on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="text-xs font-bold tracking-wide hidden sm:inline">
            WhatsApp Hotline
          </span>
        </a>
      </aside>
    </div>
  );
}
