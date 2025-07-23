// src/components/AnimatedChar.tsx
"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface AnimatedCharProps {
  char: string;
  offset: number;
  rotation: number;
  scrollRange: number;
  springConfig: { damping: number; stiffness: number };
  onHover: (isHovered: boolean) => void;
}

export function AnimatedChar({
  char,
  offset,
  rotation,
  scrollRange,
  springConfig,
  onHover,
}: AnimatedCharProps) {
  const { scrollY } = useScroll();

  // These are all **top-level hooks** now, inside this component
  const rawY = useTransform(scrollY, [0, scrollRange], [0, offset], { clamp: true });
  const rawRotate = useTransform(scrollY, [0, scrollRange], [0, rotation], { clamp: true });
  const y = useSpring(rawY, springConfig);
  const rotate = useSpring(rawRotate, springConfig);

  const displayChar = char === " " ? "\u00A0" : char;

  return (
    <motion.span
      style={{ y, rotate }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="inline-block px-4 -mx-2 text-2xl sm:text-6xl md:text-6xl lg:text-[9rem] font-extrabold text-gray-900 dark:text-gray-100"
    >
      {displayChar}
    </motion.span>
  );
}
