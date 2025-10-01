"use client";

import Image from "next/image";
import { ReactLenis } from "lenis/react";
import Link from "next/link";
import { X } from "lucide-react";

export default function About() {
    return (
    <ReactLenis root>
      <main className="min-h-screen bg-white text-gray-900 font-archivo">
        {/* Header with title and close button */}
        <header className="flex justify-between items-start py-4 md:py-6 max-w-7xl mx-auto">
          <div className="px-6">
            <h1 className="text-lg leading-relaxed text-gray-900">
              Über mich
            </h1>
            <p className="text-lg font-thin text-gray-700">
              Joost Haschen
            </p>
          </div>

          <Link
            href="/"
            className="px-6 text-gray-900 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </Link>
        </header>

        <section className="max-w-7xl mx-auto">
          {/* Centered text content */}
          <div className="flex justify-center px-6 pb-20">
            <div className="max-w-3xl">
              <p className="text-lg leading-relaxed text-gray-700">
                Hinweis: Diese Seite befindet sich noch im Aufbau. (Work in Progress)
              </p>
            </div>
          </div>

        </section>
      </main>
    </ReactLenis>
  );
}
