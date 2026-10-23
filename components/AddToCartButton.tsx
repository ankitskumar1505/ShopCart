"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/components/CartProvider";
import type { Product } from "@/lib/products";

export default function AddToCartButton({
  product,
  buyNow = false,
  className = "",
}: {
  product: Product;
  buyNow?: boolean;
  className?: string;
}) {
  const { addToCart } = useCart();
  const router = useRouter();

  function handleClick() {
    addToCart(product);
    if (buyNow) router.push("/cart");
  }

  return (
    <button className={className} onClick={handleClick}>
      {buyNow ? "Buy Now" : "Add to Cart"}
    </button>
  );
}