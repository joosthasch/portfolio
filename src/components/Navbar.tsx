// src/app/components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";

export function Navbar() {
  return (
    <nav className="w-full bg-gray-100 dark:bg-black p-4 pt-16">
      <ul className="container mx-auto flex justify-between items-center">
        <li>
          <Link
            href="/"
            className="flex items-center text-3xl text-black dark:text-white"
          >
            <Image
              src="/assets/J_Logo.png" // Passe den Pfad und Dateinamen an!
              alt="Logo"
              width={28}
              height={28}
              className="mx-4 border-2 border-black"
            />
            Joost
          </Link>
        </li>
        <li>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/about"
                className={`
                    relative inline-block text-2xl
                    transition-transform duration-300 ease
                    hover:-translate-y-1

                    before:content-['']
                    before:absolute before:-bottom-[2px]
                    before:left-0 before:right-0
                    before:h-[5px]
                    before:bg-white
                    before:origin-bottom
                    before:scale-y-0
                    before:transition-transform before:duration-300 before:ease
                    hover:before:scale-y-100
                  `}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`
                    relative inline-block text-2xl
                    transition-transform duration-300 ease
                    hover:-translate-y-1

                    before:content-['']
                    before:absolute before:-bottom-[2px]
                    before:left-0 before:right-0
                    before:h-[5px]
                    before:bg-white
                    before:origin-bottom
                    before:scale-y-0
                    before:transition-transform before:duration-300 before:ease
                    hover:before:scale-y-100
                  `}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`
                    relative inline-block text-2xl
                    transition-transform duration-300 ease
                    hover:-translate-y-1

                    before:content-['']
                    before:absolute before:-bottom-[2px]
                    before:left-0 before:right-0
                    before:h-[5px]
                    before:bg-white
                    before:origin-bottom
                    before:scale-y-0
                    before:transition-transform before:duration-300 before:ease
                    hover:before:scale-y-100
                  `}
              >
                Contact
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
