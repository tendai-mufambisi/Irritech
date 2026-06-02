const TEAM = [
  { name: "Tinashe Moyo", role: "Managing Director", initials: "TM" },
  { name: "Rutendo Dube", role: "Solar & Electrical Engineer", initials: "RD" },
  { name: "Farai Ncube", role: "Irrigation Systems Specialist", initials: "FN" },
];

export function Team() {
  return (
    <section id="team" className="py-20 sm:py-28 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="inline-block rounded-full bg-sky/10 px-4 py-1.5 text-xs font-semibold text-royal mb-4">
            OUR PEOPLE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy">Meet Our Team</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM.map((m, i) => (
            <div
              key={m.name}
              className="reveal group rounded-3xl bg-card border border-border p-8 text-center shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-sky text-white text-3xl font-bold shadow-glow group-hover:scale-110 transition-transform">
                {m.initials}
              </div>
              <h3 className="text-xl font-bold text-navy">{m.name}</h3>
              <p className="mt-1 text-sm font-medium text-royal">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
