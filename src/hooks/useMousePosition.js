import { useState, useEffect } from "react";

/**
 * Returns mouse position relative to a container element.
 * @param {React.RefObject<HTMLElement>} containerRef - Ref of the container (e.g. FloatingContainer)
 * @returns {{ x: number, y: number }} Normalized -1 to 1 from center (0,0 = center of container)
 */
export function useMousePosition(containerRef) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = containerRef?.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const halfW = rect.width / 2;
      const halfH = rect.height / 2;
      const x = halfW ? (e.clientX - centerX) / halfW : 0;
      const y = halfH ? (e.clientY - centerY) / halfH : 0;
      setPosition({
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
      });
    };

    const handleLeave = () => setPosition({ x: 0, y: 0 });

    window.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [containerRef]);

  return position;
}
