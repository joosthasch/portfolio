"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactLenis } from "lenis/react";
import { X } from "lucide-react";

export default function Willenbrock() {
  return (
    <ReactLenis root>
      <main className="min-h-screen bg-white text-gray-900 font-archivo pb-40">
        {/* Header with title and close button */}
        <header className="flex justify-between items-start py-4 md:py-6 max-w-7xl mx-auto">
          <div className="px-6">
            <h1 className="text-lg leading-relaxed text-gray-900">
              Willenbrock
            </h1>
            <p className="text-lg font-thin text-gray-700">
              Usabilty Untersuchung
            </p>
          </div>

          <Link
            href="/"
            className="px-6 text-gray-900 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="w-10 h-10" />
          </Link>
        </header>

        <section className="max-w-7xl mx-auto">
          {/* Full-width image */}
          <div className="w-full px-6 sm:px-12 pb-16">
            <Image
              src="/images/projects/willenbrock/labor2.png"
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
                Für den Weinshop von Willenbrock haben wir eine Usability-Untersuchung durchgeführt. 
                Dafür luden wir Testpersonen ins Usability-Labor der Hochschule ein und ließen sie ein typisches 
                Nutzungsszenario – vom Stöbern bis zum Kaufabschluss – durchspielen. Mithilfe von Eye-Tracking 
                und begleitenden Beobachtungen konnten wir zentrale Probleme der Website identifizieren und 
                konkrete Verbesserungsvorschläge ableiten, um die Nutzererfahrung zu optimieren und 
                Kaufabbrüche zu reduzieren.
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
                  <span className="text-base md:text-lg font-thin text-gray-700 pt-2">ca. 4 Wochen</span>
                </div>
                <div className="flex flex-col flex-1 min-w-[100px]">
                  <span className="text-base md:text-lg font-light text-gray-700">Teamgröße</span>
                  <span className="text-base md:text-lg font-thin text-gray-700 pt-2">4 Personen</span>
                </div>
                <div className="flex flex-col flex-1 min-w-[100px]">
                  <span className="text-base md:text-lg font-light text-gray-700">Methoden</span>
                  <span className="text-base md:text-lg font-thin text-gray-700 pt-2">Usability-Test</span>
                  <span className="text-base md:text-lg font-thin text-gray-700 pt-2">Eye-Tracking</span>
                  <span className="text-base md:text-lg font-thin text-gray-700 pt-2">Interview</span>
                </div>
                <div className="flex flex-col flex-1 min-w-[100px]">
                  <span className="text-base md:text-lg font-light text-gray-700">Meine Rolle</span>
                  <span className="text-base md:text-lg font-thin text-gray-700 pt-2">Technischer Aufbau & Durchführung im Usability-Labor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width image */}
          <div className="w-full px-6 sm:px-12 py-20">
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