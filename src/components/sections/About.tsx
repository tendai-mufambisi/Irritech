import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 500, suffix: "+", label: "Farms Served" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 3, suffix: "", label: "Delivery Points" },
  { value: 100, suffix: "%", label: "Zimbabwe-Based" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const dur = 1600;
            const tick = (t: number) => {
              const p = Math.min((t - start) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.floor(eased * value));
              if (p < 1) requestAnimationFrame(tick);
              else setN(value);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-extrabold text-gradient-sky">
      {n}
      {suffix}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="inline-block rounded-full bg-sky/10 px-4 py-1.5 text-xs font-semibold text-royal mb-4">
              ABOUT US
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
              End-to-end solutions that keep your farm productive{" "}
              <span className="text-gradient-sky">year-round</span>.
            </h2>
            <p className="mt-5 text-lg text-foreground/75 leading-relaxed">
              IrriTech & Solar Systems is a Bulawayo-based company specializing in complete
              irrigation solutions and solar energy systems for commercial and small-scale farmers
              across Zimbabwe. From borehole drilling to full solar installations, we deliver
              end-to-end solutions that keep your farm productive year-round.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 reveal">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-card border border-border p-6 shadow-card-soft hover:shadow-elegant transition-shadow text-center"
              >
                <Counter value={s.value} suffix={s.suffix} />
                <div className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
