// src/app/components/Navbar.tsx
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 pt-16 z-50">
      <ul className="container mx-auto flex justify-between items-center">
        <li>
          <Link
            href="/"
            className="flex items-center text-xl sm:text-3xl text-white"
          >
            Joost
          </Link>
        </li>
        <li>
          <ul className="flex space-x-6 sm:text-2xl">
            <li>
              <Link
                href="/about"
                className={`
                    relative inline-block
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
                    relative inline-block
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
                    relative inline-block
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
