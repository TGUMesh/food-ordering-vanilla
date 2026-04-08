import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";

const MAGNETIC_STRENGTH = 0.25;
const MAGNETIC_RADIUS = 120;

/**
 * CTA that moves slightly toward the cursor (magnetic effect).
 */
const MagneticButton = ({ children, className = "", ...props }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { type: "spring", stiffness: 300, damping: 20 };
  const xSpring = useSpring(x, spring);
  const ySpring = useSpring(y, spring);

  const mouse = useMousePosition(ref);

  React.useEffect(() => {
    if (!hovered) {
      x.set(0);
      y.set(0);
      return;
    }
    const dx = mouse.x * MAGNETIC_RADIUS * MAGNETIC_STRENGTH;
    const dy = mouse.y * MAGNETIC_RADIUS * MAGNETIC_STRENGTH;
    x.set(dx);
    y.set(dy);
  }, [hovered, mouse.x, mouse.y, x, y]);

  return (
    <motion.a
      ref={ref}
      href="#popular-dishes"
      className={`inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
      style={{ x: xSpring, y: ySpring }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}
    </motion.a>
  );
};

export default MagneticButton;
