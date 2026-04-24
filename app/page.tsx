import { Sidebar } from '@/components/Sidebar'
import { SloganSection } from '@/components/sections/SloganSection'
import { CampaignSection } from '@/components/sections/CampaignSection'
import { CollaborationSection } from '@/components/sections/CollaborationSection'
import { StoreSection } from '@/components/sections/StoreSection'
import { LogoSection } from '@/components/sections/LogoSection'
import { ColorSection } from '@/components/sections/ColorSection'
import { FontSection } from '@/components/sections/FontSection'

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      {/* 메인 콘텐츠 */}
      <main className="flex-1" style={{ marginLeft: 'var(--sidebar-width)' }}>

        {/* 히어로 헤더 */}
        <div className="px-16 py-20 border-b border-[#e0e0e0]">
          <p className="font-futura text-[10px] tracking-[0.2em] text-[#6b6b6b] uppercase mb-6">
            Brand Identity Guidelines
          </p>
          <h1 className="font-futura font-bold text-[80px] leading-[0.95] tracking-[-0.03em] uppercase text-black mb-8">
            OH, LOLLY DAY!
          </h1>
          <div className="flex items-end justify-between">
            <p className="text-[14px] text-[#6b6b6b] leading-[1.7] max-w-sm">
              오롤리데이 브랜드 가이드라인.<br />
              브랜드의 모든 것을 담은 공식 레퍼런스입니다.
            </p>
            <div className="text-right">
              <p className="font-futura text-[10px] tracking-[0.12em] text-[#6b6b6b] uppercase">ROLLYJOSS COMPANY</p>
              <p className="font-futura text-[10px] tracking-[0.08em] text-[#c0c0c0] uppercase">Seoul, Korea · Est. 2016</p>
            </div>
          </div>
        </div>

        {/* 섹션들 */}
        <SloganSection />
        <CampaignSection />
        <CollaborationSection />
        <StoreSection />
        <LogoSection />
        <ColorSection />
        <FontSection />

        {/* 푸터 */}
        <footer className="px-16 py-12 border-t border-[#e0e0e0] flex items-center justify-between">
          <div>
            <p className="font-futura font-bold text-[13px] tracking-[0.08em] uppercase">OH, LOLLY DAY!</p>
            <p className="font-futura text-[10px] tracking-[0.06em] text-[#6b6b6b] uppercase mt-0.5">Brand Guidelines 2026</p>
          </div>
          <p className="font-futura text-[10px] tracking-[0.06em] text-[#c0c0c0] uppercase">
            © 2026 ROLLYJOSS COMPANY. ALL RIGHTS RESERVED.
          </p>
        </footer>
      </main>
    </div>
  )
}
