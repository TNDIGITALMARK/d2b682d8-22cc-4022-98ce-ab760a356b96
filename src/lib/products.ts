import { Product } from '@/types/product';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Organic Cotton Hoodie',
    slug: 'premium-organic-cotton-hoodie',
    description: 'Best hoodie you\'ll ever own. Crafted from 100% organic cotton with a relaxed fit. Soft, sustainable, and built to last.',
    price: 59,
    image: '/generated/hero-hoodie.png',
    images: ['/generated/hero-hoodie.png'],
    category: 'hoodie',
    colors: [
      { name: 'Sage Green', hex: '#87A878', available: true },
      { name: 'Warm Beige', hex: '#D4C5B0', available: true },
      { name: 'Charcoal', hex: '#4A4A4A', available: true },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
    inStock: true,
    limitedEdition: true,
    stockCount: 100,
  },
  {
    id: '2',
    name: 'Essential Crew Neck Tee',
    slug: 'essential-crew-neck-tee',
    description: 'The perfect basic. Premium organic cotton tee with a modern fit. Your new everyday essential.',
    price: 29,
    image: '/generated/product-tshirt-black.png',
    images: ['/generated/product-tshirt-black.png'],
    category: 'tee',
    colors: [
      { name: 'Natural White', hex: '#F5F5F5', available: true },
      { name: 'Charcoal', hex: '#4A4A4A', available: true },
      { name: 'Sage', hex: '#87A878', available: true },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    featured: true,
    inStock: true,
  },
  {
    id: '3',
    name: 'Relaxed Fit Sweatshirt',
    slug: 'relaxed-fit-sweatshirt',
    description: 'Cozy meets style. Oversized sweatshirt in premium organic cotton fleece. Perfect for layering.',
    price: 45,
    image: '/generated/product-sweatshirt-sage.png',
    images: ['/generated/product-sweatshirt-sage.png'],
    category: 'sweatshirt',
    colors: [
      { name: 'Warm Beige', hex: '#D4C5B0', available: true },
      { name: 'Charcoal', hex: '#4A4A4A', available: true },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
    inStock: true,
  },
  {
    id: '4',
    name: 'Organic Cotton Joggers',
    slug: 'organic-cotton-joggers',
    description: 'Comfort you can feel good about. Soft organic cotton joggers with a relaxed fit and tapered leg.',
    price: 55,
    image: '/generated/product-joggers.png',
    images: ['/generated/product-joggers.png'],
    category: 'pants',
    colors: [
      { name: 'Charcoal', hex: '#4A4A4A', available: true },
      { name: 'Sage Green', hex: '#87A878', available: true },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
    inStock: true,
  },
  {
    id: '5',
    name: 'Oversized Long Sleeve',
    slug: 'oversized-long-sleeve',
    description: 'Effortless style. Relaxed fit long sleeve in premium organic cotton. Perfect for any season.',
    price: 39,
    image: '/generated/product-longsleeve.png',
    images: ['/generated/product-longsleeve.png'],
    category: 'longsleeve',
    colors: [
      { name: 'Natural White', hex: '#F5F5F5', available: true },
      { name: 'Warm Beige', hex: '#D4C5B0', available: true },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: false,
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getHeroProduct(): Product {
  return PRODUCTS[0];
}
