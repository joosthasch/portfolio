"use client";
import Image from "next/image";
import { ReactLenis } from "lenis/react";

export default function VanGoghProject() {
    return (
    <ReactLenis root>
      <main className="min-h-screen bg-white text-gray-900 font-fira">
        <section className="max-w-7xl mx-auto py-20">
          {/* Full-width image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl mb-20 mx-10">
            <Image
                src="/images/projects/van-gogh/Header.png"
                alt="Willenbrock Project"
                width={1920}
                height={800}
                className="w-full h-auto rounded-2xl"
                priority
              />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Title and subtitle over image */}
            <div className="absolute bottom-10 left-10 md:left-16 text-white">
              <h1 className="text-3xl md:text-6xl font-bold mb-2">VanGoghs Gedankenwelt</h1>
                <p className="text-lg md:text-2xl font-medium opacity-90">
                  VR Anwendung
                </p>
            </div>
          </div>
          </section>

          {/* DESCRIPTION */}
          <section className="max-w-7xl mx-auto text-center px-6 md:px-12 lg:px-20">
              <p className="text-lg leading-relaxed text-neutral-700">
                Für das Visiodrom Wuppertal entstand eine immersive VR-Erfahrung, die Besucher:innen in die Gedankenwelt von Vincent van Gogh eintauchen lässt. Mithilfe einer VR-Brille können sie sich mit einer KI unterhalten, die auf den Briefen des Künstlers basiert.
              </p>
              <p className="mt-16 text-lg md:text-2xl font-semibold italic text-neutral-800">
                – ein poetisches Gespräch zwischen Vergangenheit und digitaler Gegenwart.
              </p>
          </section>

          {/* IMAGE GALLERY */}
          <section className="my-40">
            <div className="max-w-7xl mx-auto">
            <Image
                src="/images/projects/van-gogh/gallery.png"
                alt="Willenbrock Project"
                width={1920}
                height={800}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
          </section>
      
      </main>
    </ReactLenis>
  );
}
