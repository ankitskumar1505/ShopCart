"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function CartLink() {
  const { count } = useCart();

  return (
    <Link href="/cart" className="hover:underline">
      🛒 Cart ({count})
    </Link>
  );
}