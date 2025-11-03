'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/cart';

export function Header() {
  const { itemCount } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-shadow">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-base font-bold tracking-[0.2em] uppercase">
            ATLAS
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-xs font-semibold tracking-widest uppercase hover:opacity-70 transition-opacity"
            >
              HOME
            </Link>
            <Link
              href="/shop"
              className="text-xs font-semibold tracking-widest uppercase hover:opacity-70 transition-opacity"
            >
              SHOP
            </Link>
            <Link
              href="/about"
              className="text-xs font-semibold tracking-widest uppercase hover:opacity-70 transition-opacity"
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="text-xs font-semibold tracking-widest uppercase hover:opacity-70 transition-opacity"
            >
              CONTACT
            </Link>
          </nav>

          {/* Cart Icon */}
          <Link
            href="/checkout"
            className="relative hover:opacity-70 transition-opacity"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
