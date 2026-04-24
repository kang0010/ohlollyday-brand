import { SectionHeader } from '../SectionHeader'

// 노션 COLOR PALETTE 이미지 기반 — 실제 브랜드 컬러로 교체 필요
const PRIMARY_COLORS = [
  { name: 'Lolly Yellow', hex: '#F5C842', rgb: 'R245 G200 B66', cmyk: 'C0 M18 Y73 K4', textDark: true },
  { name: 'Happier Coral', hex: '#F26B5B', rgb: 'R242 G107 B91', cmyk: 'C0 M56 Y62 K5', textDark: false },
  { name: 'Sage Green', hex: '#7AB5A0', rgb: 'R122 G181 B160', cmyk: 'C33 M0 Y12 K29', textDark: true },
  { name: 'Cream', hex: '#F5F0E8', rgb: 'R245 G240 B232', cmyk: 'C0 M2 Y5 K4', textDark: true },
]

const BASE_COLORS = [
  { name: 'Black', hex: '#000000', rgb: 'R0 G0 B0', cmyk: 'C0 M0 Y0 K100', textDark: false },
  { name: 'Navy', hex: '#1A2B4A', rgb: 'R26 G43 B74', cmyk: 'C65 M42 Y0 K71', textDark: false },
  { name: 'Gray', hex: '#6b6b6b', rgb: 'R107 G107 B107', cmyk: 'C0 M0 Y0 K58', textDark: false },
  { name: 'Light Gray', hex: '#f0f0f0', rgb: 'R240 G240 B240', cmyk: 'C0 M0 Y0 K6', textDark: true },
  { name: 'White', hex: '#ffffff', rgb: 'R255 G255 B255', cmyk: 'C0 M0 Y0 K0', textDark: true },
]

export function ColorSection() {
  return (
    <section id="color" className="px-16 py-20 border-b border-[#e0e0e0]">
      <SectionHeader
        number="06"
        title={`COLOR\nPALETTE`}
        description="오롤리데이 브랜드 컬러 시스템. Primary Color는 브랜드 아이덴티티의 핵심이며, Base Color는 레이아웃과 텍스트에 사용됩니다."
      />

      {/* Primary Colors */}
      <div className="mb-px">
        <p className="brand-card-label mb-3">Primary Color</p>
        <div className="grid grid-cols-4 gap-px bg-[#e0e0e0]">
          {PRIMARY_COLORS.map((c) => (
            <div key={c.name}>
              <div className="h-40" style={{ background: c.hex }} />
              <div className="p-4 border-t border-[#e0e0e0] bg-white">
                <p className="font-futura font-bold text-[11px] tracking-[0.08em] uppercase text-black mb-2">{c.name}</p>
                <p className="font-futura text-[10px] text-[#6b6b6b] leading-[1.8]">
                  {c.hex}<br />{c.rgb}<br />{c.cmyk}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Base Colors */}
      <div className="mb-px mt-8">
        <p className="brand-card-label mb-3">Base Color</p>
        <div className="grid grid-cols-5 gap-px bg-[#e0e0e0]">
          {BASE_COLORS.map((c) => (
            <div key={c.name} className={c.name === 'White' ? 'border border-[#e0e0e0]' : ''}>
              <div className="h-24" style={{ background: c.hex }} />
              <div className="bg-white p-3 border-t border-[#e0e0e0]">
                <p className="font-futura font-bold text-[10px] tracking-[0.08em] uppercase text-black mb-1">{c.name}</p>
                <p className="font-futura text-[10px] text-[#6b6b6b]">{c.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 사용 예시 */}
      <div className="mt-8 grid grid-cols-3 gap-px bg-[#e0e0e0]">
        {/* 예시 1: 밝은 배경 */}
        <div className="bg-[#F5F0E8] p-8">
          <span className="brand-card-label">Usage — Light</span>
          <div className="mt-4">
            <p className="font-futura font-bold text-[18px] uppercase text-black">OH, LOLLY DAY!</p>
            <p className="text-[12px] text-[#6b6b6b] mt-1">makes your life happier.</p>
          </div>
        </div>
        {/* 예시 2: 어두운 배경 */}
        <div className="bg-[#1A2B4A] p-8">
          <span className="brand-card-label text-[rgba(255,255,255,0.4)]">Usage — Dark</span>
          <div className="mt-4">
            <p className="font-futura font-bold text-[18px] uppercase text-white">OH, LOLLY DAY!</p>
            <p className="text-[12px] text-[rgba(255,255,255,0.6)] mt-1">makes your life happier.</p>
          </div>
        </div>
        {/* 예시 3: 컬러 강조 */}
        <div className="bg-black p-8">
          <span className="brand-card-label text-[rgba(255,255,255,0.4)]">Usage — Accent</span>
          <div className="mt-4">
            <p className="font-futura font-bold text-[18px] uppercase text-[#F5C842]">OH, LOLLY DAY!</p>
            <p className="text-[12px] text-[rgba(255,255,255,0.6)] mt-1">makes your life happier.</p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-[#FFF8E6] border border-[#F5C842]">
        <p className="text-[12px] text-[#6b6b6b]">
          <strong className="text-black">Note.</strong> 위 컬러값은 노션 이미지 접근이 불가하여 임시로 설정된 값입니다. 실제 브랜드 컬러로 교체해 주세요.
        </p>
      </div>
    </section>
  )
}
