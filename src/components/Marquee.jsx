import React from "react";

export default function Marquee() {
  const techs = [
    "AUTOSAR Adaptive", "RTOS", "C-V2X", "Sensor Fusion", "OTA Updates",
    "Digital Twin", "ISO 26262", "TensorRT", "Edge AI", "Zonal ECU"
  ];

  return (
    <div className="relative py-12 overflow-hidden border-y border-opacity-20" style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}>
      <div className="absolute inset-0 pointer-events-none z-10" style={{
        background: "linear-gradient(90deg, var(--bg-secondary) 0%, transparent 15%, transparent 85%, var(--bg-secondary) 100%)"
      }} />
      
      <div className="flex whitespace-nowrap animate-marquee-scroll hover:[animation-play-state:paused]">
        {[...techs, ...techs, ...techs].map((tech, i) => (
          <div key={i} className="flex items-center gap-6 mx-8">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--text-muted)", fontFamily: "'Rajdhani', sans-serif" }}>
              {tech}
            </span>
            <div className="w-2 h-2 rounded-full" style={{ background: "var(--cyan-dim)", border: "1px solid var(--cyan)" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
