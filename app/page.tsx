import Link from "next/link";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="mx-auto max-w-6xl p-4">
        {/* Banner */}
        <section className="rounded bg-slate-800 p-10 text-white">
          <h1 className="text-4xl font-bold">Big Savings Sale</h1>
          <p className="mt-2 text-lg text-slate-200">Up to 50% off on top products</p>
          <Link
            href="/products"
            className="mt-5 inline-block rounded bg-amber-400 px-6 py-3 font-semibold text-black hover:bg-amber-500"
          >
            Shop Now
          </Link>
        </section>

        {/* Categories */}
        <section className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.name}
              href="/products"
              className="rounded bg-white p-5 text-center shadow-sm hover:shadow-md"
            >
              <div className="text-5xl">{c.emoji}</div>
              <p className="mt-2 font-semibold">{c.name}</p>
            </Link>
          ))}
        </section>

        {/* Featured products */}
        <section className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link href="/products" className="text-blue-700 hover:underline">
              See all products
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}