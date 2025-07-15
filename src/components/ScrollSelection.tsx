// src/components/ScrollSection.tsx
"use client";

import { useMemo, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Montserrat } from "next/font/google";

import { Navbar } from "./Navbar";
import { StickyCursor } from "./StickyCursor";

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export function ScrollSection({
  maxOffset = 750,
  maxRotate = 30,
  scrollRange = 500,
}: {
  maxOffset?: number;
  maxRotate?: number;
  scrollRange?: number;
}) {
  // State to track hover over any letter
  const [isHovered, setIsHovered] = useState(false);

  // Read scroll position (driven by global Lenis in layout)
  const { scrollY } = useScroll();

  // Define separate lines of text
  const lines = useMemo(
    () => ["MEDIA &", "INTERACTION", "DESIGNER"],
    []
  );

  // Pre-generate random offsets & rotations for each character
  const offsets = useMemo(
    () =>
      lines.map(line =>
        Array.from(line).map(
          () => (Math.random() * 2 - 1) * maxOffset
        )
      ),
    [lines, maxOffset]
  );
  const rotations = useMemo(
    () =>
      lines.map(line =>
        Array.from(line).map(
          () => (Math.random() * 2 - 1) * maxRotate
        )
      ),
    [lines, maxRotate]
  );

  // Spring config for smooth easing
  const springConfig = { damping: 30, stiffness: 150 };

  return (
    <section className={`h-[120vh] bg-white dark:bg-black ${montserrat.className}`}>  
      {/* Navbar and Cursor */}
      <Navbar />
      <StickyCursor isHovered={isHovered} />
      {/* Sticky container with left-aligned content and padding */}  
      {/* Sticky container with left-aligned content and padding */}
      <div className="sticky top-0 h-screen">
        <div className="container mx-auto flex flex-col items-start space-y-4 pt-24">
          {lines.map((line, lineIdx) => (
            <div key={lineIdx}  className="flex">
              {Array.from(line).map((char, i) => {
                // Map scroll to raw motion values
                const rawY = useTransform(
                  scrollY,
                  [0, scrollRange],
                  [0, offsets[lineIdx][i]],
                  { clamp: true }
                );
                const rawRotate = useTransform(
                  scrollY,
                  [0, scrollRange],
                  [0, rotations[lineIdx][i]],
                  { clamp: true }
                );

                // Apply spring smoothing
                const y = useSpring(rawY, springConfig);
                const rotate = useSpring(rawRotate, springConfig);

                // Display non-breaking space for spaces
                const displayChar = char === " " ? "\u00A0" : char;

                return (
                  <motion.span
                    key={i}
                    style={{ y, rotate }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="
                    inline-block
                    px-4
                    -mx-2
                    text-[12rem] font-extrabold text-gray-900 dark:text-gray-100"
                  >
                    {displayChar}
                  </motion.span>
                );
              })}
            </div>
          ))}
        </div>
        {/* You can now use isHovered to trigger other UI changes */}
      </div>
    </section>
  );
}
