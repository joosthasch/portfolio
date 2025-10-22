"use client";

import { ScrollSection } from "../components/ScrollSection/ScrollSelection";
import { ReactLenis } from "lenis/react";
import Footer from "../components/Footer";

export default function Home() {
  const lenisOptions = {
    duration: 0.5,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    wheelMultiplier: 1.2,
    smoothTouch: false,
    touchMultiplier: 1.0,
  };

  return (
    <ReactLenis options={lenisOptions} root>
      <div className="bg-white">
        {/* ScrollSection enthält jetzt Video + Text + ProjectSection */}
        <ScrollSection />

        {/* Footer */}
        <Footer />
      </div>
    </ReactLenis>
  );
}