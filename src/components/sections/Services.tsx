import { Droplets, Sun, Drill, Container } from "lucide-react";

const SERVICES = [
  {
    icon: Droplets,
    title: "Irrigation System Design & Installation",
    desc: "Full design, supply and implementation of drip and sprinkler systems tailored to your crops and terrain.",
  },
  {
    icon: Sun,
    title: "Solar Panels & Inverter Installation",
    desc: "Beat power cuts and slash overhead costs with farm-grade solar systems built for the long haul.",
  },
  {
    icon: Drill,
    title: "Borehole Drilling & Water Sourcing",
    desc: "Professional drilling and pump installation — we find your water and get it flowing.",
  },
  {
    icon: Container,
    title: "Water Tank Supply & Tank Stands",
    desc: "Alfa tanks in every size, plus custom-built stands engineered for your site.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="inline-block rounded-full bg-sky/10 px-4 py-1.5 text-xs font-semibold text-royal mb-4">
            WHAT WE DO
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Four pillars. One promise: a productive farm.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="group relative reveal rounded-2xl bg-card border border-border p-6 shadow-card-soft hover:shadow-elegant hover:-translate-y-2 transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-sky text-white shadow-glow group-hover:scale-110 transition-transform">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2 leading-snug">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
