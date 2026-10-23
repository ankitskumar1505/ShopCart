"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function CartView() {
  const { items, total, count, changeQuantity, removeFromCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="rounded bg-white p-10 text-center">
        <div className="text-6xl">🛒</div>
        <h2 className="mt-3 text-2xl font-bold">Your cart is empty</h2>
        <Link
          href="/products"
          className="mt-5 inline-block rounded bg-amber-400 px-6 py-3 font-semibold hover:bg-amber-500"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="space-y-3 md:col-span-2">
        {items.map(({ product, quantity }) => (
          <div key={product.slug} className="flex gap-4 rounded bg-white p-4">
            <div className="flex h-24 w-24 items-center justify-center rounded bg-slate-100 text-5xl">
              {product.emoji}
            </div>

            <div className="flex-1">
              <Link
                href={`/products/${product.slug}`}
                className="font-medium hover:text-blue-700"
              >
                {product.title}
              </Link>
              <p className="text-lg font-bold">
                ₹{product.price.toLocaleString("en-IN")}
              </p>

              <div className="mt-2 flex items-center gap-3">
                <button
                  onClick={() => changeQuantity(product.slug, -1)}
                  className="h-8 w-8 rounded border border-slate-300 hover:bg-slate-100"
                >
                  −
                </button>
                <span className="w-6 text-center">{quantity}</span>
                <button
                  onClick={() => changeQuantity(product.slug, 1)}
                  className="h-8 w-8 rounded border border-slate-300 hover:bg-slate-100"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(product.slug)}
                  className="ml-4 text-sm text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>

            <p className="font-bold">
              ₹{(product.price * quantity).toLocaleString("en-IN")}
            </p>
          </div>
        ))}
      </div>

      <div className="h-fit rounded bg-white p-6">
        <h2 className="text-xl font-bold">Order Summary</h2>
        <p className="mt-3 flex justify-between">
          <span>Items ({count})</span>
          <span>₹{total.toLocaleString("en-IN")}</span>
        </p>
        <p className="mt-1 flex justify-between">
          <span>Delivery</span>
          <span className="text-green-700">FREE</span>
        </p>
        <hr className="my-3" />
        <p className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>₹{total.toLocaleString("en-IN")}</span>
        </p>
        <button className="mt-5 w-full rounded bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}