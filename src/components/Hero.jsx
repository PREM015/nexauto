import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import ParticleField from "./ParticleField";
import TextScramble from "./TextScramble";
import MagneticButton from "./MagneticButton";function RotatingRing({ size, duration, delay = 0, reverse = false }) {
  return (
    <div
      className="absolute rounded-full border"
      style={{
        width: size,
        height: size,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        borderColor: "rgba(0,229,255,0.12)",
        animation: `${reverse ? "counter-rotate" : "rotate-slow"} ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <div
        className="absolute top-0 left-1/2 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ background: "var(--cyan)", boxShadow: "0 0 10px var(--cyan)" }}
      />
    </div>
  );
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 15,
      });
    };
    const el = heroRef.current;
    el?.addEventListener("mousemove", handleMouse);
    return () => el?.removeEventListener("mousemove", handleMouse);
  }, []);

  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background effects */}
      <ParticleField />

      {/* Radial gradient center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,229,255,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Animated rings — desktop only */}
      <div
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 hidden lg:block"
        style={{ width: 600, height: 600 }}
      >
        <RotatingRing size={600} duration={30} />
        <RotatingRing size={460} duration={22} reverse delay={-5} />
        <RotatingRing size={320} duration={16} delay={-8} />
        <RotatingRing size={180} duration={10} reverse delay={-2} />
        {/* Center orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full animate-pulse-glow"
          style={{
            background: "radial-gradient(circle, rgba(0,229,255,0.4), rgba(0,229,255,0.05))",
            boxShadow: "0 0 60px rgba(0,229,255,0.3)",
          }}
        />
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <div
          style={{
            width: "100%",
            height: "2px",
            background: "var(--cyan)",
            animation: "scanline 4s linear infinite",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8 px-4 py-2 border"
            style={{
              borderColor: "var(--border)",
              background: "rgba(0,229,255,0.05)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "var(--cyan)" }}
            />
            <span
              className="text-[10px] sm:text-xs font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase"
              style={{
                color: "var(--cyan)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Software Defined Vehicles · Est. 2024
            </span>
          </motion.div>

          {/* Big Title */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Bebas Neue', cursive",
                lineHeight: 0.9,
                letterSpacing: "0.02em",
              }}
              className="text-[clamp(56px,11vw,150px)]"
            >
              <span className="gradient-text animate-flicker">DRIVE</span>
              <br />
              <span style={{ color: "var(--text-primary)" }}>THE</span>
              <br />
              <span style={{ color: "var(--cyan)" }} className="glow-text">
                FUTURE
              </span>
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-base sm:text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
            style={{
              color: "var(--text-muted)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
            }}
          >
            <TextScramble
              text="Engineering the next generation of intelligent vehicles — where embedded silicon meets autonomous intelligence, and mobility transcends imagination."
              className="block"
            />
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 items-stretch sm:items-center"
          >
            <MagneticButton
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group btn-glow flex items-center justify-center gap-3 px-6 sm:px-8 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{
                background: "var(--cyan)",
                color: "#000",
                fontFamily: "'Rajdhani', sans-serif",
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
                letterSpacing: "0.12em",
                border: "none",
                cursor: "pointer",
              }}
            >
              Explore Technology
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </MagneticButton>
            <MagneticButton
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 sm:px-8 py-4 font-semibold text-sm tracking-widest uppercase border transition-all duration-300"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-primary)",
                fontFamily: "'Rajdhani', sans-serif",
                letterSpacing: "0.12em",
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
                background: "transparent",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "var(--cyan)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--border)")
              }
            >
              Our Vision
            </MagneticButton>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-8 sm:pt-12 border-t"
            style={{ borderColor: "var(--border)" }}
          >
            {[
              { value: "200+", label: "Engineers" },
              { value: "40+", label: "SDV Projects" },
              { value: "15+", label: "Patents Filed" },
              { value: "8", label: "Countries" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div
                  className="text-2xl sm:text-3xl"
                  style={{
                    color: "var(--cyan)",
                    fontFamily: "'Bebas Neue', cursive",
                    letterSpacing: "0.05em",
                  }}
                >
                  {value}
                </div>
                <div
                  className="text-[10px] sm:text-xs tracking-widest uppercase mt-1"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "'Rajdhani', sans-serif",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        style={{ color: "var(--text-muted)", background: "none", border: "none", cursor: "pointer" }}
      >
        <span
          className="text-[10px] sm:text-xs tracking-widest uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Scroll
        </span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
}
