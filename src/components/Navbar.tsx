import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";

const LINKS = [
  { label: "Home", to: "/", hash: undefined },
  { label: "About", to: "/", hash: "about" },
  { label: "Services", to: "/", hash: "services" },
  { label: "Shop", to: "/shop", hash: undefined },
  { label: "Team", to: "/", hash: "team" },
  { label: "Contact", to: "/", hash: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const scrollToProfile = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-card-soft" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-sky text-white font-bold shadow-glow group-hover:scale-105 transition-transform">
            IT
          </div>
          <div className="leading-tight">
            <div className="text-sm sm:text-base font-bold text-navy">IrriTech</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground -mt-0.5">& Solar Systems</div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                hash={l.hash}
                className="text-sm font-medium text-navy hover:text-sky transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/"
            hash="profile"
            onClick={scrollToProfile}
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-4 py-2 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
          >
            <Download className="h-4 w-4" />
            Company Profile
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-navy"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <ul className="flex flex-col px-4 py-3">
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  hash={l.hash}
                  className="block py-3 text-base font-medium text-navy hover:text-sky"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/"
                hash="profile"
                onClick={scrollToProfile}
                className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-4 py-2 text-sm font-semibold text-navy"
              >
                <Download className="h-4 w-4" />
                Company Profile
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
