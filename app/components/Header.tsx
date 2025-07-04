'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Bars3Icon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import MobileMenu from './MobileMenu'

type HeaderProps = {
  showBack?: boolean
  backHref?: string
}

export default function Header({ showBack = false, backHref }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {showBack ? (
          <button
            onClick={() => backHref ? router.push(backHref) : router.back()}
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Back
          </button>
        ) : (
          <Image
            src="/natural_logo.png"
            alt="Beverage World Logo"
            width={100}
            height={100}
            className="object-contain w-12 sm:w-[100px] h-auto"
          />
        )}

        <nav className="hidden sm:flex gap-6 text-base font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="/discover" className="hover:text-blue-600 transition-colors">Discover</Link>
        </nav>

        <button
          className="sm:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </header>
  )
}
