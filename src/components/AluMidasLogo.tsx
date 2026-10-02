import React from 'react';
import officialLogoImg from '../assets/images/alumidas_official_logo_1790941267009.jpg';

interface AluMidasLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'card';
}

/**
 * Displays the exact, unaltered ALU MIDAS logo.
 * Preserves the authentic dark navy, golden yellow, white and geometric AM identity
 * without redesign, recoloring, or distortion.
 */
export const AluMidasLogo: React.FC<AluMidasLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'default',
}) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-16 sm:h-20 md:h-22',
  };

  const imageElement = (
    <img
      src={officialLogoImg}
      alt="ALU MIDAS (PVT) LTD Official Logo"
      referrerPolicy="no-referrer"
      className={`${sizeClasses[size]} w-auto object-contain select-none max-w-full`}
      loading="eager"
    />
  );

  if (variant === 'card') {
    return (
      <div className={`inline-flex items-center justify-center p-2.5 sm:p-3 bg-white rounded-xl shadow-xs border border-slate-200/90 ${className}`}>
        {imageElement}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      {imageElement}
    </div>
  );
};

export default AluMidasLogo;
