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
            <div className="absolute inset-0 " />
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
                Anstatt in Touristenfallen zu landen, zeigt die App Orte, die von Leuten vor Ort empfohlen wurden.
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
                <div className="relative aspect-[17/16] overflow-hidden rounded-2xl h-[300px] sm:h-[400px] max-h-[600px] mx-auto lg:mx-0">
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
                    Der User Flow wurde so gestaltet, dass die Karte mit den Gems das Herzstück der App bildet.
                    Alle wichtigen Aktionen – Entdecken, Öffnen, Liken und Erstellen von Gems – sind direkt von dort aus erreichbar.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                    Weniger häufig genutzte Bereiche wie gespeicherte oder eigene Gems, Feedback oder Einstellungen befinden sich im Sidemenu.
                    So wurde schon früh im Flow definiert, welche Funktionen zentral sichtbar und welche untergeordnet platziert werden, um die Nutzung so effizient wie möglich zu halten.
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
                  In den Wireframes stand die Frage im Mittelpunkt, wie die wichtigsten Funktionen sinnvoll auf dem Kartenscreen angeordnet werden können.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Ziel war es, schnellen Zugriff auf alles Wesentliche zu ermöglichen, ohne den Bildschirm zu überladen.
                    Elemente wie Bottom Cards, Kategorie-Filter und der Button zum Hinzufügen neuer Gems wurden so positioniert, dass sie intuitiv erreichbar bleiben und den Entdeckungsfluss unterstützen.
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
                <div className="relative aspect-[4/2] overflow-hidden rounded-2xl max-h-[600px] mx-auto lg:mx-0">
                <Image
                    src="/images/projects/hidden-gems/design.png"
                    alt="VR Environment"
                    fill
                    className="object-cover"
                />
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
                  UI Design
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Das Design der App ist bewusst minimalistisch gehalten, um den Fokus auf die Karte und die Gems zu lenken.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Ein monochromes Farbschema aus Schwarz, Weiß und Grautönen sorgt für Klarheit, während D5FF00 als markanter Akzent Energie und Wiedererkennbarkeit schafft.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                    Die Gems spielen dabei eine zentrale Rolle: farblich codiert nach Kategorie und mit kleinen Icons, die auf einen Blick zeigen, worum es sich handelt – etwa Essen, Kunst, Nachtleben oder Chill-Spots.
                    Das UI vermittelt Leichtigkeit und Orientierung, ohne visuell zu überfordern.
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

            {/* 1. Image Left / Text Right */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
            >
                <div className="relative aspect-[16/20] overflow-hidden rounded-2xl h-[300px] sm:h-[400px] max-h-[600px] mx-auto lg:mx-0">
                <Image
                    src="/images/projects/hidden-gems/prototyp.png"
                    alt="VR Environment"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                />
                </div>

                <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    Prototyp
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                    Der finale Prototyp zeigt die App als voll funktionsfähiges Gesamterlebnis.
                    Vom Onboarding über die interaktive Karte bis hin zum Erstellen und Speichern eigener Gems lässt sich der gesamte Flow durchspielen.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                    Animationen und Übergänge wurden dezent eingesetzt, um den Entdeckungsprozess flüssig und natürlich wirken zu lassen.
                    So entstand ein greifbarer, nutzbarer Prototyp, der Konzept und Umsetzung nahtlos verbindet.
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
