"use client";
import Image from "next/image";
import { ReactLenis } from "lenis/react";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function VanGoghProject() {
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
              src="/images/projects/flunke/Header.png"
              alt="Flunk-E Project"
              width={1920}
              height={800}
              className="w-full h-auto rounded-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10 md:left-16 text-white">
              <h1 className="text-3xl md:text-6xl font-bold mb-2">
                Flunk-E
              </h1>
              <p className="text-lg md:text-2xl font-medium opacity-90">
                IOT-Anwendung
              </p>
            </div>
          </div>
        </section>

          {/* DESCRIPTION */}
          <section className="max-w-7xl mx-auto text-center px-6 md:px-12 lg:px-20">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-700">
              Ein Ball. Zwei Teams. Unendlich viel Spannung.
              Flunk·E verwandelt Flunkyball in ein interaktives Spielerlebnis – mit Sensor, Echtzeit-Feedback und App-Anbindung.
              Wer trifft, löst digitale Effekte und neue Regeln aus.
              So wird aus jeder Runde ein Wettkampf zwischen Skill, Glück und Chaos.
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
              className="relative aspect-video overflow-hidden"
            >
              <Image
                src="/images/projects/flunke/design.png"
                alt="Final Result"
                fill
                className="object-cover rounded-2xl"
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
              <div className="relative aspect-[11/16] overflow-hidden rounded-2xl max-h-[600px] mx-auto lg:mx-0">
                <video
                  src="/videos/flunke/aufbau.mp4"      /* Pfad anpassen */
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="VR Environment video"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  Design, das knallt
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Das Design von Flunk·E bleibt konstant laut, klar und energiegeladen.
                  Knallige Farben, kontrastreiche Flächen und ein durchgängiger visueller Rhythmus spiegeln den Wettbewerbsgeist des Spiels wider.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Ein selbst animiertes Tutorial führt humorvoll ins Chaos ein – begleitet von handgezeichneten Challenges, die jedes Match einzigartig machen.
                </p>
              </div>
            </motion.div>

            {/* 2. Wide Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative aspect-video overflow-hidden max-w-3xl mx-auto"
            >
              <Image
                src="/images/projects/flunke/challenges.png"
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
                  Technik & Umsetzung
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Ein Arduino in Ball und Flasche misst Wurf und Beschleunigung, erkennt, ob die Flasche umgefallen ist, und überträgt die Daten an die App.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Treffer lösen Challenges und Animationen aus, Fehlwürfe geben direkt Feedback.
                  So verschmilzt physisches Spiel mit interaktiver Technik zu einem dynamischen Spielerlebnis.
                </p>
              </div>

              <div className="relative aspect-[14/9] overflow-hidden rounded-2xl max-h-[600px] w-full max-w-sm mx-auto lg:ml-auto lg:mr-0">
                <Image
                  src="/images/projects/flunke/technic.png"
                  alt="AI Conversation"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </section>
      
      </main>
      <Footer />
    </ReactLenis>
  );
}
