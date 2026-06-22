import Image from 'next/image'
import SectionLogo from './SectionLogo'

const services = [
  {
    number: '01',
    title: '不調改善のための\nアドバイスやサポート、\nカウンセリングを行います',
    body: '肩こりや眼精疲労、眠りの質の低下など、生活習慣の改善やストレスケアについて、丁寧にカウンセリングを行い、ドライヘッドスパの施術を通じてアプローチします。自律神経のバランスを整えるためのアドバイスや、日常生活で実践できるリラックス方法などもお伝えいたします。',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
    reverse: false,
  },
  {
    number: '02',
    title: 'お友達やご家族と\n一緒にリラックスできる\nペア予約を承っています',
    body: '大切な人と癒しの時間を体験できる、ペア予約だけのメニューをご用意しています。一緒に心地よいひとときを過ごしながら、リフレッシュや癒しの体験を共有してみませんか？施術ルームは広々としており、プライバシーを確保しつつ、心地よい空間でリラックスできます。',
    image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=600&q=80',
    reverse: true,
  },
  {
    number: '03',
    title: '全部屋個室の\nプライベート空間',
    body: '当店は、全てのお部屋が個室のプライベート空間です。他のお客様の視線や音を気にすることなく、あなただけのリラックスタイムをお過ごしいただけます。ゆったりとした空間で、心身の疲れを癒し、自分だけの贅沢なひとときをお楽しみください。',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80',
    reverse: false,
  },
  {
    number: '04',
    title: 'お悩みに特化した\n豊富なオプション',
    body: '・自律神経調整ネック\n・天空EYE\n・美容液導入ケア\n・足ツボフットリフレ\nなど、多彩なオプションメニューをご用意しております。お客様一人ひとりのニーズに合わせて、より深いリラクゼーションとケアを提供いたします。',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80',
    reverse: true,
  },
]

export default function Service() {
  return (
    <section
      id="service"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #ffffff 100%)' }}
    >
      <SectionLogo variant={2} size={520} bottom="-70px" right="-110px" rotate={18} opacity={0.3} duration={9.5} delay={0} pattern="a" />
      <SectionLogo variant={1} size={250} top="60px" left="-60px" rotate={-14} opacity={0.3} duration={8} delay={1.4} pattern="b" />
      <SectionLogo variant={3} size={180} top="44%" right="4%" rotate={10} opacity={0.22} duration={7.5} delay={2.8} pattern="a" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-2xl md:text-3xl text-gray-800 leading-relaxed mb-2">
            頭の重さを手放し、<br />
            本来の自分を取り戻す
          </h2>
          <p
            style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#16a34a', fontSize: '1.1rem' }}
          >
            Service
          </p>
        </div>

        {/* Service items */}
        <div className="space-y-16 md:space-y-20">
          {services.map((service, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-6 md:gap-10 items-center`}
            >
              {/* Number + Image */}
              <div className="relative w-full md:w-1/2 flex-shrink-0">
                <span
                  className="absolute -top-6 z-10 select-none"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '5rem',
                    fontWeight: 300,
                    color: 'rgba(22, 163, 74, 0.25)',
                    lineHeight: 1,
                    left: service.reverse ? 'auto' : '-0.5rem',
                    right: service.reverse ? '-0.5rem' : 'auto',
                  }}
                >
                  {service.number}
                </span>
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden mx-auto border-4 border-white shadow-lg shadow-green-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={288}
                    height={288}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Text */}
              <div className={`w-full md:w-1/2 ${service.reverse ? 'md:text-right' : ''}`}>
                <h3 className="font-serif text-xl md:text-2xl text-gray-800 leading-snug mb-4 whitespace-pre-line">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {service.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
