export type Language = 'pt' | 'en';

export interface MenuItem {
  id: string;
  name: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  price: number;
  highlight?: boolean;
  category: 'petiscos' | 'marisco' | 'carnes' | 'especiais' | 'sobremesas' | 'bebidas';
  tags?: string[];
  imageUrl?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: {
    pt: string;
    en: string;
  };
  source: 'Google Reviews';
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
  area: 'salao' | 'esplanada' | 'qualquer';
}
