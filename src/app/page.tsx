// src/app/page.tsx
"use client";

import { ScrollSection } from "../components/ScrollSection/ScrollSelection";
import { ReactLenis } from "lenis/react";
import Projects from '../components/Projects';
import Footer from "../components/Footer";

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
        {/* Footer */}
        <Footer />
      </div>
    </ReactLenis>
  );
}
