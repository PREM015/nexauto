import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code2, Layers, Brain, Zap, Network } from "lucide-react";

const services = [
  {
    id: "sdv",
    icon: Layers,
    number: "01",
    title: "Software Defined Vehicles",
    short: "SDV Platform Engineering",
    color: "#00E5FF",
    desc: "Complete SDV platform stacks from E/E architecture design to zonal computing, AUTOSAR Adaptive, and service-oriented vehicle communication. We build the OS that makes your vehicle programmable.",
    tags: ["AUTOSAR Adaptive", "SOME/IP", "DDS", "OTA Updates", "Zonal ECU"],
    metric: { value: "40+", label: "SDV Programs" },
  },
  {
    id: "auto-sw",
    icon: Code2,
    number: "02",
    title: "Automotive Software",
    short: "Full-Stack Automotive SW",
    color: "#FFB300",
    desc: "End-to-end automotive software development: HMI frameworks, instrument clusters, ADAS stacks, and infotainment platforms. Compliant with ASPICE, ISO 26262, and Automotive SPICE.",
    tags: ["ASPICE", "ISO 26262", "HMI", "ADAS Stack", "V2X"],
    metric: { value: "500K+", label: "Lines Shipped" },
  },
  {
    id: "embedded",
    icon: Cpu,
    number: "03",
    title: "Embedded Systems",
    short: "Low-Level Systems Eng.",
    color: "#7C4DFF",
    desc: "Real-time embedded engineering at the silicon edge — custom BSPs, RTOS porting, hardware abstraction layers, and bare-metal firmware for safety-critical automotive controllers.",
    tags: ["RTOS", "BSP Dev", "CAN/LIN/Ethernet", "ARM Cortex", "FPGA"],
    metric: { value: "<1ms", label: "Latency Target" },
  },
  {
    id: "ai",
    icon: Brain,
    number: "04",
    title: "AI & Autonomy",
    short: "Automotive AI Systems",
    color: "#00E5FF",
    desc: "Sensor fusion, neural perception pipelines, and on-device inference optimization for autonomous systems. Our AI runs at the edge — deterministic, safe, and deployable under ISO/PAS 21448 SOTIF.",
    tags: ["Sensor Fusion", "TensorRT", "SLAM", "SOTIF", "Edge AI"],
    metric: { value: "99.97%", label: "Detection Acc." },
  },
  {
    id: "ev",
    icon: Zap,
    number: "05",
    title: "EV Ecosystem",
    short: "Electric Vehicle Tech",
    color: "#00E676",
    desc: "BMS software, thermal management algorithms, charging protocols (CCS, CHAdeMO, OCPP 2.0), and EV powertrain control units. Accelerating the electric transition end-to-end.",
    tags: ["BMS", "OCPP 2.0", "V2G", "CCS/CHAdeMO", "Thermal Mgmt"],
    metric: { value: "3x", label: "Charge Efficiency" },
  },
  {
    id: "smart-mob",
    icon: Network,
    number: "06",
    title: "Smart Mobility",
    short: "Connected Vehicle Platforms",
    color: "#FF6D00",
    desc: "V2X communication, fleet intelligence platforms, cloud-native vehicle APIs, and smart infrastructure integration. Building the data backbone of tomorrow's mobility ecosystem.",
    tags: ["V2X", "C-V2X", "Fleet Mgmt", "Digital Twin", "MQTT"],
    metric: { value: "1M+", label: "Vehicles Connected" },
  },
];

export default function Services() {
  const [active, setActive] = useState("sdv");
  const activeService = services.find((s) => s.id === active);

  return (
    <section
      id="services"
      className="relative py-20 sm:py-32 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,229,255,0.04) 0%, transparent 70%)",
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
            02 / Services
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-10 sm:mb-12">
          <h2
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "clamp(34px, 5.5vw, 72px)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              color: "var(--text-primary)",
            }}
          >
            OUR FOCUS
            <br />
            <span style={{ color: "var(--cyan)" }}>AREAS</span>
          </h2>
          <p
            className="lg:ml-auto lg:max-w-md text-sm sm:text-base leading-7 self-end"
            style={{ color: "var(--text-muted)" }}
          >
            Six integrated competencies that span the full automotive software
            value chain — from silicon to cloud.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr,1.6fr] gap-6 sm:gap-8">
          {/* Service List */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
            {services.map((svc) => {
              const Icon = svc.icon;
              const isActive = active === svc.id;
              return (
                <button
                  key={svc.id}
                  onClick={() => setActive(svc.id)}
                  className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4 text-left transition-all duration-300 border"
                  style={{
                    borderColor: isActive ? svc.color : "var(--border)",
                    background: isActive ? `${svc.color}10` : "var(--bg-card)",
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
                    cursor: "pointer",
                  }}
                >
                  <span
                    className="text-xs font-medium"
                    style={{
                      color: isActive ? svc.color : "var(--text-muted)",
                      fontFamily: "'JetBrains Mono', monospace",
                      minWidth: 24,
                    }}
                  >
                    {svc.number}
                  </span>
                  <Icon
                    size={16}
                    style={{
                      color: isActive ? svc.color : "var(--text-muted)",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className="font-semibold text-xs sm:text-sm tracking-wide"
                    style={{
                      color: isActive
                        ? "var(--text-primary)"
                        : "var(--text-muted)",
                      fontFamily: "'Rajdhani', sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {svc.short}
                  </span>
                  {isActive && (
                    <div
                      className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: svc.color }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 sm:p-8 border"
              style={{
                borderColor: activeService.color + "30",
                background: "var(--bg-card)",
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{
                  background: `linear-gradient(90deg, ${activeService.color}, transparent)`,
                }}
              />

              <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6 sm:mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    {(() => {
                      const Icon = activeService.icon;
                      return (
                        <Icon
                          size={22}
                          style={{ color: activeService.color }}
                        />
                      );
                    })()}
                    <span
                      className="text-xs tracking-widest uppercase"
                      style={{
                        color: activeService.color,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {activeService.number}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', cursive",
                      fontSize: "clamp(24px, 3vw, 44px)",
                      letterSpacing: "0.05em",
                      color: "var(--text-primary)",
                      lineHeight: 1,
                    }}
                  >
                    {activeService.title}
                  </h3>
                </div>
                <div className="text-left sm:text-right flex-shrink-0">
                  <div
                    className="text-2xl sm:text-3xl"
                    style={{
                      fontFamily: "'Bebas Neue', cursive",
                      color: activeService.color,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {activeService.metric.value}
                  </div>
                  <div
                    className="text-xs tracking-widest uppercase"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "'Rajdhani', sans-serif",
                    }}
                  >
                    {activeService.metric.label}
                  </div>
                </div>
              </div>

              <p
                className="text-sm sm:text-base leading-7 sm:leading-8 mb-6 sm:mb-8"
                style={{ color: "var(--text-muted)" }}
              >
                {activeService.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {activeService.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] sm:text-xs tracking-widest uppercase border"
                    style={{
                      color: activeService.color,
                      borderColor: activeService.color + "40",
                      background: activeService.color + "08",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Decorative corner */}
              <div
                className="absolute bottom-6 right-6 sm:right-8 opacity-[0.06] pointer-events-none"
                style={{
                  fontFamily: "'Bebas Neue', cursive",
                  fontSize: "clamp(60px, 8vw, 80px)",
                  color: activeService.color,
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {activeService.number}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
