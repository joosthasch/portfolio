"use client";
import Image from "next/image";
import { ReactLenis } from "lenis/react";

export default function VanGoghProject() {
    return (
    <ReactLenis root>
      <main className="min-h-screen bg-white text-gray-900 font-montserrat">
        <section className="max-w-7xl mx-auto py-20">
          {/* Full-width image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl mb-20 mx-20">
            <Image
                src="/images/projects/flunke/Header.png"
                alt="Willenbrock Project"
                width={1920}
                height={800}
                className="w-full h-auto rounded-2xl"
                priority
              />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Title and subtitle over image */}
            <div className="absolute bottom-10 left-10 md:left-16 text-white max-w-lg">
              <h1 className="text-3xl md:text-6xl font-bold mb-2">Flunk-E</h1>
                <p className="text-lg md:text-2xl font-medium opacity-90">
                  IOT-App
                </p>
            </div>
          </div>
          </section>

          {/* DESCRIPTION */}
          <section className="text-center px-6 md:px-12 lg:px-20">
              <p className="text-lg leading-relaxed text-neutral-700">
                Für Flunk-E entstand eine innovative, interaktive Spielerfahrung, die das klassische Partyspiel Flunkyball in die digitale Welt überführt. Mithilfe eines smarten Ballsensors wird das Spielgeschehen in Echtzeit verfolgt, wodurch den Spieler:innen automatisch Challenges, Regeln und Ereignisse angezeigt werden. So entsteht ein dynamisches, vernetztes Spielerlebnis, das traditionelle Spielmechaniken mit moderner Technologie verbindet und die Interaktion zwischen den Teilnehmenden auf ein neues Level hebt.
              </p>
          </section>

          {/* IMAGE GALLERY */}
          <section className="my-40">
            <div className="max-w-7xl mx-auto">
            <Image
                src="/images/projects/flunke/gallery.png"
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
