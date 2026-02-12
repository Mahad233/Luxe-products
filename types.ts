
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: 'Timepieces' | 'Accessories' | 'Leather' | 'Tech' | 'Home';
  image: string;
  description: string;
  affiliateUrl: string;
  rating: number;
}

export interface Review {
  author: string;
  content: string;
  rating: number;
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
