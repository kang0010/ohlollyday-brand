'use client'

import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}

const CAMPAIGNS = [
  {
    year: '2021',
    slogan: 'LUCKY < HAPPY < HAPPIER',
    theme: '운보다 행복, 행복보다 더 행복',
    bg: '#F26B5B',
    text: '#ffffff',
    url: 'https://www.oh-lolly-day.com/oh-lolly-day/campaign/2021.html',
    img: '/campaign-2021.jpg',
  },
  {
    year: '2022',
    slogan: 'GOOD REST, HAPPIER LIFE',
    theme: '잘 쉬어야 더 행복해',
    bg: '#F5F0E8',
    text: '#000000',
    url: 'https://www.oh-lolly-day.com/oh-lolly-day/campaign/2022.html',
    img: '/campaign-2022.jpg',
    imgScale: 'scale-150',
    imgPosition: 'object-[center_35%]',
  },
  {
    year: '2023',
    slogan: 'WHAT MAKES ME HAPPY?',
    theme: '나를 행복하게 하는 것',
    bg: '#F5C842',
    text: '#000000',
    url: 'https://www.oh-lolly-day.com/oh-lolly-day/campaign/2023.html',
    img: '/campaign-2023.jpg',
  },
  {
    year: '2024',
    slogan: 'WELCOME TO HAPPINESS ISLAND',
    theme: '웰컴 투 행복도',
    bg: '#7AB5A0',
    text: '#ffffff',
    url: 'https://www.oh-lolly-day.com/oh-lolly-day/campaign/2024.html',
    img: '/campaign-2024.png',
  },
  {
    year: '2025',
    slogan: 'NO SWEAT, NO HAPPINESS',
    theme: '땀을 흘리는 순간의 행복',
    bg: '#000000',
    text: '#F5C842',
    url: 'https://www.oh-lolly-day.com/oh-lolly-day/campaign/2025.html',
    img: '/campaign-2025.jpg',
    imgScale: 'scale-150',
    imgPosition: 'object-[center_20%]',
  },
]

export function CampaignSection() {
  const { count, ref } = useCountUp(19941943, 2500)
  const formatted = count.toLocaleString('ko-KR')

  return (
    <section id="campaign" className="px-16 pb-20 border-b border-[#e0e0e0]">
      <div className="bg-[#c5e800] text-black px-16 py-12 mb-0 -mx-16">
        <p className="font-futura font-bold text-[42px] leading-[1.2] tracking-[-0.01em] uppercase text-black">
          BE HAPPIER CAMPAIGN
        </p>
        <p className="text-[16px] leading-[1.5] text-black mt-6">
          오롤리데이는 매년 5월 15일 창립기념일을 기점으로 비해피어 캠페인을 진행합니다.<br />
          매출액의 2%는 초록우산 어린이재단에 기부됩니다.<br />
          <br />
          "행복... 그거 어떻게 하는 건데?" 누구나 해피어가 될 수 있어!
        </p>
      </div>

      {/* 연도별 캠페인 그리드 */}
      <div className="grid grid-cols-3 gap-px bg-[#e0e0e0] -mx-16">
        {CAMPAIGNS.map((c) => (
          <a
            key={c.year}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-col justify-between h-72 group overflow-hidden"
            style={{ background: c.bg }}
          >
            {/* 배경 이미지 */}
            <img
              src={c.img}
              alt={c.slogan}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${c.imgScale ?? ''} ${c.imgPosition ?? 'object-center'}`}
            />
            {/* 기본: 연도 중앙 */}
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 transition-opacity duration-300 group-hover:opacity-0">
              <span className="font-futura font-light text-[120px] text-white drop-shadow-lg tracking-[-0.04em]">
                {c.year}
              </span>
            </div>
            {/* 호버: 어두운 오버레이 + 캠페인 정보 */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-8 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-futura font-bold text-[28px] leading-[1.2] uppercase mb-3 text-white drop-shadow-lg">
                {c.slogan}
              </p>
              <p className="text-[16px] text-white/80 drop-shadow-md">{c.theme}</p>
            </div>
            {/* 링크 아이콘 */}
            <span className="absolute top-6 right-6 z-20 text-[18px] text-white opacity-60">↗</span>
          </a>
        ))}
        {/* 빈 슬롯 */}
        <div className="relative flex items-center justify-center h-72 bg-[#ff6000]">
          <p className="font-futura font-bold text-[36px] text-black">to be continued...</p>
        </div>
      </div>

      {/* 기부 누적 정보 */}
      <div ref={ref} className="flex items-center justify-between px-16 py-10 bg-black -mx-16">
        <div className="translate-y-[3px]">
          <p className="text-[16px] font-semibold text-[#ff6000] mb-0 ml-[5px]">초록우산 총 누적 기부액</p>
          <p className="font-futura font-bold text-[48px] text-[#c5e800]">{formatted}원</p>
        </div>
        <div className="translate-y-[3px]">
          <p className="text-[12px] font-bold tracking-[0.12em] text-[#c5e800]/50 uppercase mb-1 text-right"></p>
          <p className="font-futura font-medium text-[28px] text-[#c5e800]">21.05.15 – 24.03.31</p>
        </div>
      </div>

    </section>
  )
}
