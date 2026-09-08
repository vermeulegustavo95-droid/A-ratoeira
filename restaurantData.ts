import { MenuItem, Review } from '../types';

export const RESTAURANT_INFO = {
  name: 'Cervejaria Ratoeira',
  subtitle: {
    pt: 'Restaurante & Cervejaria · Marinha Grande',
    en: 'Restaurant & Brewery · Marinha Grande, Portugal',
  },
  address: 'Rua das Figueiras, Nº 76/78, 2430-184 Marinha Grande, Portugal',
  phone: '+351 916 579 315',
  phoneClean: '+351916579315',
  email: 'cervejaria.ratoeira@gmail.com',
  facebook: 'https://facebook.com/Cervejaria-Ratoeira',
  googleMapsUrl: 'https://maps.google.com/?q=Cervejaria+Ratoeira+Rua+das+Figueiras+Marinha+Grande',
  googleRating: 4.2,
  totalReviews: 215,
  averagePrice: '18€ - 25€',
  schedule: {
    lunch: '12:00 – 15:00',
    dinner: '19:00 – 23:00',
    closedDay: {
      pt: 'Domingo (Descanso semanal)',
      en: 'Sunday (Weekly rest)',
    },
    days: {
      pt: 'Segunda a Sábado',
      en: 'Monday to Saturday',
    }
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // Petiscos & Entradas
  {
    id: 'p1',
    name: {
      pt: 'Salada de Polvo Fresco da Costa',
      en: 'Fresh Coast Octopus Salad',
    },
    description: {
      pt: 'Polvo tenro com cebola roxa picada, pimento, coentros frescos e azeite virgem extra de primeira prensa.',
      en: 'Tender octopus with minced red onion, bell peppers, fresh coriander, and first-press extra virgin olive oil.',
    },
    price: 9.50,
    category: 'petiscos',
    highlight: true,
    tags: ['Especialidade', 'Sem Glúten'],
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p2',
    name: {
      pt: 'Gambas ao Alho da Ratoeira',
      en: 'Garlic Prawns à la Ratoeira',
    },
    description: {
      pt: 'Camarão salteado em azeite quente com alho laminado, malagueta suave e coentros, servido com pão torrado.',
      en: 'Prawns sautéed in olive oil with garlic slivers, mild chili, and cilantro, served with toasted bread.',
    },
    price: 11.00,
    category: 'petiscos',
    highlight: true,
    tags: ['Clássico'],
    imageUrl: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p3',
    name: {
      pt: 'Pica-Pau de Novilho com Pickles',
      en: 'Tender Beef Pica-Pau with Pickles',
    },
    description: {
      pt: 'Cubos de novilho salteados com molho apurado de cerveja branca, mostarda antiga, azeitonas e picles artesanais.',
      en: 'Tender beef cubes tossed in a rich beer and mustard sauce, with olives and house pickles.',
    },
    price: 10.50,
    category: 'petiscos',
    tags: ['Para Partilhar']
  },
  {
    id: 'p4',
    name: {
      pt: 'Tábua Mista de Queijos e Enchidos',
      en: 'Regional Cheese & Charcuterie Board',
    },
    description: {
      pt: 'Seleção de queijos curados da região, chouriço caseiro tostado, presunto de cura tradicional e tostas.',
      en: 'Selection of cured regional cheeses, toasted chorizo, traditional cured ham, and artisan crackers.',
    },
    price: 12.50,
    category: 'petiscos',
    tags: ['Regional']
  },

  // Peixe & Marisco
  {
    id: 'm1',
    name: {
      pt: 'Lulas Grelhadas à Ratoeira',
      en: 'Grilled Fresh Squid à la Ratoeira',
    },
    description: {
      pt: 'Famosas lulas frescas grelhadas na brasa, regadas com azeite, alho e salsa, acompanhadas de batata cozida e salada fresca.',
      en: 'Our famous fresh squid grilled on charcoal, drizzled with olive oil, garlic and parsley, served with boiled potatoes and fresh greens.',
    },
    price: 15.50,
    category: 'marisco',
    highlight: true,
    tags: ['Prato de Assinatura', 'Fresco do Dia'],
    imageUrl: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm2',
    name: {
      pt: 'Polvo à Lagareiro no Forno',
      en: 'Roasted Octopus à Lagareiro',
    },
    description: {
      pt: 'Tentáculo de polvo generoso assado no forno com azeite virgem abundante, batatas a murro e grelos salteados.',
      en: 'Generous roasted octopus tentacle baked with abundant olive oil, smashed potatoes, and sautéed greens.',
    },
    price: 18.50,
    category: 'marisco',
    highlight: true,
    tags: ['Tradição'],
    imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm3',
    name: {
      pt: 'Bacalhau com Broa e Batata a Murro',
      en: 'Codfish with Cornbread Crust',
    },
    description: {
      pt: 'Lombo de bacalhau de cura amarela sobre cama de cebolada, coberto com crosta estaladiça de broa de milho e azeite.',
      en: 'Prime loin of Portuguese salted cod with caramelized onions, golden crust of artisan cornbread and roasted potatoes.',
    },
    price: 17.00,
    category: 'marisco',
    tags: ['Clássico Português']
  },
  {
    id: 'm4',
    name: {
      pt: 'Arroz de Marisco Malandrinho',
      en: 'Portuguese Seafood Broth Rice',
    },
    description: {
      pt: 'Arroz caldoso aromático com camarão tigre, ameijoa, mexilhão e coentros frescos (dose individual ou para 2 pessoas).',
      en: 'Rich seafood broth rice loaded with tiger prawns, clams, mussels, and fresh coriander herbs.',
    },
    price: 19.50,
    category: 'marisco',
    tags: ['Caldoso']
  },

  // Carnes na Grelha
  {
    id: 'c1',
    name: {
      pt: 'Posta Barrosã na Brasa com Flor de Sal',
      en: 'Barrosã Beef Steak on Charcoal',
    },
    description: {
      pt: 'Corte nobre e suculento de carne de denominação de origem, grelhada no ponto com flor de sal, batata a murro e legumes salteados.',
      en: 'Prime cut of tender Barrosã PDO beef grilled to perfection over hot coals with sea salt crystals, smashed potatoes, and vegetables.',
    },
    price: 19.00,
    category: 'carnes',
    highlight: true,
    tags: ['Especialidade da Casa', 'Grelha'],
    imageUrl: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'c2',
    name: {
      pt: 'Picanha com Feijoada e Batata Estaladiça',
      en: 'Picanha Steak with Black Beans & Crisp Fries',
    },
    description: {
      pt: 'Fatias finas de picanha tenra grelhada com gordura dourada, acompanhada da nossa feijoada aromática e batatas finas caseiras.',
      en: 'Tender grilled picanha slices served with our house black bean stew and signature thin crisp french fries.',
    },
    price: 16.50,
    category: 'carnes',
    highlight: true,
    tags: ['Favorito dos Clientes'],
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'c3',
    name: {
      pt: 'Secretos de Porco Preto Grelhados',
      en: 'Grilled Iberian Black Pork Secretos',
    },
    description: {
      pt: 'Secretos de porco alentejano grelhados na brasa com limão, batata frita e arroz aromático.',
      en: 'Charcoal-grilled Iberian black pork tender strips seasoned with lemon, served with fries and rice.',
    },
    price: 14.50,
    category: 'carnes',
    tags: ['Sabor Intenso']
  },
  {
    id: 'c4',
    name: {
      pt: 'Bife à Cervejaria Ratoeira',
      en: 'House Brewery Steak',
    },
    description: {
      pt: 'Bife da vazia suculento servido com redução aveludada de cerveja preta, louro, alho e presunto estaladiço por cima.',
      en: 'Juicy strip steak with our signature dark craft beer reduction, bay leaf, garlic, topped with crispy prosciutto.',
    },
    price: 16.00,
    category: 'carnes',
    tags: ['Molho Especial']
  },

  // Especiais da Cervejaria & Francesinha
  {
    id: 'e1',
    name: {
      pt: 'Francesinha Especial da Ratoeira',
      en: 'Ratoeira Special Francesinha',
    },
    description: {
      pt: 'Pão de forma recheado com bife de novilho, linguiça, salsicha fresca e fiambre, coberto com queijo derretido, ovo estrelado e o nosso lendário molho apurado.',
      en: 'Iconic Portuguese sandwich layered with beef steak, smoked sausage, ham, melted cheese, fried egg, and our signature slow-simmered beer sauce.',
    },
    price: 12.50,
    category: 'especiais',
    highlight: true,
    tags: ['Recomendado'],
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'e2',
    name: {
      pt: 'Prego em Pão da Casa com Mostarda',
      en: 'House Sirloin Prego on Artisan Bread',
    },
    description: {
      pt: 'Lombo de novilho tenro selado em alho e azeite no pão tradicional ligeiramente tostado, acompanhado de mostarda suave.',
      en: 'Tender beef sirloin steak flashed with garlic and olive oil in crusty artisan bread, with delicate mustard.',
    },
    price: 7.50,
    category: 'especiais',
    tags: ['Petisco Rápido']
  },
  {
    id: 'e3',
    name: {
      pt: 'Prego Especial no Prato',
      en: 'Special Prego on the Plate',
    },
    description: {
      pt: 'Bife do lombo tenro no prato com ovo a cavalo, arroz solto, feijão preto e batata estaladiça caseira.',
      en: 'Tender sirloin steak served on a plate topped with fried egg, fragrant rice, black beans, and crispy fries.',
    },
    price: 11.50,
    category: 'especiais',
    tags: ['Completo']
  },

  // Sobremesas Caseiras
  {
    id: 's1',
    name: {
      pt: 'Especial da Casa: Baba de Camelo com Merengue & Amêndoas',
      en: 'House Special: Caramel Cream with Meringue & Almonds',
    },
    description: {
      pt: 'A famosa sobremesa da Ratoeira: aveludada baba de camelo caseira, intercalada com pedaços de merengue estaladiço e amêndoas torradas laminadas.',
      en: 'Our famous house dessert: velvety dulce de leche caramel cream folded with crunchy meringue and toasted sliced almonds.',
    },
    price: 4.50,
    category: 'sobremesas',
    highlight: true,
    tags: ['Sobremesa de Assinatura'],
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's2',
    name: {
      pt: 'Bolo Cremoso de Chocolate com Flor de Sal',
      en: 'Creamy Dark Chocolate Cake with Sea Salt',
    },
    description: {
      pt: 'Bolo húmido e intenso de chocolate 70%, coração cremoso e rematado com cristais de flor de sal.',
      en: 'Rich 70% dark chocolate cake with a creamy heart and delicate touch of fleur de sel.',
    },
    price: 4.50,
    category: 'sobremesas',
    tags: ['Caseiro']
  },
  {
    id: 's3',
    name: {
      pt: 'Cheesecake de Frutos Vermelhos Silvestres',
      en: 'Wild Berry Cheesecake',
    },
    description: {
      pt: 'Base de bolacha amanteigada, creme suave de queijo fresco e redução artesanal de frutos do bosque.',
      en: 'Butter cookie crust, light cheese cream, and homemade wild berry compote.',
    },
    price: 4.00,
    category: 'sobremesas',
    tags: ['Fresco']
  },

  // Cervejas & Vinhos
  {
    id: 'b1',
    name: {
      pt: 'Cerveja de Pressão Tirada Fria (Imperial / Caneca)',
      en: 'Draft Cold Beer (Imperial / Stein)',
    },
    description: {
      pt: 'Servida no ponto perfeito com serpentina gelada e espuma cremosa consistente.',
      en: 'Poured ice-cold with a rich, silky head from our chilled beer taps.',
    },
    price: 2.20,
    category: 'bebidas',
    highlight: true,
    tags: ['Cervejaria']
  },
  {
    id: 'b2',
    name: {
      pt: 'Seleção de Vinhos Regionais de Portugal (Garrafa)',
      en: 'Portuguese Regional Wine Selection (Bottle)',
    },
    description: {
      pt: 'Vinhos tintos, brancos e verdes criteriosamente selecionados das regiões do Dão, Bairrada, Douro e Alentejo.',
      en: 'Carefully curated red, white, and vinho verde labels from Dão, Bairrada, Douro, and Alentejo regions.',
    },
    price: 14.00,
    category: 'bebidas',
    tags: ['Vinho da Casa']
  }
];

export const GOOGLE_REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Manuel Ferreira',
    rating: 5,
    date: 'Há 2 semanas',
    source: 'Google Reviews',
    comment: {
      pt: 'As lulas grelhadas são simplesmente divinais, frescas e com um sabor a brasa autêntico. A picanha com a feijoada e batata fininha estava no ponto. Atendimento 5 estrelas na Marinha Grande!',
      en: 'The grilled squids are simply divine, fresh and packed with authentic charcoal flavor. The picanha with black beans and thin crispy fries was spot on. 5-star service in Marinha Grande!'
    }
  },
  {
    id: 'r2',
    author: 'Ana Sofia Rodrigues',
    rating: 5,
    date: 'Há 1 mês',
    source: 'Google Reviews',
    comment: {
      pt: 'Restaurante acolhedor e com comida caseira de verdade. A posta barrosã é tenríssima e a sobremesa da casa com baba de camelo e merengue é de comer e chorar por mais. Voltamos sempre!',
      en: 'Cozy restaurant with truly authentic homemade food. The Barrosã steak is so tender and the house dessert with caramel cream and meringue is unbelievable. We keep coming back!'
    }
  },
  {
    id: 'r3',
    author: 'Carlos Alberto Santos',
    rating: 4,
    date: 'Há 2 meses',
    source: 'Google Reviews',
    comment: {
      pt: 'Cerveja sempre fresca e bem tirada, francesinha com molho muito saboroso e atendimento atencioso. Ótimo sítio para jantar de amigos ou família na Marinha Grande. Recomendo reservar.',
      en: 'Beer is always cold and properly pulled, francesinha has a fantastic rich sauce and attentive staff. Great spot for friends or family dinner in Marinha Grande. Booking ahead recommended.'
    }
  },
  {
    id: 'r4',
    author: 'Marta Pinheiro',
    rating: 5,
    date: 'Há 3 meses',
    source: 'Google Reviews',
    comment: {
      pt: 'Descobrimos por recomendação de amigos locais. Marisco de grande qualidade, doses bem servidas e um preço muito justo. O espaço é limpo, acolhedor e o pessoal é super prestável.',
      en: 'Discovered this through recommendations from local friends. High quality seafood, generous portions and very honest prices. Clean, cozy venue with exceptionally warm staff.'
    }
  }
];
