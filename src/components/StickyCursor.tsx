import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface StickyCursorProps {
  isHovered: boolean;
}

export function StickyCursor({ isHovered }: StickyCursorProps) {
  const cursorSize = isHovered ? 300 : 30; // Size of the cursor in pixels

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothOptions = {
    damping: 30,
    stiffness: 300,
    mass: 1.5,
  };
  const smoothMouse = {
    x: useSpring(mouseX, smoothOptions),
    y: useSpring(mouseY, smoothOptions),
  };

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed rounded-full bg-fuchsia-400 z-10 pointer-events-none mix-blend-difference sticky-cursor"
      style={{
        width: cursorSize,
        height: cursorSize,
        left: smoothMouse.x,
        top: smoothMouse.y,
        translateX: '-50%',
        translateY: '-50%',
        transition: 'width 0.3s ease-out, height 0.3s ease-out',
      }}
    />
  );
}
