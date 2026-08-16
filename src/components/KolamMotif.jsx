import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * KolamMotif — a line-art nod to pulli kolam (dot-grid threshold drawings
 * from Tamil Nadu): dots, connected by a single continuous looping line.
 * Renders as a divider between sections and self-draws into view.
 */
export default function KolamMotif({ flip = false, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const dots = [];
  const cols = 9;
  const spacing = 60;
  for (let i = 0; i < cols; i++) {
    dots.push(i * spacing + 30);
  }

  const pathD = `M 30 30
    C 90 -10, 150 70, 210 30
    S 330 -10, 390 30
    S 510 70, 570 30
    M 30 30 C 60 90, -10 90, 30 30
    M 570 30 C 610 90, 540 90, 570 30`;

  return (
    <div ref={ref} className={`kolam-motif ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 600 90"
        width="100%"
        height="60"
        style={{ transform: flip ? "scaleY(-1)" : "none", display: "block" }}
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          d={pathD}
          fill="none"
          stroke="var(--line)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        {dots.map((cx, i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={30}
            r={i % 4 === 0 ? 3 : 2}
            fill={i % 4 === 0 ? "var(--kolam-dot)" : "var(--accent)"}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 0.85, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
          />
        ))}
      </svg>
    </div>
  );
}
