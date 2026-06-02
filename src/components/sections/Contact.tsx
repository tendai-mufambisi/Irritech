import { Phone, Mail, MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/products";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-navy text-white relative overflow-hidden">
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-sky/15 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block rounded-full bg-sky/20 px-4 py-1.5 text-xs font-semibold text-sky mb-4 reveal">
          GET IN TOUCH
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold reveal">Let's grow together.</h2>
        <p className="mt-4 text-lg text-white/75 reveal">
          Reach out — we typically respond within minutes on WhatsApp.
        </p>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal mt-10 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-base font-bold text-white hover:bg-whatsapp-dark hover:scale-105 transition-all shadow-glow"
        >
          <MessageCircle className="h-5 w-5" fill="currentColor" />
          Chat With Us on WhatsApp
        </a>

        <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto reveal">
          <a
            href="tel:+263776611049"
            className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky">
              <Phone className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-xs text-white/60">Call us</div>
              <div className="font-semibold">+263 77 661 1049</div>
            </div>
          </a>
          <a
            href="mailto:info@irritech.co.zw"
            className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky">
              <Mail className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-xs text-white/60">Email us</div>
              <div className="font-semibold">info@irritech.co.zw</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
