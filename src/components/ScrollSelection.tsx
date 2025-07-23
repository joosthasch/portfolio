import React, { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";
import { Navbar } from "./Navbar";
import { StickyCursor } from "./StickyCursor";
import { AnimatedChar } from "./AnimatedChar";
import { ArrowDownRight } from "lucide-react";

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
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define separate lines of text
  const lines = React.useMemo(
    () => ["MEDIA &", "INTERACTION", "DESIGNER"],
    []
  );

  // Pre-generate random offsets & rotations for each character
  const offsets = React.useMemo(
    () =>
      lines.map((line) =>
        Array.from(line).map(() => (Math.random() * 2 - 1) * maxOffset)
      ),
    [lines, maxOffset]
  );
  const rotations = React.useMemo(
    () =>
      lines.map((line) =>
        Array.from(line).map(() => (Math.random() * 2 - 1) * maxRotate)
      ),
    [lines, maxRotate]
  );

  // Spring config for smooth easing
  const springConfig = { damping: 30, stiffness: 150 };

  return (
    <section
      className={`
        relative 
        h-screen pb-40 overflow-hidden 
        bg-white dark:bg-black 
        ${montserrat.className}
      `}
    >
      {/* Navbar and Cursor */}
      <Navbar />
      <StickyCursor isHovered={isHovered} />

      <div className="sticky top-0 h-screen">
        <div className="container mx-auto flex flex-col items-start pt-24">
          {lines.map((line, lineIdx) => (
            <div key={lineIdx} className="flex">
              {Array.from(line).map((char, i) => (
                <AnimatedChar
                  key={i}
                  char={char}
                  offset={offsets[lineIdx][i]}
                  rotation={rotations[lineIdx][i]}
                  scrollRange={scrollRange}
                  springConfig={springConfig}
                  onHover={setIsHovered}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 👉 Scroll indicator in the bottom-right */}
      {!scrolled && (
        <div className="absolute bottom-8 right-8 z-50 flex items-center space-x-2 transition-opacity duration-500">
          <span className="text-3xl tracking-wider">Scroll</span>
          <ArrowDownRight className="w-10 h-10" />
        </div>
      )}
    </section>
  );
}

