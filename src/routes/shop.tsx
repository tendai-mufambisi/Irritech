import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { CATEGORIES, PRODUCTS, type Product } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — IrriTech & Solar Systems" },
      {
        name: "description",
        content:
          "Browse our full range of water tanks, rain pipes, driplines, solar panels and pipe fittings. Order directly via WhatsApp.",
      },
      { property: "og:title", content: "Shop — IrriTech & Solar Systems" },
      {
        property: "og:description",
        content: "Everything you need for smart irrigation and solar farming.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  useReveal();
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [active, setActive] = useState<Product | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <main className="pt-24 pb-20 min-h-screen">
      <section className="bg-gradient-navy text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Our Products</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Everything you need for smart irrigation and solar farming — click any product to view
            full details and order via WhatsApp.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((c) => {
            const isActive = c === filter;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-navy text-white shadow-card-soft scale-105"
                    : "bg-secondary text-navy hover:bg-sky/20"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div key={p.id} className="animate-fade-up">
              <ProductCard product={p} onView={setActive} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No products in this category.</p>
        )}
      </section>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </main>
  );
}
