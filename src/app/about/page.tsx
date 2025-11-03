'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Leaf, Heart, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 text-center">
            About ATLAS
          </h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-700 mb-8 text-center">
              We believe in quality over quantity. Premium sustainable streetwear for the conscious consumer.
            </p>

            <div className="grid md:grid-cols-3 gap-8 my-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
                  <Leaf className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Sustainable</h3>
                <p className="text-sm text-gray-600">
                  100% organic cotton, ethically sourced and produced with minimal environmental impact.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Crafted with Care</h3>
                <p className="text-sm text-gray-600">
                  Every piece is thoughtfully designed and built to last. Quality you can feel.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Community First</h3>
                <p className="text-sm text-gray-600">
                  We&apos;re building a community of conscious consumers who value sustainability.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg my-12">
              <h2 className="text-2xl font-bold uppercase mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                ATLAS was born from a simple idea: create premium basics that don&apos;t compromise on quality or sustainability. We were tired of fast fashion&apos;s environmental impact and the overwhelming choice that left us feeling unsatisfied.
              </p>
              <p className="text-gray-700">
                Our curated collection of 5-10 SKUs represents the best of what sustainable streetwear can be. Each piece is designed to be a staple in your wardrobe, combining comfort, style, and environmental consciousness.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold uppercase mb-4">Join the Movement</h2>
              <p className="text-gray-700 mb-6">
                Be part of a community that values quality, sustainability, and conscious consumption.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
