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

            {/* 5. Full-width Video Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[16/9] max-h-[600px] mx-auto lg:mx-0 shadow-xl">
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

           {/* 💬 3. Animated Conversation Section */}
            <div className="bg-[#141414] rounded-2xl py-16 px-4 sm:px-8 md:px-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-white"
              >
                Ein Einblick in das Gesprächserlebnis
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
                  Die virtuelle Umgebung basiert auf einem <a
                    href="https://sketchfab.com/3d-models/van-gogh-room-311d052a9f034ba8bce55a1a8296b6f9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                    title="Sketchfab öffnen (öffnet in neuem Tab)"
                  >
                    Sketchfab-Modell
                  </a>{" "} , das in Blender um zusätzliche Details ergänzt wurde, um Van Goghs Lebensraum atmosphärisch einzufangen. Die Interaktionen wurden in Unity für die Meta Quest 3 entwickelt.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Über Speech-to-Text wird die gesprochene Sprache an OpenAI gesendet, wo auf Grundlage von Van Goghs Briefen eine Antwort generiert wird. Diese wird anschließend per Text-to-Speech mit einem niederländischen Akzent wiedergegeben – und lässt so ein glaubhaftes Gespräch mit Van Gogh entstehen.
                </p>
              </div>

              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl max-h-[600px] w-full max-w-sm mx-auto lg:ml-auto lg:mr-0">
                <Image
                  src="/images/projects/van-gogh/code.png"
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
