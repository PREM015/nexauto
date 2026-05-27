import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Shield, Target, Globe, Award } from "lucide-react";
import TiltCard from "./TiltCard";
import TextScramble from "./TextScramble";
import ParallaxSection from "./ParallaxSection";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const pillars = [
  {
    icon: Shield,
    label: "Safety First",
    desc: "ISO 26262 ASIL-D certified embedded safety architectures for every deployment.",
  },
  {
    icon: Target,
    label: "Precision Engineering",
    desc: "Sub-millisecond latency in real-time automotive control systems and sensor fusion pipelines.",
  },
  {
    icon: Globe,
    label: "Global Ecosystem",
    desc: "Partnering with OEMs, Tier-1 suppliers, and startups across 8 countries worldwide.",
  },
  {
    icon: Award,
    label: "Industry Pioneer",
    desc: "15+ patents in SDV middleware, over-the-air updates, and zonal E/E architecture.",
  },
];

export default function About() {
  const ref1 = useReveal();
  const ref2 = useReveal();
  const ref3 = useReveal();

  return (
    <section
      id="about"
      className="relative py-20 sm:py-32 overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, var(--cyan), transparent)",
        }}
      />

      {/* Large decorative text */}
      <ParallaxSection speed={0.5} className="absolute -right-32 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden xl:block">
        <TextScramble
          text="NEXAUTO"
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "200px",
            color: "rgba(0,229,255,0.03)",
            letterSpacing: "-0.02em",
          }}
        />
      </ParallaxSection>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div ref={ref1} className="reveal flex items-center gap-4 mb-10 sm:mb-16">
          <div className="w-12 h-px" style={{ background: "var(--cyan)" }} />
          <span
            className="text-xs tracking-[0.35em] uppercase"
            style={{
              color: "var(--cyan)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            01 / About
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Text */}
          <div ref={ref2} className="reveal">
            <h2
              style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "clamp(36px, 6vw, 80px)",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
                color: "var(--text-primary)",
              }}
            >
              REDEFINING
              <br />
              <span style={{ color: "var(--cyan)" }}>WHAT VEHICLES</span>
              <br />
              CAN THINK
            </h2>
            <p
              className="mt-6 sm:mt-8 text-sm sm:text-base leading-7 sm:leading-8"
              style={{ color: "var(--text-muted)", maxWidth: 480 }}
            >
              NexAuto was founded on a single conviction: that the automobile is
              becoming the most sophisticated computing platform humanity has
              ever put on wheels. We sit at the intersection of embedded systems
              engineering, AI-driven software stacks, and next-generation
              mobility infrastructure.
            </p>
            <p
              className="mt-4 sm:mt-5 text-sm sm:text-base leading-7 sm:leading-8"
              style={{ color: "var(--text-muted)", maxWidth: 480 }}
            >
              From AUTOSAR-compliant BSPs to full-stack SDV platforms, our teams
              architect the invisible intelligence that powers the vehicles of
              tomorrow — safer, smarter, and radically more connected.
            </p>

            {/* Timeline accent */}
            <div className="mt-8 sm:mt-12 flex flex-col gap-0">
              {[
                { year: "2018", event: "Founded in Bengaluru, India" },
                { year: "2020", event: "First SDV middleware platform deployed" },
                { year: "2022", event: "Global expansion — Detroit, Munich, Seoul" },
                { year: "2024", event: "AI-native vehicle OS — Project APEX launched" },
              ].map(({ year, event }, i) => (
                <div key={year} className="flex items-start gap-4 sm:gap-6 group">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-3 h-3 rounded-full border-2 mt-1 transition-colors duration-300 group-hover:bg-cyan-400"
                      style={{
                        borderColor: "var(--cyan)",
                        background: i === 3 ? "var(--cyan)" : "transparent",
                      }}
                    />
                    {i < 3 && (
                      <div
                        className="w-px flex-1 my-1"
                        style={{ height: 28, background: "var(--border)" }}
                      />
                    )}
                  </div>
                  <div className="pb-4 sm:pb-6">
                    <span
                      className="text-xs font-medium tracking-widest"
                      style={{
                        color: "var(--cyan)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {year}
                    </span>
                    <p
                      className="mt-0.5 text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Pillars */}
          <div ref={ref3} className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full"
              >
                <TiltCard
                  className="service-card p-5 sm:p-6 h-full"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
                  }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-4"
                    style={{
                      background: "var(--cyan-dim)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <Icon size={18} style={{ color: "var(--cyan)" }} />
                  </div>
                  <h3
                    className="font-semibold text-sm tracking-widest uppercase mb-2"
                    style={{
                      color: "var(--text-primary)",
                      fontFamily: "'Rajdhani', sans-serif",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {label}
                  </h3>
                  <p
                    className="text-sm leading-6"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {desc}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, var(--cyan), transparent)",
        }}
      />
    </section>
  );
}
