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
              src="/images/projects/paeddl/Header.png"
              alt="Flunk-E Project"
              width={1920}
              height={800}
              className="w-full h-auto rounded-2xl"
              priority
            />
            <div className="absolute inset-0 " />
            <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 md:left-16 text-white">
              <h1 className="text-xl sm:text-3xl md:text-6xl font-bold mb-2">
                Päddl
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
              Päddl ist eine communitybasierte App, die die Sicherheit von Radfahrer:innen im urbanen Raum verbessern soll. Nutzer:innen können Gefahrenstellen wie Glasscherben, Baustellen oder schlechte Straßenverhältnisse melden und andere Fahrradfahrende in Echtzeit davor warnen. So entsteht ein kollaboratives System, das auf geteilten Erfahrungen basiert und zur gegenseitigen Rücksichtnahme beiträgt.
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
                <div className="relative aspect-[8/11] overflow-hidden rounded-2xl h-[400px] sm:h-[500px] max-h-[600px] mx-auto lg:mx-0">
                <Image
                    src="/images/projects/paeddl/ui.png"
                    alt="VR Environment"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                />
                </div>

                <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    UI-Design & visuelle Unterstützung
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                    Im Rahmen des Projekts unterstützte ich das UI-Design der App. Der Fokus lag auf einer klaren, verständlichen Darstellung von Gefahrenmeldungen, damit Nutzer:innen relevante Informationen schnell erfassen können – insbesondere während der Nutzung im Alltag. Durch reduzierte Layouts und eine konsistente visuelle Sprache sollte die App leicht zugänglich bleiben und das Melden sowie Erkennen von Gefahren möglichst unkompliziert machen.
                </p>
                </div>
            </motion.div>

            {/* 5. Full-width Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative aspect-video overflow-hidden justify-center"
            >
                <div className="relative aspect-[20/13] overflow-hidden rounded-2xl max-h-[600px] w-full mx-auto">
                <Image
                    src="/images/projects/paeddl_hover.png"
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
                  Projektkontext & Öffentlichkeit
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                   Das Projekt wurde im Startup-Umfeld entwickelt und unter anderem beim gooe.eu Meetup in Groningen öffentlich präsentiert. Der Auftritt diente dazu, die Vision von päddl vorzustellen, Feedback zu sammeln und das Thema Fahrradsicherheit in einen größeren gesellschaftlichen Kontext einzuordnen.
                </p>
              </div>

              <div className="relative aspect-[6/8] overflow-hidden rounded-2xl max-h-[700px] w-full max-w-sm mx-auto lg:ml-auto lg:mr-0">
                <Image
                  src="/images/projects/paeddl/groningen.png"
                  alt="AI Conversation"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
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
                  Social Media & Community-Kommunikation
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                Zusätzlich war ich am Social-Media-Auftritt von Päddl beteiligt. Ziel war es, Aufmerksamkeit für das Projekt zu schaffen, die Community einzubinden und das Thema Fahrradsicherheit niedrigschwellig zu kommunizieren. Die Inhalte sollten sowohl informieren als auch zur aktiven Teilnahme motivieren und so den gemeinschaftlichen Charakter der App stärken.
                </p>
              </div>

              <div className="relative aspect-[7/11] overflow-hidden max-h-[800px] w-full">
                <Image
                  src="/images/projects/paeddl/insta.png"
                  alt="AI Conversation"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
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
                Meine Rolle im Projekt
              </h2>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
               Meine Rolle im Projekt lag im Bereich Social Media sowie in der visuellen und UI-bezogenen Unterstützung. Dabei arbeitete ich eng mit dem Team zusammen, um die Idee von päddl nach außen klar zu kommunizieren und visuell konsistent umzusetzen – sowohl innerhalb der App als auch in der öffentlichen Präsentation des Projekts.
              </p>
            </motion.div>

          </div>
        </section>
      
      </main>
      <Footer />
    </ReactLenis>
  );
}
