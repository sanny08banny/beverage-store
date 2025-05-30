"use client";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

interface Props {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white w-64 h-full p-6 shadow-xl relative"
      >
        <button
          className="absolute top-4 right-4"
          onClick={onClose}
          aria-label="Close menu"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <nav className="flex flex-col gap-6 mt-12 text-base font-medium">
          <Link href="/" onClick={onClose}>Home</Link>
          <Link href="/products" onClick={onClose}>Products</Link>
          <Link href="/about" onClick={onClose}>About</Link>
          <Link href="/discover" onClick={onClose}>Discover</Link>
        </nav>
      </motion.div>
      <div className="flex-1" onClick={onClose} aria-hidden="true"></div>
    </div>
  );
}
