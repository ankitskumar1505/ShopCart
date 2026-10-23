import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className="rounded border border-slate-200 bg-white p-4">
      <Link href={`/products/${product.slug}`}>
        <div className="flex h-36 items-center justify-center rounded bg-slate-100 text-6xl">
          {product.emoji}
        </div>
        <h3 className="mt-3 line-clamp-2 font-medium hover:text-blue-700">{product.title}</h3>
      </Link>
      <p className="text-sm text-amber-600">⭐ {product.rating}</p>
      <p className="mt-1">
        <span className="text-xl font-bold">₹{product.price.toLocaleString("en-IN")}</span>{" "}
        <span className="text-sm text-slate-500 line-through">
          ₹{product.mrp.toLocaleString("en-IN")}
        </span>{" "}
        <span className="text-sm text-green-700">{discount}% off</span>
      </p>
      <AddToCartButton
        product={product}
        className="mt-3 w-full rounded bg-amber-400 py-2 font-medium hover:bg-amber-500"
      />
    </div>
  );
}