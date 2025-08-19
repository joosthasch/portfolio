"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-100 py-6 px-8 flex flex-col md:flex-row items-center justify-between">
      <span className="text-sm">&copy; {new Date().getFullYear()} Joost Haschen</span>
      <span className="text-sm mt-2 md:mt-0">
        Made with ❤️ | <a href="mailto:dein.email@example.com" className="hover:underline">Kontakt</a>
      </span>
    </footer>
  );
}