import Link from 'next/link'
import Image from 'next/image'

export default function CTABanner() {
  return (
    <section id="reserve" className="py-12 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div
          className="rounded-2xl overflow-hidden flex flex-col md:flex-row items-center gap-0 shadow-lg"
          style={{ border: '1px solid #e8edf8' }}
        >
          {/* Image side */}
          <div className="w-full md:w-2/5 h-52 md:h-auto md:self-stretch relative">
            <Image
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80"
              alt="ドライヘッドスパ施術"
              fill
              className="object-cover"
            />
          </div>

          {/* Text side */}
          <div
            className="flex-1 flex flex-col items-center justify-center text-center p-8"
            style={{ background: 'linear-gradient(135deg, #f8f6ff 0%, #eef1fb 100%)' }}
          >
            <p
              className="text-gray-800 text-2xl font-light tracking-widest mb-3"
              style={{ fontFamily: 'Noto Serif JP, serif' }}
            >
              ドライヘッドスパ
            </p>

            <div className="flex items-center gap-2 mb-2">
              <div className="h-px w-8 bg-purple-200" />
              <span style={{ color: '#c9a84c', fontSize: '10px' }}>✦</span>
              <div className="h-px w-8 bg-purple-200" />
            </div>

            <p className="text-gray-500 text-xs tracking-wider mb-1">
              &laquo;60分 / ご新規様限定&raquo;
            </p>
            <p className="mb-6">
              <span
                className="text-gray-800"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.8rem', fontWeight: 300 }}
              >
                6,600
              </span>
              <span className="text-gray-700 text-lg">円〜</span>
            </p>

            <Link
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white text-sm font-medium tracking-widest transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #2d1b6b, #4a3290)',
                boxShadow: '0 4px 15px rgba(45, 27, 107, 0.25)',
              }}
            >
              LINE予約へ
              <span>›</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
