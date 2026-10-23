import Link from "next/link";
import CartLink from "@/components/CartLink";
import { categories } from "@/lib/products";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white">
      <div className="mx-auto flex max-w-6xl items-center gap-4 p-3">
        <Link href="/" className="text-2xl font-bold">
          Shop<span className="text-amber-400">Kart</span>
        </Link>
        <input
          type="text"
          placeholder="Search products"
          className="flex-1 rounded bg-white px-3 py-2 text-black"
        />
        <Link href="/products" className="hover:underline">
          Products
        </Link>
        <CartLink />
      </div>
      <nav className="bg-slate-800 text-sm">
        <div className="mx-auto flex max-w-6xl gap-5 px-3 py-2">
          <Link href="/products" className="font-semibold hover:underline">
            All
          </Link>
          {categories.map((c) => (
            <Link key={c.name} href="/products" className="hover:underline">
              {c.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}