import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, ArrowRight } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Programs" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  const navBg = scrolled || !isHome
    ? "bg-background/95 backdrop-blur-md border-b shadow-sm"
    : "bg-transparent border-b border-transparent";

  const textColor = scrolled || !isHome ? "text-foreground" : "text-primary-foreground";
  const mutedText = scrolled || !isHome ? "text-muted-foreground" : "text-primary-foreground/70";
  const activeText = scrolled || !isHome ? "text-primary" : "text-secondary";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container flex items-center justify-between h-18 md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <Heart className="w-7 h-7 text-secondary fill-secondary transition-transform group-hover:scale-110 group-active:scale-95" />
          <span className={`font-display text-xl font-bold tracking-tight transition-colors ${textColor}`}>
            Asha Foundation
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                location.pathname === l.to ? activeText : mutedText
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/get-involved"
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all active:scale-[0.97]"
          >
            Donate Now <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg transition-colors active:scale-95 ${textColor}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t animate-fade-in">
          <div className="container py-6 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`py-3 px-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === l.to ? "text-primary bg-primary/5" : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/get-involved"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground shadow-sm"
            >
              Donate Now <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
