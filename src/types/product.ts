export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  category: 'hoodie' | 'tee' | 'sweatshirt' | 'pants' | 'longsleeve';
  colors: ProductColor[];
  sizes: ProductSize[];
  featured: boolean;
  inStock: boolean;
  limitedEdition?: boolean;
  stockCount?: number;
}

export interface ProductColor {
  name: string;
  hex: string;
  available: boolean;
}

export type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface CartItem {
  product: Product;
  size: ProductSize;
  color: ProductColor;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}
