"use client";
import Logo from "@/components/layout/Logo";
import useOutsideClick from "@/hooks/useOutsideClick";
import Link from "next/link";
import { useState } from "react";
import { GiSpellBook } from "react-icons/gi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuRef = useOutsideClick(closeMenu);
  return (
    <header className="bg-white shadow-md md:py-2 py-0">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 z-10 md:justify-center">
        {/* Logo */}
        <Link href="/" className="md:absolute md:left-6">
          <Logo />
        </Link>

        {/* Navigation Menu */}
        <nav
          ref={menuRef}
          className={`fixed inset-y-0 right-0 bg-white shadow-md md:w-auto w-1/2 transform z-50 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:static md:flex md:space-x-6 md:translate-x-0 md:shadow-none md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:items-center md:space-x-6 p-6 md:p-0">
            <li>
              <Link href="/about">
                <span className="text-gray-600 hover:text-blue-500">About</span>
              </Link>
            </li>
            <li>
              <Link href="/programs">
                <span className="text-gray-600 hover:text-blue-500">
                  Programs
                </span>
              </Link>
            </li>
            <li>
              <Link href="/shops">
                <span className="text-gray-600 hover:text-blue-500">Shops</span>
              </Link>
            </li>
            <li>
              <Link href="/news">
                <span className="text-gray-600 hover:text-blue-500">News</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="text-gray-600 hover:text-blue-500">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <Link href="/apply" className="md:absolute md:right-6 md:block hidden">
          <span className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600">
            Apply now
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
