import Link from 'next/link'
import Image from 'next/image'
import SectionLogo from './SectionLogo'

const items = [
  {
    title: 'ヘッドスパスクール',
    enTitle: 'School',
    href: '/school',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',
  },
  {
    title: '採用情報',
    enTitle: 'Recruit',
    href: '/recruit',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
  },
]

export default function SchoolRecruit() {
  return (
    <section
      className="relative overflow-hidden py-14 px-4"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #ffffff 100%)' }}
    >
      <SectionLogo variant={1} size={300} top="-30px" left="-50px" rotate={8} opacity={0.3} duration={9} delay={0} pattern="a" />
      <SectionLogo variant={3} size={200} bottom="-30px" right="-40px" rotate={-12} opacity={0.26} duration={8} delay={1.5} pattern="b" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col">
              {/* Image with arch top */}
              <div
                className="relative w-full aspect-[3/4] overflow-hidden mb-4"
                style={{ borderRadius: '9999px 9999px 0 0' }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Labels */}
              <div className="text-center mb-4">
                <p
                  className="font-serif text-gray-800 text-base md:text-lg font-medium tracking-wider mb-0.5"
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontStyle: 'italic',
                    color: '#16a34a',
                    fontSize: '0.9rem',
                  }}
                >
                  {item.enTitle}
                </p>
              </div>

              {/* Button */}
              <Link
                href={item.href}
                className="mx-auto block px-8 py-2.5 rounded-full border text-center text-sm tracking-wider transition-all duration-300 hover:bg-white"
                style={{ borderColor: '#16a34a', color: '#16a34a' }}
              >
                詳しくはこちら ›
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
