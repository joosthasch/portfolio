"use client";

import Image from "next/image";
import { ReactLenis } from "lenis/react";
import Link from "next/link";
import { X } from "lucide-react";

export default function About() {
    return (
    <ReactLenis root>
      <main className="min-h-screen bg-white text-gray-900 font-archivo">
        {/* Header with title and close button */}
        <header className="flex justify-between items-start py-4 md:py-6 max-w-7xl mx-auto">
          <div className="px-6">
            <h1 className="text-lg leading-relaxed text-gray-900">
              Über mich
            </h1>
            <p className="text-lg font-thin text-gray-700">
              Joost Haschen
            </p>
          </div>

          <Link
            href="/"
            className="px-6 text-gray-900 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </Link>
        </header>

        <section className="max-w-7xl mx-auto">
          {/* Full-width image */}
          <div className="w-full px-12 pb-16">
            <Image
              src="/images/projects/flunke/header.png"
              alt="Willenbrock Project"
              width={1920}
              height={800}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>

          {/* Centered text content */}
          <div className="flex justify-center px-6 pb-20">
            <div className="max-w-3xl">
              <p className="text-lg leading-relaxed text-gray-700">
                Projektbeschreibung
              </p>
              <p className="text-lg leading-relaxed font-thin text-gray-700 mt-6">
                Für Flunke entwickelten wir eine mobile IoT-Anwendung als digitale Erweiterung 
                des Trinkspiels Flunkyball. Ein mit Sensoren ausgestatteter Ball löste beim 
                Werfen automatisch Ereignisse in der App aus, die neue Spielregeln oder Aufgaben 
                anzeigten. So konnten wir klassische Spielmechanik mit digitaler Interaktion 
                verbinden und ein dynamischeres Spielerlebnis schaffen.
              </p>
            </div>
          </div>

          {/* Eckdaten Übersicht nebeneinander */}
          <div className="flex justify-center px-6 py-20">
            <div className="max-w-3xl w-full">
              <h2 className="text-lg leading-relaxed mb-6 text-gray-900">Eckdaten</h2>
              <div className="flex flex-wrap flex-row gap-6 md:gap-8 justify-between">
                <div className="flex flex-col flex-1 min-w-[100px]">
                  <span className="text-base md:text-lg font-light text-gray-700">Projektdauer</span>
                  <span className="text-base md:text-lg font-thin text-gray-700 pt-2">2 Monate</span>
                </div>
                <div className="flex flex-col flex-1 min-w-[100px]">
                  <span className="text-base md:text-lg font-light text-gray-700">Teamgröße</span>
                  <span className="text-base md:text-lg font-thin text-gray-700 pt-2">3 Personen</span>
                </div>
                <div className="flex flex-col flex-1 min-w-[100px]">
                  <span className="text-base md:text-lg font-light text-gray-700">Technologien</span>
                  <span className="text-base md:text-lg font-thin text-gray-700 pt-2">Figma</span>
                  <span className="text-base md:text-lg font-thin text-gray-700 pt-2">Ionic/ Angular</span>
                  <span className="text-base md:text-lg font-thin text-gray-700 pt-2">ArduinoBle</span>
                </div>
                <div className="flex flex-col flex-1 min-w-[100px]">
                  <span className="text-base md:text-lg font-light text-gray-700">Meine Rolle</span>
                  <span className="text-base md:text-lg font-thin text-gray-700 pt-2">Technische Umsetzung der App</span>
                  <span className="text-base md:text-lg font-thin text-gray-700 pt-2">Animationen & Visualisierungen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width image */}
          <div className="w-full px-12 py-20">
            <video
              className="w-full h-auto rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/willenbrock/eyetracking.mp4" type="video/mp4" />
              Dein Browser unterstützt das Video-Tag nicht.
            </video>
          </div>

          {/* Centered text content */}
          <div className="flex justify-center px-6 pb-20">
            <div className="max-w-3xl">
              <p className="text-lg leading-relaxed text-gray-700">
                Eyetracking-Einblick
              </p>
              <p className="text-lg leading-relaxed font-thin text-gray-700 mt-6">
                Das aufgezeichnete Eye-Tracking-Video macht eine der zentralen Hürden 
                sichtbar: Nutzer*innen konnten in der ursprünglichen Shop-Ansicht nur 
                eine einzelne Flasche in den Warenkorb legen, was wiederholt zu Irritationen führte.
              </p>
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
