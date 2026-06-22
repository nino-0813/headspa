import Link from 'next/link'
import Image from 'next/image'

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
      className="py-20 md:py-28"
      style={{
        background: 'linear-gradient(160deg, #1f3d2d 0%, #29503a 50%, #336447 100%)',
      }}
    >
      {/* Main courses */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {courses.map((course) => (
            <div
              key={course.id}
              className="relative rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Popular badge */}
              {course.tagBadge && (
                <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10">
                  <span
                    className="inline-flex items-center gap-1 px-4 py-1 rounded-full text-xs text-white tracking-wider"
                    style={{ background: 'rgba(148, 162, 87, 0.3)', border: '1px solid rgba(148, 162, 87, 0.5)' }}
                  >
                    <span style={{ color: '#94a257' }}>✦</span>
                    {course.tagBadge}
                    <span style={{ color: '#94a257' }}>✦</span>
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
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1f3d2d]/60" />
              </div>

              {/* Tag */}
              <div className="px-4 pt-4 pb-1">
                <p className="text-white/70 text-xs text-center leading-relaxed whitespace-pre-line tracking-wider">
                  {course.tag}
                </p>
              </div>

              {/* Course info */}
              <div className="px-4 pb-6 text-center flex flex-col flex-1">
                <p className="text-white text-sm font-medium tracking-wider mt-2 mb-1">
                  {course.courseName}
                </p>
                <p className="text-white/60 text-xs tracking-wider mb-4">
                  {course.duration}
                </p>

                {/* Divider with stars */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex-1 h-px bg-white/20" />
                  <span style={{ color: '#94a257', fontSize: '8px' }}>✦</span>
                  <div className="flex-1 h-px bg-white/20" />
                </div>

                <p className="text-white/50 text-xs tracking-wider mb-1">{course.badge}</p>
                <p className="text-white font-light tracking-wider mt-auto">
                  <span
                    className="text-4xl font-light"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {course.price}
                  </span>
                  <span className="text-sm ml-1">円〜</span>
                </p>
                {course.note && (
                  <p className="text-white/40 text-[10px] mt-2 tracking-wide leading-relaxed">
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
            <p className="text-white/60 text-sm tracking-widest mb-1">ペアオススメ</p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-white/20" />
              <span style={{ color: '#94a257', fontSize: '10px' }}>✦</span>
              <div className="h-px w-12 bg-white/20" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-5 max-w-2xl mx-auto">
            {pairOptions.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/10">
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-white/60 text-xs text-center tracking-wider">{item.label}</p>
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
