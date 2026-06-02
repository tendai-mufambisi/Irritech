import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/products";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-elegant transition-transform hover:scale-110 animate-pulse-ring"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" />
    </a>
  );
}
