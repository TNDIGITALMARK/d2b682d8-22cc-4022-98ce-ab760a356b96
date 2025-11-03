'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

            <section>
              <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account,
                place an order, or communicate with us. This may include your name, email address,
                shipping address, and payment information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
              <p>
                We use the information we collect to process your orders, communicate with you,
                improve our services, and send you marketing communications (with your consent).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information.
                However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information.
                Contact us at hello@atlasapparel.com to exercise these rights.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
