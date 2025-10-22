// src/app/page.tsx
"use client";

import { ScrollSection } from "../components/ScrollSection/ScrollSelection";
import { ReactLenis } from "lenis/react";
import Footer from "../components/Footer";
import ProjectSection from "../pages/ProjectSection";

export default function Home() {
  const lenisOptions = {
    // duration (s) → grössere Werte = stärkeres "slow easing"
    duration: 0.5,

    // easing curve: t in [0,1] -> eased t
    // einfache easeOutCubic (änderbar)
    easing: (t: number) => 1 - Math.pow(1 - t, 3),

    // wheel/touch smoothing + multipliers
    smoothWheel: true,
    wheelMultiplier: 1.2, // >1 → Mausrad fühlt sich stärker/ schneller an
    smoothTouch: false,
    touchMultiplier: 1.0,
  };

  return (
    <ReactLenis options={lenisOptions} root>
      <div className="bg-white">
        <div className="relative">
          <ScrollSection />
        </div>
        <div className="relative z-10">
          <ProjectSection />
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </ReactLenis>
  );
}
