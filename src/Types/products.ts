export interface Products {
    id: number;
    slug: string;
    name: string;
    productCode: string;
    description: string;
    price: number;
    rating: number;
    reviews: number;
    colors: { hex: string; name: string }[];
    sizes: string[];
    images: string[];
    features: string[];
    category: string;
    brand: string;
    minOrder: string;
    bgColor: string;
    badge?: string;
  }