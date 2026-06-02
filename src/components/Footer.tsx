import { Link } from "@tanstack/react-router";
import { WHATSAPP } from "@/lib/products";

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-sky font-bold">IT</div>
              <div>
                <div className="font-bold">IrriTech & Solar Systems</div>
                <div className="text-xs text-white/60">Bulawayo, Zimbabwe</div>
              </div>
            </div>
            <p className="text-sm text-white/70 max-w-xs">
              Smart irrigation and solar solutions for the modern African farmer.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sky">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/" hash="about" className="hover:text-sky">About</Link></li>
              <li><Link to="/" hash="services" className="hover:text-sky">Services</Link></li>
              <li><Link to="/shop" className="hover:text-sky">Shop</Link></li>
              <li><Link to="/" hash="contact" className="hover:text-sky">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sky">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>📞 +263 77 661 1049</li>
              <li>✉️ info@irritech.co.zw</li>
              <li>📍 Bulawayo CBD, Zimbabwe</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/70 space-y-1">
          <p>© 2025 IrriTech & Solar Systems. All Rights Reserved.</p>
          <p>
            Designed by{" "}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky font-semibold hover:underline"
            >
              Digits Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
