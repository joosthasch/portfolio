"use client";
import Link from "next/link";

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
  return (
    <nav className="absolute top-0 left-0 w-full p-4 pt-5 z-50 bg-white">
      <ul className="flex max-w-7xl mx-auto text-lg sm:text-xl text-[#141414] font-fira">
        <li className="flex-1 flex justify-center font-bold items-center">
          <Link href="/" className={linkHoverClass}>
            Joost
          </Link>
        </li>
        <li className="flex-1 flex justify-center items-center">
          <Link href="/about" className={linkHoverClass}>
            Über mich
          </Link>
        </li>
        <li className="flex-1 flex justify-center items-center">
          <Link href="/projects" className={linkHoverClass}>
            Projekte
          </Link>
        </li>
        <li className="flex-1 flex justify-center items-center">
          <Link href="/contact">
            <div className="bg-[#141414] text-white rounded-full font-fira font-regular px-6 py-2">
              Kontakt
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}