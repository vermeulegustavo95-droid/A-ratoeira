import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { GOOGLE_REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

interface ReviewsSectionProps {
  language: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ language }) => {
  const content = {
    pt: {
      pretitle: 'AVALIAÇÕES & TESTEMUNHOS REAIS',
      title: 'A Opinião de Quem Nos Visita',
      ratingNote: 'Classificação média baseada em mais de 200 avaliações no Google',
      viewAllOnGoogle: 'Ver Todas as Avaliações no Google',
      verified: 'Avaliação Verificada',
    },
    en: {
      pretitle: 'REAL REVIEWS & TESTIMONIALS',
      title: 'What Our Guests Say',
      ratingNote: 'Average score based on 200+ verified evaluations on Google',
      viewAllOnGoogle: 'View All Reviews on Google',
      verified: 'Verified Review',
    },
  }[language];

  return (
    <section id="avaliacoes" className="py-20 sm:py-28 px-6 sm:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-[0.25em] text-[#6f737b] uppercase block mb-3">
          {content.pretitle}
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-wide text-[#2e3138] mb-4">
          {content.title}
        </h2>
        <div className="w-12 h-[2px] bg-[#c5a059] mx-auto mb-6" />

        {/* Big Rating Badge */}
        <div className="inline-flex items-center gap-3 bg-[#ebe7e0] px-5 py-2.5 rounded-full border border-[#dedbd3] mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < 4
                    ? 'fill-[#c5a059] text-[#c5a059]'
                    : 'fill-[#c5a059]/40 text-[#c5a059]'
                }`}
              />
            ))}
          </div>
          <span className="font-display text-lg font-bold text-[#2e3138]">
            4.2 / 5.0
          </span>
          <span className="text-xs text-[#6f737b] border-l border-[#dedbd3] pl-3">
            Google Reviews ({RESTAURANT_INFO.totalReviews}+)
          </span>
        </div>

        <p className="text-xs text-[#6f737b]">{content.ratingNote}</p>
      </div>

      {/* Reviews Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {GOOGLE_REVIEWS.map((review) => (
          <div
            key={review.id}
            className="bg-[#f8f6f1] p-8 rounded-xl border border-[#dedbd3] flex flex-col justify-between hover:border-[#2e3138]/40 transition-colors shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#c5a059] text-[#c5a059]"
                    />
                  ))}
                </div>
                <span className="text-[11px] text-[#6f737b]">{review.date}</span>
              </div>

              <p className="text-[#2e3138] text-sm sm:text-base leading-relaxed mb-6 italic">
                "{review.comment[language]}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#dedbd3]/60 flex items-center justify-between">
              <span className="text-sm font-semibold text-[#2e3138]">
                {review.author}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#6f737b] bg-[#ebe7e0] px-2.5 py-1 rounded">
                {review.source}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* External Link */}
      <div className="text-center">
        <a
          href={RESTAURANT_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[#2e3138] text-[#2e3138] hover:bg-[#2e3138] hover:text-[#f8f6f1] text-xs tracking-[0.18em] uppercase px-7 py-3 rounded-lg font-medium transition-all"
        >
          <span>{content.viewAllOnGoogle}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
