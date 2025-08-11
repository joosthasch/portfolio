// src/app/page.tsx
"use client";

import { ScrollSection } from "../components/ScrollSection/ScrollSelection";
import { ReactLenis } from "lenis/react";
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <ReactLenis root>
      <div className="bg-white dark:bg-black">
        <div className="relative">
          <ScrollSection />
        </div>
        {/* Projects Section */}
         <div className="relative z-20">
          <Projects />
        </div>
        <div className="relative z-10">
          <About />
        </div>
        <div className="relative z-10">
          <Contact />
        </div>
        {/* Footer */}
        <footer className="w-full py-40 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} MySite
        </footer>
      </div>
    </ReactLenis>
  );
}
