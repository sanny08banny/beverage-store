// components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import SplineScene from "./SplineScene";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="w-full relative min-h-[80vh] flex items-center justify-center">
      <SplineScene />

      {/* Floating CTA */}
      <motion.div
        whileHover={{ y: -5, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg sm:text-xl font-semibold text-blue-600 cursor-pointer flex flex-col items-center gap-2"
        onClick={onCTAClick}
      >
        <span>See Our Products</span>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
