"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import SplineScene from "./components/SplineScene";
import MobileMenu from "./components/MobileMenu";
import { motion } from "framer-motion";
import PurposeVisionSection from "./components/PurposeVisionSection";
import FlavoursLogo from "./components/FlavoursLogo";
import MetaLine from "./components/MetaLine";
import WordsEffect from "./components/texts/WordsEffect";
import LoadingText from "./components/texts/ShimmerText";
import FlavoursSection from "./components/FlavoursSection";
import FlavourCard from "./components/texts/FlavourCard";
import RegularFlavoursSection from "./components/RegularFlavoursSection";
import HeroSection from "./components/HeroSection";
import AlphaSection from "./components/AlphaSection";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
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

      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-7xl mx-auto text-center sm:text-left relative">
      <HeroSection onCTAClick={() => sectionRef.current?.scrollIntoView({ behavior: "smooth" })} />

        <div ref={sectionRef} className="w-full flex flex-col gap-8">
          <PurposeVisionSection />
          <AlphaSection/>
          <FlavoursLogo />
          <FlavoursSection />
          <RegularFlavoursSection />
        </div>

      </main>

    </div>
  );
}



