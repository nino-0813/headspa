'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const heroMain = (
    <>
      {/* Badge */}
      <div className="mb-4 md:mb-6 flex items-center gap-2">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-[#c9a84c]/80">
          <Image
            src="/images/badge-customer-satisfaction-no1.png"
            alt="顧客満足度 第1位"
            width={112}
            height={112}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <p className="text-white/90 md:text-white/70 text-sm tracking-wider drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)] md:drop-shadow-none">
          地域で1番選ばれているヘッドスパ
        </p>
      </div>

      {/* Catchcopy */}
      <h1 className="font-serif font-semibold text-white leading-snug mb-4 drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)] md:drop-shadow-none">
        <span className="block text-2xl md:text-4xl lg:text-5xl font-light tracking-wider mb-2">
          辛さゼロの爽快感
        </span>
        <span className="block text-xl md:text-3xl lg:text-4xl font-light tracking-wider">
          あなた仕様のオンリーワン・ケア
        </span>
      </h1>

      {/* Salon name */}
      <div className="my-5 md:my-8 flex flex-col items-center">
        <p className="text-white/80 md:text-white/60 text-xs tracking-widest mb-2 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)] md:drop-shadow-none">
          明石市　ヘッドスパ専門店
        </p>
        <p
          className="text-white text-3xl md:text-4xl font-light tracking-widest drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] md:drop-shadow-none"
          style={{ fontFamily: 'Noto Serif JP, serif' }}
        >
          サロン名
        </p>
        <p
          className="mt-1 text-sm tracking-widest drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)] md:drop-shadow-none"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#c9a84c' }}
        >
          dry head spa
        </p>
      </div>

      {/* CTA Button */}
      <Link
        href="#reserve"
        className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white text-sm md:text-base tracking-widest font-medium transition-all duration-300 hover:-translate-y-0.5"
        style={{
          background: 'linear-gradient(135deg, #2d1b6b, #4a3290)',
          border: '1px solid rgba(201, 168, 76, 0.4)',
          boxShadow: '0 4px 24px rgba(45, 27, 107, 0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        <span>LINE予約へ</span>
        <span className="text-lg">›</span>
      </Link>
    </>
  )

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Full-bleed video + 読みやすさ用のグラデ（装飾の紫背景は使わない） */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/videos/download.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0320] via-[#0a0320]/50 to-black/20"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex w-full min-h-[min(92svh,100dvh)] md:min-h-screen flex-col items-center justify-end md:justify-center px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-10 md:py-0 text-center max-w-3xl mx-auto">
        {heroMain}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs tracking-widest">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>

      {/* SNS icon (right side) */}
      <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2 hidden md:flex flex-col gap-3">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>
    </section>
  )
}
