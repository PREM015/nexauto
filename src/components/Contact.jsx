import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import MagneticButton from "./MagneticButton";

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

function InputField({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  multiline,
}) {
  const base = {
    background: "transparent",
    borderBottom: "1px solid var(--border)",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    color: "var(--text-primary)",
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    width: "100%",
    padding: "12px 0",
    fontSize: 15,
    transition: "border-color 0.3s",
    resize: "none",
  };
  return (
    <div className="group">
      <label
        className="text-xs tracking-widest uppercase block mb-2"
        style={{
          color: "var(--text-muted)",
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          rows={4}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={base}
          onFocus={(e) => (e.target.style.borderBottomColor = "var(--cyan)")}
          onBlur={(e) => (e.target.style.borderBottomColor = "var(--border)")}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={base}
          onFocus={(e) => (e.target.style.borderBottomColor = "var(--cyan)")}
          onBlur={(e) => (e.target.style.borderBottomColor = "var(--border)")}
        />
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-30" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,229,255,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 pb-16 sm:pb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px" style={{ background: "var(--cyan)" }} />
          <span
            className="text-xs tracking-[0.35em] uppercase"
            style={{
              color: "var(--cyan)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            04 / Contact
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Info */}
          <div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "clamp(34px, 5.5vw, 72px)",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
                color: "var(--text-primary)",
              }}
            >
              LET'S BUILD
              <br />
              <span style={{ color: "var(--cyan)" }}>TOMORROW'S</span>
              <br />
              MOBILITY
            </h2>
            <p
              className="mt-6 sm:mt-8 text-sm sm:text-base leading-7 sm:leading-8 max-w-md"
              style={{ color: "var(--text-muted)" }}
            >
              Whether you're an OEM, Tier-1 supplier, startup, or engineering
              talent — we want to hear from you. The future of mobility is a
              team sport.
            </p>

            <div className="mt-8 sm:mt-12 flex flex-col gap-4 sm:gap-5">
              {[
                { icon: Mail, value: "hello@nexauto.io" },
                { icon: Phone, value: "+91 80 4567 8900" },
                {
                  icon: MapPin,
                  value: "Bengaluru · Detroit · Munich · Seoul",
                },
              ].map(({ icon: Icon, value }) => (
                <div key={value} className="flex items-center gap-4">
                  <div
                    className="w-9 h-9 flex items-center justify-center border flex-shrink-0"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--cyan-dim)",
                    }}
                  >
                    <Icon size={15} style={{ color: "var(--cyan)" }} />
                  </div>
                  <span
                    className="text-sm"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-12 flex gap-3 sm:gap-4">
              {[
                { icon: GithubIcon, label: "GitHub" },
                { icon: LinkedinIcon, label: "LinkedIn" },
                { icon: XIcon, label: "X" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center border transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:text-cyan-400"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text-muted)",
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div
            className="relative p-5 sm:p-8 border"
            style={{
              borderColor: "var(--border)",
              background: "var(--bg-card)",
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{
                background:
                  "linear-gradient(90deg, var(--cyan), transparent)",
              }}
            />

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-64 text-center"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full mb-6 animate-pulse-glow"
                  style={{
                    background: "var(--cyan-dim)",
                    border: "2px solid var(--cyan)",
                  }}
                >
                  <Send size={24} style={{ color: "var(--cyan)" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', cursive",
                    fontSize: 28,
                    color: "var(--text-primary)",
                    letterSpacing: "0.08em",
                  }}
                >
                  MESSAGE SENT
                </h3>
                <p
                  className="mt-3 text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  We'll be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-6 sm:gap-8">
                <h3
                  style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    letterSpacing: "0.06em",
                  }}
                >
                  START A CONVERSATION
                </h3>
                <InputField
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                />
                <InputField
                  label="Email Address"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                />
                <InputField
                  label="Company / Organization"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Acme Motors"
                />
                <InputField
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  multiline
                />
                <MagneticButton
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex items-center justify-center gap-3 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
                  style={{
                    background: "var(--cyan)",
                    color: "#000",
                    fontFamily: "'Rajdhani', sans-serif",
                    letterSpacing: "0.12em",
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
                    border: "none",
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message <Send size={14} />
                    </>
                  )}
                </MagneticButton>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span
                style={{
                  fontFamily: "'Bebas Neue', cursive",
                  fontSize: 22,
                  letterSpacing: "0.15em",
                  color: "var(--text-primary)",
                }}
              >
                NEX<span style={{ color: "var(--cyan)" }}>AUTO</span>
              </span>
              <span
                className="text-xs"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                © 2024 NexAuto Technologies Pvt. Ltd.
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              {["Privacy Policy", "Terms", "Careers", "Blog"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs tracking-widest uppercase transition-colors duration-200 hover:text-cyan-400"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "'Rajdhani', sans-serif",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
