// src/app/page.tsx
"use client";

import { ScrollSection } from "../components/ScrollSection/ScrollSelection";
import { ReactLenis } from "lenis/react";
import { ProjectsSection } from "../components/ProjectsSection";

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
        <footer className="w-full py-4 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} MySite
        </footer>
      </div>
    </ReactLenis>
  );
}
