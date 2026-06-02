import { useState } from "react";
import type { Product } from "@/lib/products";

interface Props {
  product: Product;
  onView: (p: Product) => void;
}

export function ProductCard({ product, onView }: Props) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-border shadow-card-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-elegant">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-sky">
        {!imgFailed ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImgFailed(true)}
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-90">
            {product.emoji}
          </div>
        )}
        <div className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy">
          {product.category}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-bold text-navy mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">{product.short}</p>
        <div className="flex items-center justify-between gap-3">
          <span className="font-bold text-royal">{product.price}</span>
          <button
            onClick={() => onView(product)}
            className="rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white hover:bg-royal transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
