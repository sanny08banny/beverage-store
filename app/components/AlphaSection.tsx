'use client'

import { motion, useAnimation, useInView, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import WordsEffect from './texts/WordsEffect'
import SplitTitle from './texts/SplitTitle'

export default function AlphaSection() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const titleRef = useRef(null)
  const isInView = useInView(contentRef, { amount: 0.1, once: true })
  const controls = useAnimation()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const titleY = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, -100]), { stiffness: 80, damping: 20 })
  const titleOpacity = useSpring(useTransform(scrollYProgress, [0.15, 0.6], [1, 0]), { stiffness: 80, damping: 20 })
  const titleScale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.94]), { stiffness: 80, damping: 20 })
  
    

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 })
    }
  }, [isInView, controls])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-transparent"
    >
      {/* SHIMMER BACKGROUND (across full section) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, #a5f3fc, #bfdbfe, #a5f3fc)',
          backgroundSize: '200% 200%',
          animation: 'shimmer 10s ease-in-out infinite',
        }}
      />

      {/* PARALLAX TITLE */}
      <motion.div
        ref={titleRef}
        style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
          className="relative h-screen flex items-start justify-center text-center z-10 px-4 pt-32 md:pt-48"
      >
       <SplitTitle/>
      </motion.div>

      {/* CONTENT BLOCK (now has transparent bg to let shimmer show through) */}
      <motion.div
  ref={contentRef}
  initial={{ opacity: 0, y: 200 }}
  animate={controls}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  className="relative z-20 w-full rounded-t-3xl pt-16 pb-24 px-4 md:px-12 -mt-48"
>
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Block 1 */}
          <div className="grid md:grid-cols-2 gap-12">
            <img
              src="/jaba_juice_logo_1.jpg"
              alt="Team collaboration"
              className="rounded-xl shadow-lg object-cover w-full h-auto"
              loading="lazy"
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
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}







