import { Link } from "@tanstack/react-router";
import { ShoppingBag, MessageCircle, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-farm.jpg";
import { WHATSAPP } from "@/lib/products";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Irrigated farm field with solar panels in Zimbabwe"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center text-white pt-24 pb-16">
        <div
          className="inline-block rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs sm:text-sm font-medium mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          🌍 Proudly Zimbabwean · Based in Bulawayo
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Smart Irrigation &{" "}
          <span className="text-gradient-sky bg-gradient-to-r from-sky to-white bg-clip-text text-transparent">
            Solar Solutions
          </span>{" "}
          for the Modern African Farmer
        </h1>

        <p
          className="mt-6 text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Powering farms across Zimbabwe with reliable water systems and solar energy.
        </p>

        <div
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 rounded-full bg-sky px-7 py-3.5 text-base font-bold text-white shadow-glow hover:bg-royal transition-all hover:scale-105"
          >
            <ShoppingBag className="h-5 w-5" />
            Shop Our Products
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-base font-bold text-white hover:bg-whatsapp-dark transition-all hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" fill="currentColor" />
            Chat on WhatsApp
          </a>
        </div>

        <div className="mt-16 flex justify-center animate-float">
          <ChevronDown className="h-8 w-8 text-white/60" />
        </div>
      </div>
    </section>
  );
}
