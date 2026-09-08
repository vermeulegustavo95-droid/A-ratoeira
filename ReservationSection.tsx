import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle2, MessageSquare, Phone, AlertCircle, Mail } from 'lucide-react';
import { Language, ReservationData } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationSectionProps {
  language: Language;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ language }) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    guests: 2,
    specialRequests: '',
    area: 'salao',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  const content = {
    pt: {
      pretitle: 'RESERVA DIRETA',
      title: 'Reserve a Sua Mesa',
      desc:
        'Como o atendimento na Cervejaria Ratoeira é direto e familiar, as reservas são confirmadas diretamente pela gerência no WhatsApp ou por chamada telefónica (+351 916 579 315).',
      nameLabel: 'Nome Completo',
      phoneLabel: 'Contacto Telefónico',
      emailLabel: 'Email (Opcional)',
      dateLabel: 'Data da Reserva',
      timeLabel: 'Hora Pretendida',
      guestsLabel: 'Número de Pessoas',
      areaLabel: 'Zona Pretendida',
      notesLabel: 'Observações / Ocasião Especial (Opcional)',
      areaOptions: {
        salao: 'Salão Principal (Interior Acolhedor)',
        esplanada: 'Esplanada / Zona Exterior',
        qualquer: 'Sem preferência (Primeira disponível)',
      },
      submitBtn: 'Enviar Pedido via WhatsApp',
      callDirect: 'Prefere ligar de imediato?',
      instantConfirmTitle: 'Pedido Preparado para Envio!',
      instantConfirmDesc:
        'A sua reserva é tratada diretamente no telemóvel dos senhores da cervejaria. Carregue no botão verde abaixo para enviar a mensagem via WhatsApp com todos os dados da mesa.',
      bookingRef: 'Código de Referência',
      whatsappBtn: 'Enviar no WhatsApp (+351 916 579 315)',
      callBtn: 'Ligar para o Restaurante',
      emailBtn: 'Enviar por E-mail',
      resetBtn: 'Fazer Outro Pedido',
      sundayWarning: 'Atenção: Estamos encerrados aos Domingos para descanso semanal da equipa.',
      whatsappExplainer: 'Ao carregar, os dados são enviados diretamente para o WhatsApp do restaurante (+351 916 579 315) para confirmação rápida.',
    },
    en: {
      pretitle: 'DIRECT BOOKING',
      title: 'Book Your Table',
      desc:
        'Because hospitality at Cervejaria Ratoeira is traditional and direct, reservations are handled directly by the owners via WhatsApp or phone call (+351 916 579 315).',
      nameLabel: 'Full Name',
      phoneLabel: 'Phone Number',
      emailLabel: 'Email (Optional)',
      dateLabel: 'Reservation Date',
      timeLabel: 'Preferred Time',
      guestsLabel: 'Number of Guests',
      areaLabel: 'Seating Preference',
      notesLabel: 'Special Notes / Dietary / Occasion (Optional)',
      areaOptions: {
        salao: 'Main Indoor Dining Hall',
        esplanada: 'Terrace / Outdoor Seating',
        qualquer: 'No preference (First available)',
      },
      submitBtn: 'Send Booking via WhatsApp',
      callDirect: 'Prefer to call directly?',
      instantConfirmTitle: 'Booking Ready to Send!',
      instantConfirmDesc:
        'Your table request is handled directly on the mobile phone of the brewery staff. Click the green button below to send the details via WhatsApp.',
      bookingRef: 'Reference Code',
      whatsappBtn: 'Send via WhatsApp (+351 916 579 315)',
      callBtn: 'Call Restaurant Directly',
      emailBtn: 'Send via Email',
      resetBtn: 'Make Another Booking',
      sundayWarning: 'Note: We are closed on Sundays for our team’s weekly rest.',
      whatsappExplainer: 'When submitted, your details are sent directly to the restaurant’s WhatsApp (+351 916 579 315) for prompt confirmation.',
    },
  }[language];

  const getAreaLabel = () => {
    if (formData.area === 'salao') return content.areaOptions.salao;
    if (formData.area === 'esplanada') return content.areaOptions.esplanada;
    return content.areaOptions.qualquer;
  };

  const generateWhatsAppUrl = (code: string) => {
    const rawMessage = language === 'pt'
      ? `Olá Cervejaria Ratoeira! Gostaria de fazer uma reserva de mesa [Ref: ${code}]:\n` +
        `• Nome: ${formData.name}\n` +
        `• Contacto: ${formData.phone}\n` +
        `• Data: ${formData.date} às ${formData.time}\n` +
        `• Pessoas: ${formData.guests} pessoa(s)\n` +
        `• Zona: ${getAreaLabel()}\n` +
        (formData.specialRequests ? `• Notas: ${formData.specialRequests}\n` : '') +
        `\nPodem confirmar a disponibilidade, por favor? Obrigado!`
      : `Hello Cervejaria Ratoeira! I would like to book a table [Ref: ${code}]:\n` +
        `• Name: ${formData.name}\n` +
        `• Phone: ${formData.phone}\n` +
        `• Date: ${formData.date} at ${formData.time}\n` +
        `• Guests: ${formData.guests}\n` +
        `• Seating: ${getAreaLabel()}\n` +
        (formData.specialRequests ? `• Notes: ${formData.specialRequests}\n` : '') +
        `\nCould you please confirm availability? Thank you!`;

    return `https://wa.me/351916579315?text=${encodeURIComponent(rawMessage)}`;
  };

  const generateMailtoUrl = (code: string) => {
    const subject = encodeURIComponent(
      language === 'pt'
        ? `Pedido de Reserva [${code}] - ${formData.name}`
        : `Table Reservation Request [${code}] - ${formData.name}`
    );
    const body = encodeURIComponent(
      `Olá Cervejaria Ratoeira,\n\nGostaria de solicitar uma reserva de mesa:\n` +
      `Nome: ${formData.name}\n` +
      `Telefone: ${formData.phone}\n` +
      `Data: ${formData.date} às ${formData.time}\n` +
      `Pessoas: ${formData.guests}\n` +
      `Zona: ${getAreaLabel()}\n` +
      `Observações: ${formData.specialRequests || 'Nenhuma'}\n\n` +
      `Aguardo confirmação.\nObrigado.`
    );
    return `mailto:${RESTAURANT_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `RAT-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingCode(code);
    setSubmitted(true);

    const waUrl = generateWhatsAppUrl(code);
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Fallback handled by the prominent button
    }
  };

  const isSunday = (dateStr: string) => {
    if (!dateStr) return false;
    const day = new Date(dateStr + 'T00:00:00').getDay();
    return day === 0;
  };

  return (
    <section id="reservas" className="py-20 sm:py-28 px-6 sm:px-12 bg-[#ebe7e0] border-y border-[#dedbd3]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#6f737b] uppercase block mb-3">
            {content.pretitle}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-wide text-[#2e3138] mb-4">
            {content.title}
          </h2>
          <div className="w-12 h-[2px] bg-[#c5a059] mx-auto mb-6" />
          <p className="text-sm sm:text-base text-[#6f737b] leading-relaxed">
            {content.desc}
          </p>
        </div>

        {submitted ? (
          /* Confirmation / Send card */
          <div className="bg-[#f8f6f1] p-8 sm:p-12 rounded-2xl border border-[#dedbd3] text-center shadow-md animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#2e3138] mb-3">
              {content.instantConfirmTitle}
            </h3>
            <p className="text-sm sm:text-base text-[#6f737b] max-w-lg mx-auto mb-6 leading-relaxed">
              {content.instantConfirmDesc}
            </p>

            <div className="bg-[#ebe7e0] max-w-md mx-auto p-5 rounded-xl border border-[#dedbd3] mb-8 text-left text-xs sm:text-sm text-[#2e3138] space-y-2">
              <div className="flex justify-between items-center pb-2 border-b border-[#dedbd3]">
                <span className="font-semibold text-[#6f737b]">{content.bookingRef}:</span>
                <span className="font-mono font-bold tracking-wider text-[#2e3138]">{bookingCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-[#6f737b]">{content.nameLabel}:</span>
                <span className="font-medium text-[#2e3138]">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-[#6f737b]">{content.dateLabel}:</span>
                <span className="font-medium text-[#2e3138]">{formData.date} às {formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-[#6f737b]">{content.guestsLabel}:</span>
                <span className="font-medium text-[#2e3138]">{formData.guests} pessoa(s)</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-[#6f737b]">{content.phoneLabel}:</span>
                <span className="font-medium text-[#2e3138]">{formData.phone}</span>
              </div>
              {formData.specialRequests && (
                <div className="pt-2 border-t border-[#dedbd3] text-xs text-[#6f737b]">
                  <span className="font-semibold text-[#2e3138]">Notas:</span> {formData.specialRequests}
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
              <a
                href={generateWhatsAppUrl(bookingCode)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-7 py-3.5 rounded-lg text-xs sm:text-sm tracking-wider uppercase font-semibold transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                {content.whatsappBtn}
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2e3138] text-[#f8f6f1] hover:bg-black px-5 py-3.5 rounded-lg text-xs tracking-wider uppercase font-medium transition-all"
              >
                <Phone className="w-4 h-4" />
                {content.callBtn}
              </a>

              <a
                href={generateMailtoUrl(bookingCode)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#dedbd3] hover:border-[#2e3138] text-[#2e3138] px-5 py-3.5 rounded-lg text-xs tracking-wider uppercase font-medium transition-all"
              >
                <Mail className="w-4 h-4" />
                {content.emailBtn}
              </a>
            </div>

            <div className="mt-6">
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#6f737b] hover:text-[#2e3138] underline transition-colors"
              >
                {content.resetBtn}
              </button>
            </div>
          </div>
        ) : (
          /* Reservation Form */
          <form
            onSubmit={handleSubmit}
            className="bg-[#f8f6f1] p-8 sm:p-12 rounded-2xl border border-[#dedbd3] shadow-sm space-y-6"
          >
            {isSunday(formData.date) && (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-center gap-3 text-amber-800 text-xs sm:text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{content.sundayWarning}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#2e3138] mb-2">
                  {content.nameLabel} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#ebe7e0]/60 border border-[#dedbd3] rounded-lg text-sm text-[#2e3138] focus:outline-none focus:border-[#2e3138] transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#2e3138] mb-2">
                  {content.phoneLabel} *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+351 912 345 678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-[#ebe7e0]/60 border border-[#dedbd3] rounded-lg text-sm text-[#2e3138] focus:outline-none focus:border-[#2e3138] transition-colors"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#2e3138] mb-2">
                  {content.dateLabel} *
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-[#ebe7e0]/60 border border-[#dedbd3] rounded-lg text-sm text-[#2e3138] focus:outline-none focus:border-[#2e3138] transition-colors"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#2e3138] mb-2">
                  {content.timeLabel} *
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 bg-[#ebe7e0]/60 border border-[#dedbd3] rounded-lg text-sm text-[#2e3138] focus:outline-none focus:border-[#2e3138] transition-colors"
                >
                  <optgroup label={language === 'pt' ? 'Almoço' : 'Lunch'}>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                  </optgroup>
                  <optgroup label={language === 'pt' ? 'Jantar' : 'Dinner'}>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                    <option value="22:00">22:00</option>
                  </optgroup>
                </select>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#2e3138] mb-2">
                  {content.guestsLabel} *
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: parseInt(e.target.value, 10) })
                  }
                  className="w-full px-4 py-3 bg-[#ebe7e0]/60 border border-[#dedbd3] rounded-lg text-sm text-[#2e3138] focus:outline-none focus:border-[#2e3138] transition-colors"
                >
                  {[...Array(16)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} {i === 0 ? (language === 'pt' ? 'pessoa' : 'guest') : (language === 'pt' ? 'pessoas' : 'guests')}
                    </option>
                  ))}
                  <option value={20}>+20 (Grupo / Festa)</option>
                </select>
              </div>

              {/* Area preference */}
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#2e3138] mb-2">
                  {content.areaLabel}
                </label>
                <select
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      area: e.target.value as 'salao' | 'esplanada' | 'qualquer',
                    })
                  }
                  className="w-full px-4 py-3 bg-[#ebe7e0]/60 border border-[#dedbd3] rounded-lg text-sm text-[#2e3138] focus:outline-none focus:border-[#2e3138] transition-colors"
                >
                  <option value="salao">{content.areaOptions.salao}</option>
                  <option value="esplanada">{content.areaOptions.esplanada}</option>
                  <option value="qualquer">{content.areaOptions.qualquer}</option>
                </select>
              </div>
            </div>

            {/* Special requests */}
            <div>
              <label className="block text-xs font-semibold tracking-wider uppercase text-[#2e3138] mb-2">
                {content.notesLabel}
              </label>
              <textarea
                rows={3}
                placeholder={
                  language === 'pt'
                    ? 'Ex: Aniversário, mesa perto da janela, cadeira para bebé, alergias...'
                    : 'E.g., Birthday celebration, window seat, high chair, allergies...'
                }
                value={formData.specialRequests}
                onChange={(e) =>
                  setFormData({ ...formData, specialRequests: e.target.value })
                }
                className="w-full px-4 py-3 bg-[#ebe7e0]/60 border border-[#dedbd3] rounded-lg text-sm text-[#2e3138] focus:outline-none focus:border-[#2e3138] transition-colors"
              />
            </div>

            {/* Clear Information Badge */}
            <div className="flex items-center gap-2.5 p-3.5 bg-[#ebe7e0]/70 rounded-lg text-xs text-[#6f737b] border border-[#dedbd3]">
              <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>{content.whatsappExplainer}</span>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm tracking-[0.12em] uppercase px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-md flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="w-4 h-4" />
                {content.submitBtn}
              </button>

              <div className="text-xs text-[#6f737b] flex items-center gap-2">
                <span>{content.callDirect}</span>
                <a
                  href={`tel:${RESTAURANT_INFO.phoneClean}`}
                  className="font-semibold text-[#2e3138] underline hover:text-[#c5a059]"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
