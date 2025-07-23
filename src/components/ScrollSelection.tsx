import React, { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";
import { Navbar } from "./Navbar";
import { StickyCursor } from "./StickyCursor";
import { AnimatedChar } from "./AnimatedChar";
import { ArrowDownRight } from "lucide-react";
import Silk from '../../Reactbits/Silk/Silk';

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export function ScrollSection({
  maxOffset = 1000,
  maxRotate = 30,
  scrollRange = 700,
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
        h-[150vh] overflow-hidden
        bg-white dark:bg-black
        ${montserrat.className}
      `}
    >
      <div className="h-full w-full fixed">
        <Silk
          speed={3}
          scale={1}
          color="#43286B"
          noiseIntensity={1}
          rotation={0}
          className="sticky"
        />
      </div>
      {/* Navbar and Cursor */}
      <Navbar />
      <StickyCursor isHovered={isHovered} />

      {/* Sticky block anchors bottom-left while in viewport */}
      <div className="fixed bottom-0 w-full">
        
        <div className="container mx-auto flex flex-col justify-end pb-16 space-y-4 pl-6 lg:pl-0">
          {lines.map((line, lineIdx) => (
            <div key={lineIdx}>
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

      {/* 👉 Scroll indicator in the bottom-right (constrained) */}
      {!scrolled && (
        <div className="hidden sm:block fixed bottom-0 w-full pointer-events-none">
          <div className="container mx-auto flex justify-end items-end
           pb-16 pointer-events-auto">
              <span className="sm:text-2xl lg:text-4xl tracking-wider">Scroll</span>
              <ArrowDownRight className="sm:pt-2 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          </div>
        </div>
      )}
    </section>
  );
}
