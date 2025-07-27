// src/app/page.tsx
"use client";

import { ScrollSection } from "../components/ScrollSection/ScrollSelection";
import { ReactLenis } from "lenis/react";
import { ProjectsSection } from "../components/ProjectsSection";
import ZoomParallax from "../components/ZoomParallax";

export default function Home() {
  return (
    <ReactLenis root>
      <div className="bg-white dark:bg-black">
        <div className="relative">
          <ScrollSection />
        </div>
        {/* Projects Section */}
        <div className="relative z-10">
          <ProjectsSection />
        </div>
        {/* Zoom Parallax Section */}
        <div className="relative z-20">
          <ZoomParallax />
        </div>
        {/* Footer */}  
        <footer className="w-full py-40 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} MySite
        </footer>
      </div>
    </ReactLenis>
  );
}
