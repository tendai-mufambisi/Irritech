import { useState } from "react";
import { FileText, CheckCircle2 } from "lucide-react";

export function CompanyProfile() {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const [progress, setProgress] = useState(0);

  const start = () => {
    if (state !== "idle") return;
    setState("loading");
    setProgress(0);
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 14 + 4;
        if (next >= 100) {
          clearInterval(id);
          setTimeout(() => setState("done"), 300);
          return 100;
        }
        return next;
      });
    }, 180);
  };

  const reset = () => {
    setState("idle");
    setProgress(0);
  };

  return (
    <section id="profile" className="relative bg-gradient-navy text-white overflow-hidden">
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-sky/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-royal/40 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold reveal">
          Want to know everything we offer?
        </h2>
        <p className="mt-3 text-lg sm:text-xl text-white/80 reveal">
          Download our full company profile.
        </p>

        <div className="mt-10 max-w-xl mx-auto reveal">
          {state === "idle" && (
            <button
              onClick={start}
              className="group inline-flex items-center gap-3 rounded-full bg-sky px-8 py-4 text-base font-bold text-white shadow-glow hover:bg-white hover:text-navy transition-all hover:scale-105"
            >
              <FileText className="h-5 w-5" />
              📄 Download Company Profile
            </button>
          )}

          {state === "loading" && (
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 animate-fade-in">
              <p className="text-sm text-white/90 mb-3">Preparing your download...</p>
              <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full bg-gradient-to-r from-sky to-white transition-[width] duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-2 text-right text-sm font-semibold text-sky">{Math.floor(progress)}%</p>
            </div>
          )}

          {state === "done" && (
            <div className="rounded-2xl bg-whatsapp/15 border border-whatsapp/40 p-6 animate-scale-in">
              <div className="flex items-center justify-center gap-3 text-white">
                <CheckCircle2 className="h-7 w-7 text-whatsapp" />
                <p className="text-lg font-semibold">Your download is ready!</p>
              </div>
              <button
                onClick={reset}
                className="mt-4 text-sm text-sky underline hover:text-white"
              >
                Download again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
