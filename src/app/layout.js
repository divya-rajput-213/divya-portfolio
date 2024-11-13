"use client";
// app/layout.js
import Link from "next/link";
import "./globals.css"; // Global CSS (if any)
import { useState } from "react";

export default function Layout({ children }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <html lang="en">
      <head>
        <title>Your Portfolio</title>
      </head>
      <body className="min-h-screen bg-[#D4C5B5] text-zinc-800">
        {/* Navigation Menu */}
        <nav >
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo or Title */}
            <Link
              href="/"
              className="text-3xl font-serif  hover:text-orange-400"
            >
              MyPortfolio
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <li className="inline-block">
                <Link
                  href="/portfolio/about"
                  className="hover:text-orange-400 transition duration-200"
                >
                  About
                </Link>
              </li>
              <li className="inline-block">
                <Link
                  href="/portfolio/profile"
                  className="hover:text-orange-400 transition duration-200"
                >
                  Profile
                </Link>
              </li>
              <li className="inline-block">
                <Link
                  href="/portfolio/skills"
                  className="hover:text-orange-400 transition duration-200"
                >
                  Skills
                </Link>
              </li>
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="md:hidden flex items-center">
              <button
                className="text-white focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div
            className={`md:hidden ${
              isMobileMenuOpen ? "block" : "hidden"
            } `}
          >
            <ul className="space-y-4 px-4 py-2">
              <li>
                <Link
                  href="/portfolio/about"
                  className="block hover:text-orange-400 transition duration-200"
                  onClick={toggleMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio/profile"
                  className="block hover:text-orange-400 transition duration-200"
                  onClick={toggleMobileMenu}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio/skills"
                  className="block hover:text-orange-400 transition duration-200"
                  onClick={toggleMobileMenu}
                >
                  Skills
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
