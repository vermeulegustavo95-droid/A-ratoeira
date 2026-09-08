/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { MenuSection } from './components/MenuSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { Phone, Calendar, MessageSquare } from 'lucide-react';
import { RESTAURANT_INFO } from './data/restaurantData';

export default function App() {
  const [language, setLanguage] = useState<Language>('pt');
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f6f1] text-[#2e3138] flex flex-col font-sans selection:bg-[#2e3138] selection:text-[#f8f6f1]">
      {/* Top Notification Bar */}
      <div className="bg-[#2e3138] text-[#f8f6f1] text-[11px] sm:text-xs py-2 px-4 text-center tracking-wider flex items-center justify-center gap-3">
        <span>
          {language === 'pt'
            ? '🍽️ Cervejaria Ratoeira · Marinha Grande · Reservas & Take-Away:'
            : '🍽️ Cervejaria Ratoeira · Marinha Grande · Bookings & Take-Away:'}
        </span>
        <a
          href={`tel:${RESTAURANT_INFO.phoneClean}`}
          className="font-semibold underline underline-offset-2 hover:text-[#c5a059] transition-colors"
        >
          {RESTAURANT_INFO.phone}
        </a>
      </div>

      {/* Navigation Bar */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        onOpenReservation={() => setIsReservationModalOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero
          language={language}
          onOpenReservation={() => setIsReservationModalOpen(true)}
        />

        <AboutSection language={language} />

        <SpecialtiesSection
          language={language}
          onOpenReservation={() => setIsReservationModalOpen(true)}
        />

        <MenuSection language={language} />

        <ReviewsSection language={language} />

        <ReservationSection language={language} />

        <LocationContactSection language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Floating Quick Action Bar for Mobile */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-30 flex items-center gap-2">
        <button
          onClick={() => setIsReservationModalOpen(true)}
          className="flex-1 bg-[#2e3138] text-[#f8f6f1] hover:bg-black py-3 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95"
        >
          <Calendar className="w-4 h-4" />
          <span>{language === 'pt' ? 'Reservar Mesa' : 'Book Table'}</span>
        </button>

        <a
          href={`tel:${RESTAURANT_INFO.phoneClean}`}
          className="bg-[#ebe7e0] border border-[#dedbd3] text-[#2e3138] p-3 rounded-xl shadow-lg flex items-center justify-center transition-transform active:scale-95"
          title={RESTAURANT_INFO.phone}
        >
          <Phone className="w-4 h-4" />
        </a>

        <a
          href={`https://wa.me/351916579315?text=${encodeURIComponent('Olá Cervejaria Ratoeira! Gostaria de obter informações.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 rounded-xl shadow-lg flex items-center justify-center transition-transform active:scale-95"
          title="WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
        </a>
      </div>

      {/* Reservation Modal Dialog */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
        language={language}
      />
    </div>
  );
}

