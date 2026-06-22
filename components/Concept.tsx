import SectionLogo from './SectionLogo'

export default function Concept() {
  return (
    <section id="concept" className="relative overflow-hidden bg-white py-20 md:py-28 px-5">
      <SectionLogo variant={2} size={440} top="-60px" right="-70px" rotate={14} opacity={0.38} duration={8} delay={0} pattern="a" />
      <SectionLogo variant={1} size={240} bottom="40px" left="-50px" rotate={-12} opacity={0.32} duration={9.5} delay={1.2} pattern="b" />
      <SectionLogo variant={3} size={180} top="120px" left="6%" rotate={20} opacity={0.26} duration={7} delay={2.4} pattern="a" />
      <h2 className="relative z-10 font-serif text-2xl md:text-3xl text-gray-800 leading-relaxed mb-4 max-w-2xl mx-auto text-center">
        不調をごまかす毎日から、
      </h2>
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-gray-800 leading-relaxed mb-2">
          本来の自分で過ごせる毎日へ。
        </h2>
        <p
          className="section-en-title text-lg mb-10"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#16a34a' }}
        >
          Concept
        </p>

        <div className="text-gray-600 text-sm md:text-base font-semibold leading-loose space-y-4 text-center">
          <p>頭の重さ、すっきりしない毎日、なんとなく続く疲れやイライラ。</p>
          <p>
            それは、あなたの<span className="text-[#16a34a]">元気・集中力・優しさ・笑顔・自分らしさ</span>を、<br className="hidden md:block" />
            少しずつ奪っているのかもしれません。
          </p>
          <p>栄養ドリンク、コーヒー、甘いもの。一時的にごまかしても、根本は変わらないままです。</p>

          <div className="my-6 h-px w-16 bg-[#bbf7d0] mx-auto" />

          <p>私たちが提供するのは、その場限りの癒しではありません。</p>
          <p>
            頭の奥に溜まった重さを手放し、<br className="hidden md:block" />
            不調によって失われた<span className="text-[#16a34a]">“本来のあなた”</span>を取り戻すための時間です。
          </p>
          <p>
            カウンセリングをもとに、お一人おひとりに合わせた<br className="hidden md:block" />
            「改眠ドライヘッドスパ」をお届けします。
          </p>

          <div className="my-6 h-px w-16 bg-[#bbf7d0] mx-auto" />

          <p>頭が軽くなると、朝から軽やかに動ける。仕事や家事が自然と進む。</p>
          <p>大切な人に優しくできて、人と会いたくなる。自然と笑顔が戻ってくる。</p>
          <p>毎日を“こなすだけ”の日々から、心から楽しめる毎日へ。</p>
          <p>そんなひとときを、ぜひご体感ください。</p>
        </div>
      </div>
    </section>
  )
}
