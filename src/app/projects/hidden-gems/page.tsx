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
          <div className="relative rounded-2xl overflow-hidden mx-6 sm:mx-12 md:mx-20">
            <Image
              src="/images/projects/hidden-gems/Header.png"
              alt="Flunk-E Project"
              width={1920}
              height={800}
              className="w-full h-auto rounded-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 md:left-16 text-white">
              <h1 className="text-xl sm:text-3xl md:text-6xl font-bold mb-2">
                Hidden Gems
              </h1>
              <p className="text-sm sm:text-xl md:text-2xl font-medium opacity-90">
                Mobile App
              </p>
            </div>
          </div>
        </section>

          {/* DESCRIPTION */}
          <section className="max-w-7xl mx-auto sm:text-center px-6 md:px-12 lg:px-20">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-700">
              Hidden Gems ist eine mobile App, die Menschen hilft, authentische Orte in einer Stadt zu entdecken – kleine Cafés, versteckte Aussichtspunkte, lokale Kunst oder gemütliche Bars.
                Anstatt in Touristenfallen zu landen, zeigt die App Orte, die von Locals empfohlen wurden.
            </p>
            <p className="mt-16 text-base sm:text-xl md:text-3xl leading-relaxed font-bold text-neutral-800">
                Eine Stadt hat so viele verborgene Schätze – man muss nur wissen, wo man suchen muss.
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
              src="/images/projects/hidden-gems/prozess.png"
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
                <div className="relative aspect-[17/16] overflow-hidden rounded-2xl max-h-[600px] mx-auto lg:mx-0">
                <Image
                    src="/images/projects/hidden-gems/userflow.png"
                    alt="VR Environment"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                />
                </div>

                <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    User Flow
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                    Der Flow konzentriert sich auf Einfachheit:
                    Nutzer*innen können direkt nach dem Onboarding Orte entdecken, sich anmelden oder als Gast fortfahren.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                    Von der Karte aus lässt sich jeder Gem öffnen, speichern oder liken.
                    Über das Plus-Symbol kann man eigene Orte hinzufügen – mit Titel, Bild, Beschreibung und Kategorie.
                    Das Sidemenu bietet Zugriff auf gespeicherte und eigene Gems sowie Einstellungen und Feedback.
                </p>
                </div>
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
                  Wireframes
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Die Wireframes zeigten früh, wie wichtig Orientierung und Klarheit sind.
                    Die Karte steht immer im Fokus – Elemente wie Filter, Bottom Cards oder das Hinzufügen neuer Gems wurden so positioniert, dass sie den Flow nicht stören, sondern unterstützen.
                    Jeder Screen hat nur eine Hauptaktion, um Ablenkung zu vermeiden und den Entdeckungsprozess leicht verständlich zu halten.
                </p>
              </div>

              <div className="relative aspect-[5/8] overflow-hidden rounded-2xl max-h-[700px] w-full max-w-sm mx-auto lg:ml-auto lg:mr-0">
                <Image
                  src="/images/projects/hidden-gems/wireframes.png"
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
              <Image
                src="/images/projects/hidden-gems/design.png"
                alt="Final Result"
                fill
                className="object-cover rounded-2xl"
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
                  Wireframes
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Die Wireframes zeigten früh, wie wichtig Orientierung und Klarheit sind.
                    Die Karte steht immer im Fokus – Elemente wie Filter, Bottom Cards oder das Hinzufügen neuer Gems wurden so positioniert, dass sie den Flow nicht stören, sondern unterstützen.
                    Jeder Screen hat nur eine Hauptaktion, um Ablenkung zu vermeiden und den Entdeckungsprozess leicht verständlich zu halten.
                </p>
              </div>

              <div className="relative aspect-[5/8] overflow-hidden rounded-2xl max-h-[700px] w-full max-w-sm mx-auto lg:ml-auto lg:mr-0">
                <Image
                  src="/images/projects/hidden-gems/uidesign.png"
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
