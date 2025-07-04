'use client'

import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function AlphaSection() {
  const contentRef = useRef(null)
  const titleRef = useRef(null)
  const isInView = useInView(contentRef, { amount: 0.4, once: true })
  const controls = useAnimation()

  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 500], [0, -100]) // Moves up as user scrolls down

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [isInView, controls])

  return (
    <section className="relative w-full min-h-screen overflow-x-hidden bg-white">
      {/* SHIMMER BACKGROUND */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-200 via-blue-100 to-cyan-100"
        style={{
          backgroundSize: '200% 200%',
          animation: 'shimmer 10s ease-in-out infinite',
        }}
      />

      {/* PARALLAX TITLE */}
      <motion.div
        ref={titleRef}
        style={{ y: yParallax }}
        className="relative h-[60vh] flex items-center justify-center text-center z-10 px-4"
      >
        <h1 className="text-4xl md:text-7xl font-bold text-black leading-tight">
          Unleash Your <br /> Potential
        </h1>
      </motion.div>

      {/* CONTENT BLOCK */}
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: 200 }}
        animate={controls}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-20 w-full bg-white rounded-t-3xl pt-16 pb-24 px-4 md:px-12 shadow-xl"
      >
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Block 1 */}
          <div className="grid md:grid-cols-2 gap-12">
            <img
              src="/jaba_juice_logo_1.jpg"
              alt="Team collaboration"
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Refresh Your Career</h2>
              <p className="text-lg text-gray-700 mb-6">
                We’re the change-making company. And change starts with you.
                Transformative training. Unbottled opportunities. It’s time to twist
                the cap off your talent and unleash it on our world.
              </p>
              <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 w-fit">
                Explore more
              </button>
            </div>
          </div>

          {/* Block 2 - Reversed Layout */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Discover New Horizons</h2>
              <p className="text-lg text-gray-700 mb-6">
                Innovation thrives where inspiration flows. Empower your future
                by stepping into a space built for growth, creativity, and big ideas.
              </p>
              <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 w-fit">
                Join the movement
              </button>
            </div>
            <img
              src="/jaba_juice_logo_1.jpg"
              alt="Innovation and growth"
              className="rounded-xl shadow-lg object-cover w-full h-auto order-1 md:order-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}




