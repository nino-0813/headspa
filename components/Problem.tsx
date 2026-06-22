import Image from 'next/image'
import SectionLogo from './SectionLogo'

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
      className="relative overflow-hidden py-20 md:py-28 px-4"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #ffffff 100%)' }}
    >
      <SectionLogo variant={1} size={300} top="60px" left="-40px" rotate={-16} opacity={0.38} duration={8.5} delay={0} pattern="a" />
      <SectionLogo variant={3} size={220} top="20px" right="-40px" rotate={14} opacity={0.3} duration={10} delay={1.5} pattern="b" />
      <SectionLogo variant={2} size={170} bottom="120px" right="8%" rotate={-8} opacity={0.24} duration={7.5} delay={3} pattern="a" />
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mb-2">
            こんなお悩みありませんか？
          </h2>
          <p
            className="text-lg"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#16a34a' }}
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
                    <span className="text-[#22c55e] flex-shrink-0">・</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Worldview closer */}
        <div className="mt-14 max-w-2xl mx-auto rounded-2xl bg-white border-2 border-[#16a34a] px-6 py-8 md:px-10 md:py-10 text-center shadow-[0_8px_24px_rgba(22,163,74,0.1)]">
          <p className="text-gray-800 text-base md:text-lg leading-relaxed font-medium">
            その不調を、「いつものこと」と<br className="md:hidden" />我慢していませんか？
          </p>
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-loose">
            頭が重いまま過ごす毎日は、あなたの<span className="text-[#16a34a] font-medium">元気・集中力・笑顔・優しさ</span>を、
            静かにすり減らしていきます。<br className="hidden md:block" />
            必要なのは、ごまかすことではなく、頭の奥の重さを手放すことです。
          </p>
        </div>
      </div>
    </section>
  )
}
