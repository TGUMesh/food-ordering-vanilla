import React from "react";
import { motion } from "framer-motion";
import { Leaf, Flame } from "lucide-react";

const ICON_MAP = { leaf: Leaf, flame: Flame };

const PARALLAX_PX = 24;

/**
 * Parallax layer: offset follows mouse. Parent passes offset computed from mouse * depth.
 * Higher depth = moves more (smaller ingredients = faster).
 */
const FloatingElement = ({
  icon = "leaf",
  offset = { x: 0, y: 0 },
  style = {},
  className = "",
  size = 28,
}) => {
  const Icon = ICON_MAP[icon] || Leaf;
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{
        ...style,
        width: size,
        height: size,
        transform: `translate(${offset.x * PARALLAX_PX}px, ${offset.y * PARALLAX_PX}px)`,
      }}
      data-floating-element
    >
      <Icon className="w-full h-full text-primary/80" strokeWidth={1.5} />
    </motion.div>
  );
};

export default FloatingElement;
