"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectNavbar() {
  return (
    <nav className="fixed top-0 w-full px-6 py-4 pt-16 flex items-center max-w-7xl mx-auto">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-medium text-black hover:text-gray-700 transition-colors"
        aria-label="Zurück zur Startseite"
      >
        <ArrowLeft className="w-5 h-5" />
        Home
      </Link>
    </nav>
  );
}