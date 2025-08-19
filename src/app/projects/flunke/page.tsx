"use client";

import Image from "next/image";
import { ReactLenis } from "lenis/react";
import Link from "next/link";
import { X } from "lucide-react";

export default function Flunke() {
    return (
    <ReactLenis root>
      <main className="min-h-screen bg-white text-gray-900 font-archivo">
        {/* Header with title and close button */}
        <header className="flex justify-between items-start py-4 md:py-6 max-w-7xl mx-auto">
          <div className="px-6">
            <h1 className="text-lg leading-relaxed text-gray-900">
              Flunk-E
            </h1>
            <p className="text-lg font-thin text-gray-700">
              IoT-App
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
          <div className="w-full px-6 sm:px-12 pb-16">
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
                Flunke ist eine mobile IoT-Anwendung, die das Trinkspiel Flunkyball digital 
                erweitert. Ein mit Sensoren ausgestatteter Ball sendet Daten an die App, die 
                dadurch automatisch Spielereignisse und Sonderregeln auslöst. Ziel ist es, 
                physisches Spiel mit digitalen Mechaniken zu kombinieren und so ein interaktiveres, 
                abwechslungsreicheres Erlebnis zu schaffen.
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

          {/* Video und Bild nebeneinander */}
          <div className="w-full px-6 sm:px-12 py-20">
            <div className="flex flex-col lg:flex-row gap-16 justify-center items-center">
              {/* Video Container */}
              <div className="flex-shrink-0">
                <video
                  className="max-w-md max-h-96 h-auto rounded-2xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/flunke/aufbau.mp4" type="video/mp4" />
                  Dein Browser unterstützt das Video-Tag nicht.
                </video>
              </div>
              
              {/* Bild Container */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/projects/flunke/Challenges.webp"
                  alt="Flunke Setup"
                  width={400}
                  height={300}
                  className="rounded-2xl max-w-md h-auto"
                />
              </div>
            </div>
          </div>

          {/* Centered text content */}
          <div className="flex justify-center px-6 pb-20">
            <div className="max-w-3xl">
              <p className="text-lg leading-relaxed text-gray-700">
                Visuelles Design und Nutzerführung
              </p>
              <p className="text-lg leading-relaxed font-thin text-gray-700 mt-6">
                Die App Flunke nutzt ein animiertes Tutorial und handgezeichnete Challenges, um Nutzer:innen 
                intuitiv durch das Spiel zu führen. Über 20 verschiedene Challenges sorgen für 
                Abwechslung – vom Werfen mit der schwachen Hand bis hin zum mehrmaligen Drehen 
                im Kreis vor dem Wurf. Die visuelle Gestaltung unterstützt nicht nur die 
                Bedienbarkeit, sondern schafft auch ein konsistentes, ansprechendes Design, 
                das das Spielerlebnis abrundet.
              </p>
            </div>
          </div>

            {/* Full-width image */}
            <div className="w-full px-6 sm:px-12 py-20">
                <Image
                src="/images/projects/flunke/emaf.png"
                alt="Flunke Project"
                width={1920}
                height={800}
                className="w-full h-auto rounded-2xl"
                priority
                />
            </div>

            {/* Centered text content */}
            <div className="flex justify-center px-6 pb-20">
                <div className="max-w-3xl">
                <p className="text-2xl leading-relaxed text-gray-900">
                    Mit Flunke waren wir Teil des European Media Art Festivals (EMAF) und durften unser Projekt dort ausstellen.
                </p>
                </div>
            </div>
        </section>
      </main>
    </ReactLenis>
  );
}
