import { motion } from "framer-motion";
import { Zap, ArrowUp } from "lucide-react";

const footerLinks = {
  "Solutions": ["SDV Platform", "Automotive SW", "Embedded Systems", "AI & Autonomy", "EV Ecosystem"],
  "Company": ["About Us", "Careers", "Press Kit", "Blog", "Partners"],
  "Resources": ["Documentation", "API Reference", "Case Studies", "Whitepapers", "Community"],
};

const GithubIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Top gradient divider */}
      <div className="section-divider" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative">
                <Zap size={22} className="text-cyan-400 animate-pulse-glow" />
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
            <p
              className="text-sm leading-7 mb-8 max-w-sm"
              style={{ color: "var(--text-muted)" }}
            >
              Engineering the next generation of software-defined vehicles.
              Where embedded silicon meets autonomous intelligence.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: GithubIcon, label: "GitHub" },
                { icon: LinkedinIcon, label: "LinkedIn" },
                { icon: XIcon, label: "X" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--cyan)";
                    e.currentTarget.style.color = "var(--cyan)";
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(0,229,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-xs tracking-[0.2em] uppercase mb-6 font-semibold"
                style={{
                  color: "var(--cyan)",
                  fontFamily: "'Rajdhani', sans-serif",
                }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-300 hover:translate-x-1 inline-block"
                      style={{ color: "var(--text-muted)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--text-primary)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-muted)")
                      }
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-xs tracking-widest"
            style={{
              color: "var(--text-muted)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            © 2024 NEXAUTO. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-6">
            <span
              className="text-xs tracking-widest shimmer-text"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              BUILT FOR THE FUTURE
            </span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-muted)",
                background: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--cyan)";
                e.currentTarget.style.color = "var(--cyan)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-muted)";
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Giant watermark text */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none"
        style={{ height: "140px" }}
      >
        <div
          className="text-center whitespace-nowrap"
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(100px, 15vw, 200px)",
            lineHeight: 1,
            color: "var(--text-primary)",
            opacity: 0.02,
            letterSpacing: "0.1em",
          }}
        >
          NEXAUTO · NEXAUTO · NEXAUTO
        </div>
      </div>
    </footer>
  );
}
