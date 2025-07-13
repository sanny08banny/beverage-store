"use client";
import { useRef, useState, useEffect } from "react";
import MobileMenu from "./components/MobileMenu";
import HeroSection from "./components/HeroSection";
import PurposeVisionSection from "./components/PurposeVisionSection";
import AlphaSection from "./components/AlphaSection";
import FlavoursLogo from "./components/FlavoursLogo";
import FlavoursSection from "./components/FlavoursSection";
import RegularFlavoursSection from "./components/RegularFlavoursSection";
import Header from "./components/Header";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // adjust threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center font-sans">

      {/* Fixed Header */}
      <Header />

      {/* Mobile Menu */}
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}

      {/* Main content with top padding */}
      <main className="w-full pt-24 px-4 sm:px-0 max-w-7xl">
        <HeroSection onCTAClick={() => sectionRef.current?.scrollIntoView({ behavior: "smooth" })} />

        <div ref={sectionRef} className="flex flex-col gap-8">
          <PurposeVisionSection />
          <AlphaSection />
          <FlavoursLogo />
          <FlavoursSection />
          <RegularFlavoursSection />
          <a href="/create_product_form">Admin</a>
        </div>
      </main>
    </div>
  );
}




