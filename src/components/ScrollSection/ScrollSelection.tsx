import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import { StickyCursor } from "../StickyCursor";
import { AnimatedChar } from "./AnimatedChar";
import { ArrowDownRight } from "lucide-react";
import { ScrollVideoHero } from "../ScrollVideoHero";


export function ScrollSection({
  maxOffset = 1500,
  maxRotate = 30,
  scrollRange = 1200,
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
  () => [
    [
      { text: "Developer", color: "text-black", font: "font-montserrat"  }, 
      { text: " &", color: "text-black", font: "font-montserrat" }
    ],
    [
      { text: "Designer", color: "text-black", font: "font-arizonia"  },
      { text: " aus", color: "text-black", font: "font-montserrat"  }
    ],
    [
      { text: "Osnabrück", color: "text-black" , font: "font-montserrat" }
    ]
  ],
  []
);

  // Pre-generate random offsets & rotations for each character
  const offsets = React.useMemo(
  () =>
    lines.map((line) =>
      line.flatMap((wordObj) =>
        Array.from(wordObj.text).map(() => (Math.random() * 2 - 1) * maxOffset)
      )
    ),
  [lines, maxOffset]
);

const rotations = React.useMemo(
  () =>
    lines.map((line) =>
      line.flatMap((wordObj) =>
        Array.from(wordObj.text).map(() => (Math.random() * 2 - 1) * maxRotate)
      )
    ),
  [lines, maxRotate]
);


  // Spring config for smooth easing
  const springConfig = { damping: 30, stiffness: 150 };

  return (
    <section
      className={`
        relative
        h-[230vh] overflow-hidden
        bg-white
      `}
    >
      {/* Navbar and Cursor */}
      <Navbar />
      <ScrollVideoHero />
      <StickyCursor isHovered={isHovered} />

      {/* Sticky block anchors bottom-left while in viewport */}
      <div className="fixed bottom-0 w-full">
        
        <div className="container mx-auto flex flex-col justify-end pb-16 space-y-4 pl-6 lg:pl-0">
          {lines.map((line, lineIdx) => (
            <div key={lineIdx}>
              {line.flatMap((wordObj, wordIdx) =>
                Array.from(wordObj.text).map((char, i) => {
                  // globaler Zeichenindex
                  const charIdx = 
                    line.slice(0, wordIdx).reduce((acc, w) => acc + w.text.length, 0) + i;
                  return (
                    <AnimatedChar
                      key={charIdx}
                      char={char}
                      offset={offsets[lineIdx][charIdx]}
                      rotation={rotations[lineIdx][charIdx]}
                      scrollRange={scrollRange}
                      springConfig={springConfig}
                      onHover={setIsHovered}
                      className={`${wordObj.color} ${wordObj.font}`}
                    />
                  );
                })
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 👉 Scroll indicator in the bottom-right (constrained) */}
      {!scrolled && (
        <div className="hidden sm:block fixed bottom-0 w-full pointer-events-none">
          <div className="container mx-auto flex justify-end items-end
           pb-16 pointer-events-auto">
              <span className="sm:text-2xl lg:text-4xl tracking-wider text-black font-montserrat">Scroll</span>
              <ArrowDownRight className="sm:pt-2 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-black" />
          </div>
        </div>
      )}
    </section>
  );
}
