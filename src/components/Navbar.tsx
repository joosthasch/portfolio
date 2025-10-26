"use client";
import React, { useState } from "react";
import Link from "next/link";

const email = "joost.hasch@web.de";
const mailtoHref = `mailto:${encodeURIComponent(email)}`;

const linkHoverClass = `
  relative inline-block
  transition-transform duration-300 ease
  hover:-translate-y-1
  before:content-['']
  before:absolute before:-bottom-[2px]
  before:left-0 before:right-0
  before:h-[4px]
  before:bg-[#141414]
  before:origin-bottom
  before:scale-y-0
  before:transition-transform before:duration-300 before:ease
  hover:before:scale-y-100
`;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full p-4 z-40 bg-white font-fira">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand */}
        <Link href="/" className="text-2xl sm:text-3xl font-black italic uppercase text-[#141414]">
          Joost Haschen
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg sm:text-xl text-[#141414] font-black uppercase font-fira">
          <li>
            <Link href="/#about" className={linkHoverClass}>
              Über mich
            </Link>
          </li>
          <li>
            <Link href="/#projects" className={linkHoverClass}>
              Projekte
            </Link>
          </li>
          <li>
            <a
              href={mailtoHref}
              className="inline-block px-6 py-2 bg-[#141414] text-white font-bold rounded-full hover:bg-[#292929] transition-colors duration-300 font-fira"
            >
              Kontakt
            </a>
          </li>
        </ul>

        {/* Mobile: Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menü umschalten"
          className="md:hidden p-2 rounded-md text-[#141414] hover:bg-black/5"
        >
          {open ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-2 bg-white border border-neutral-200 rounded-lg shadow-lg mx-4 p-4 flex flex-col gap-4 text-center font-fira uppercase font-bold text-[#141414]">
          <Link href="/#about" onClick={() => setOpen(false)}>
            Über mich
          </Link>
          <Link href="/#projects" onClick={() => setOpen(false)}>
            Projekte
          </Link>
          <a
            href={mailtoHref}
            onClick={() => setOpen(false)}
            className="inline-block px-6 py-2 bg-[#141414] text-white rounded-full hover:bg-[#292929] transition-colors"
          >
            Kontakt
          </a>
        </div>
      )}
    </nav>
  );
}
