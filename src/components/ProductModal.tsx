import { useEffect } from "react";
import { X, MapPin, MessageCircle } from "lucide-react";
import { type Product, orderLink } from "@/lib/products";
import { useNavigate } from "@tanstack/react-router";

interface Props {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) return null;

  const goToDelivery = () => {
    onClose();
    if (window.location.pathname === "/") {
      document.getElementById("delivery")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate({ to: "/", hash: "delivery" });
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/80 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-card shadow-elegant animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy hover:bg-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="aspect-[16/9] bg-gradient-sky flex items-center justify-center text-[8rem]">
          {product.emoji}
        </div>

        <div className="p-6 sm:p-8 space-y-5">
          <div>
            <div className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-navy mb-2">
              {product.category}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">{product.name}</h2>
            <p className="mt-2 text-2xl font-bold text-royal">{product.price}</p>
          </div>

          <p className="text-foreground/80 leading-relaxed">{product.description}</p>

          <div>
            <h3 className="font-semibold text-navy mb-2">Specifications</h3>
            <ul className="space-y-1.5">
              {product.specs.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-navy mb-2">Available Variants</h3>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-navy"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={orderLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-bold text-white hover:bg-whatsapp-dark transition-colors shadow-card-soft"
            >
              <MessageCircle className="h-4 w-4" fill="currentColor" />
              Order on WhatsApp
            </a>
            <button
              onClick={goToDelivery}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy px-6 py-3 text-sm font-bold text-navy hover:bg-navy hover:text-white transition-colors"
            >
              <MapPin className="h-4 w-4" />
              View Delivery Points
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
