import { Navigation } from "lucide-react";

export function FindUs() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 reveal">
          <div className="inline-block rounded-full bg-sky/10 px-4 py-1.5 text-xs font-semibold text-royal mb-4">
            LOCATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy">
            Find Us in Bulawayo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Visit our Bulawayo showroom or order online for delivery to your nearest collection point.
          </p>
        </div>

        <div className="reveal overflow-hidden rounded-3xl shadow-elegant border border-border">
          <iframe
            title="IrriTech location — Bulawayo CBD"
            src="https://www.google.com/maps?q=Bulawayo+CBD,+Zimbabwe&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>

        <div className="mt-8 text-center reveal">
          <a
            href="https://maps.google.com/?q=Bulawayo+CBD,+Zimbabwe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-base font-bold text-white hover:bg-royal hover:scale-105 transition-all shadow-card-soft"
          >
            <Navigation className="h-5 w-5" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
