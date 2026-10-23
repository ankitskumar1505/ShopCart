"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "@/lib/products";

export type CartItem = { product: Product; quantity: number };

type CartContextType = {
  items: CartItem[];
  count: number;
  total: number;
  addToCart: (product: Product) => void;
  changeQuantity: (slug: string, change: number) => void;
  removeFromCart: (slug: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load the saved cart when the page opens
  useEffect(() => {
    try {
      const saved = localStorage.getItem("cart");
      if (saved) setItems(JSON.parse(saved));
    } catch {
      // ignore broken saved data
    }
    setLoaded(true);
  }, []);

  // Save the cart every time it changes
  useEffect(() => {
    if (loaded) localStorage.setItem("cart", JSON.stringify(items));
  }, [items, loaded]);

  function addToCart(product: Product) {
    setItems((prev) => {
      const found = prev.find((i) => i.product.slug === product.slug);
      if (found) {
        return prev.map((i) =>
          i.product.slug === product.slug ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }

  function changeQuantity(slug: string, change: number) {
    setItems((prev) =>
      prev
        .map((i) => (i.product.slug === slug ? { ...i, quantity: i.quantity + change } : i))
        .filter((i) => i.quantity > 0)
    );
  }

  function removeFromCart(slug: string) {
    setItems((prev) => prev.filter((i) => i.product.slug !== slug));
  }

  const count = items.reduce((sum, i) => sum + i.quantity, 0);
  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, count, total, addToCart, changeQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}