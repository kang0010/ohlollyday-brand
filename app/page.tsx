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
        <div className="px-16 py-20">
          <div className="flex items-start justify-between mb-[52px]">
            <p className="font-futura font-bold text-[16px] tracking-[0.02em] text-[#6b6b6b] uppercase">
              Brand Introduction & Design Guide
            </p>
          </div>
          <h1 className="font-futura font-bold text-[80px] leading-[0.95] tracking-[-0.03em] text-black">
            oh, lolly day!
          </h1>
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
            © 2026 롤리조쓰컴퍼니. ALL RIGHTS RESERVED.
          </p>
        </footer>
      </main>
    </div>
  )
}
