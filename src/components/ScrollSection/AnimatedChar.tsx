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
  className?: string; // NEU
}


export function AnimatedChar({
  char,
  offset,
  rotation,
  scrollRange,
  springConfig,
  onHover,
  className = "",
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
      className={`inline-block px-4 -mx-2 text-2xl sm:text-4xl md:text-6xl lg:text-[6rem] xl:[8rem] font-fira font-bold italic ${className}`} // className kommt rein!
    >
      {displayChar}
    </motion.span>
  );
}
