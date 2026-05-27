import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Services", "Technology", "Contact"];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="relative">
            <Zap size={22} className="text-cyan-400 animate-pulse-glow" />
            <div className="absolute inset-0 blur-sm" style={{ color: "var(--cyan)" }}>
              <Zap size={22} />
            </div>
          </div>
          <span
            className="text-2xl tracking-widest"
            style={{
              color: "var(--text-primary)",
              fontFamily: "'Bebas Neue', cursive",
              letterSpacing: "0.15em",
            }}
          >
            NEX<span style={{ color: "var(--cyan)" }}>AUTO</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="relative text-sm font-medium tracking-widest uppercase group"
              style={{
                color: "var(--text-muted)",
                fontFamily: "'Rajdhani', sans-serif",
                letterSpacing: "0.12em",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {link}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ background: "var(--cyan)" }}
              />
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border transition-all duration-300 hover:scale-110"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)", background: "none", cursor: "pointer" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <MagneticButton
            onClick={() => scrollTo("Contact")}
            className="hidden md:block px-5 py-2 text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:scale-105"
            style={{
              background: "var(--cyan)",
              color: "#000",
              fontFamily: "'Rajdhani', sans-serif",
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
              border: "none",
              cursor: "pointer",
            }}
          >
            Connect
          </MagneticButton>
          <button
            className="md:hidden p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "var(--text-primary)", background: "none", border: "none", cursor: "pointer" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden nav-glass border-t overflow-hidden"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left text-lg font-semibold tracking-widest uppercase"
                  style={{
                    color: "var(--text-primary)",
                    fontFamily: "'Rajdhani', sans-serif",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "4px 0",
                  }}
                >
                  {link}
                </button>
              ))}
              <MagneticButton
                onClick={() => scrollTo("Contact")}
                className="px-5 py-3 text-sm font-semibold tracking-widest uppercase w-full mt-2"
                style={{
                  background: "var(--cyan)",
                  color: "#000",
                  fontFamily: "'Rajdhani', sans-serif",
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Connect
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
