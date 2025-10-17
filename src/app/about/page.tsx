"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { ReactLenis } from "lenis/react";

export default function About() {
  return (
    <ReactLenis root>
      <main className="min-h-screen bg-white text-gray-900 font-archivo">
        {/* Header mit Schließen-Button */}
        <header className="flex justify-between items-start py-4 md:py-6 max-w-7xl mx-auto">
          <div className="px-6">
            <h1 className="text-2xl font-bold text-gray-900">Über mich</h1>
          </div>
          <Link
            href="/"
            className="px-6 text-gray-900 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </Link>
        </header>

        {/* Hauptbereich: Text links, Bild rechts */}
        <section className="max-w-5xl mx-auto px-6 mt-8">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
    {/* Text: nimmt 2/3 ein */}
    <div className="md:col-span-1">
      <h2 className="text-3xl font-light mb-4">Hi, ich bin Joost!</h2>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        Ich bin kreativer Entwickler mit einer Leidenschaft für nutzerzentrierte digitale Produkte...
      </p>
      <p className="text-base text-gray-500 italic">Work in Progress 🚧</p>
    </div>
    {/* Bild: nimmt 1/3 ein */}
    <div className="md:col-span-1 flex justify-center md:justify-end">
      <Image
        src="/images/about/joost.png"
        width={420}
        height={420}
        alt="Joost Haschen"
        className="rounded-4xl shadow-md object-cover"
      />
    </div>
  </div>
</section>

        {/* Stuff darunter */}
        <section className="max-w-5xl mx-auto px-6 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Kontakt</h3>
              <ul className="text-gray-700 space-y-1">
                <li>
                  <a
                    href="mailto:deine.email@domain.de"
                    className="hover:underline"
                  >
                    deine.email@domain.de
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/joosthasch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </li>
                {/* Mehr Links */}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Skills</h3>
              <ul className="text-gray-700 space-y-1">
                <li>Next.js & React</li>
                <li>UI/UX Design</li>
                <li>IoT & Prototyping</li>
                {/* Mehr Skills */}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Fun Fact</h3>
              <p className="text-gray-700">
                Der einzige Ball, den ich öfter werfe als einen Flunkyball, ist ein Tennisball für meinen Hund.
              </p>
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}