'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import { useCart } from '@/lib/cart';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [showSizeSelector, setShowSizeSelector] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({
      product,
      size: selectedSize,
      color: selectedColor,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      className="group bg-white rounded overflow-hidden transition-all duration-200 hover:shadow-lg"
      onMouseEnter={() => setShowSizeSelector(true)}
      onMouseLeave={() => setShowSizeSelector(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-200 group-hover:scale-102"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-sm font-medium mb-1">{product.name}</h3>
        <p className="text-base font-bold mb-3">${product.price}</p>

        {/* Color Options */}
        <div className="flex gap-2 mb-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color)}
              className={`w-6 h-6 rounded-full border-2 transition-all ${
                selectedColor.name === color.name
                  ? 'border-black scale-110'
                  : 'border-gray-300 hover:border-gray-500'
              }`}
              style={{ backgroundColor: color.hex }}
              aria-label={color.name}
              title={color.name}
            />
          ))}
        </div>

        {/* Size Selector (appears on hover) */}
        {showSizeSelector ? (
          <div className="mb-3">
            <div className="flex gap-2 mb-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 text-xs font-semibold border rounded transition-all ${
                    selectedSize === size
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-gray-300 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <button
              onClick={handleAddToCart}
              disabled={added}
              className={`w-full py-2 text-xs font-semibold tracking-widest uppercase rounded transition-all ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-black text-white hover:bg-gray-900'
              }`}
            >
              {added ? '✓ ADDED' : 'ADD TO CART'}
            </button>
          </div>
        ) : (
          <div className="h-[72px]" />
        )}
      </div>
    </div>
  );
}
