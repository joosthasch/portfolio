import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import { StickyCursor } from "../StickyCursor";
import { AnimatedChar } from "./AnimatedChar";
import { ArrowDownRight } from "lucide-react";
import { ScrollVideoHero } from "../ScrollVideoHero";
import ProjectSection from "../../pages/ProjectSection";

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

  const lines = React.useMemo(
    () => [
      [{ text: "CREATING", color: "text-[#141414]" }],
      [{ text: "INTERACTIVE", color: "text-[#141414]" }],
      [{ text: "EXPERIENCES", color: "text-[#141414]" }],
    ],
    []
  );

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

  const springConfig = { damping: 30, stiffness: 150 };

  return (
    <section className="relative bg-white">
      <Navbar />
      <StickyCursor isHovered={isHovered} />

      {/* Video Hero mit Pinning */}
      <ScrollVideoHero/>

      {/* Text unten links (fixed während Video-Bereich) */}
      <div className="fixed bottom-0 w-full pointer-events-none z-10">
        <div className="container mx-auto flex flex-col justify-end pb-16 space-y-4 pl-6 lg:pl-0 pointer-events-auto">
          {lines.map((line, lineIdx) => (
            <div key={lineIdx}>
              {line.flatMap((wordObj, wordIdx) =>
                Array.from(wordObj.text).map((char, i) => {
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
                      className={`${wordObj.color}`}
                    />
                  );
                })
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      {!scrolled && (
        <div className="hidden sm:block fixed bottom-0 w-full pointer-events-none z-10">
          <div className="container mx-auto flex justify-end items-end pb-16 pointer-events-auto">
            <span className="sm:text-2xl lg:text-4xl tracking-wider text-[#141414] font-fira">
              Scroll
            </span>
            <ArrowDownRight className="sm:pt-2 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#141414]" />
          </div>
        </div>
      )}

      {/* 👉 ProjectSection: negativer Margin zieht sie nach oben, z-index bringt sie nach vorn */}
      <div className="relative -mt-[calc(100vh-40px)] z-50">
        {/* 
          -mt-[calc(100vh-5rem)]: zieht ProjectSection nach oben
          → 100vh minus 5rem (80px) = Video endet ca. bei 80px über dem "normalen" Ende
          → 20px Abstand kannst du mit calc(100vh-20px) oder andere Werte anpassen
          
          z-50: bringt ProjectSection über Video/Text
        */}
        <ProjectSection />
      </div>
    </section>
  );
}