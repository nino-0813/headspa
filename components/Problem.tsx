import Image from 'next/image'

const problems = [
  {
    title: '最近よく眠れない',
    items: [
      'スッキリ起きられず、頭から体が重い',
      '夜中に目が覚めてしまい睡眠不足気味',
      '寝つきが悪く、日中眠気が続いてぼんやりしてしまう',
    ],
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=300&q=80',
  },
  {
    title: '首や肩がこっている',
    items: [
      '長時間のデスクワークで首肩がこわばっている',
      'ストレスを感じやすく、気が付くと首や上半身に余計な力が入っている',
    ],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&q=80',
  },
  {
    title: '頭が重く時々痛みも…',
    items: [
      '夕方になると頭の後ろあたりが重くなってくる',
      '食いしばりがあって、顎から頭の横側にかけて時々痛む',
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=80',
  },
  {
    title: '目の疲れがひどい',
    items: [
      'パソコンやスマホの使い過ぎで目の奥が重く感じる',
      '細かい文字を読むことが多く、目がかすんだり、ピントが合いにくくなる',
    ],
    image: 'https://images.unsplash.com/photo-1488998527040-85054a85150e?w=300&q=80',
  },
  {
    title: '全身疲労が蓄積している',
    items: [
      '毎日忙しく常に疲れていて、疲労が慢性化している',
      '寝ても疲れが取れなくて、全身がだるく感じる',
    ],
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80',
  },
  {
    title: '抜け毛や白髪が気になる',
    items: [
      '枕に落ちている髪の量が増えた気がする',
      '昔に比べると髪が細くなり、地肌が透けて見えるようになってきた',
      '白髪が年々目立つように…',
    ],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80',
  },
]

export default function Problem() {
  return (
    <section
      id="problem"
      className="py-20 md:py-28 px-4"
      style={{ background: 'linear-gradient(180deg, #dde4f5 0%, #e8edf8 100%)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mb-2">
            こんなお悩みありませんか？
          </h2>
          <p
            className="text-lg"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#8b7bc8' }}
          >
            Problem
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {problems.map((problem, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Arch image */}
              <div
                className="w-full max-w-[160px] md:max-w-[180px] aspect-[3/4] overflow-hidden mb-3"
                style={{ borderRadius: '9999px 9999px 0 0' }}
              >
                <Image
                  src={problem.image}
                  alt={problem.title}
                  width={180}
                  height={240}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="font-serif text-gray-800 text-sm md:text-base font-medium mb-2 tracking-wide">
                {problem.title}
              </h3>

              <ul className="text-left text-gray-500 text-xs leading-relaxed space-y-1">
                {problem.items.map((item, j) => (
                  <li key={j} className="flex gap-1">
                    <span className="text-purple-300 flex-shrink-0">・</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
