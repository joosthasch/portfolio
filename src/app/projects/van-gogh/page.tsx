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

  const conversation = [
    { speaker: "user", text: "Was ist deine Lieblingsfarbe?" },
    { speaker: "vangogh", text: "Farbe ist für mich eine Sprache. Gelb – das ist die Farbe des Lichts, der Sonne, der Hoffnung. Ich glaube, Gelb kann die Seele heilen." },
    { speaker: "user", text: "Wie war deine Beziehung zu deinem Bruder Theo?" },
    { speaker: "vangogh", text: "Ohne Theo wäre ich verloren gewesen. Er verstand mich, auch wenn die Welt es nicht tat. Unsere Briefe waren wie ein gemeinsames Herz, das in zwei Körpern schlägt." },
    { speaker: "user", text: "Was bedeutet Kunst für dich?" },
    { speaker: "vangogh", text: "Kunst ist kein Luxus. Sie ist ein Weg, das Leben zu ertragen. Ich male nicht, um zu gefallen – ich male, um zu atmen." },
  ];

  return (
    <ReactLenis options={lenisOptions} root>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900 font-fira">
        <section className="max-w-7xl mx-auto pt-40 pb-16 sm:pb-24 md:pb-32">
          {/* Header Image */}
          <div className="relative rounded-2xl overflow-hidden mx-20">
            <Image
              src="/images/projects/van-gogh/Header.png"
              alt="Van Gogh Project"
              width={1920}
              height={800}
              className="w-full h-auto rounded-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10 md:left-16 text-white">
              <h1 className="text-3xl md:text-6xl font-bold mb-2">
                Van Goghs Gedankenwelt
              </h1>
              <p className="text-lg md:text-2xl font-medium opacity-90">
                VR Anwendung
              </p>
            </div>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="max-w-7xl mx-auto text-center px-6 md:px-12 lg:px-20">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-700">
            Für das Visiodrom Wuppertal entstand eine immersive VR-Erfahrung, die Besucher:innen in die Gedankenwelt von Vincent van Gogh eintauchen lässt. Mithilfe einer VR-Brille können sie sich mit einer KI unterhalten, die auf den Briefen des Künstlers basiert.
          </p>
          <p className="mt-16 text-base sm:text-xl md:text-3xl leading-relaxed font-bold text-neutral-800">
            – ein poetisches Gespräch zwischen Vergangenheit und digitaler Gegenwart.
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
              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl max-h-[600px] mx-auto lg:mx-0">
                <Image
                  src="/images/projects/van-gogh/gallery-3.png"
                  alt="VR Environment"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  Die Idee hinter dem Projekt
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Eine immersive VR-Experience, die historische Kunst und künstliche Intelligenz vereint.
                  Wie kann KI genutzt werden, um Kunstgeschichte neu erlebbar zu machen?
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Ein interaktives Experiment über Erinnerung, Präsenz und digitale Reinkarnation.
                </p>
              </div>
            </motion.div>

            {/* 2. Wide Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative aspect-video overflow-hidden rounded-2xl max-w-3xl mx-auto"
            >
              <Image
                src="/images/projects/van-gogh/gallery-2.png"
                alt="Full VR Experience"
                fill
                className="object-cover"
              />
            </motion.div>

           {/* 💬 3. Animated Conversation Section */}
            <div className="bg-[#141414] rounded-2xl py-16 px-4 sm:px-8 md:px-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-white"
              >
                Ein Gespräch mit Van Gogh
              </motion.h2>

              <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
                {conversation.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      x: line.speaker === "user" ? 50 : -50,
                      y: 30,
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      line.speaker === "user"
                        ? "self-end bg-white text-[#141414]"
                        : "self-start bg-[#2a2a2a] text-gray-100"
                    }`}
                  >
                    {line.text}
                  </motion.div>
                ))}
              </div>
            </div>

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
                  KI-gestützte Konversation
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Das virtuelle Zimmer basiert auf einem 3D-Modell von {" "}
                  <a
                    href="https://sketchfab.com/3d-models/van-gogh-room-311d052a9f034ba8bce55a1a8296b6f9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                    title="Sketchfab öffnen (öffnet in neuem Tab)"
                  >
                    Sketchfab
                  </a>{" "} und wurde in Blender um eigene Objekte erweitert, um die Atmosphäre von Van Goghs Lebensraum noch greifbarer zu machen. 
                  Die Benutzeroberfläche und Interaktionen entstanden in Unity – entwickelt für die Meta Quest 3.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Über Speech-to-Text wird die gesprochene Sprache an OpenAI gesendet, wo auf Grundlage von Van Goghs Briefen eine Antwort generiert wird. Diese wird anschließend per Text-to-Speech mit einem holländischen Akzent wiedergegeben – und lässt so ein glaubhaftes Gespräch mit Van Gogh entstehen.
                </p>
              </div>

              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl max-h-[600px] w-full max-w-sm mx-auto lg:ml-auto lg:mr-0">
                <Image
                  src="/images/projects/van-gogh/gallery-1.png"
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
              className="relative aspect-video overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/projects/van-gogh/gallery-4.png"
                alt="Final Result"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </ReactLenis>
  );
}
