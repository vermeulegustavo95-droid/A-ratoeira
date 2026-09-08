import React from 'react';
import { Star, Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface SpecialtiesSectionProps {
  language: Language;
  onOpenReservation: () => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  language,
  onOpenReservation,
}) => {
  const content = {
    pt: {
      pretitle: 'O QUE MAIS PEDEM OS NOSSOS CLIENTES',
      title: 'Especialidades de Assinatura',
      desc:
        'Pratos emblemáticos que construíram a reputação da Cervejaria Ratoeira na Marinha Grande. Matéria-prima de excelência e confeção sem artifícios.',
      reserveCta: 'Garantir Mesa para Hoje',
      viewFullMenu: 'Ver Carta Completa',
      items: [
        {
          name: 'Lulas Grelhadas à Ratoeira',
          tag: 'O Grande Clássico da Casa',
          price: '15,50 €',
          desc: 'Lulas fresquíssimas grelhadas na brasa, regadas generosamente com azeite virgem extra, alho picado e salsa fresca. Acompanham com batata cozida e salada mista.',
          reviewQuote: '«As lulas grelhadas são das melhores de toda a região centro!»',
        },
        {
          name: 'Posta Barrosã com Flor de Sal',
          tag: 'Corte Nobre na Brasa',
          price: '19,00 €',
          desc: 'Carne suculenta com textura inigualável, selada em lume forte no carvão. Servida com batata a murro estalada no azeite e legumes da época salteados.',
          reviewQuote: '«Carne no ponto perfeito que se desfaz na boca.»',
        },
        {
          name: 'Picanha com Feijoada & Batata Fininha',
          tag: 'Favorito dos Grupos & Famílias',
          price: '16,50 €',
          desc: 'Fatias finas e tenras de picanha grelhada com gordura crocante, servidas com a nossa feijoada caseira aveludada e batatas fritas finas e estaladiças.',
          reviewQuote: '«A combinação da picanha com a feijoada é irresistível.»',
        },
        {
          name: 'Sobremesa Especial da Casa',
          tag: 'Doçaria Caseira de Assinatura',
          price: '4,50 €',
          desc: 'A nossa afamada sobremesa exclusiva: base cremosa de baba de camelo aveludada, intercalada com pedaços de merengue estaladiço e amêndoas torradas laminadas.',
          reviewQuote: '«Sobremesa obrigatória a cada visita à Ratoeira!»',
        }
      ]
    },
    en: {
      pretitle: 'OUR GUESTS’ MOST LOVED DISHES',
      title: 'Signature Specialties',
      desc:
        'The iconic dishes that built Cervejaria Ratoeira’s reputation in Marinha Grande. Superb raw ingredients, honest fire cooking, and generous portions.',
      reserveCta: 'Book a Table for Today',
      viewFullMenu: 'View Full Menu',
      items: [
        {
          name: 'Grilled Squid à la Ratoeira',
          tag: 'The Iconic House Classic',
          price: '15.50 €',
          desc: 'Exceptionally fresh squid grilled over charcoal, generously drizzled with extra virgin olive oil, garlic, and fresh parsley. Served with boiled potatoes and greens.',
          reviewQuote: '“The grilled squid is among the absolute best in the central region!”',
        },
        {
          name: 'Barrosã Beef Steak with Fleur de Sel',
          tag: 'Prime Charcoal Cut',
          price: '19.00 €',
          desc: 'Tender, juicy cut of Portuguese certified Barrosã beef, seared to perfection over coals. Accompanied by roasted smashed potatoes and fresh seasonal greens.',
          reviewQuote: '“Cooked to perfection, meltingly tender.”',
        },
        {
          name: 'Picanha with Black Beans & Crisp Fries',
          tag: 'Guest & Family Favorite',
          price: '16.50 €',
          desc: 'Delicately sliced picanha beef with a golden fat cap, paired with rich homemade black bean stew and thin, golden crisp fries.',
          reviewQuote: '“The pairing of tender picanha with the house beans is unbeatable.”',
        },
        {
          name: 'House Special Dessert',
          tag: 'Artisan Signature Sweet',
          price: '4.50 €',
          desc: 'Our famous exclusive dessert: velvety dulce de leche caramel cream layered with delicate crunchy meringue shards and toasted sliced almonds.',
          reviewQuote: '“An absolute must-order whenever visiting Ratoeira!”',
        }
      ]
    }
  }[language];

  return (
    <section id="especialidades" className="py-20 sm:py-28 px-6 sm:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-[0.25em] text-[#6f737b] uppercase block mb-3">
          {content.pretitle}
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-wide text-[#2e3138] mb-6">
          {content.title}
        </h2>
        <div className="w-12 h-[2px] bg-[#c5a059] mx-auto mb-6" />
        <p className="text-base sm:text-lg text-[#6f737b] leading-relaxed">
          {content.desc}
        </p>
      </div>

      {/* Specialties Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {content.items.map((item, index) => (
          <div
            key={index}
            className="bg-[#f8f6f1] p-8 rounded-xl border border-[#dedbd3] hover:border-[#2e3138]/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#c5a059] bg-[#ebe7e0] px-3 py-1 rounded-full">
                  {item.tag}
                </span>
                <span className="font-display text-xl sm:text-2xl font-semibold text-[#2e3138]">
                  {item.price}
                </span>
              </div>

              <h3 className="font-display text-2xl font-semibold text-[#2e3138] mb-3 group-hover:text-[#c5a059] transition-colors">
                {item.name}
              </h3>

              <p className="text-[#6f737b] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {item.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-[#dedbd3]/60 flex items-center gap-2 text-xs italic text-[#2e3138]/80">
              <Star className="w-3.5 h-3.5 fill-[#c5a059] text-[#c5a059] shrink-0" />
              <span>{item.reviewQuote}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Action Banner */}
      <div className="bg-[#ebe7e0] rounded-2xl p-8 sm:p-12 border border-[#dedbd3] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h4 className="font-display text-2xl sm:text-3xl font-semibold text-[#2e3138] mb-2">
            {language === 'pt' ? 'Gostaria de experimentar estas especialidades?' : 'Ready to taste these house specialties?'}
          </h4>
          <p className="text-sm sm:text-base text-[#6f737b]">
            {language === 'pt'
              ? 'Recomendamos a reserva antecipada, especialmente às sextas-feiras e sábados à noite.'
              : 'Advance reservation recommended, especially for Friday & Saturday dinners.'}
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenReservation}
            className="border border-[#2e3138] bg-[#2e3138] text-[#f8f6f1] hover:bg-transparent hover:text-[#2e3138] text-xs tracking-[0.18em] uppercase px-7 py-3 rounded-lg font-medium transition-all"
          >
            {content.reserveCta}
          </button>
        </div>
      </div>
    </section>
  );
};
