'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/products/ProductCard';
import { getHeroProduct, getFeaturedProducts } from '@/lib/products';
import { Leaf, Truck, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  const heroProduct = getHeroProduct();
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Hero Text */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-tight">
                  ELEVATE YOUR
                  <br />
                  EVERYDAY
                </h1>

                <p className="text-base text-gray-700 max-w-lg">
                  Premium organic cotton basics. Limited first drop of 100 pieces.
                </p>

                <Link
                  href="/shop"
                  className="inline-block px-8 py-3 bg-black text-white text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-gray-900 transition-colors"
                >
                  LIMITED FIRST DROP - $59
                </Link>

                <div className="text-sm text-gray-600">
                  ✓ Free shipping over $50 · Limited availability
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={heroProduct.image}
                  alt={heroProduct.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quality & Sustainability */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h6 className="text-xs font-semibold tracking-widest uppercase text-center mb-12">
              QUALITY & SUSTAINABILITY
            </h6>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
                  <Leaf className="w-6 h-6" />
                </div>
                <h5 className="text-sm font-semibold mb-2 uppercase">100% Organic</h5>
                <p className="text-sm text-gray-600">
                  Premium organic cotton, sustainably sourced
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
                  <Truck className="w-6 h-6" />
                </div>
                <h5 className="text-sm font-semibold mb-2 uppercase">Free Shipping</h5>
                <p className="text-sm text-gray-600">
                  On all orders over $50
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h5 className="text-sm font-semibold mb-2 uppercase">Quality Guarantee</h5>
                <p className="text-sm text-gray-600">
                  Built to last, backed by our guarantee
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h6 className="text-xs font-semibold tracking-widest uppercase text-center mb-12">
              FEATURED COLLECTION
            </h6>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/shop"
                className="inline-block px-8 py-3 border-2 border-black text-black text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-black hover:text-white transition-all"
              >
                VIEW ALL PRODUCTS
              </Link>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h6 className="text-xs font-semibold tracking-widest uppercase text-center mb-8">
              LOVED BY THOUSANDS
            </h6>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 rounded">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-sm italic text-gray-700 mb-3">
                  &quot;Best hoodie I have ever owned - so soft and the fit is perfect&quot;
                </p>
                <p className="text-xs font-semibold uppercase tracking-wide">
                  — Sarah M.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-sm italic text-gray-700 mb-3">
                  &quot;Finally found sustainable basics that actually look good&quot;
                </p>
                <p className="text-xs font-semibold uppercase tracking-wide">
                  — Jordan K.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}