import React from 'react';
import { MapPin, Clock, Calendar, UtensilsCrossed, ArrowDown } from 'lucide-react';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { RatoeiraLogo } from './RatoeiraLogo';

interface HeroProps {
  language: Language;
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenReservation }) => {
  const content = {
    pt: {
      subtitle: 'MARINHA GRANDE · PORTUGAL',
      description:
        'Cervejaria e restaurante de referência na Marinha Grande. Uma mesa onde se celebram os sabores autênticos portugueses: o marisco fresco da costa, as afamadas lulas grelhadas, a posta barrosã e a suculenta picanha na brasa, acompanhados de cerveja fresca bem tirada.',
      addressShort: 'Rua das Figueiras 76/78 · Marinha Grande',
      scheduleShort: 'SEGUNDA A SÁBADO · 12H–15H | 19H–23H',
      reserveBtn: 'Reservar a Sua Mesa',
      menuBtn: 'Explorar a Carta',
      tags: [
        'MARISCO FRESCO',
        'POSTA BARROSÃ',
        'CERVEJA À PRESSÃO',
        'SOBREMESAS ARTESANAIS'
      ]
    },
    en: {
      subtitle: 'MARINHA GRANDE · PORTUGAL',
      description:
        'An authentic Portuguese restaurant and brewery in Marinha Grande. Celebrating genuine local cuisine: fresh coastal seafood, famous grilled squid, tender Barrosã steak, and mouthwatering picanha on charcoal, paired with ice-cold draft beer.',
      addressShort: 'Rua das Figueiras 76/78 · Marinha Grande',
      scheduleShort: 'MONDAY TO SATURDAY · 12PM–3PM | 7PM–11PM',
      reserveBtn: 'Reserve Your Table',
      menuBtn: 'Explore the Menu',
      tags: [
        'FRESH SEAFOOD',
        'BARROSÃ STEAK',
        'COLD DRAFT BEER',
        'HOMEMADE DESSERTS'
      ]
    }
  }[language];

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 sm:px-12 py-16 md:py-24 max-w-5xl mx-auto">
      {/* Official Brand Logo of A Ratoeira */}
      <div className="mb-6 flex flex-col items-center">
        <div className="relative mb-3 group cursor-default">
          <div className="absolute -inset-1.5 bg-[#2e3138]/5 rounded-2xl filter blur-sm group-hover:bg-[#2e3138]/10 transition-colors" />
          <RatoeiraLogo
            variant="badge"
            size={88}
            className="rounded-xl shadow-lg relative transition-transform duration-300 group-hover:scale-105 border border-[#2e3138]/20"
          />
        </div>
        <span className="text-[11px] font-semibold tracking-[0.3em] text-[#6f737b] uppercase">
          {content.subtitle}
        </span>
      </div>

      {/* Main Hero Heading */}
      <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#2e3138] uppercase mb-6 leading-tight">
        A Ratoeira
      </h1>

      {/* Delicate Gold Accent Line */}
      <div className="w-16 h-[2px] bg-[#c5a059] mx-auto mb-8 opacity-80" />

      {/* Narrative Lead Paragraph */}
      <p className="text-base sm:text-lg md:text-xl text-[#6f737b] max-w-2xl font-normal leading-relaxed mb-6 font-sans">
        {content.description}
      </p>

      {/* Address & Hours Metadata */}
      <div className="flex flex-col items-center space-y-1 mb-10 text-xs sm:text-sm text-[#6f737b]">
        <div className="flex items-center gap-1.5 font-medium tracking-wide">
          <MapPin className="w-3.5 h-3.5 text-[#2e3138]" />
          <span>{content.addressShort}</span>
        </div>
        <div className="flex items-center gap-1.5 tracking-[0.12em] uppercase text-[11px] sm:text-xs text-[#6f737b]/80">
          <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
          <span>{content.scheduleShort}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
        <button
          onClick={onOpenReservation}
          className="w-full sm:w-auto border border-[#2e3138] bg-transparent hover:bg-[#2e3138] text-[#2e3138] hover:text-[#f8f6f1] text-xs sm:text-sm tracking-[0.2em] uppercase px-8 py-3.5 rounded-lg font-medium transition-all duration-200 shadow-sm"
        >
          {content.reserveBtn}
        </button>

        <a
          href="#menu"
          className="w-full sm:w-auto border border-[#6f737b]/30 hover:border-[#2e3138] text-[#6f737b] hover:text-[#2e3138] text-xs sm:text-sm tracking-[0.2em] uppercase px-8 py-3.5 rounded-lg font-medium transition-all duration-200"
        >
          {content.menuBtn}
        </a>
      </div>

      {/* Highlight Tags Row (Santelmo design pattern) */}
      <div className="pt-8 border-t border-[#dedbd3]/60 w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
        {content.tags.map((tag, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-[11px] sm:text-xs tracking-[0.18em] text-[#6f737b] uppercase font-medium">
              {tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
