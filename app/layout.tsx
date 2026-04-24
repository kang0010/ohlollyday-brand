import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OH, LOLLY DAY! Brand Guide',
  description: '오롤리데이 브랜드 가이드라인',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
