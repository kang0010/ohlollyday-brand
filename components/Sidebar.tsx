'use client'

import { useState, useEffect } from 'react'

const NAV = [
  {
    title: 'OH, LOLLY DAY!',
    items: [
      { label: 'SLOGAN', id: 'slogan' },
      { label: 'CAMPAIGN', id: 'campaign' },
      { label: 'COLLABORATION', id: 'collaboration' },
      { label: 'STORE', id: 'store' },
    ],
  },
  {
    title: 'BRAND RESOURCE',
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
        { rootMargin: '-40% 0px -55% 0px' }
      )
      ob.observe(el)
      observers.push(ob)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <aside
      className="fixed top-0 left-0 h-screen overflow-y-auto border-r border-[#e0e0e0] bg-white z-40 flex flex-col"
      style={{ width: 'var(--sidebar-width)' }}
    >
      {/* 로고 */}
      <div className="px-6 py-8 border-b border-[#e0e0e0]">
        <span className="font-bold text-[13px] tracking-[0.05em] text-black uppercase leading-tight block" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          OH, LOLLY DAY!
        </span>
        <span className="text-[11px] tracking-[0.05em] text-[#6b6b6b] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Brand Guide
        </span>
      </div>

      {/* 네비게이션 */}
      <nav className="flex-1 px-4 py-6 space-y-6">
        {NAV.map((group) => (
          <div key={group.title}>
            <p className="text-[10px] font-bold tracking-[0.1em] text-[#6b6b6b] uppercase mb-3 px-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {group.title}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left px-2 py-2 text-[12px] tracking-[0.05em] uppercase transition-all ${
                      activeId === item.id
                        ? 'text-black font-bold border-l-2 border-black pl-3'
                        : 'text-[#6b6b6b] hover:text-black border-l-2 border-transparent pl-3'
                    }`}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
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
      <div className="px-6 py-4 border-t border-[#e0e0e0]">
        <p className="text-[9px] tracking-[0.06em] text-[#c0c0c0] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          © 2026 ROLLYJOSS COMPANY
        </p>
      </div>
    </aside>
  )
}
