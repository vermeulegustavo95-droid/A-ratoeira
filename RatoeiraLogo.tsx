import React from 'react';

export interface RatoeiraLogoProps {
  /**
   * - 'badge': The authentic original logo (black square/card, white silhouette, white dot, 'A RATOEIRA' text)
   * - 'mark': Just the crisp vector silhouette of the mouse & dot (with eyes as transparent cutouts)
   * - 'horizontal': The mouse mark alongside clean typography
   * - 'circle': Enclosed in an elegant dark or light circular seal
   */
  variant?: 'badge' | 'mark' | 'horizontal' | 'circle';
  className?: string;
  size?: number | string;
  /** Foreground color for the mark when variant='mark' or 'horizontal' */
  color?: string;
  /** Invert colors (e.g. for light backgrounds) */
  inverted?: boolean;
  /** Show sub-label like 'MARINHA GRANDE' or 'CERVEJARIA' */
  showSubtitle?: boolean;
}

/**
 * Ultra-high-resolution, pixel-perfect vector replica of the authentic
 * "A RATOEIRA" logo (Cervejaria & Restaurante, Marinha Grande).
 */
export const RatoeiraLogo: React.FC<RatoeiraLogoProps> = ({
  variant = 'mark',
  className = '',
  size = 40,
  color,
  inverted = false,
  showSubtitle = false,
}) => {
  // Dimension handling
  const dim = typeof size === 'number' ? `${size}px` : size;

  // Authentic Ratoeira silhouette path with inner eye cutouts (evenodd)
  // Coordinates mapped from the authentic brand artwork
  const silhouettePath = `
    M 175 665
    L 605 550
    C 620 330, 650 120, 720 50
    C 755 15, 800 25, 825 80
    C 855 150, 830 460, 805 565
    L 970 500
    L 970 795
    L 800 810
    L 905 960
    L 645 960
    L 680 810
    L 175 665
    Z
    M 525 605
    A 42 42 0 1 0 525 689
    A 42 42 0 1 0 525 605
    Z
    M 650 605
    A 42 42 0 1 0 650 689
    A 42 42 0 1 0 650 605
    Z
  `;

  if (variant === 'badge') {
    // Exact authentic original square badge with black background & white artwork
    return (
      <div
        className={`relative inline-flex flex-col items-center justify-center bg-[#0d0f12] text-white select-none overflow-hidden rounded-md shadow-md ${className}`}
        style={{ width: dim, height: dim }}
        title="A Ratoeira - Cervejaria e Restaurante"
      >
        <svg
          viewBox="0 0 1000 1000"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect width="1000" height="1000" fill="#0d0f12" />

          {/* Dot in front of snout */}
          <circle cx="125" cy="665" r="32" fill="#ffffff" />

          {/* Silhouette with eye cutouts */}
          <path
            d={silhouettePath}
            fill="#ffffff"
            fillRule="evenodd"
            clipRule="evenodd"
          />

          {/* Authentic Brand Text */}
          <text
            x="205"
            y="895"
            fill="#ffffff"
            fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            fontWeight="500"
            fontSize="54"
            letterSpacing="6"
          >
            A RATOEIRA
          </text>
        </svg>
      </div>
    );
  }

  if (variant === 'circle') {
    const bgFill = inverted ? '#f8f6f1' : '#1e2126';
    const fgFill = inverted ? '#1e2126' : '#ffffff';
    const borderStroke = inverted ? '#dedbd3' : '#3a3f4a';

    return (
      <div
        className={`relative inline-flex items-center justify-center rounded-full overflow-hidden transition-transform ${className}`}
        style={{ width: dim, height: dim }}
        title="A Ratoeira"
      >
        <svg
          viewBox="0 0 1000 1000"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="500" cy="500" r="490" fill={bgFill} stroke={borderStroke} strokeWidth="20" />
          
          {/* Scaled & centered logo mark */}
          <g transform="translate(60, 20) scale(0.88)">
            <circle cx="125" cy="665" r="34" fill={fgFill} />
            <path
              d={silhouettePath}
              fill={fgFill}
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </g>
        </svg>
      </div>
    );
  }

  if (variant === 'horizontal') {
    const markColor = color || (inverted ? '#ffffff' : '#2e3138');
    const textColor = inverted ? 'text-white' : 'text-[#2e3138]';
    const subColor = inverted ? 'text-stone-300' : 'text-[#6f737b]';

    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        {/* Crisp Mark inside a subtle dark container */}
        <div
          className="relative flex-shrink-0 flex items-center justify-center rounded bg-[#1e2126] text-white p-1"
          style={{ width: dim, height: dim }}
        >
          <svg
            viewBox="80 30 900 940"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="125" cy="665" r="34" fill="#ffffff" />
            <path
              d={silhouettePath}
              fill="#ffffff"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <span className={`font-display font-bold text-lg sm:text-xl tracking-[0.16em] uppercase ${textColor}`}>
            A Ratoeira
          </span>
          {showSubtitle && (
            <span className={`text-[10px] tracking-[0.22em] uppercase -mt-0.5 font-sans ${subColor}`}>
              Cervejaria & Restaurante
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default: 'mark' - transparent, scalable vector mark
  const fillColor = color || (inverted ? '#ffffff' : '#2e3138');

  return (
    <svg
      viewBox="80 30 900 940"
      className={`inline-block ${className}`}
      style={{ width: dim, height: dim }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="125" cy="665" r="34" fill={fillColor} />
      <path
        d={silhouettePath}
        fill={fillColor}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};
