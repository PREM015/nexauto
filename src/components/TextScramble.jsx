import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const chars = "!<>-_\\\\/[]{}—=+*^?#________";

export default function TextScramble({ text, className = "", style = {}, speed = 30 }) {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const queue = Array.from(text).map((char) => ({
      from: chars[Math.floor(Math.random() * chars.length)],
      to: char,
      start: Math.floor(Math.random() * 40),
      end: Math.floor(Math.random() * 40) + Math.floor(Math.random() * 40),
      char: char,
    }));

    let timeout;
    let isCancelled = false;

    const update = () => {
      if (isCancelled) return;
      let output = "";
      let complete = 0;

      for (let i = 0, n = queue.length; i < n; i++) {
        let { from, to, start, end, char } = queue[i];

        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            queue[i].char = char;
          }
          output += char;
        } else {
          output += from;
        }
      }

      setDisplayText(output);

      if (complete === queue.length) {
        // done
      } else {
        frame++;
        timeout = setTimeout(update, speed);
      }
    };

    update();
    return () => {
      isCancelled = true;
      clearTimeout(timeout);
    };
  }, [isInView, text, speed]);

  return (
    <motion.div ref={ref} className={className} style={style}>
      {isInView ? displayText : <span className="opacity-0">{text}</span>}
    </motion.div>
  );
}
