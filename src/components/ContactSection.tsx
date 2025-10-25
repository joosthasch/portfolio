"use client";

import React from "react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#141414] rounded-t-2xl sm:rounded-t-3xl py-16 sm:py-24 font-fira"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black italic text-white">
            Kontakt
          </h2>
        </div>

        {/* Netlify Form */}
        <form
          name="contact"
          method="POST"
          action="/thank-you"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="max-w-2xl mx-auto space-y-4"
        >
          {/* damit Netlify das Formular erkennt */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot (versteckt für Bots) */}
          <div style={{ display: "none" }}>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300">Name</label>
            <input
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-neutral-700 bg-[#0f1113] px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Dein Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300">E‑Mail</label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-neutral-700 bg-[#0f1113] px-4 py-2 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="name@beispiel.de"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300">Nachricht</label>
            <textarea
              name="message"
              rows={6}
              required
              className="mt-1 w-full rounded-lg border border-neutral-700 bg-[#0f1113] px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Worum geht's? (Kurzbeschreibung)"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
            <button
              type="submit"
              className="inline-block px-6 py-2 bg-white text-[#141414] font-bold rounded-full hover:bg-gray-200 transition-colors duration-300 font-fira"
            >
              Nachricht senden
            </button>

            <div className="text-sm text-neutral-400">
              Oder direkt per{" "}
              <a
                className="text-indigo-400 hover:underline"
                href="mailto:deine@adresse.de"
              >
                E‑Mail
              </a>
            </div>
          </div>

          <p className="text-xs text-neutral-500 mt-2 text-center">
            Durch Absenden erklärst du dich damit einverstanden, dass ich deine Nachricht per E‑Mail erhalte.
          </p>
        </form>
      </div>
    </section>
  );
}