import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  GitBranch,
  Wifi,
  Lock,
  RefreshCw,
  BarChart2,
  Layers,
} from "lucide-react";

function useCountUp(target, duration = 2000, trigger) {
  const [value, setValue] = useState(0);
  const numTarget = parseFloat(target.replace(/[^0-9.]/g, ""));
  const suffix = target.replace(/[0-9.]/g, "");

  useEffect(() => {
    if (!trigger) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(
        parseFloat((eased * numTarget).toFixed(suffix === "%" ? 1 : 0))
      );
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, numTarget, duration]);

  return `${value}${suffix}`;
}

function StatCard({ value, label, index }) {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);
  const displayValue = useCountUp(value, 2000 + index * 200, triggered);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTriggered(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-center p-4 sm:p-6 border"
      style={{
        borderColor: "var(--border)",
        background: "var(--bg-card)",
        clipPath:
          "polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)",
      }}
    >
      <div
        className="text-3xl sm:text-4xl md:text-5xl mb-2"
        style={{
          fontFamily: "'Bebas Neue', cursive",
          color: "var(--cyan)",
          letterSpacing: "0.05em",
        }}
      >
        {displayValue}
      </div>
      <div
        className="text-[10px] sm:text-xs tracking-widest uppercase"
        style={{
          color: "var(--text-muted)",
          fontFamily: "'Rajdhani', sans-serif",
        }}
      >
        {label}
      </div>
    </div>
  );
}

const techPillars = [
  {
    icon: GitBranch,
    title: "OTA Orchestration",
    desc: "Delta-based, signed firmware updates with rollback guarantees. Zero downtime vehicle software lifecycle management.",
  },
  {
    icon: Wifi,
    title: "V2X Mesh Network",
    desc: "C-V2X and DSRC dual-mode connectivity with sub-20ms latency for safety-critical vehicle-to-infrastructure messaging.",
  },
  {
    icon: Lock,
    title: "Cyber Security",
    desc: "UN R155 & ISO 21434 compliant security architecture, HSM integration, secure boot chains, and intrusion detection.",
  },
  {
    icon: RefreshCw,
    title: "Digital Twin Engine",
    desc: "Real-time 1:1 vehicle mirroring in the cloud. Predictive analytics, remote diagnostics, and simulation-driven development.",
  },
  {
    icon: BarChart2,
    title: "AI Inference Edge",
    desc: "Quantized model deployment on NPUs and GPUs embedded in automotive-grade SoCs with deterministic guarantees.",
  },
  {
    icon: Layers,
    title: "Adaptive AUTOSAR",
    desc: "Service-oriented middleware on POSIX-compliant adaptive ECUs. Our platform abstracts complexity, ships velocity.",
  },
];

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative py-20 sm:py-32 overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-40" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--cyan), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px" style={{ background: "var(--cyan)" }} />
          <span
            className="text-xs tracking-[0.35em] uppercase"
            style={{
              color: "var(--cyan)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            03 / Innovation
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
          <h2
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "clamp(34px, 5.5vw, 72px)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              color: "var(--text-primary)",
            }}
          >
            THE TECHNOLOGY
            <br />
            <span style={{ color: "var(--cyan)" }}>STACK</span>
          </h2>
          <p
            className="lg:max-w-sm text-sm sm:text-base leading-7"
            style={{ color: "var(--text-muted)" }}
          >
            Purpose-built automotive technology components that integrate
            seamlessly from the microcontroller to the cloud.
          </p>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {[
            { value: "99.9%", label: "System Uptime" },
            { value: "200+", label: "Engineers" },
            { value: "50ms", label: "OTA Deploy Speed" },
            { value: "40+", label: "Active Projects" },
          ].map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>

        {/* Tech Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {techPillars.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="service-card group p-5 sm:p-7 cursor-pointer"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%)",
              }}
            >
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border transition-all duration-300 group-hover:border-cyan-400"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--cyan-dim)",
                  }}
                >
                  <Icon size={18} style={{ color: "var(--cyan)" }} />
                </div>
                <div
                  className="text-4xl sm:text-5xl font-display opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    fontFamily: "'Bebas Neue', cursive",
                    color: "var(--cyan)",
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <h3
                className="font-semibold mb-3 tracking-wide"
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontSize: 17,
                  color: "var(--text-primary)",
                  letterSpacing: "0.06em",
                }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-6"
                style={{ color: "var(--text-muted)" }}
              >
                {desc}
              </p>

              {/* Bottom accent on hover */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "var(--cyan)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Architecture Diagram Visual */}
        <div
          className="mt-16 sm:mt-20 p-4 sm:p-8 border relative overflow-hidden"
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
              background: "linear-gradient(90deg, var(--cyan), transparent)",
            }}
          />
          <div className="text-center mb-6 sm:mb-8">
            <h3
              style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "clamp(22px, 3vw, 32px)",
                color: "var(--text-primary)",
                letterSpacing: "0.08em",
              }}
            >
              PLATFORM{" "}
              <span style={{ color: "var(--cyan)" }}>ARCHITECTURE</span>
            </h3>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px"
            style={{ background: "var(--border)" }}
          >
            {[
              {
                label: "Cloud Layer",
                items: [
                  "Digital Twin",
                  "OTA Manager",
                  "Fleet Analytics",
                  "API Gateway",
                ],
              },
              {
                label: "Connectivity",
                items: [
                  "V2X / C-V2X",
                  "5G Telematics",
                  "MQTT Broker",
                  "SecureOTA",
                ],
              },
              {
                label: "Vehicle OS",
                items: [
                  "Adaptive AUTOSAR",
                  "Service Mesh",
                  "Hypervisor",
                  "Security Mgr",
                ],
              },
              {
                label: "Hardware",
                items: [
                  "SoC / MPU",
                  "RTOS ECUs",
                  "Sensor Array",
                  "CAN/Eth Bus",
                ],
              },
            ].map(({ label, items }, col) => (
              <div
                key={label}
                className="flex-1"
                style={{ background: "var(--bg-card)" }}
              >
                <div
                  className="px-3 sm:px-4 py-2 sm:py-3 text-center border-b text-[10px] sm:text-xs tracking-widest uppercase font-medium"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--cyan)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {label}
                </div>
                {items.map((item, row) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: col * 0.1 + row * 0.05 }}
                    className="px-3 sm:px-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs border-b last:border-b-0"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text-muted)",
                      fontFamily: "'Rajdhani', sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--cyan), transparent)",
        }}
      />
    </section>
  );
}
