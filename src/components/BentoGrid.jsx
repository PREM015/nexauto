import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

export default function BentoGrid() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
        {/* Large Feature 1 */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="md:col-span-2 md:row-span-2">
          <SpotlightCard className="h-full rounded-2xl border p-8 flex flex-col justify-end bg-[var(--bg-card)] border-[var(--border)]">
            <div className="w-16 h-16 rounded-full mb-6 border flex items-center justify-center border-cyan-400 bg-cyan-400/10 text-cyan-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 className="text-3xl font-display text-white mb-2" style={{ fontFamily: "'Bebas Neue', cursive" }}>Next-Gen Telematics</h3>
            <p className="text-gray-400 max-w-md">Real-time data streaming from millions of edge devices, parsed and analyzed with sub-second latency.</p>
          </SpotlightCard>
        </motion.div>

        {/* Small Feature 1 */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <SpotlightCard className="h-full rounded-2xl border p-6 flex flex-col justify-between bg-[var(--bg-card)] border-[var(--border)]">
            <div className="text-5xl font-display text-cyan-400" style={{ fontFamily: "'Bebas Neue', cursive" }}>99.99%</div>
            <div>
              <h4 className="text-lg text-white font-heading font-semibold" style={{ fontFamily: "'Rajdhani', sans-serif" }}>OTA Reliability</h4>
              <p className="text-xs text-gray-500 mt-1">Failsafe delta updates.</p>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Small Feature 2 */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <SpotlightCard className="h-full rounded-2xl border p-6 flex flex-col justify-between bg-[var(--bg-card)] border-[var(--border)]">
            <div className="w-12 h-12 rounded-full border border-amber-400 bg-amber-400/10 text-amber-400 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <h4 className="text-lg text-white font-heading font-semibold" style={{ fontFamily: "'Rajdhani', sans-serif" }}>ASIL-D Certified</h4>
              <p className="text-xs text-gray-500 mt-1">Maximum automotive safety.</p>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Medium Feature */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="md:col-span-3">
          <SpotlightCard className="h-full rounded-2xl border p-8 flex flex-col md:flex-row items-center justify-between bg-[var(--bg-card)] border-[var(--border)]">
            <div className="mb-6 md:mb-0">
              <h3 className="text-3xl font-display text-white mb-2" style={{ fontFamily: "'Bebas Neue', cursive" }}>AI Vision Pipeline</h3>
              <p className="text-gray-400 max-w-md">End-to-end perception stacks optimized for low-power SoCs. From camera to bounding box in 15ms.</p>
            </div>
            <div className="relative w-full md:w-1/2 h-32 rounded-lg overflow-hidden border border-gray-800 bg-black/50">
               {/* Decorative scanner line */}
               <motion.div 
                 className="absolute inset-y-0 w-1 bg-cyan-400 shadow-[0_0_20px_#00E5FF]" 
                 animate={{ left: ["0%", "100%", "0%"] }} 
                 transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
               />
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
