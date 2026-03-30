"use client";

import Link from "next/link";
import { useState } from "react";
import TrialModal from "@/ui/TrialModal";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-dark-surface border-b border-primary/20">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-dark-bg font-bold text-lg">CG</span>
          </div>
          <span className="text-xl font-bold text-light-text hidden sm:inline">
            Calhoun Grappling
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link href="/" className="text-light-text hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/schedule" className="text-light-text hover:text-primary">
              Schedule
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-light-text hover:text-primary">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-light-text hover:text-primary">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-light-text hover:text-primary">
              Contact
            </Link>
          </li>
          <li>
            <TrialModal />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          aria-label="Open mobile menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
        >
          <span
            className={`w-6 h-0.5 bg-light-text transition-all ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-light-text transition-all ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-light-text transition-all ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-bg border-t border-primary/20">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-light-text hover:text-primary py-2"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/schedule"
              className="block text-light-text hover:text-primary py-2"
              onClick={closeMobileMenu}
            >
              Schedule
            </Link>
            <Link
              href="/about"
              className="block text-light-text hover:text-primary py-2"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="block text-light-text hover:text-primary py-2"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-light-text hover:text-primary py-2"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <div className="pt-2 border-t border-primary/20">
              <TrialModal />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
