import Link from 'next/link'
import Image from 'next/image'
import SectionLogo from './SectionLogo'

const courses = [
  {
    id: 1,
    tag: 'ドライヘッドスパが\n初めての方に',
    courseName: 'お試しコース',
    duration: 'ドライヘッドスパ 60分',
    badge: 'ご新規様限定',
    price: '6,600',
    note: '〈ハンドマッサージまたはフットバス付〉',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80',
  },
  {
    id: 2,
    tag: '肩首まで\nケアしたい方に',
    tagBadge: '人気No.1',
    courseName: 'スタンダードコース',
    duration: 'ドライヘッドスパ 90分',
    badge: 'ご新規様限定',
    price: '11,550',
    note: '',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&q=80',
  },
  {
    id: 3,
    tag: 'ドライヘッドスパを\nじっくり堪能したい方に',
    courseName: 'ロングコース',
    duration: 'ドライヘッドスパ 120分',
    badge: 'ご新規様限定',
    price: '15,000',
    note: '〈自律神経調整ネック+ハンドマッサージ〉',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80',
  },
]

const pairOptions = [
  {
    label: '目周りのケア',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&q=80',
  },
  {
    label: 'カウンセリング',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80',
  },
  {
    label: 'フットケア',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=300&q=80',
  },
]

export default function Menu() {
  return (
    <section
      id="menu"
      className="relative overflow-hidden py-20 md:py-28 bg-white"
    >
      <SectionLogo variant={3} size={500} bottom="-90px" left="-90px" rotate={-8} opacity={0.32} duration={9} delay={0} pattern="a" />
      <SectionLogo variant={2} size={240} top="40px" right="-50px" rotate={16} opacity={0.3} duration={8} delay={1} pattern="b" />
      <SectionLogo variant={1} size={170} top="180px" left="5%" rotate={-14} opacity={0.24} duration={7} delay={2.6} pattern="a" />
      {/* Title */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mb-2">
          メニュー・料金
        </h2>
        <p
          style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#16a34a', fontSize: '1.1rem' }}
        >
          Menu
        </p>
      </div>

      {/* Main courses */}
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {courses.map((course) => (
            <div
              key={course.id}
              className="relative rounded-2xl overflow-hidden flex flex-col bg-white transition-all duration-300 hover:-translate-y-1"
              style={{
                border: course.tagBadge ? '2px solid #16a34a' : '1px solid #bbf7d0',
                boxShadow: '0 6px 20px rgba(22, 163, 74, 0.08)',
              }}
            >
              {/* Popular badge */}
              {course.tagBadge && (
                <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10">
                  <span
                    className="inline-flex items-center gap-1 px-4 py-1 rounded-full text-xs text-white tracking-wider"
                    style={{ background: '#16a34a' }}
                  >
                    <span style={{ color: '#bbf7d0' }}>✦</span>
                    {course.tagBadge}
                    <span style={{ color: '#bbf7d0' }}>✦</span>
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative h-52 md:h-44 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.courseName}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Tag */}
              <div className="px-4 pt-4 pb-1">
                <p className="text-gray-500 text-xs text-center leading-relaxed whitespace-pre-line tracking-wider">
                  {course.tag}
                </p>
              </div>

              {/* Course info */}
              <div className="px-4 pb-6 text-center flex flex-col flex-1">
                <p className="text-gray-800 text-sm font-medium tracking-wider mt-2 mb-1">
                  {course.courseName}
                </p>
                <p className="text-gray-400 text-xs tracking-wider mb-4">
                  {course.duration}
                </p>

                {/* Divider with stars */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex-1 h-px bg-[#bbf7d0]" />
                  <span style={{ color: '#22c55e', fontSize: '8px' }}>✦</span>
                  <div className="flex-1 h-px bg-[#bbf7d0]" />
                </div>

                <p className="text-gray-400 text-xs tracking-wider mb-1">{course.badge}</p>
                <p className="font-light tracking-wider mt-auto" style={{ color: '#16a34a' }}>
                  <span
                    className="text-4xl font-light"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {course.price}
                  </span>
                  <span className="text-sm ml-1">円〜</span>
                </p>
                {course.note && (
                  <p className="text-gray-400 text-[10px] mt-2 tracking-wide leading-relaxed">
                    {course.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pair section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm tracking-widest mb-1">ペアオススメ</p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-[#bbf7d0]" />
              <span style={{ color: '#22c55e', fontSize: '10px' }}>✦</span>
              <div className="h-px w-12 bg-[#bbf7d0]" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-5 max-w-2xl mx-auto">
            {pairOptions.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#bbf7d0]">
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-gray-500 text-xs text-center tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="#reserve"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white text-sm tracking-widest font-medium transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: '#06C755',
              boxShadow: '0 4px 20px rgba(6, 199, 85, 0.3)',
            }}
          >
            LINE予約へ
            <span className="text-lg">›</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
