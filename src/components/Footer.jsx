import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, ArrowUp, Mail, MapPin, Phone, ExternalLink } from "lucide-react";

const footerLinks = {
  Solutions: [
    { name: "SDV Platform", href: "#services" },
    { name: "Automotive SW", href: "#services" },
    { name: "Embedded Systems", href: "#services" },
    { name: "AI & Autonomy", href: "#services" },
    { name: "EV Ecosystem", href: "#services" },
  ],
  Company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Press Kit", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Partners", href: "#" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Whitepapers", href: "#" },
    { name: "Community", href: "#" },
  ],
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

const socials = [
  { icon: GithubIcon, label: "GitHub", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { icon: XIcon, label: "X", href: "#" },
];

const contactInfo = [
  { icon: Mail, text: "engineering@nexauto.io" },
  { icon: Phone, text: "+1 (555) 234-5678" },
  { icon: MapPin, text: "Munich · Detroit · Bangalore" },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <label
        className="text-xs tracking-[0.15em] uppercase block mb-3 font-semibold"
        style={{ color: "var(--cyan)", fontFamily: "'Rajdhani', sans-serif" }}
      >
        Stay in the loop
      </label>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 px-4 py-2.5 text-sm rounded-none border outline-none transition-all duration-300"
          style={{
            background: "transparent",
            borderColor: "var(--border)",
            color: "var(--text-primary)",
            fontFamily: "'DM Sans', sans-serif",
            clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
          }}
        />
        <button
          type="submit"
          className="px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:scale-105 btn-glow"
          style={{
            background: "var(--cyan)",
            color: "#000",
            fontFamily: "'Rajdhani', sans-serif",
            border: "none",
            cursor: "pointer",
            clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
          }}
        >
          {submitted ? "✓" : "Subscribe"}
        </button>
      </div>
      {submitted && (
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs mt-2"
          style={{ color: "var(--cyan)", fontFamily: "'JetBrains Mono', monospace" }}
        >
          Welcome aboard, engineer.
        </motion.p>
      )}
    </form>
  );
}

function FooterLink({ name, href }) {
  return (
    <li>
      <a
        href={href}
        className="group text-sm flex items-center gap-1.5 transition-all duration-300"
        style={{ color: "var(--text-muted)" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
      >
        <span
          className="w-0 group-hover:w-3 h-px transition-all duration-300"
          style={{ background: "var(--cyan)" }}
        />
        {name}
      </a>
    </li>
  );
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Top gradient divider */}
      <div className="section-divider" />

      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl border p-8 sm:p-12 mb-16 overflow-hidden"
          style={{
            borderColor: "var(--border)",
            background: "var(--bg-card)",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 20% 50%, rgba(0,229,255,0.06) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h3
                className="text-3xl sm:text-4xl mb-3"
                style={{
                  fontFamily: "'Bebas Neue', cursive",
                  color: "var(--text-primary)",
                  letterSpacing: "0.04em",
                }}
              >
                Ready to <span style={{ color: "var(--cyan)" }}>Build the Future</span>?
              </h3>
              <p
                className="text-sm sm:text-base max-w-lg leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                Join the next wave of automotive innovation. Let's engineer
                something extraordinary together.
              </p>
            </div>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-3 px-8 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 btn-glow flex-shrink-0"
              style={{
                background: "var(--cyan)",
                color: "#000",
                fontFamily: "'Rajdhani', sans-serif",
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
                border: "none",
                cursor: "pointer",
              }}
            >
              Start a Conversation
              <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Decorative corner accent */}
          <div
            className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
            style={{
              background: "linear-gradient(225deg, rgba(0,229,255,0.08) 0%, transparent 70%)",
            }}
          />
        </motion.div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <div className="relative">
                <Zap size={22} style={{ color: "var(--cyan)" }} className="animate-pulse-glow" />
                <div
                  className="absolute inset-0 blur-sm"
                  style={{ color: "var(--cyan)" }}
                >
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
            <p
              className="text-sm leading-7 mb-6 max-w-xs"
              style={{ color: "var(--text-muted)" }}
            >
              Engineering the next generation of software-defined vehicles.
              Where embedded silicon meets autonomous intelligence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={14} style={{ color: "var(--cyan)", flexShrink: 0 }} />
                  <span
                    className="text-xs tracking-wide"
                    style={{ color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300 hover:scale-110"
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
            <div key={category} className="lg:col-span-2">
              <h4
                className="text-xs tracking-[0.2em] uppercase mb-5 font-semibold flex items-center gap-2"
                style={{
                  color: "var(--cyan)",
                  fontFamily: "'Rajdhani', sans-serif",
                }}
              >
                <span className="w-3 h-px" style={{ background: "var(--cyan)" }} />
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <FooterLink key={link.name} {...link} />
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div className="lg:col-span-2 md:col-span-2 lg:col-start-11 lg:col-end-13">
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <p
              className="text-[10px] tracking-widest uppercase"
              style={{
                color: "var(--text-muted)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              © 2024 NEXAUTO
            </p>
            <span className="w-1 h-1 rounded-full" style={{ background: "var(--border)" }} />
            <a
              href="#"
              className="text-[10px] tracking-widest uppercase transition-colors duration-300"
              style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              Privacy
            </a>
            <span className="w-1 h-1 rounded-full" style={{ background: "var(--border)" }} />
            <a
              href="#"
              className="text-[10px] tracking-widest uppercase transition-colors duration-300"
              style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              Terms
            </a>
          </div>

          <div className="flex items-center gap-5">
            <span
              className="text-[10px] tracking-[0.25em] uppercase shimmer-text hidden sm:inline"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Built for the Future
            </span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-muted)",
                background: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--cyan)";
                e.currentTarget.style.color = "var(--cyan)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(0,229,255,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.boxShadow = "none";
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Giant watermark text */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none"
        style={{ height: "120px" }}
      >
        <div
          className="text-center whitespace-nowrap"
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(80px, 12vw, 180px)",
            lineHeight: 1,
            color: "var(--text-primary)",
            opacity: 0.05,
            letterSpacing: "0.15em",
          }}
        >
          NEXAUTO · DRIVE THE FUTURE · NEXAUTO
        </div>
      </div>
    </footer>
  );
}
