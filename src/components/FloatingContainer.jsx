import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";
import FloatingElement from "./FloatingElement";

const FLOAT_DURATION = 5;
const BOWL_SIZE = 280;

const INGREDIENTS = [
  { icon: "leaf", depth: 2, top: "12%", left: "18%", size: 22 },
  { icon: "leaf", depth: 1.5, top: "22%", right: "20%", left: "auto", size: 18 },
  { icon: "flame", depth: 2.2, bottom: "25%", left: "12%", top: "auto", size: 20 },
  { icon: "leaf", depth: 1.8, bottom: "18%", right: "15%", top: "auto", size: 16 },
  { icon: "flame", depth: 1.4, top: "55%", left: "20%", size: 18 },
  { icon: "leaf", depth: 2, top: "68%", right: "18%", size: 20 },
];

/**
 * Two motion layers:
 * Layer 1 (Idle): Main bowl floats y: [-10, 10, -10], 4–6s.
 * Layer 2 (Parallax): Ingredients track mouse; depth varies (smaller = faster).
 */
const FloatingContainer = () => {
  const containerRef = useRef(null);
  const mouse = useMousePosition(containerRef);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-lg lg:max-w-xl aspect-square flex items-center justify-center"
    >
      {/* Layer 1: Main bowl — gentle idle float */}
      <motion.div
        className="absolute rounded-full shadow-2xl z-10"
        style={{
          width: BOWL_SIZE,
          height: BOWL_SIZE,
          background:
            "linear-gradient(135deg, #2d2a26 0%, #1f1d1a 40%, #252220 100%)",
          boxShadow:
            "inset -8px -8px 24px rgba(0,0,0,0.4), inset 8px 8px 24px rgba(255,255,255,0.03), 0 25px 50px -12px rgba(0,0,0,0.5)",
        }}
        animate={{ y: [-10, 10, -10] }}
        transition={{
          duration: FLOAT_DURATION,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Subtle gradient overlay to look like a bowl rim */}
      <motion.div
        className="absolute rounded-full border-2 border-white/10 z-10"
        style={{
          width: BOWL_SIZE,
          height: BOWL_SIZE,
        }}
        animate={{ y: [-10, 10, -10] }}
        transition={{
          duration: FLOAT_DURATION,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Layer 2: Scattered ingredients — mouse parallax (depth = speed) */}
      {INGREDIENTS.map((ing, i) => (
        <FloatingElement
          key={i}
          icon={ing.icon}
          offset={{
            x: mouse.x * ing.depth,
            y: mouse.y * ing.depth,
          }}
          size={ing.size}
          style={{
            top: ing.top,
            bottom: ing.bottom,
            left: ing.left,
            right: ing.right,
            zIndex: 5 + i,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingContainer;
