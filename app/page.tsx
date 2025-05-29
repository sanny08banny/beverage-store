"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SplineScene from "./components/SplineScene";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      {/* Header */}
      <header className="w-full flex justify-between items-center row-start-1 max-w-7xl mx-auto">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/natural_logo.png"
            alt="Beverage World Logo"
            width={100}
            height={100}
            className="object-contain w-12 sm:w-[100px] h-auto"
          />

        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-6 text-base font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="/discover" className="hover:text-blue-600 transition-colors">Discover</Link>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="sm:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
          <div className="bg-white w-64 h-full p-6 shadow-xl relative">
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-6 mt-12 text-base font-medium">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/discover" onClick={() => setMenuOpen(false)}>Discover</Link>
            </nav>
          </div>

          {/* Click outside to close */}
          <div
            className="flex-1"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          ></div>
        </div>
      )}

      {/* Main Content */}
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-7xl mx-auto">
        <SplineScene />
      </main>
    </div>
  );
}


