import Header from "@/components/Header";
import CartView from "@/components/CartView";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="mx-auto max-w-6xl p-4">
        <h1 className="mb-4 text-3xl font-bold">Shopping Cart</h1>
        <CartView />
      </main>
    </div>
  );
}