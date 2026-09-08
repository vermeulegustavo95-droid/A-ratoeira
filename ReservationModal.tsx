import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, MessageSquare, Phone, AlertCircle, Mail } from 'lucide-react';
import { Language, ReservationData } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { RatoeiraLogo } from './RatoeiraLogo';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
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

  if (!isOpen) return null;

  const content = {
    pt: {
      title: 'Reservar Mesa na Ratoeira',
      subtitle: 'O pedido é enviado diretamente para o WhatsApp do restaurante.',
      name: 'Nome Completo',
      phone: 'Telefone',
      date: 'Data',
      time: 'Hora',
      guests: 'Pessoas',
      area: 'Zona',
      areaOptions: {
        salao: 'Salão Principal',
        esplanada: 'Esplanada',
        qualquer: 'Sem preferência',
      },
      notes: 'Notas adicionais (opcional)',
      submit: 'Enviar Pedido via WhatsApp',
      close: 'Fechar',
      confirmedTitle: 'Pronto para Enviar!',
      confirmedDesc: 'O seu pedido é tratado diretamente no telemóvel da gerência via WhatsApp (+351 916 579 315).',
      code: 'Ref. Reserva',
      whatsapp: 'Enviar no WhatsApp (+351 916 579 315)',
      call: 'Ligar para o Restaurante',
      email: 'Enviar por E-mail',
      sunday: 'Aviso: Encerramos aos Domingos para descanso da equipa.',
      explainer: 'As reservas são confirmadas diretamente no WhatsApp ou por chamada telefónica (+351 916 579 315).',
    },
    en: {
      title: 'Book a Table at Ratoeira',
      subtitle: 'Your request is sent directly to the restaurant’s WhatsApp.',
      name: 'Full Name',
      phone: 'Phone',
      date: 'Date',
      time: 'Time',
      guests: 'Guests',
      area: 'Seating Area',
      areaOptions: {
        salao: 'Main Hall',
        esplanada: 'Terrace',
        qualquer: 'No preference',
      },
      notes: 'Additional requests (optional)',
      submit: 'Send Request via WhatsApp',
      close: 'Close',
      confirmedTitle: 'Ready to Send!',
      confirmedDesc: 'Your request is handled directly on the owner’s mobile phone via WhatsApp (+351 916 579 315).',
      code: 'Ref. Code',
      whatsapp: 'Send via WhatsApp (+351 916 579 315)',
      call: 'Call Restaurant Directly',
      email: 'Send via Email',
      sunday: 'Notice: Closed on Sundays for team rest.',
      explainer: 'Reservations are confirmed directly on WhatsApp or by phone (+351 916 579 315).',
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
      // Fallback
    }
  };

  const isSunday = (dateStr: string) => {
    if (!dateStr) return false;
    return new Date(dateStr + 'T00:00:00').getDay() === 0;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#f8f6f1] border border-[#dedbd3] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-[#6f737b] hover:text-[#2e3138] rounded-full hover:bg-[#ebe7e0] transition-colors"
          aria-label={content.close}
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <div className="flex justify-center mb-3">
              <RatoeiraLogo variant="badge" size={52} className="rounded-xl shadow-md border border-[#2e3138]/20" />
            </div>
            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-[#2e3138] mb-2">
              {content.confirmedTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#6f737b] mb-5 leading-relaxed">{content.confirmedDesc}</p>

            <div className="bg-[#ebe7e0] p-4 rounded-xl border border-[#dedbd3] text-left text-xs sm:text-sm text-[#2e3138] mb-6 space-y-1.5">
              <div className="flex justify-between pb-1 border-b border-[#dedbd3]">
                <span className="font-semibold text-[#6f737b]">{content.code}:</span>
                <span className="font-mono font-bold text-[#2e3138]">{bookingCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-[#6f737b]">{content.name}:</span>
                <span className="font-medium text-[#2e3138]">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-[#6f737b]">{content.date}:</span>
                <span className="font-medium text-[#2e3138]">{formData.date} às {formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-[#6f737b]">{content.guests}:</span>
                <span className="font-medium text-[#2e3138]">{formData.guests} pessoa(s)</span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href={generateWhatsAppUrl(bookingCode)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 rounded-lg text-xs tracking-wider uppercase font-semibold transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                {content.whatsapp}
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phoneClean}`}
                  className="inline-flex items-center justify-center gap-1.5 bg-[#2e3138] text-[#f8f6f1] hover:bg-black py-2.5 rounded-lg text-xs tracking-wider uppercase font-medium transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {content.call}
                </a>
                <a
                  href={generateMailtoUrl(bookingCode)}
                  className="inline-flex items-center justify-center gap-1.5 border border-[#dedbd3] hover:border-[#2e3138] text-[#2e3138] py-2.5 rounded-lg text-xs tracking-wider uppercase font-medium transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {content.email}
                </a>
              </div>
              <button
                onClick={onClose}
                className="w-full border border-[#dedbd3] py-2.5 text-xs text-[#6f737b] hover:text-[#2e3138] rounded-lg tracking-wider uppercase font-medium mt-1"
              >
                {content.close}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 flex items-start gap-4">
              <RatoeiraLogo variant="badge" size={48} className="rounded-lg shadow-sm border border-[#2e3138]/20 shrink-0 mt-1" />
              <div>
                <span className="text-[10px] font-semibold tracking-[0.25em] text-[#c5a059] uppercase block mb-1">
                  CERVEJARIA RATOEIRA
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#2e3138]">
                  {content.title}
                </h3>
                <p className="text-xs text-[#6f737b] mt-1">{content.subtitle}</p>
              </div>
            </div>

            {isSunday(formData.date) && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-center gap-2 text-amber-800 text-xs mb-4">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{content.sunday}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#2e3138] mb-1">
                  {content.name} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-[#ebe7e0]/60 border border-[#dedbd3] rounded-lg text-[#2e3138] focus:outline-none focus:border-[#2e3138]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#2e3138] mb-1">
                  {content.phone} *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+351 912 345 678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-[#ebe7e0]/60 border border-[#dedbd3] rounded-lg text-[#2e3138] focus:outline-none focus:border-[#2e3138]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#2e3138] mb-1">
                    {content.date} *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 text-sm bg-[#ebe7e0]/60 border border-[#dedbd3] rounded-lg text-[#2e3138] focus:outline-none focus:border-[#2e3138]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#2e3138] mb-1">
                    {content.time} *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-[#ebe7e0]/60 border border-[#dedbd3] rounded-lg text-[#2e3138] focus:outline-none focus:border-[#2e3138]"
                  >
                    <option value="12:30">12:30 (Almoço)</option>
                    <option value="13:00">13:00 (Almoço)</option>
                    <option value="13:30">13:30 (Almoço)</option>
                    <option value="14:00">14:00 (Almoço)</option>
                    <option value="19:30">19:30 (Jantar)</option>
                    <option value="20:00">20:00 (Jantar)</option>
                    <option value="20:30">20:30 (Jantar)</option>
                    <option value="21:00">21:00 (Jantar)</option>
                    <option value="21:30">21:30 (Jantar)</option>
                    <option value="22:00">22:00 (Jantar)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#2e3138] mb-1">
                    {content.guests} *
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full px-3 py-2 text-sm bg-[#ebe7e0]/60 border border-[#dedbd3] rounded-lg text-[#2e3138] focus:outline-none focus:border-[#2e3138]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'pessoa' : 'pessoas'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#2e3138] mb-1">
                    {content.area}
                  </label>
                  <select
                    value={formData.area}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        area: e.target.value as 'salao' | 'esplanada' | 'qualquer',
                      })
                    }
                    className="w-full px-3 py-2 text-sm bg-[#ebe7e0]/60 border border-[#dedbd3] rounded-lg text-[#2e3138] focus:outline-none focus:border-[#2e3138]"
                  >
                    <option value="salao">{content.areaOptions.salao}</option>
                    <option value="esplanada">{content.areaOptions.esplanada}</option>
                    <option value="qualquer">{content.areaOptions.qualquer}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#2e3138] mb-1">
                  {content.notes}
                </label>
                <input
                  type="text"
                  placeholder="Alguma alergia ou pedido especial?"
                  value={formData.specialRequests}
                  onChange={(e) =>
                    setFormData({ ...formData, specialRequests: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm bg-[#ebe7e0]/60 border border-[#dedbd3] rounded-lg text-[#2e3138] focus:outline-none focus:border-[#2e3138]"
                />
              </div>

              <div className="flex items-center gap-2 p-2.5 bg-[#ebe7e0]/60 rounded-lg text-[11px] text-[#6f737b] border border-[#dedbd3]">
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span>{content.explainer}</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all shadow flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  {content.submit}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
