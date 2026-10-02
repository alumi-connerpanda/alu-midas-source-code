import React, { useState } from 'react';
import { GALLERY_PROJECTS, ProjectItem } from '../data/companyData';
import { ImageLightboxModal } from './ImageLightboxModal';
import { Maximize2, Layers } from 'lucide-react';

export const OurWork: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Doors & Windows',
    'Glass Solutions',
    'Cladding & Facades',
    'Aluminium Fabrication',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.category === activeCategory);

  const currentProject =
    selectedProjectIndex !== null ? filteredProjects[selectedProjectIndex] : null;

  const handleNext = () => {
    if (selectedProjectIndex !== null) {
      setSelectedProjectIndex((selectedProjectIndex + 1) % filteredProjects.length);
    }
  };

  const handlePrev = () => {
    if (selectedProjectIndex !== null) {
      setSelectedProjectIndex(
        (selectedProjectIndex - 1 + filteredProjects.length) % filteredProjects.length
      );
    }
  };

  return (
    <section id="our-work" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-900 mb-2">
              <span className="w-6 h-0.5 bg-amber-400" />
              <span>Fabrication & Installation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
              Our Work
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              Authentic on-site photographs and workshop fabrication showcasing our aluminium joinery, glass installations, and architectural structures.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional segmented controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedProjectIndex(null);
                }}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProjectIndex(index)}
              className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Frame - Respecting photo geometry, no heavy artificial filters */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-xs rounded-lg text-xs font-bold text-navy-900 shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5 text-amber-500" />
                    <span>View Larger</span>
                  </div>
                </div>
              </div>

              {/* Card Meta & Title */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with separators - zero-pill discipline */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="text-navy-900 font-semibold">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.style} Style</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.workType}</span>
                  </div>

                  <h3 className="mt-2.5 text-base font-bold text-navy-900 group-hover:text-navy-700 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span>ALU MIDAS (PVT) LTD</span>
                  <span className="text-navy-900 font-semibold group-hover:text-amber-600 transition-colors">
                    Click to enlarge
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note for Future Works */}
        <div className="mt-12 p-5 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-navy-900 text-amber-400 rounded-lg">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-navy-900">
                Custom Architectural Specifications
              </p>
              <p className="text-xs text-slate-600">
                Have specific drawings or site measurements? We fabricate bespoke solutions tailored to your building requirements.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-navy-900 bg-white border border-slate-300 hover:border-navy-900 rounded-lg transition-colors whitespace-nowrap shadow-2xs"
          >
            Inquire About A Project
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightboxModal
        project={currentProject}
        onClose={() => setSelectedProjectIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        hasMultiple={filteredProjects.length > 1}
      />
    </section>
  );
};

export default OurWork;
