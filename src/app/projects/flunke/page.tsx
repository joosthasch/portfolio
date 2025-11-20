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
              src="/images/projects/flunke/Header2.png"
              alt="Flunk-E Project"
              width={1920}
              height={800}
              className="w-full h-auto rounded-2xl"
              priority
            />
            <div className="absolute inset-0 " />
            <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 md:left-16 text-white">
              <h1 className="text-xl sm:text-3xl md:text-6xl font-bold mb-2">
                Flunk-E
              </h1>
              <p className="text-sm sm:text-xl md:text-2xl font-medium opacity-90">
                IOT-Anwendung
              </p>
            </div>
          </div>
        </section>

          {/* DESCRIPTION */}
          <section className="max-w-7xl mx-auto sm:text-center px-6 md:px-12 lg:px-20">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-neutral-700">
              Ein Ball. Zwei Teams. Unendlich viel Spannung.
              Flunk-E verwandelt das Spiel Flunkyball in ein interaktives Spielerlebnis – mit Sensor, Echtzeit-Feedback und App-Anbindung.
              Wer trifft, löst digitale Effekte und neue Regeln aus.
              So wird aus jeder Runde ein Wettkampf zwischen Skill, Glück und Chaos.
            </p>
          </section>

            {/* CONTENT SECTIONS */}
        <section className="bg-[#141414] mt-32 py-16 sm:py-24 md:py-32 rounded-t-2xl sm:rounded-t-3xl">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-16 md:space-y-24">
             
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
                    Research & Konzept
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                    Im Team haben wir analysiert, wie man das klassische Spiel digital unterstützen kann: Welche Sensorik wird benötigt? Wie kann die App das Spielerlebnis bereichern, ohne dass das Handy ständig benutzt werden muss? Dabei entstanden erste Konzepte für Userflows, Challenges und die Integration ins Spiel.
                  </p>
                </div>
  
                <div className="relative aspect-[22/17] overflow-hidden rounded-2xl max-h-[700px] w-full max-w-sm mx-auto lg:ml-auto lg:mr-0">
                  <Image
                    src="/images/projects/flunke/brainstorm.png"
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
                    <div className="relative aspect-[13/18] overflow-hidden rounded-2xl h-[300px] sm:h-[400px] max-h-[600px] mx-auto lg:mx-0">
                    <Image
                        src="/images/projects/flunke/flowchart.png"
                        alt="VR Environment"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    </div>
    
                    <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Userflow & App-Integration
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                        Wir haben den Ablauf des klassischen Spiels aufgenommen und überlegt, wie die App und Challenges integriert werden können, ohne das Spielerlebnis zu stören. Der Userflow zeigt die Schritte vom Wurf bis zum Treffer, inklusive der Einbindung der App-Challenges und Tutorials.“
                    </p>
                    </div>
                </motion.div>

            {/* 5. Full-width Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative overflow-hidden"
            >
              <Image
              src="/images/projects/flunke/design.png"
              alt="Final Result"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-2xl"
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
                    Zur technischen Umsetzung wurden zwei Arduinos eingesetzt: Der Sensorball sendet seinen Status an die Flasche, die beide Zustände (Wurf & Treffer) automatisch an das Smartphone weitergibt. So werden Würfe und Treffer ohne manuelle Eingabe erkannt.
                  </p>
                </div>
  
                <div className="relative aspect-[22/15] overflow-hidden rounded-2xl max-h-[700px] w-full max-w-sm mx-auto lg:ml-auto lg:mr-0">
                  <Image
                    src="/images/projects/flunke/technic.png"
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
              <div className="relative aspect-[11/16] overflow-hidden rounded-2xl max-h-[600px] mx-auto lg:mx-0">
                <video
                  src="/videos/flunke/tutorial.mp4"      /* Pfad anpassen */
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
                 Das Design von Flunke ist bewusst schlicht, aber kontrastreich gehalten, damit Spieler:innen neue Challenges schnell erfassen können, ohne vom eigentlichen Spielgeschehen abgelenkt zu werden. Klare Flächen, deutliche Farben und eine aufgeräumte Typografie sorgen für Übersicht und Tempo.
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                  Ein selbst animiertes Tutorial führt mit einem Augenzwinkern ins Spiel ein, während handgezeichnete Illustrationen und animierte Challenges für Abwechslung und Spielfreude sorgen.
                </p>
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
                src="/images/projects/flunke/challenges.png"
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
                    Fertige App – Funktionen auf einen Blick
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                    Die App bildet das digitale Herzstück des erweiterten Flunkyball-Erlebnisses. Sie erkennt automatisch Würfe und Treffer, zeigt den Spielstatus an und integriert Challenges, ohne den Spielablauf zu stören. Ein klar strukturierter Ablauf und intuitive Interaktionen sorgen dafür, dass sich das Spiel schnell und dynamisch steuern lässt – ganz ohne manuelle Eingaben.
                  </p>
                </div>
  
                <div className="relative aspect-[16/22] overflow-hidden rounded-2xl max-h-[700px] w-full max-w-sm mx-auto lg:ml-auto lg:mr-0">
                  <Image
                    src="/images/projects/flunke/hand_screen.png"
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
