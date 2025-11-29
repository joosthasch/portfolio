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
          <div className="relative rounded-2xl overflow-hidden mx-6 sm:mx-12 md:mx-20">
            <Image
              src="/images/projects/van-gogh/Header.png"
              alt="Van Gogh Project"
              width={1920}
              height={800}
              className="w-full h-auto rounded-2xl"
              priority
            />
            <div className="absolute inset-0" />
            <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 md:left-16 text-white">
              <h1 className="text-xl sm:text-3xl md:text-6xl font-bold mb-2">
                Van Goghs Gedankenwelt
              </h1>
              <p className="text-sm sm:text-xl md:text-2xl font-medium opacity-90">
                VR Anwendung
              </p>
            </div>
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="max-w-7xl mx-auto sm:text-center px-6 md:px-12 lg:px-20">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-700">
            Für das Visiodrom Wuppertal entstand eine immersive VR-Erfahrung, die Besucher:innen in die Gedankenwelt von Vincent van Gogh eintauchen lässt. Mithilfe einer VR-Brille können sie sich mit einer KI unterhalten, die auf den Briefen des Künstlers basiert.
          </p>
          <p className="mt-16 text-base sm:text-xl md:text-3xl leading-relaxed font-bold text-neutral-800">
            Ein poetisches Gespräch zwischen Vergangenheit und digitaler Gegenwart.
          </p>
        </section>

        {/* CONTENT SECTIONS */}
        <section className="bg-[#141414] mt-32 py-16 sm:py-24 md:py-32 rounded-t-2xl sm:rounded-t-3xl">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-16 md:space-y-24">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}>
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    Die Idee hinter dem Projekt
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Ziel war es, Van Gogh nicht nur als historische Figur zu zeigen, sondern als erlebbaren Menschen. Dafür wurde eine KI entwickelt, die auf seinen Briefen basiert – vor allem denen an seinen Bruder Theo. So entstehen Gespräche, die sich in Stil und Gedankenwelt an Van Gogh anlehnen und Besucher:innen einen persönlichen Zugang ermöglichen.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Die Interaktivität ermöglicht es, auf individuelle Fragen und Themen einzugehen, und macht die historischen Texte erlebbar. Anstatt nur Informationen zu konsumieren, können die Besucher:innen Van Goghs Gedanken selbst entdecken und „erleben“, was eine neue Dimension der Auseinandersetzung mit Kunstgeschichte eröffnet.
                  </p>
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
                  <div className="relative aspect-[16/20] overflow-hidden rounded-2xl h-[400px] sm:h-[500px] lg:h-[700px] max-h-[700px] mx-auto lg:mx-0">
                  <Image
                      src="/images/projects/van-gogh/research.png"
                      alt="VR Environment"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  </div>
  
                  <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                      Recherche & Konzeptphase
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                      Zu Beginn führten wir eine konzentrierte Research-Phase durch, in der wir Ideen, technische Möglichkeiten und erste konzeptionelle Ansätze in Notion sammelten. Dabei stand vor allem die Frage im Mittelpunkt, wie KI in einer Ausstellung so eingesetzt werden kann, dass sie Besucher:innen nicht überfordert, sondern neugierig macht.                    </p>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                      Schnell wurde deutlich, dass ein natürliches Gesprächserlebnis die niedrigste Einstiegshürde bietet. Deshalb prüften wir Speech-to-Text-Lösungen, passende KI-Modelle auf Basis der Van-Gogh-Briefe sowie Text-to-Speech-Varianten, die einen authentischen Klang erzeugen. Diese Recherche bildete die Grundlage für die Entscheidung, eine intuitive VR-Erfahrung zu entwickeln, die historischen Inhalt persönlich, zugänglich und emotional erlebbar macht.                    </p>
                  </div>
              </motion.div>

            {/* 5. Full-width Video Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[16/9] max-h-[600px] w-full">
                  <video
                    src="/videos/van-gogh/gameplay.mp4"
                    controls
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ position: "absolute", top: 0, left: 0 }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>

              {/* 5. Full-width Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative aspect-[21/17] overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/projects/van-gogh/kiconversation.png"
                alt="Final Result"
                fill
                className="object-cover"
              />
            </motion.div>

           {/* 💬 3. Animated Conversation Section */}
            
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-white"
              >
                Wie ein Gespräch im Zimmer Van Goghs verlaufen könnte
              </motion.h2>
              <div className="rounded-2xl py-16 px-4 sm:px-8 md:px-12 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/projects/van-gogh/gallery-4.png')" }}>
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
                    className={`max-w-[80%] p-4 rounded-2xl shadow-xl ${
                      line.speaker === "user"
                        ? "self-end bg-white text-[#141414]"
                        : "self-start bg-[#1e1e1e] text-gray-100"
                    }`}
                  >
                    {line.text}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 5. Full-width Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative aspect-video overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/projects/van-gogh/vrbrille.png"
                alt="Final Result"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}>
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    Ein neuer Zugang zur Kunstgeschichte
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                    Das Projekt zeigt, wie digitale Technologien neue Perspektiven auf kunsthistorische Inhalte eröffnen. Durch die Rekonstruktion historischer Stimmen und ihre Einbettung in interaktive Szenarien wird Lernen persönlicher und unmittelbarer. Vergangene Persönlichkeiten werden nicht nur beschrieben, sondern erlebbar gemacht – und Kunstgeschichte wird zu einer Erfahrung, die man aktiv erforschen kann.
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
