import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ヘッドスパ サロン名 | ドライヘッドスパ専門店',
  description:
    '辛さゼロの爽快感。あなた仕様のオンリーワンケア。頭痛・不眠・肩こりなどのお悩みに特化したドライヘッドスパ専門店。全室個室プライベート空間。',
  keywords: 'ヘッドスパ, ドライヘッドスパ, 頭皮ケア, 不眠, 頭痛, 肩こり, リラクゼーション',
  openGraph: {
    title: 'ヘッドスパ サロン名 | ドライヘッドスパ専門店',
    description: '辛さゼロの爽快感。あなた仕様のオンリーワンケア。',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
