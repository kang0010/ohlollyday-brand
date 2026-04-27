'use client'

import { useState, useEffect } from 'react'

const NAV = [
  {
    title: 'BRAND INTRODUCTION',
    items: [
      { label: 'SLOGAN', id: 'slogan' },
      { label: 'CORE VALUE', id: 'corevalue' },
      { label: 'CAMPAIGN', id: 'campaign' },
      { label: 'COLLABORATION', id: 'collaboration' },
      { label: 'OH, LOLLY DAY! SEONGSU', id: 'store' },
    ],
  },
  {
    title: 'DESIGN GUIDE',
    items: [
      { label: 'LOGO AND SYMBOL', id: 'logo' },
      { label: 'COLOR PALETTE', id: 'color' },
      { label: 'FONT', id: 'font' },
    ],
  },
]

export function Sidebar() {
  const [activeId, setActiveId] = useState('slogan')

  useEffect(() => {
    const ids = NAV.flatMap((g) => g.items.map((i) => i.id))
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const ob = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { rootMargin: '-20% 0px -70% 0px' }
      )
      ob.observe(el)
      observers.push(ob)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    setActiveId(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <aside
      className="fixed top-0 left-0 h-screen overflow-y-auto border-r border-[#333] bg-black z-40 flex flex-col font-futura"
      style={{ width: 'var(--sidebar-width)' }}
    >
      {/* 로고 */}
      <div className="px-6 py-8 border-b border-[#333] flex justify-center">
        <span className="font-bold text-[24px] tracking-[0.02em] text-white leading-tight">
          oh, lolly day!
        </span>
      </div>

      {/* 네비게이션 */}
      <nav className="flex-1 px-4 py-6 space-y-6">
        {NAV.map((group) => (
          <div key={group.title}>
            {group.title && <p className="text-[11px] font-bold tracking-[0.1em] text-[#c5e800] uppercase mb-3 px-2">{group.title}</p>}
            <ul className="space-y-0.5">
              {group.items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left px-2 py-2 text-[13px] tracking-[0.05em] uppercase transition-all ${
                      activeId === item.id
                        ? 'text-[#ff6000] font-bold border-l-2 border-[#ff6000] pl-3'
                        : 'text-[#c5e800] hover:text-[#ff6000] border-l-2 border-transparent pl-3'
                    }`}
                                      >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* 하단 */}
      <div className="px-6 py-4 border-t border-[#333]">
        <p className="font-futura text-[13px] tracking-[0.06em] text-[#c5e800] uppercase leading-none">롤리조쓰컴퍼니</p>
        <p className="font-futura text-[12px] tracking-[0.05em] text-[#c5e800]/50 uppercase leading-none mt-2">Seoul, Korea · Est. 2016</p>
        <p className="text-[11px] tracking-[0.06em] text-[#c5e800]/30 uppercase leading-none mt-2">© 2026</p>
      </div>
    </aside>
  )
}
