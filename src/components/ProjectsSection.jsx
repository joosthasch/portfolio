"use client";

import React, { useRef } from "react";
import { projects } from "../data";
import Card from "../components/Card/index.jsx";
import { useScroll } from "framer-motion";

export function ProjectsSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <main ref={container} className="relative  bg-white">
      {projects.map((project, i) => {
        const targetScale = 1 - ((projects.length - i) * 0.05);
        // 1 = Ende des Scroll-Containers
        const endSticky = 1.0;

        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i / projects.length, endSticky]}
            targetScale={targetScale}
            clamp={false}        // falls dein Card-Props das unterstützt
          />
        );
      })}
    </main>
  );
}

