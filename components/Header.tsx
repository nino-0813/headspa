'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '#home', label: 'Home', sublabel: 'ホーム' },
  { href: '#concept', label: 'Concept', sublabel: 'コンセプト' },
  { href: '#menu', label: 'Menu', sublabel: 'メニュー' },
  { href: '#voice', label: 'Voice', sublabel: 'お客様の声' },
  { href: '#access', label: 'Access', sublabel: 'アクセス' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/70 backdrop-blur-md border-b border-white/40 shadow-[0_2px_20px_rgba(0,0,0,0.05)]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="#home" className="flex flex-col leading-tight">
              <span
                className={`font-serif text-lg md:text-xl font-medium tracking-widest transition-colors duration-500 ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                サロン名
              </span>
              <span
                className="text-[10px] md:text-xs tracking-widest"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: '#16a34a', fontStyle: 'italic' }}
              >
                dry head spa
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex flex-col items-center transition-colors group ${
                    scrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  <span className="text-xs font-light tracking-widest group-hover:text-[#16a34a] transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'inherit', fontSize: '0.85rem' }}>
                    {link.label}
                  </span>
                  <span className={`text-[10px] tracking-wide mt-0.5 ${scrolled ? 'text-gray-400' : 'text-white/60'}`}>{link.sublabel}</span>
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="#reserve"
                className={`hidden md:inline-flex items-center gap-1 px-5 py-2 rounded-full border text-sm tracking-wider transition-all duration-300 ${
                  scrolled
                    ? 'border-[#16a34a] text-[#16a34a] hover:bg-[#16a34a] hover:text-white'
                    : 'border-white/60 text-white hover:bg-white/10'
                }`}
              >
                ご予約
                <span className="text-xs">›</span>
              </Link>

              {/* Hamburger */}
              <button
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="メニューを開く"
              >
                {[0, 1, 2].map((n) => (
                  <span
                    key={n}
                    className={`block w-6 h-0.5 transition-all duration-300 ${
                      scrolled && !isOpen ? 'bg-gray-800' : 'bg-white'
                    } ${
                      isOpen && n === 0 ? 'rotate-45 translate-y-2' : ''
                    } ${isOpen && n === 1 ? 'opacity-0' : ''} ${
                      isOpen && n === 2 ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  />
                ))}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'linear-gradient(160deg, #16a34a 0%, #16a34a 55%, #22c55e 100%)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex flex-col items-center transition-all duration-300 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span
                className="text-white/90 text-2xl font-light tracking-widest"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {link.label}
              </span>
              <span className="text-white/50 text-sm tracking-wider mt-1">{link.sublabel}</span>
            </Link>
          ))}

          <Link
            href="#reserve"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-10 py-3 rounded-full border border-white/40 text-white tracking-widest hover:bg-white/10 transition-all"
          >
            ご予約はこちら
          </Link>
        </div>
      </div>
    </>
  )
}
