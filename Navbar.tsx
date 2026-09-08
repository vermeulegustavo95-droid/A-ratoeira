import React, { useState } from 'react';
import { Phone, MapPin, Calendar, Menu as MenuIcon, X } from 'lucide-react';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { RatoeiraLogo } from './RatoeiraLogo';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  setLanguage,
  onOpenReservation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    pt: {
      about: 'O Restaurante',
      specialties: 'Especialidades',
      menu: 'Menu & Carta',
      reviews: 'Avaliações',
      contact: 'Localização',
      reserve: 'Reservar Mesa',
      call: 'Ligar',
    },
    en: {
      about: 'About',
      specialties: 'Specialties',
      menu: 'Menu',
      reviews: 'Reviews',
      contact: 'Location',
      reserve: 'Book a Table',
      call: 'Call',
    },
  }[language];

  return (
    <header className="sticky top-0 z-40 bg-[#f8f6f1]/95 backdrop-blur-md border-b border-[#dedbd3]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3.5 group">
          <RatoeiraLogo
            variant="badge"
            size={42}
            className="rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-200 border border-[#2e3138]/20"
          />
          <div className="flex flex-col">
            <span className="font-display text-xl sm:text-2xl font-bold tracking-[0.16em] text-[#2e3138] uppercase leading-none">
              A Ratoeira
            </span>
            <span className="text-[10px] tracking-[0.22em] text-[#6f737b] uppercase mt-1 font-medium">
              Cervejaria & Restaurante
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#sobre"
            className="text-sm font-medium tracking-wide text-[#6f737b] hover:text-[#2e3138] transition-colors"
          >
            {t.about}
          </a>
          <a
            href="#especialidades"
            className="text-sm font-medium tracking-wide text-[#6f737b] hover:text-[#2e3138] transition-colors"
          >
            {t.specialties}
          </a>
          <a
            href="#menu"
            className="text-sm font-medium tracking-wide text-[#6f737b] hover:text-[#2e3138] transition-colors"
          >
            {t.menu}
          </a>
          <a
            href="#avaliacoes"
            className="text-sm font-medium tracking-wide text-[#6f737b] hover:text-[#2e3138] transition-colors"
          >
            {t.reviews}
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium tracking-wide text-[#6f737b] hover:text-[#2e3138] transition-colors"
          >
            {t.contact}
          </a>
        </nav>

        {/* Right Actions: Language Switcher + Reservation Button */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Santelmo style language pill */}
          <div className="bg-[#2e3138] text-[#f8f6f1] text-xs font-medium tracking-wider rounded-full px-3 py-1.5 flex items-center gap-1 shadow-sm">
            <button
              onClick={() => setLanguage('pt')}
              className={`transition-opacity ${language === 'pt' ? 'opacity-100 font-semibold text-white underline underline-offset-2' : 'opacity-60 hover:opacity-100'}`}
              title="Português"
            >
              PT
            </button>
            <span className="opacity-40">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`transition-opacity ${language === 'en' ? 'opacity-100 font-semibold text-white underline underline-offset-2' : 'opacity-60 hover:opacity-100'}`}
              title="English"
            >
              EN
            </button>
          </div>

          <a
            href={`tel:${RESTAURANT_INFO.phoneClean}`}
            className="p-2 text-[#2e3138] hover:text-[#6f737b] transition-colors"
            title={RESTAURANT_INFO.phone}
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenReservation}
            className="border border-[#2e3138] text-[#2e3138] hover:bg-[#2e3138] hover:text-[#f8f6f1] text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-lg font-medium transition-all duration-200"
          >
            {t.reserve}
          </button>
        </div>

        {/* Mobile menu and mobile language button */}
        <div className="flex sm:hidden items-center gap-2">
          <div className="bg-[#2e3138] text-[#f8f6f1] text-xs font-medium tracking-wider rounded-full px-2.5 py-1 flex items-center gap-1">
            <button
              onClick={() => setLanguage('pt')}
              className={`${language === 'pt' ? 'font-bold' : 'opacity-60'}`}
            >
              PT
            </button>
            <span className="opacity-40">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`${language === 'en' ? 'font-bold' : 'opacity-60'}`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2e3138] hover:bg-[#ebe7e0] rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#dedbd3] bg-[#f8f6f1] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2">
          {/* Mobile brand header */}
          <div className="flex items-center gap-3 pb-3 border-b border-[#dedbd3]/60">
            <RatoeiraLogo variant="badge" size={36} className="rounded-md shadow-sm" />
            <div>
              <span className="font-display font-bold text-base tracking-[0.16em] uppercase text-[#2e3138] block leading-none">
                A Ratoeira
              </span>
              <span className="text-[9px] tracking-[0.2em] text-[#6f737b] uppercase mt-0.5 block font-medium">
                Marinha Grande
              </span>
            </div>
          </div>

          <nav className="flex flex-col space-y-3">
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#2e3138] hover:text-[#c5a059] py-1"
            >
              {t.about}
            </a>
            <a
              href="#especialidades"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#2e3138] hover:text-[#c5a059] py-1"
            >
              {t.specialties}
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#2e3138] hover:text-[#c5a059] py-1"
            >
              {t.menu}
            </a>
            <a
              href="#avaliacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#2e3138] hover:text-[#c5a059] py-1"
            >
              {t.reviews}
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#2e3138] hover:text-[#c5a059] py-1"
            >
              {t.contact}
            </a>
          </nav>

          <div className="pt-4 border-t border-[#dedbd3] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full bg-[#2e3138] text-[#f8f6f1] text-center text-xs tracking-[0.15em] uppercase py-3 rounded-lg font-medium shadow"
            >
              {t.reserve}
            </button>
            <a
              href={`tel:${RESTAURANT_INFO.phoneClean}`}
              className="w-full border border-[#dedbd3] text-[#2e3138] text-center text-xs tracking-[0.15em] uppercase py-3 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {RESTAURANT_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
