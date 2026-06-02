import { MapPin } from "lucide-react";

const POINTS = ["Harare CBD", "Chinhoyi CBD", "Karoi CBD"];

export function Delivery() {
  return (
    <section id="delivery" className="py-20 sm:py-28 bg-gradient-navy text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-sky/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <div className="inline-block rounded-full bg-sky/20 px-4 py-1.5 text-xs font-semibold text-sky mb-4">
            COLLECT NEAR YOU
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Convenient Collection Points</h2>
          <p className="mt-4 text-lg text-white/75">
            Order online and collect from the point nearest to you.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {POINTS.map((p, i) => (
            <div
              key={p}
              className="reveal rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky text-white shadow-glow">
                <MapPin className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">{p}</h3>
              <p className="mt-2 text-sm text-white/60">Pickup available during business hours</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
