import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="py-12 px-4 text-center"
      style={{ background: 'linear-gradient(180deg, #c8dff0 0%, #b8d0e8 100%)' }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mb-6">
          <p
            className="text-gray-800 text-2xl font-light tracking-widest mb-1"
            style={{ fontFamily: 'Noto Serif JP, serif' }}
          >
            サロン名
          </p>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              color: '#8b7bc8',
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
            }}
          >
            dry head spa
          </p>
          <p className="text-gray-500 text-xs tracking-widest mt-1">〇〇市 ドライヘッドスパ専門店</p>
        </div>

        {/* Info */}
        <p className="text-gray-600 text-xs md:text-sm mb-1">
          〇〇県〇〇市〇〇町0-00 〇〇ビル0F
        </p>
        <p className="text-gray-600 text-xs md:text-sm">
          TEL 000-0000-0000　　営業時間 11:00〜22:00（最終受付21:00）　不定休
        </p>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-4 mt-6 mb-6">
          {[
            { href: '#home', label: 'ホーム' },
            { href: '#concept', label: 'コンセプト' },
            { href: '#menu', label: 'メニュー' },
            { href: '#problem', label: 'お悩み' },
            { href: '#service', label: 'サービス' },
            { href: '#voice', label: 'お客様の声' },
            { href: '#access', label: 'アクセス' },
            { href: '/school', label: 'スクール' },
            { href: '/recruit', label: '採用情報' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-500 text-xs tracking-wider hover:text-gray-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="h-px bg-white/40 mb-5" />

        {/* Copyright */}
        <p className="text-gray-400 text-xs tracking-wider">
          Copyright © 株式会社〇〇 All rights Reserved.
        </p>
      </div>
    </footer>
  )
}
