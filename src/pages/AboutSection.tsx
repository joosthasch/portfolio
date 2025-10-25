"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  // Passe die E‑Mail hier an
  const email = "joost.hasch@web.de";

  const mailtoHref = `mailto:${encodeURIComponent(email)}`;

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
                an der Hochschule Osnabrück im fünften Semester. Zwischen Design,
                Technologie und Storytelling finde ich meinen kreativen Raum.
              </p>

              <p>
                Ich achte auf jedes Detail, weil ich glaube, dass gutes Design im
                Kleinen beginnt. Mein Ziel ist es,{" "}
                <span className="text-white font-semibold">
                  digitale Erlebnisse zu schaffen, die intuitiv, zugänglich und
                  bedeutungsvoll sind
                </span>{" "}
                – mit Charakter, Haltung und Herz.
              </p>

              <p>
                Ich liebe es, Ideen in erlebbare Anwendungen zu übersetzen – vom
                Scribble zum Prototypen in Figma bis zur fertigen App mit React.
                Dabei lege ich Wert auf{" "}
                <span className="text-white font-semibold">
                  visuelle Klarheit, Persönlichkeit und eine starke, konsistente
                  Nutzererfahrung.
                </span>
              </p>
            </div>

            {/* CTA Button: öffnet Mail-Client via mailto */}
            <div className="pt-4">
              <a
                href={mailtoHref}
                className="inline-block px-6 py-2 bg-white text-[#141414] font-bold rounded-full hover:bg-gray-200 transition-colors duration-300 font-fira"
                aria-label={`E-Mail an ${email} senden`}
              >
                Lass uns sprechen
              </a>
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
            {/* Image 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative aspect-video overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/about/photoshoot.png"
                alt="Joost Haschen"
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