import Link from 'next/link'
import SectionLogo from './SectionLogo'

export default function Access() {
  return (
    <section
      id="access"
      className="relative overflow-hidden py-20 md:py-28 px-4"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #ffffff 100%)' }}
    >
      <SectionLogo variant={1} size={320} bottom="-40px" left="-50px" rotate={-10} opacity={0.36} duration={8.5} delay={0} pattern="a" />
      <SectionLogo variant={3} size={200} top="10px" right="-40px" rotate={14} opacity={0.28} duration={9.5} delay={1.4} pattern="b" />
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Logo & Salon name */}
        <div className="text-center mb-8">
          <p
            className="text-gray-800 text-3xl md:text-4xl font-light tracking-widest mb-1"
            style={{ fontFamily: 'Noto Serif JP, serif' }}
          >
            サロン名
          </p>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              color: '#16a34a',
              fontSize: '1rem',
              letterSpacing: '0.15em',
            }}
          >
            dry head spa
          </p>
          <p className="text-gray-500 text-xs tracking-widest mt-2">〇〇市 ドライヘッドスパ専門店</p>
        </div>

        {/* Info */}
        <div className="bg-white rounded-2xl p-6 md:p-8 mb-6 border border-[#bbf7d0] shadow-[0_6px_20px_rgba(22,163,74,0.08)]">
          <dl className="space-y-4">
            {[
              { label: '住所', value: '〇〇県〇〇市〇〇町0-00 〇〇ビル0F' },
              { label: 'TEL', value: '000-0000-0000' },
              { label: '営業時間', value: '11:00〜22:00（最終受付21:00）' },
              { label: '定休日', value: '不定休' },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-4 items-start">
                <div className="flex items-center gap-1.5 flex-shrink-0 w-24">
                  <span style={{ color: '#16a34a', fontSize: '10px' }}>✦</span>
                  <dt className="text-gray-500 text-sm tracking-wider">{label}</dt>
                </div>
                <dd className="text-gray-700 text-sm md:text-base">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <Link
            href="#reserve"
            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl text-white text-sm font-medium tracking-widest transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #16a34a, #22c55e)',
              boxShadow: '0 4px 15px rgba(22, 163, 74, 0.3)',
            }}
          >
            LINE予約へ
            <span>›</span>
          </Link>
          <Link
            href="https://beauty.hotpepper.jp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-medium tracking-widest border transition-all duration-300 hover:bg-gray-50"
            style={{
              borderColor: '#16a34a',
              color: '#16a34a',
            }}
          >
            HOT PEPPER Beauty
            <span>›</span>
          </Link>
        </div>

        {/* Map embed */}
        <div className="rounded-2xl overflow-hidden shadow-sm h-60 md:h-80 bg-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.000000000000!2d139.6380!3d35.4437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDI2JzM3LjMiTiAxMznCsDM4JzE2LjgiRQ!5e0!3m2!1sja!2sjp!4v1000000000000!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="アクセスマップ"
          />
        </div>
      </div>
    </section>
  )
}
