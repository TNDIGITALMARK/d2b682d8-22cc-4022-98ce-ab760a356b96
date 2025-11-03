'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        {/* Newsletter */}
        <div className="text-center mb-8">
          <h6 className="text-xs font-semibold tracking-widest uppercase mb-4">
            DISCOVER MORE
          </h6>
          <p className="text-sm text-gray-600 mb-4 max-w-md mx-auto">
            Join our community and receive 10% off your first order.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-black transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-black text-white text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-gray-900 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          ) : (
            <p className="text-sm font-medium text-green-600">
              ✓ Thank you for subscribing!
            </p>
          )}
        </div>

        {/* Links & Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200">
          <div className="flex gap-6 text-xs">
            <Link href="/privacy" className="hover:opacity-70 transition-opacity">
              PRIVACY POLICY
            </Link>
            <Link href="/terms" className="hover:opacity-70 transition-opacity">
              TERMS OF SERVICE
            </Link>
          </div>

          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="text-center mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} ATLAS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
