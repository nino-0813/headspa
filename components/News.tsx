import Link from 'next/link'
import Image from 'next/image'
import SectionLogo from './SectionLogo'

const newsItems = [
  {
    id: 1,
    date: '2025-01-15',
    title: '新春キャンペーン開催のお知らせ',
    body: 'しばらくお待ちください。',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80',
    author: 'サロン名',
  },
]

export default function News() {
  return (
    <section
      id="news"
      className="relative overflow-hidden py-16 md:py-20 px-4 bg-white"
    >
      <SectionLogo variant={3} size={260} bottom="-30px" right="-30px" rotate={-12} opacity={0.3} duration={8.5} delay={0} pattern="a" />
      <SectionLogo variant={2} size={170} top="-20px" left="-30px" rotate={14} opacity={0.24} duration={9.5} delay={1.3} pattern="b" />
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mb-2">
            お知らせ
          </h2>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              color: '#16a34a',
              fontSize: '1.1rem',
            }}
          >
            News
          </p>
        </div>

        {/* News grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="group block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 bg-white">
                {/* Author + Date */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#ffffff] flex items-center justify-center">
                    <span className="text-[#16a34a] text-xs">✦</span>
                  </div>
                  <span className="text-gray-400 text-xs">{item.author}</span>
                  <span className="text-gray-300 text-xs">{item.date}</span>
                </div>

                <h3 className="text-gray-800 text-sm font-medium tracking-wide leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
