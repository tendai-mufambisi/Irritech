import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { PRODUCTS, type Product } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";

export function ShopPreview() {
  const [active, setActive] = useState<Product | null>(null);
  const featured = PRODUCTS.slice(0, 6);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="inline-block rounded-full bg-sky/10 px-4 py-1.5 text-xs font-semibold text-royal mb-4">
            SHOP
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy">Our Products</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Browse what we sell — click any product to see full details and order directly via WhatsApp.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <div key={p.id} className="reveal">
              <ProductCard product={p} onView={setActive} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-base font-bold text-white shadow-card-soft hover:bg-royal hover:scale-105 transition-all"
          >
            Go To Shop
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </section>
  );
}
