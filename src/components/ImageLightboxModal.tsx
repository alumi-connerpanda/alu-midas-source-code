import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { ProjectItem } from '../data/companyData';

interface ImageLightboxModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasMultiple?: boolean;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  project,
  onClose,
  onNext,
  onPrev,
  hasMultiple = false,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950/80 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-400">
              {project.category}
            </span>
            <span className="text-slate-500 text-xs">·</span>
            <span className="text-xs text-slate-300 font-medium">{project.style} Style</span>
            <span className="text-slate-500 text-xs">·</span>
            <span className="text-xs text-slate-400">{project.workType} Work</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close image modal"
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image Display (Preserving natural aspect ratio without heavy cropping) */}
        <div className="relative flex-1 bg-black flex items-center justify-center p-2 min-h-[300px] max-h-[68vh] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="max-h-[65vh] w-auto max-w-full object-contain mx-auto select-none rounded"
          />

          {/* Navigation Arrows */}
          {hasMultiple && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev?.();
                }}
                aria-label="Previous photograph"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-slate-950/70 hover:bg-slate-900 text-white rounded-full border border-slate-700 transition-all hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext?.();
                }}
                aria-label="Next photograph"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-slate-950/70 hover:bg-slate-900 text-white rounded-full border border-slate-700 transition-all hover:scale-105"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Footer with Title and True Context */}
        <div className="p-5 bg-slate-900 border-t border-slate-800">
          <h3 className="text-base md:text-lg font-semibold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageLightboxModal;
