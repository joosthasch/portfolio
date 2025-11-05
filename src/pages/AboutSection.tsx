"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-[#141414] py-16 sm:py-24 md:p-32 rounded-2xl sm:rounded-3xl">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black italic uppercase font-fira text-white mb-12 sm:mb-16 md:mb-20"
        >
          Über mich
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 text-white font-fira"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Hey, ich bin Joost 👋
            </h3>

            <div className="space-y-4 text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
              <p>
                Ich bin 22 Jahre alt und studiere{" "}
                <span className="text-white font-semibold">
                  Media & Interaction Design
                </span>{" "}
                an der Hochschule Osnabrück im fünften Semester. Mein Schwerpunkt liegt auf
                der Gestaltung digitaler Anwendungen an der Schnittstelle zwischen Design und
                Technologie.
              </p>

              <p>
                Mich interessiert, wie durchdachtes Design komplexe Inhalte verständlich und
                zugänglich machen kann.{" "}
                <span className="text-white font-semibold">
                  Klare Strukturen, intuitive Interaktionen und visuelle Präzision
                </span>{" "}
                sind für mich die Grundlage einer überzeugenden Nutzererfahrung.
              </p>

              <p>
               Ich arbeite gern an Projekten, die {" "}
                <span className="text-white font-semibold">
                  Gestaltung und Technologien verbinden
                </span>{" "}
                – vom ersten Scribble über Prototypen in Figma bis zur Umsetzung in React.

              </p>
            </div>
          </motion.div>

          {/* Right: 2 Images Stacked Vertically */}
          <div className="flex flex-col gap-10 md:gap-20 px-0 sm:pl-5 xl:pl-10">
            {/* Image 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative aspect-video overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/about/joost.png"
                alt="Joost at work"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}