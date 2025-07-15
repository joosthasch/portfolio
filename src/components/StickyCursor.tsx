import React, { use, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface StickyCursorProps {
  isHovered: boolean;
}

export function StickyCursor({ isHovered }: StickyCursorProps) {
    const cursorSize = isHovered ? 300 : 30; // Size of the cursor in pixels

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Update on real mousemove events
  const manageMouseMovement = (e: MouseEvent) => {
    mouseX.set(e.clientX); // Center the cursor
    mouseY.set(e.clientY); // Center the cursor
  };

  const smoothOptions = {
    damping: 30,
    stiffness: 300,
    mass: 1.5,
  };
  const smoothMouse = {
    x: useSpring(mouseX, smoothOptions),
    y: useSpring(mouseY, smoothOptions),
  }

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMovement);
    return () => {
      window.removeEventListener('mousemove', manageMouseMovement);
    };
  }, []); // ← empty deps so it only runs on mount/unmount

  return (
    <motion.div
      className="fixed rounded-full bg-fuchsia-400 z-10 pointer-events-none mix-blend-difference"
      style={{
        width:cursorSize,
        height:cursorSize,
        left: smoothMouse.x,
        top: smoothMouse.y,
        translateX: '-50%',
        translateY: '-50%',
        transition: 'height 0.3s ease-out, width 0.3s ease-out',}}
    />
  );
}
