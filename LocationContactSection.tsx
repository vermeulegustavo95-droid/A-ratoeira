import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, CreditCard, Car, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { RatoeiraLogo } from './RatoeiraLogo';

interface LocationContactSectionProps {
  language: Language;
}

export const LocationContactSection: React.FC<LocationContactSectionProps> = ({
  language,
}) => {
  const content = {
    pt: {
      pretitle: 'ONDE ESTAMOS & COMO CHEGAR',
      title: 'Localização & Contactos',
      desc:
        'Situados na Marinha Grande com acessos fáceis e estacionamento nas imediações. Visite-nos para um almoço de negócios, jantar de amigos ou encomende para take-away.',
      addressTitle: 'Morada Oficial',
      scheduleTitle: 'Horário de Funcionamento',
      contactsTitle: 'Contactos & Encomendas',
      directionsBtn: 'Abrir no Google Maps',
      lunchTime: 'Almoço: 12h00 – 15h00',
      dinnerTime: 'Jantar: 19h00 – 23h00',
      daysOpen: 'Segunda a Sábado',
      sundayClosed: 'Domingo: Encerrado para descanso',
      paymentTitle: 'Métodos de Pagamento',
      paymentDesc: 'Multibanco, Visa, Mastercard e Numerário.',
      parkingTitle: 'Estacionamento',
      parkingDesc: 'Estacionamento fácil e gratuito na Rua das Figueiras e arruamentos envolventes.',
    },
    en: {
      pretitle: 'HOW TO FIND US & CONTACT',
      title: 'Location & Contacts',
      desc:
        'Located in Marinha Grande with convenient access and free parking in the immediate surroundings. Visit us for business lunch, dinner with friends, or take-away.',
      addressTitle: 'Official Address',
      scheduleTitle: 'Opening Hours',
      contactsTitle: 'Contacts & Orders',
      directionsBtn: 'Open in Google Maps',
      lunchTime: 'Lunch: 12:00 PM – 3:00 PM',
      dinnerTime: 'Dinner: 7:00 PM – 11:00 PM',
      daysOpen: 'Monday to Saturday',
      sundayClosed: 'Sunday: Closed for weekly rest',
      paymentTitle: 'Payment Methods',
      paymentDesc: 'Multibanco cards, Visa, Mastercard, and Cash.',
      parkingTitle: 'Parking',
      parkingDesc: 'Easy free street parking along Rua das Figueiras and nearby streets.',
    },
  }[language];

  return (
    <section id="contacto" className="py-20 sm:py-28 px-6 sm:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-[0.25em] text-[#6f737b] uppercase block mb-3">
          {content.pretitle}
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-wide text-[#2e3138] mb-4">
          {content.title}
        </h2>
        <div className="w-12 h-[2px] bg-[#c5a059] mx-auto mb-6" />
        <p className="text-base sm:text-lg text-[#6f737b] leading-relaxed">
          {content.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
        {/* Info Cards Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Address Card */}
          <div className="bg-[#f8f6f1] p-7 rounded-xl border border-[#dedbd3] shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ebe7e0] flex items-center justify-center shrink-0 text-[#2e3138]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-[#2e3138] mb-1">
                  {content.addressTitle}
                </h3>
                <p className="text-sm text-[#6f737b] leading-relaxed mb-3">
                  {RESTAURANT_INFO.address}
                </p>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#2e3138] hover:text-[#c5a059] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{content.directionsBtn}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Schedule Card */}
          <div className="bg-[#f8f6f1] p-7 rounded-xl border border-[#dedbd3] shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ebe7e0] flex items-center justify-center shrink-0 text-[#2e3138]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-[#2e3138] mb-1">
                  {content.scheduleTitle}
                </h3>
                <div className="text-sm text-[#6f737b] space-y-1">
                  <div className="font-medium text-[#2e3138]">{content.daysOpen}</div>
                  <div>{content.lunchTime}</div>
                  <div>{content.dinnerTime}</div>
                  <div className="text-xs text-amber-900/80 pt-1 font-medium">
                    {content.sundayClosed}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contacts Card */}
          <div className="bg-[#f8f6f1] p-7 rounded-xl border border-[#dedbd3] shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ebe7e0] flex items-center justify-center shrink-0 text-[#2e3138]">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-lg font-semibold text-[#2e3138]">
                  {content.contactsTitle}
                </h3>
                <div>
                  <span className="text-xs text-[#6f737b] block">Telefone / WhatsApp</span>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneClean}`}
                    className="text-base font-semibold text-[#2e3138] hover:text-[#c5a059]"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
                <div>
                  <span className="text-xs text-[#6f737b] block">Correio Eletrónico</span>
                  <a
                    href={`mailto:${RESTAURANT_INFO.email}`}
                    className="text-xs text-[#6f737b] hover:text-[#2e3138] break-all"
                  >
                    {RESTAURANT_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map / Location Visual Column */}
        <div className="lg:col-span-7 h-full flex flex-col">
          <div className="bg-[#f8f6f1] rounded-2xl border border-[#dedbd3] overflow-hidden shadow-sm flex flex-col h-full">
            {/* Map Frame Preview */}
            <div className="relative w-full h-[360px] sm:h-[420px] bg-[#ebe7e0]">
              <iframe
                title="Cervejaria Ratoeira - Marinha Grande"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.749721340156!2d-8.935105223485777!3d39.75626297155331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2201d1cbf92a5d%3A0xe5c93ec176767676!2sR.+das+Figueiras+76%2C+2430-184+Marinha+Grande%2C+Portugal!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt"
                className="w-full h-full border-0 grayscale-[20%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-[#f8f6f1]/95 backdrop-blur-md p-4 rounded-xl border border-[#dedbd3] flex items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3">
                  <RatoeiraLogo variant="badge" size={38} className="rounded-md shrink-0 shadow-sm border border-[#2e3138]/20" />
                  <div>
                    <span className="font-display font-semibold text-sm text-[#2e3138] block">
                      A Ratoeira
                    </span>
                    <span className="text-xs text-[#6f737b]">
                      Rua das Figueiras, 76/78 · Marinha Grande
                    </span>
                  </div>
                </div>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2e3138] text-[#f8f6f1] hover:bg-black px-4 py-2 rounded-lg text-xs font-medium tracking-wider uppercase shrink-0 transition-colors"
                >
                  {language === 'pt' ? 'Como Chegar' : 'Directions'}
                </a>
              </div>
            </div>

            {/* Practical details below map */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#f8f6f1] border-t border-[#dedbd3]">
              <div className="flex items-start gap-3">
                <Car className="w-4 h-4 text-[#2e3138] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold uppercase text-[#2e3138] block">
                    {content.parkingTitle}
                  </span>
                  <span className="text-xs text-[#6f737b]">{content.parkingDesc}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CreditCard className="w-4 h-4 text-[#2e3138] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold uppercase text-[#2e3138] block">
                    {content.paymentTitle}
                  </span>
                  <span className="text-xs text-[#6f737b]">{content.paymentDesc}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
