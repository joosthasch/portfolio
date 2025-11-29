"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function Willenbrock() {
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
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900 font-fira">
        <section className="max-w-7xl mx-auto pt-40 pb-16 sm:pb-24 md:pb-32">
          {/* Header Image */}
          <div className="relative rounded-2xl overflow-hidden mx-6 sm:mx-12 md:mx-20">
            <Image
              src="/images/projects/willenbrock/Header.png"
              alt="Willenbrock Project"
              width={1920}
              height={800}
              className="w-full h-auto rounded-2xl"
              priority
            />
            <div className="absolute inset-0" />
            <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 md:left-16 text-white">
              <h1 className="text-xl sm:text-3xl md:text-6xl font-bold mb-2">
                Willenbrock
              </h1>
              <p className="text-sm sm:text-xl md:text-2xl font-medium opacity-90">
                Usability Untersuchung
              </p>
            </div>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="max-w-7xl mx-auto sm:text-center px-6 md:px-12 lg:px-20">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-700">
           Für den Weinshop Willenbrock wurde eine Usability-Untersuchung durchgeführt. Ziel war es, die Gründe für häufige Kaufabbrüche zu verstehen
            und Ansätze zur Verbesserung von Traffic, Orientierung und Conversion zu entwickeln. Grundlage war die Frage, an welchen Stellen der
             Online-Shop aus Nutzersicht Reibungspunkte erzeugt.
          </p>
        </section>

        {/* CONTENT SECTIONS */}
        <section className="bg-[#141414] mt-32 py-16 sm:py-24 md:py-32 rounded-t-2xl sm:rounded-t-3xl">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-16 md:space-y-24">

            {/* 5. Full-width Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative overflow-hidden"
            >
              <Image
              src="/images/projects/willenbrock/vorgehen.png"
              alt="Final Result"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-2xl"
              />
            </motion.div>

            {/* 1. Image Left / Text Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl max-h-[600px] mx-auto lg:mx-0">
                <Image
                  src="/images/projects/willenbrock/labor.jpg"
                  alt="AI Conversation"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  Nutzer:innen im Fokus
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Die Untersuchung fand im Usability-Labor der Hochschule statt. Geplant wurde ein Testverfahren bestehend aus Eyetracking, Lautem Denken und anschließendem Interview. 
                  Die Teilnehmenden wurden durch typische Einkaufsaufgaben geführt, während ihr Blickverhalten und ihre Interaktionen aufgezeichnet wurden.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  So konnten wir nachvollziehen, wo Nutzer ins Stocken geraten, welche Bereiche unklar wirken oder unnötige kognitive Belastung verursachen.
                </p>
              </div>
            </motion.div>

            {/* PROBLEM & OPTIMIERUNG: Eyetracking + Vorher/Nachher */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-10"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Nutzerverhalten sichtbar machen & Optimierung ableiten
              </h2>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                Das Eyetracking zeigte deutlich, wo Nutzer:innen im Kaufprozess ins Stocken gerieten. Besonders auffällig war, dass in der Produktübersicht nur 0 oder 1 Flasche ausgewählt werden konnte – ein Missverständnis, das zu wiederholten Kaufabbrüchen führte. Basierend auf diesen Erkenntnissen wurde die Mengenauswahl überarbeitet und intuitiver gestaltet.
              </p>
            </motion.div>

            {/* EYETRACKING VIDEO – FULL WIDTH */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative overflow-hidden mt-6"
            >
              <div className="relative aspect-[16/8] overflow-hidden rounded-2xl w-full">
                <video
                  src="/videos/willenbrock/eyetracking.mp4"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>
            </motion.div>

            {/* VORHER/NACHHER – Eigenes Motion Div */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-10 mt-8"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
                Vorher–Nachher: Mengenauswahl
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 place-items-center">
                {/* Vorher */}
                <div className="flex flex-col items-center space-y-2">
                  <p className="text-gray-400 text-sm md:text-base">Vorher</p>
                  <div className="relative aspect-[5/3] w-[300px] rounded-2xl overflow-hidden bg-gray-800">
                    <Image
                      src="/images/projects/willenbrock/vorher.png"
                      alt="Vorher UI"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Nachher */}
                <div className="flex flex-col items-center space-y-2">
                  <p className="text-gray-400 text-sm md:text-base">Nachher</p>
                  <div className="relative aspect-[5/3] w-[300px] rounded-2xl overflow-hidden bg-gray-800">
                    <Image
                      src="/images/projects/willenbrock/nachher.png"
                      alt="Nachher UI"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}>
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    Auswertung & Erkenntnisse
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                    Die Auswertung der Usability-Tests machte deutlich, wo Nutzer:innen im Online-Shop auf Probleme stießen. Die überarbeitete Mengenauswahl in der Produktübersicht ist dabei nur ein Beispiel für kritische Usability-Hindernisse. Ebenso wichtig waren Erkenntnisse aus Eyetracking, Lautem Denken und den begleitenden Interviews, die gemeinsam ein umfassendes Bild der Nutzererfahrung lieferten und die Grundlage für gezielte Optimierungen zur Verbesserung der Nutzerführung und Reduzierung von Kaufabbrüchen bildeten.
                  </p>
                </div>
              </motion.div>

          </div>
        </section>
      </main>
      <Footer />
    </ReactLenis>
  );
}