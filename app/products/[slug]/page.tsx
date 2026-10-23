import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import AddToCartButton from "@/components/AddToCartButton";
import { products } from "@/lib/products";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="mx-auto max-w-6xl p-4">
        <Link href="/products" className="text-blue-700 hover:underline">
          ← Back to products
        </Link>

        <div className="mt-4 grid gap-8 rounded bg-white p-6 md:grid-cols-2">
          <div className="flex h-80 items-center justify-center rounded bg-slate-100 text-9xl">
            {product.emoji}
          </div>

          <div>
            <p className="text-sm text-slate-500">{product.category}</p>
            <h1 className="mt-1 text-3xl font-bold">{product.title}</h1>
            <p className="mt-2 text-amber-600">⭐ {product.rating}</p>

            <p className="mt-4">
              <span className="text-sm text-green-700">{discount}% off</span>
            </p>
            <p>
              <span className="text-4xl font-bold">
                ₹{product.price.toLocaleString("en-IN")}
              </span>{" "}
              <span className="text-slate-500 line-through">
                M.R.P. ₹{product.mrp.toLocaleString("en-IN")}
              </span>
            </p>

            <div className="mt-6 flex gap-3">
              <AddToCartButton
                product={product}
                className="rounded bg-amber-400 px-6 py-3 font-semibold hover:bg-amber-500"
              />
              <AddToCartButton
                product={product}
                buyNow
                className="rounded bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}