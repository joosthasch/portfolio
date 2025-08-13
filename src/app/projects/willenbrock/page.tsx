"use client";

import ProjectNavbar from "@/components/ProjectNavbar";
import Image from "next/image";

export default function WillenbrockProject() {
  return (
    <main className="min-h-screen bg-white text-black">
      <ProjectNavbar />

      <div className="px-6 md:px-20 py-16">
        {/* Header with large rotated bottle image and title in a row */}
        <header className="flex flex-col md:flex-row items-center md:items-center my-32 max-w-7xl mx-auto">
          {/* Large, rotated wine bottle image on the left */}
          <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/2 pb-20 md:pb-0">
            <div className="w-[100px] md:w-[150px] h-auto">
              <Image
                src="/images/projects/willenbrock/wein.png"
                alt="Weinflasche"
                width={420}
                height={600}
                className="w-full h-auto object-contain"
                style={{ transform: "rotate(10deg)" }}
                priority
              />
            </div>
          </div>
          {/* Title on the right */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-semibold mb-4">Usability-Analyse für Willenbrock</h1>
            <h2 className="text-lg md:text-2xl font-light text-gray-700">
              Meine Rolle: Technischer Aufbau & Durchführung der Labor-Tests<br />
              Ziel: Mehr Website-Traffic und weniger Kaufabbrüche
            </h2>
          </div>
        </header>

        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {/* Beschreibung */}
          <section>
            <p className="leading-relaxed text-lg md:text-2xl mb-6">
              Für den Weinshop von Willenbrock führten wir einen Usability-Test mit Eye-Tracking und begleitendem Fragebogen durch.
             Ziel war es, bestehende Usability-Probleme auf der Website zu identifizieren und gezielte Verbesserungsvorschläge zu erarbeiten, um die Nutzererfahrung zu optimieren und Kaufabbrüche zu reduzieren.
             Ich war dabei für die technische Einrichtung und Durchführung im Usability-Labor verantwortlich, inklusive Eye-Tracking-Hardware und -Software.
            </p>
          </section>

          {/* Office Image */}
          <section className="my-20">
            <h3 className="text-xl md:text-4xl font-medium mb-4 md:mb-8">Usability-Labor</h3>
            <div className="flex flex-col lg:flex-row gap-20">
              {/* Image Container */}
              <div className="flex-1 max-w-2xl">
                <div className="rounded-xl overflow-hidden border border-gray-200">
                  <Image
                    src="/images/projects/willenbrock/labor.jpg"
                    alt="Willenbrock Office"
                    width={600}
                    height={200}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
              
              {/* Description Container */}
              <div className="flex-1 lg:max-w-md">
                <p className="leading-relaxed text-lg md:text-2xl text-gray-700">
                  Testaufbau im Usability-Labor: Hier wurden die Proband*innen mit Eye-Tracking ausgestattet, um ihre Blickverläufe während der Nutzung der Website aufzuzeichnen.
                </p>
              </div>
            </div>
          </section>

          {/* Eyetracking Video */}
          <section className="my-20">
            <h3 className="text-xl md:text-4xl font-medium mb-4 md:mb-8">Eyetracking Session</h3>
            <div className="flex flex-col lg:flex-row gap-20 lg:justify-end">
              {/* Description Container */}
              <div className="flex-1 lg:max-w-md lg:order-1">
                <p className="leading-relaxed text-lg md:text-2xl text-gray-700">
                  Das Eye-Tracking-Video zeigt eine deutliche Usability-Hürde: In der ursprünglichen Shop-Ansicht konnte nur eine einzelne Weinflasche in den Warenkorb gelegt werden.
                </p>
                <p className="leading-relaxed text-lg md:text-2xl text-gray-700 mt-4">
                  Dieses unerwartete Verhalten führte zu Verwirrung bei den Nutzer*innen und wurde von uns als zentrales Problem dokumentiert.
                </p>
              </div>

              {/* Video Container - wird rechts positioniert */}
              <div className="flex-1 max-w-4xl lg:order-2 lg:ml-auto">
                <div className="rounded-xl overflow-hidden borderflex justify-center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    width={800}
                    className="w-full h-auto"
                  >
                    <source src="/videos/willenbrock/eyetracking.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}