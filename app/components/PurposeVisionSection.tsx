// components/PurposeVisionSection.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function PurposeVisionSection() {
  return (
    <section className="w-full max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
      {/* Card 1 */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="bg-[#1c1c1c] rounded-xl hover:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      >
        <img
          src="/path/to/image1.jpg"
          alt="Who We Are"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">Who We Are</h3>
          <p className="text-sm text-gray-300 mb-4">
            Learn about our company's purpose and vision.
          </p>
          <motion.button
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </motion.button>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="bg-[#1c1c1c] rounded-xl hover:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      >
        <img
          src="/path/to/image2.jpg"
          alt="Letter to Employees"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            Letter to Employees from Chairman and CEO James Quincey
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Purpose sits at the heart of our business strategy. Learn more about our purpose and company vision in a letter shared with employees worldwide.
          </p>
          <motion.button
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
