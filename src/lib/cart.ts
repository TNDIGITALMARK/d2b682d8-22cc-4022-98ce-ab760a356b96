'use client';

import { Cart, CartItem } from '@/types/product';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartStore extends Cart {
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      total: 0,
      itemCount: 0,

      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find(
            (i) =>
              i.product.id === item.product.id &&
              i.size === item.size &&
              i.color.name === item.color.name
          );

          let newItems: CartItem[];
          if (existingItem) {
            newItems = state.items.map((i) =>
              i.product.id === item.product.id &&
              i.size === item.size &&
              i.color.name === item.color.name
                ? { ...i, quantity: i.quantity + 1 }
                : i
            );
          } else {
            newItems = [...state.items, { ...item, quantity: 1 }];
          }

          const total = newItems.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
          const itemCount = newItems.reduce((sum, i) => sum + i.quantity, 0);

          return { items: newItems, total, itemCount };
        }),

      removeItem: (productId, size, color) =>
        set((state) => {
          const newItems = state.items.filter(
            (i) => !(i.product.id === productId && i.size === size && i.color.name === color)
          );
          const total = newItems.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
          const itemCount = newItems.reduce((sum, i) => sum + i.quantity, 0);

          return { items: newItems, total, itemCount };
        }),

      updateQuantity: (productId, size, color, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            const newItems = state.items.filter(
              (i) => !(i.product.id === productId && i.size === size && i.color.name === color)
            );
            const total = newItems.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
            const itemCount = newItems.reduce((sum, i) => sum + i.quantity, 0);
            return { items: newItems, total, itemCount };
          }

          const newItems = state.items.map((i) =>
            i.product.id === productId && i.size === size && i.color.name === color
              ? { ...i, quantity }
              : i
          );
          const total = newItems.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
          const itemCount = newItems.reduce((sum, i) => sum + i.quantity, 0);

          return { items: newItems, total, itemCount };
        }),

      clearCart: () => set({ items: [], total: 0, itemCount: 0 }),
    }),
    {
      name: 'atlas-cart',
    }
  )
);
