"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import SplineScene from "./components/SplineScene";
import MobileMenu from "./components/MobileMenu";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center min-h-screen p-8 pb-20 gap-4 sm:p-4 font-sans">

      {/* Header */}
      <header className="w-full flex justify-between items-center row-start-1 max-w-7xl mx-auto">
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

      {/* Mobile Menu */}
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}

      {/* Main Content */}
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-7xl mx-auto text-center sm:text-left">
        <SplineScene />

        <motion.div
          whileHover={{ y: -5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-lg sm:text-xl font-semibold text-blue-600 cursor-pointer flex items-center gap-2"
        >
          <span>See Our Products</span>
          <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1 }}>
            ↓
          </motion.span>
        </motion.div>
      </main>
    </div>
  );
}



