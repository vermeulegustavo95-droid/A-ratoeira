import React from 'react';
import { Award, Compass, HeartHandshake, Flame, Waves, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { RatoeiraLogo } from './RatoeiraLogo';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const content = {
    pt: {
      pretitle: 'A NOSSA HISTÓRIA & VALORES',
      title: 'Porquê a Cervejaria Ratoeira?',
      intro:
        'Porque uma refeição deve ser o melhor momento do seu dia. Cozinhamos com o que é fresco, servimos com rigor e mantemos vivo o espírito das melhores cervejarias de Portugal.',
      p1:
        'Localizada na Rua das Figueiras, no coração da Marinha Grande, a Cervejaria Ratoeira nasceu do amor à verdadeira mesa portuguesa. Entre a tradição do Pinhal do Rei e a proximidade com a costa atlântica, combinamos o melhor do mar com cortes nobres de carne na brasa.',
      p2:
        'Aqui não há pressas desnecessárias nem artifícios: apenas o peixe e marisco escolhidos com critério, a famosa posta barrosã com flor de sal, a picanha fatiada no ponto com a nossa feijoada caseira, e a cerveja de pressão sempre estaladiça e gelada.',
      pillars: [
        {
          title: 'Marisco & Peixe Fresco',
          desc: 'Lulas grelhadas no carvão, salada de polvo fresca e camarão ao alho servidos diariamente com qualidade ímpar.',
          icon: Waves,
        },
        {
          title: 'Fogo & Grelha a Carvão',
          desc: 'Posta Barrosã tenra e picanha selecionada, grelhadas no ponto perfeito para libertar todo o sabor autêntico.',
          icon: Flame,
        },
        {
          title: 'Hospitalidade da Casa',
          desc: 'Ambiente familiar e atencioso, ideal para almoços de trabalho, jantares com amigos e momentos em família.',
          icon: HeartHandshake,
        },
      ],
      quote:
        '"Uma cervejaria autêntica onde a qualidade do produto fala por si e cada cliente é recebido como em casa."',
      author: 'A Família Ratoeira · Marinha Grande'
    },
    en: {
      pretitle: 'OUR STORY & VALUES',
      title: 'Why Cervejaria Ratoeira?',
      intro:
        'Because a meal should feel like the best part of your day. We cook with what is fresh, serve with care, and celebrate the timeless spirit of traditional Portuguese brewery houses.',
      p1:
        'Situated on Rua das Figueiras, in the heart of Marinha Grande, Cervejaria Ratoeira was born from a deep devotion to authentic Portuguese gastronomy. Between the historic pine forest of Leiria and the Atlantic coastline, we bring together fresh ocean catches and prime charcoal-grilled meats.',
      p2:
        'No shortcuts or artificial trends: simply carefully sourced seafood, our famed tender Barrosã steak seasoned with fleur de sel, picanha paired with slow-simmered black beans and crisp fries, and draft beer poured ice-cold every single time.',
      pillars: [
        {
          title: 'Fresh Seafood & Fish',
          desc: 'Charcoal-grilled fresh squid, tender octopus salad, and garlic butter prawns served daily at peak freshness.',
          icon: Waves,
        },
        {
          title: 'Charcoal Flame & Prime Meats',
          desc: 'Tender Barrosã beef and succulent picanha grilled over charcoal to lock in peak tenderness and flavor.',
          icon: Flame,
        },
        {
          title: 'Heartfelt Hospitality',
          desc: 'Warm and attentive service, making it the perfect setting for business lunches, family meals, and friendly evenings.',
          icon: HeartHandshake,
        },
      ],
      quote:
        '"An authentic Portuguese brewery where honest ingredients speak for themselves and every guest feels at home."',
      author: 'The Ratoeira Family · Marinha Grande'
    },
  }[language];

  return (
    <section id="sobre" className="bg-[#ebe7e0] py-20 sm:py-28 px-6 sm:px-12 border-y border-[#dedbd3]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <RatoeiraLogo variant="mark" size={50} color="#2e3138" className="opacity-75 hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-xs font-semibold tracking-[0.25em] text-[#6f737b] uppercase block mb-3">
            {content.pretitle}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-wide text-[#2e3138] mb-6">
            {content.title}
          </h2>
          <div className="w-12 h-[2px] bg-[#c5a059] mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-[#2e3138] font-normal leading-relaxed">
            {content.intro}
          </p>
        </div>

        {/* Two-Column Story Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-20 text-[#6f737b] leading-relaxed text-base sm:text-lg">
          <p>{content.p1}</p>
          <p>{content.p2}</p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {content.pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#f8f6f1] p-8 rounded-xl border border-[#dedbd3]/70 hover:border-[#2e3138]/40 transition-colors shadow-sm flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-full bg-[#ebe7e0] flex items-center justify-center text-[#2e3138] mb-5">
                  <Icon className="w-5 h-5 text-[#2e3138]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[#2e3138] mb-2 tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#6f737b] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Quote */}
        <div className="border-t border-[#dedbd3] pt-12 text-center max-w-2xl mx-auto">
          <p className="font-display italic text-xl sm:text-2xl text-[#2e3138] mb-3 leading-snug">
            {content.quote}
          </p>
          <span className="text-xs tracking-[0.2em] uppercase text-[#6f737b] font-medium">
            {content.author}
          </span>
        </div>
      </div>
    </section>
  );
};
