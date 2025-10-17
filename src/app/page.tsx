// src/app/page.tsx
"use client";

import { ScrollSection } from "../components/ScrollSection/ScrollSelection";
import { ReactLenis } from "lenis/react";
import Footer from "../components/Footer";
import ProjectSection from "../pages/ProjectSection";

export default function Home() {
  return (
    <ReactLenis root>
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
