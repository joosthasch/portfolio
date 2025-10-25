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
          <div className="relative rounded-2xl overflow-hidden mx-20">
            <Image
              src="/images/projects/willenbrock/Header.png"
              alt="Willenbrock Project"
              width={1920}
              height={800}
              className="w-full h-auto rounded-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10 md:left-16 text-white">
              <h1 className="text-3xl md:text-6xl font-bold mb-2">
                Willenbrock
              </h1>
              <p className="text-lg md:text-2xl font-medium opacity-90">
                Usability Untersuchung
              </p>
            </div>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="max-w-7xl mx-auto text-center px-6 md:px-12 lg:px-20">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-700">
           Für den Weinshop Willenbrock haben wir eine umfassende Usability-Untersuchung durchgeführt.
            Mithilfe von Eye-Tracking, Nutzungsszenarien und Interviews haben wir das Verhalten der Nutzer:innen analysiert und Schwachstellen identifiziert.
            Auf Basis der Erkenntnisse haben wir gezielte Optimierungen entwickelt, die die User Experience verbessern, typische Probleme lösen und die Navigation intuitiver machen.
          </p>
        </section>

        {/* CONTENT SECTIONS */}
        <section className="bg-[#141414] mt-32 py-16 sm:py-24 md:py-32 rounded-t-2xl sm:rounded-t-3xl">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-16 md:space-y-24">

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
                  Mit Kameras und Bildschirm konnten wir die Teilnehmer:innen während des Tests direkt beobachten – welche Produkte sie ansahen, wo sie zögerten und wie sie sich durch den Shop bewegten.
                  Durch lautes Denken teilten die Nutzer:innen ihre Gedanken in Echtzeit, was wertvolle Einblicke in Motivation, Verständnis und Probleme lieferte.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Diese Beobachtungen bildeten die Grundlage für gezielte Optimierungen, die den Einkauf intuitiver und angenehmer machen
                </p>
              </div>
            </motion.div>

            {/* 2. Wide Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative aspect-video overflow-hidden max-w-5xl mx-auto"
            >
              <Image
                src="/images/projects/willenbrock/ablauf.png"
                alt="Full VR Experience"
                fill
                className="object-cover rounded-2xl "
              />
            </motion.div>

            {/* 4. Text Left / Image Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  Eyetracking – Nutzerverhalten sichtbar machen
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Mit Eyetracking konnten wir genau nachvollziehen, wohin die Testpersonen auf der Website 
                  blickten und wie sie sich durch den Shop bewegten. So wurden Momente der Unsicherheit oder Orientierungslosigkeit direkt sichtbar.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Ein Blick auf die Blickverläufe zeigte, dass die Teilnehmenden bei der Mengenauswahl ins Stocken gerieten. Statt mehrere Flaschen auswählen 
                  zu können, standen nur „0“ oder „1“ zur Verfügung – ein Detail, das für Verwirrung sorgte und die Frage aufwarf, ob der Wein eventuell ausverkauft sei.
                </p>
              </div>

              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl max-h-[600px] w-full max-w-sm mx-auto lg:ml-auto lg:mr-0">
                <Image
                  src="/images/projects/willenbrock/weinshop.png"
                  alt="AI Conversation"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* 5. Full-width Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative aspect-video overflow-hidden"
            >
              <video
                  src="/videos/willenbrock/eyetracking.mp4"      /* Pfad anpassen */
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="VR Environment video"
                />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </ReactLenis>
  );
}