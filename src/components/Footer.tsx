"use client";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#141414] text-white z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Column 1: Branding & About */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-black italic font-fira">
              JOOST HASCHEN
            </h3>
            <p className="text-sm md:text-base text-gray-400 font-fira leading-relaxed">
              UX/UI Designer & Developer specializing in interactive experiences, VR applications, and user-centered design.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg md:text-xl font-bold font-fira uppercase">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm md:text-base text-gray-400 hover:text-white transition-colors duration-200 font-fira"
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-sm md:text-base text-gray-400 hover:text-white transition-colors duration-200 font-fira"
              >
                Über mich
              </Link>
              <Link
                href="/#projects"
                className="text-sm md:text-base text-gray-400 hover:text-white transition-colors duration-200 font-fira"
              >
                Projekte
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg md:text-xl font-bold font-fira uppercase">
              Kontakt
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:joost.haschen@example.com"
                className="flex items-center gap-2 text-sm md:text-base text-gray-400 hover:text-white transition-colors duration-200 font-fira"
              >
                <Mail className="w-5 h-5" />
                joost.haschen@web.de
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Bar: Legal Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p className="font-fira">
            &copy; {currentYear} Joost Haschen. Alle Rechte vorbehalten.
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6 font-fira">
            <Link
              href="/impressum"
              className="hover:text-white transition-colors duration-200"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-white transition-colors duration-200"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}