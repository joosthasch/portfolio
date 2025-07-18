import React, { useState } from "react";
import { Montserrat } from "next/font/google";
import { Navbar } from "./Navbar";
import { StickyCursor } from "./StickyCursor";
import { AnimatedChar } from "./AnimatedChar";

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
    <section className={`h-screen overflow-hidden bg-white dark:bg-black ${montserrat.className}`}>
      {/* Navbar and Cursor */}
      <Navbar />
      <StickyCursor isHovered={isHovered} />

      <div className="sticky top-0 h-screen">
        <div className="container mx-auto flex flex-col items-start space-y-4 pt-24">
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
    </section>
  );
}

