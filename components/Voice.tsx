const voices = [
  {
    title: '深い睡眠と目覚めに翌日驚き！',
    body: '今回、身体の疲労に加え、精神的な疲れもある状態で天空のドライヘッドスパを受けてみました。オプションで手足の施術もあり、特に手のマッサージの心地よさに感動しましたが、ヘッドスパは途中からウトウトを通り越して深い眠りに入り、とても驚きました。\n\n更に夜もすんなり眠れ、一度も起きることなく、朝とても気持ちよく目覚められました。こんなによく眠れたのは本当に久しぶりです！',
    profile: '50代・会社員・女性',
  },
  {
    title: '定期的に通い、悩んでいた頭痛に変化が！',
    body: '天空ではドライヘッドスパに加えて「自律神経調整ネック」という首肩・肩甲骨のクリームトリートメントを継続して受けています。\n\n以前は低気圧のたびに頭痛に悩まされて鎮静剤を頻繁に使用していましたが、天空に通うようになってから痛みがほぼない状態までになりました！\n\n同じような悩みがある方にオススメです。',
    profile: '40代・会社員・女性',
  },
  {
    title: '首肩が軽くなり助かります！',
    body: '気持ちよすぎて施術中はぐっすり眠ってしまいました。終わったあとともスッキリで、頸や肩、首が軽く、効果が出ていて非常に助かりました。コリの解消の仕方など、ホームケアについても詳しく教えていただけてとても良かったです。実践してみます！',
    profile: '20代・会社員・男性',
  },
]

export default function Voice() {
  return (
    <section
      id="voice"
      className="py-20 md:py-28 px-4"
      style={{ background: 'linear-gradient(180deg, #f0f4fc 0%, #e8edf8 100%)' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mb-2">
            お客様の声
          </h2>
          <p
            style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#8b7bc8', fontSize: '1.1rem' }}
          >
            Voice
          </p>
        </div>

        {/* Count */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-1">
            <span style={{ color: '#c9a84c', fontSize: '12px' }}>✦</span>
            <span className="text-gray-500 text-sm tracking-widest">来店人数</span>
            <span style={{ color: '#c9a84c', fontSize: '12px' }}>✦</span>
          </div>
          <div className="flex items-baseline justify-center gap-1">
            <span style={{ color: '#c9a84c', fontSize: '10px' }}>✦</span>
            <span
              className="text-gray-800"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', fontWeight: 300 }}
            >
              13,000
            </span>
            <span className="text-gray-800 text-2xl font-light ml-1">人</span>
            <span style={{ color: '#c9a84c', fontSize: '10px', marginLeft: '4px' }}>✦</span>
          </div>
          <p className="text-gray-500 text-sm tracking-widest mt-1">突破</p>
        </div>

        {/* Voice cards */}
        <div className="space-y-6">
          {voices.map((voice, i) => (
            <div key={i}>
              {/* Divider */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 h-px bg-purple-200" />
                <span style={{ color: '#c9a84c', fontSize: '10px' }}>✦</span>
                <div className="flex-1 h-px bg-purple-200" />
              </div>

              <div className="flex gap-4 items-start">
                {/* Voice label */}
                <div
                  className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border"
                  style={{
                    borderColor: 'rgba(139, 123, 200, 0.3)',
                    background: 'rgba(139, 123, 200, 0.05)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontStyle: 'italic',
                      color: '#8b7bc8',
                      fontSize: '1rem',
                    }}
                  >
                    Voice
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="font-medium text-gray-800 text-sm md:text-base mb-2">
                    {voice.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed whitespace-pre-line">
                    {voice.body}
                  </p>
                  <p className="text-gray-400 text-xs mt-3 tracking-wider">{voice.profile}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom divider */}
          <div className="flex items-center gap-3 mt-5">
            <div className="flex-1 h-px bg-purple-200" />
            <span style={{ color: '#c9a84c', fontSize: '10px' }}>✦</span>
            <div className="flex-1 h-px bg-purple-200" />
          </div>
        </div>
      </div>
    </section>
  )
}
