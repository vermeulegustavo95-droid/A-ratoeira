import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { RatoeiraLogo } from './RatoeiraLogo';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    pt: {
      aboutText:
        'Gastronomia tradicional portuguesa na Marinha Grande. O melhor marisco fresco, carnes nobres na grelha e cerveja gelada num ambiente acolhedor e genuíno.',
      linksTitle: 'Navegação',
      scheduleTitle: 'Horário',
      contactsTitle: 'Contactos',
      about: 'O Restaurante',
      specialties: 'Especialidades',
      menu: 'Carta & Menus',
      reservations: 'Reservas',
      location: 'Localização',
      complaintsBook: 'Livro de Reclamações',
      privacy: 'Privacidade & Termos',
      rights: 'Todos os direitos reservados.',
      city: 'Marinha Grande, Portugal',
    },
    en: {
      aboutText:
        'Authentic Portuguese cuisine in Marinha Grande. Fresh coastal seafood, prime charcoal steaks, and cold draft beer served in a warm and genuine atmosphere.',
      linksTitle: 'Navigation',
      scheduleTitle: 'Opening Hours',
      contactsTitle: 'Contacts',
      about: 'About',
      specialties: 'Specialties',
      menu: 'Menu',
      reservations: 'Reservations',
      location: 'Location',
      complaintsBook: 'Official Complaints Book',
      privacy: 'Privacy & Terms',
      rights: 'All rights reserved.',
      city: 'Marinha Grande, Portugal',
    },
  }[language];

  return (
    <footer className="bg-[#ebe7e0] border-t border-[#dedbd3] text-[#2e3138] pt-16 pb-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-[#dedbd3]">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <RatoeiraLogo variant="badge" size={44} className="rounded-lg shadow-sm border border-[#2e3138]/20" />
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-[0.16em] uppercase text-[#2e3138] leading-none">
                  A Ratoeira
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#6f737b] uppercase mt-1 font-sans font-medium">
                  Cervejaria & Restaurante
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#6f737b] leading-relaxed max-w-sm">
              {content.aboutText}
            </p>
            <div className="text-xs text-[#6f737b] flex items-center gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#2e3138]" />
              <span>{RESTAURANT_INFO.address}</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2e3138] block mb-2">
              {content.linksTitle}
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#6f737b]">
              <li>
                <a href="#sobre" className="hover:text-[#2e3138] transition-colors">
                  {content.about}
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#2e3138] transition-colors">
                  {content.specialties}
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#2e3138] transition-colors">
                  {content.menu}
                </a>
              </li>
              <li>
                <a href="#reservas" className="hover:text-[#2e3138] transition-colors">
                  {content.reservations}
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#2e3138] transition-colors">
                  {content.location}
                </a>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2e3138] block mb-2">
              {content.scheduleTitle}
            </span>
            <div className="text-xs sm:text-sm text-[#6f737b] space-y-1.5">
              <div className="font-medium text-[#2e3138]">Segunda a Sábado</div>
              <div>Almoço: 12h00 – 15h00</div>
              <div>Jantar: 19h00 – 23h00</div>
              <div className="text-xs text-amber-900/80 pt-1">Domingo: Encerrado</div>
            </div>
          </div>

          {/* Contacts */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2e3138] block mb-2">
              {content.contactsTitle}
            </span>
            <div className="text-xs sm:text-sm text-[#6f737b] space-y-2">
              <div>
                <a
                  href={`tel:${RESTAURANT_INFO.phoneClean}`}
                  className="font-medium text-[#2e3138] hover:text-[#c5a059] flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="text-xs hover:text-[#2e3138] break-all flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {RESTAURANT_INFO.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#2e3138] hover:text-[#c5a059] underline underline-offset-2"
                >
                  <span>Facebook Oficial</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6f737b]">
          <div>
            © {new Date().getFullYear()} Cervejaria Ratoeira · {content.rights}
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <a
              href="https://www.livroreclamacoes.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2e3138] transition-colors"
            >
              {content.complaintsBook}
            </a>
            <span>·</span>
            <span>{content.city}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
