'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

            <section>
              <h2 className="text-xl font-semibold mb-3">Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms
                and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Products and Orders</h2>
              <p>
                All products are subject to availability. We reserve the right to limit quantities
                or refuse service. Prices are subject to change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Shipping and Returns</h2>
              <p>
                Free shipping on orders over $50. We accept returns within 30 days of delivery
                for unworn, unwashed items with tags attached.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images,
                is the property of ATLAS and protected by copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Contact</h2>
              <p>
                For questions about these Terms of Service, please contact us at
                hello@atlasapparel.com.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
