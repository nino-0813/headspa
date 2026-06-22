type Props = {
  /** 1 | 2 | 3 のロゴ番号 */
  variant: 1 | 2 | 3
  /** 表示サイズ(px) */
  size: number
  top?: string
  bottom?: string
  left?: string
  right?: string
  /** 回転角(deg) */
  rotate?: number
  /** 透明度(0〜1) 既定 0.3 */
  opacity?: number
  /** 浮遊アニメーションの周期(秒) 既定 8 */
  duration?: number
  /** アニメーション開始ディレイ(秒) 既定 0 */
  delay?: number
  /** 浮遊パターン a/b（揺れの向き違い） 既定 'a' */
  pattern?: 'a' | 'b'
}

/**
 * セクション背景の装飾ロゴ（蓮）。水に浮かんで漂うように揺れる。
 * 親 <section> は `relative overflow-hidden`、本文側は `relative z-10` にすること。
 */
export default function SectionLogo({
  variant,
  size,
  top,
  bottom,
  left,
  right,
  rotate = 0,
  opacity = 0.3,
  duration = 8,
  delay = 0,
  pattern = 'a',
}: Props) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute z-0 select-none"
      style={{
        width: size,
        height: size,
        top,
        bottom,
        left,
        right,
        opacity,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <div
        className={pattern === 'b' ? 'lotus-float-b h-full w-full' : 'lotus-float-a h-full w-full'}
        style={{ animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
      >
        {/* 装飾用のため通常の img を使用 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/logo/${variant}.svg`}
          alt=""
          className="h-full w-full object-contain"
          draggable={false}
        />
      </div>
    </div>
  )
}
