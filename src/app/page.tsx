// src/app/page.tsx
"use client";

import { Navbar } from "../components/Navbar";
import { ScrollSection } from "../components/ScrollSelection";
import { ProjectsSection } from "../components/ProjectsSection";
import { StickyCursor } from "../components/StickyCursor";

import { ReactLenis } from "lenis/react";


export default function Home() {
  
  return (
    <ReactLenis root>
      <div className="bg-white dark:bg-black">

      {/* container to stack sections */}
      <div className="relative">
        {/* Your scroll-driven intro */}
        <ScrollSection />

        {/* Pull ProjectsSection up by 100vh, and put it on top */}
        <div className="relative z-10">
          <ProjectsSection />
        </div>
      </div>

      <footer className="w-full py-4 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} MySite
      </footer>
    </div>
    </ReactLenis>
  );
}
