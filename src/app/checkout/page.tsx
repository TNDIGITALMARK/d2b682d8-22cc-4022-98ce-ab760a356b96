'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useCart } from '@/lib/cart';
import { Minus, Plus, Trash2 } from 'lucide-react';

export default function CheckoutPage() {
  const { items, total, itemCount, removeItem, updateQuantity } = useCart();
  const [email, setEmail] = useState('');
  const [processing, setProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const shippingCost = total >= 50 ? 0 : 8;
  const finalTotal = total + shippingCost;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      setOrderPlaced(true);
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 pb-20 flex items-center justify-center">
          <div className="text-center max-w-md px-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✓</span>
            </div>
            <h1 className="text-3xl font-bold uppercase mb-4">Order Confirmed!</h1>
            <p className="text-base text-gray-600 mb-8">
              Thank you for your order. We&apos;ll send a confirmation email to {email} shortly.
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-black text-white text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-gray-900 transition-colors"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 pb-20 flex items-center justify-center">
          <div className="text-center max-w-md px-6">
            <h1 className="text-3xl font-bold uppercase mb-4">Your Cart is Empty</h1>
            <p className="text-base text-gray-600 mb-8">
              Add some premium organic cotton basics to get started.
            </p>
            <Link
              href="/shop"
              className="inline-block px-8 py-3 bg-black text-white text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-gray-900 transition-colors"
            >
              SHOP NOW
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-12 text-center">
            Checkout
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Cart Items */}
            <div>
              <h2 className="text-lg font-semibold uppercase tracking-wide mb-6">
                Your Items ({itemCount})
              </h2>

              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.size}-${item.color.name}`}
                    className="flex gap-4 bg-white p-4 rounded border border-gray-200"
                  >
                    <div className="relative w-24 h-24 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-sm font-medium mb-1">{item.product.name}</h3>
                      <p className="text-xs text-gray-600 mb-2">
                        {item.color.name} · Size {item.size}
                      </p>
                      <p className="text-base font-bold">${item.product.price}</p>

                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center gap-2 border border-gray-300 rounded">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.color.name,
                                item.quantity - 1
                              )
                            }
                            className="p-1 hover:bg-gray-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-sm font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.color.name,
                                item.quantity + 1
                              )
                            }
                            className="p-1 hover:bg-gray-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() =>
                            removeItem(item.product.id, item.size, item.color.name)
                          }
                          className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Checkout Form */}
            <div className="lg:sticky lg:top-24 self-start">
              <div className="bg-white p-8 rounded border border-gray-200">
                <h2 className="text-lg font-semibold uppercase tracking-wide mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span className="font-medium">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="font-medium">
                      {shippingCost === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `$${shippingCost.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {total < 50 && shippingCost > 0 && (
                    <p className="text-xs text-gray-600">
                      Add ${(50 - total).toFixed(2)} more for free shipping!
                    </p>
                  )}
                </div>

                <div className="flex justify-between text-lg font-bold mb-8">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>

                <form onSubmit={handleCheckout} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={processing}
                    className="w-full py-3 bg-black text-white text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {processing ? 'PROCESSING...' : 'PLACE ORDER'}
                  </button>

                  <p className="text-xs text-center text-gray-500">
                    This is a demo checkout. No actual payment will be processed.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
