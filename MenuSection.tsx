import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Utensils, Check, Info } from 'lucide-react';
import { Language, MenuItem } from '../types';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';

interface MenuSectionProps {
  language: Language;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: { pt: 'Toda a Carta', en: 'Full Menu' } },
    { id: 'petiscos', label: { pt: 'Petiscos & Entradas', en: 'Appetizers & Tapas' } },
    { id: 'marisco', label: { pt: 'Do Mar & Marisco', en: 'Seafood & Fish' } },
    { id: 'carnes', label: { pt: 'Carnes na Brasa', en: 'Charcoal Steaks' } },
    { id: 'especiais', label: { pt: 'Francesinhas & Prego', en: 'Francesinha & Prego' } },
    { id: 'sobremesas', label: { pt: 'Sobremesas Caseiras', en: 'Desserts' } },
    { id: 'bebidas', label: { pt: 'Cervejas & Vinhos', en: 'Beers & Wine' } },
  ];

  const content = {
    pt: {
      pretitle: 'GASTRONOMIA PORTUGUESA & CERVEJARIA',
      title: 'A Nossa Carta & Menus',
      desc:
        'Confeção diária com produtos selecionados. Todos os pratos são preparados no momento para garantir a máxima frescura e sabor.',
      searchPlaceholder: 'Procurar prato, peixe, carne...',
      takeawayBadge: 'Take-Away Disponível',
      takeawayNote: 'Pode encomendar qualquer prato para levantar ligando para o',
      vatNote: 'IVA incluído à taxa legal em vigor. Dispomos de informação sobre alergénios.',
      noResults: 'Nenhum prato encontrado para a pesquisa.',
    },
    en: {
      pretitle: 'PORTUGUESE GASTRONOMY & BREWERY',
      title: 'Our Menu & Cellar',
      desc:
        'Cooked fresh daily with selected ingredients. Every dish is prepared on order to guarantee peak freshness and rich authentic flavor.',
      searchPlaceholder: 'Search dish, seafood, steak...',
      takeawayBadge: 'Take-Away Available',
      takeawayNote: 'You can order any dish for pick-up by calling',
      vatNote: 'VAT included at legal rate. Detailed allergen info available upon request.',
      noResults: 'No dishes found matching your query.',
    },
  }[language];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const itemName = item.name[language].toLowerCase();
      const itemDesc = item.description[language].toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || itemName.includes(q) || itemDesc.includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, language]);

  return (
    <section id="menu" className="py-20 sm:py-28 px-6 sm:px-12 bg-[#ebe7e0] border-y border-[#dedbd3]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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

        {/* Filter controls: Categories + Search Bar */}
        <div className="flex flex-col gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm tracking-wider uppercase font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-[#2e3138] text-[#f8f6f1] shadow-sm'
                    : 'bg-[#f8f6f1] text-[#6f737b] hover:text-[#2e3138] border border-[#dedbd3]'
                }`}
              >
                {cat.label[language]}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="max-w-md mx-auto w-full relative">
            <Search className="w-4 h-4 text-[#6f737b] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={content.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 bg-[#f8f6f1] border border-[#dedbd3] rounded-lg text-sm text-[#2e3138] placeholder-[#6f737b]/70 focus:outline-none focus:border-[#2e3138] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6f737b] hover:text-[#2e3138]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#f8f6f1] p-6 sm:p-7 rounded-xl border border-[#dedbd3] hover:border-[#2e3138]/40 transition-colors shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#2e3138]">
                        {item.name[language]}
                      </h3>
                      {item.highlight && (
                        <span className="text-[10px] font-medium tracking-wider uppercase bg-[#ebe7e0] text-[#c5a059] px-2 py-0.5 rounded">
                          ★
                        </span>
                      )}
                    </div>
                    <span className="font-display text-xl font-semibold text-[#2e3138] shrink-0">
                      {item.price.toFixed(2).replace('.', ',')} €
                    </span>
                  </div>

                  <p className="text-sm text-[#6f737b] leading-relaxed mb-4">
                    {item.description[language]}
                  </p>
                </div>

                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#dedbd3]/60">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] tracking-wider uppercase text-[#6f737b] bg-[#ebe7e0] px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#f8f6f1] rounded-xl border border-[#dedbd3] text-[#6f737b]">
            <p className="text-base">{content.noResults}</p>
          </div>
        )}

        {/* Takeaway & Allergen Info Banner */}
        <div className="bg-[#f8f6f1] rounded-xl p-6 sm:p-8 border border-[#dedbd3] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ebe7e0] flex items-center justify-center shrink-0">
              <Info className="w-5 h-5 text-[#2e3138]" />
            </div>
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#2e3138] block">
                {content.takeawayBadge}
              </span>
              <p className="text-xs sm:text-sm text-[#6f737b]">
                {content.takeawayNote}{' '}
                <a
                  href={`tel:${RESTAURANT_INFO.phoneClean}`}
                  className="font-medium text-[#2e3138] underline hover:text-[#c5a059]"
                >
                  {RESTAURANT_INFO.phone}
                </a>.
              </p>
            </div>
          </div>

          <span className="text-[11px] text-[#6f737b]/80 max-w-xs text-center sm:text-right">
            {content.vatNote}
          </span>
        </div>
      </div>
    </section>
  );
};
