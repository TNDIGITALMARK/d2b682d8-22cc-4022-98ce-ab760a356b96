'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/products/ProductCard';
import { PRODUCTS } from '@/lib/products';

export default function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">
              Shop All
            </h1>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Curated collection of premium organic cotton basics. Quality over quantity. Limited drops.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty State Placeholder */}
          {PRODUCTS.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">No products available at the moment.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
