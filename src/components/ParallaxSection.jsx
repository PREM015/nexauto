import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxSection({ children, className = "", style = {}, speed = 0.5 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={style}>
      <motion.div style={{ y, width: "100%", height: "100%" }}>
        {children}
      </motion.div>
    </div>
  );
}
