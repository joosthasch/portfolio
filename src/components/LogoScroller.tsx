"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const logos = [
  { name: "Unity", src: "/images/logos/unity.svg" },
  { name: "Blender", src: "/images/logos/blender.svg" },
  { name: "Figma", src: "/images/logos/figma.svg" },
  { name: "React", src: "/images/logos/react.svg" },
  { name: "Tailwind CSS", src: "/images/logos/tailwind.svg" },
  { name: "GSAP", src: "/images/logos/gsap.svg" },
  { name: "Affinity", src: "/images/logos/affinity.svg" },
  { name: "Notion", src: "/images/logos/notion.svg" },
  { name: "Davinci", src: "/images/logos/davinci.svg" },
];

export default function LogoScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    // Measure total width of all logos
    const totalWidth = inner.scrollWidth / 2; // Divide by 2 because we duplicate
    const duration = totalWidth / 50; // Adjust speed (50px per second)

    // Infinite scroll animation
    const tl = gsap.timeline({ repeat: -1 });
    tl.fromTo(
      inner,
      { x: 0 },
      {
        x: -totalWidth,
        duration,
        ease: "linear",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-40 overflow-hidden">
      <div className="">

        {/* Logo Scroller */}
        <div ref={containerRef} className="relative w-full overflow-hidden">
          <div
            ref={innerRef}
            className="flex gap-8 sm:gap-12 md:gap-16"
            style={{ willChange: "transform" }}
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}