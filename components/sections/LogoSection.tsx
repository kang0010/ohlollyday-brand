import { SectionHeader } from '../SectionHeader'

const LOGO_COLORS = [
  { name: 'Black', hex: '#000000', rgb: 'R0 G0 B0', cmyk: 'C0 M0 Y0 K100', bg: '#000000', text: '#ffffff' },
  { name: 'White', hex: '#ffffff', rgb: 'R255 G255 B255', cmyk: 'C0 M0 Y0 K0', bg: '#ffffff', text: '#000000', border: true },
  { name: 'Color', hex: 'Various', rgb: '—', cmyk: '—', bg: 'linear-gradient(135deg, #F5C842 0%, #F26B5B 50%, #7AB5A0 100%)', text: '#ffffff', isGradient: true },
]

export function LogoSection() {
  return (
    <section id="logo" className="px-16 py-20 border-b border-[#e0e0e0]">
      <SectionHeader
        number="05"
        title={`LOGO AND\nSYMBOL`}
        description="오롤리데이 로고의 올바른 사용법. 표기법, 컬러, 안전 영역, 최소 사이즈, 콜라보레이션 표기 규칙을 안내합니다."
      />

      {/* 로고 3종 */}
      <div className="grid grid-cols-3 gap-px bg-[#e0e0e0] mb-px">
        {[
          { label: 'Primary Logo', bg: '#ffffff', textColor: '#000000' },
          { label: 'Reversed Logo', bg: '#000000', textColor: '#ffffff' },
          { label: 'Symbol Mark', bg: '#F5F0E8', textColor: '#000000' },
        ].map((logo) => (
          <div key={logo.label} className="relative" style={{ background: logo.bg }}>
            <span className="absolute top-3 left-3 brand-card-label" style={{ color: logo.textColor === '#ffffff' ? 'rgba(255,255,255,0.4)' : '#6b6b6b' }}>
              {logo.label}
            </span>
            <div className="h-48 flex items-center justify-center">
              <p className="font-futura font-bold text-[20px] tracking-[0.05em] uppercase" style={{ color: logo.textColor }}>
                OH, LOLLY DAY!
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 로고 컬러 */}
      <div className="grid grid-cols-3 gap-px bg-[#e0e0e0] mb-px">
        {LOGO_COLORS.map((c) => (
          <div key={c.name} className={`${c.border ? 'border border-[#e0e0e0]' : ''}`}>
            <div
              className="h-36"
              style={{ background: c.isGradient ? c.bg : c.bg }}
            />
            <div className="bg-white p-4 border-t border-[#e0e0e0]">
              <p className="font-futura font-bold text-[12px] tracking-[0.08em] uppercase text-black mb-1">{c.name}</p>
              {c.hex !== 'Various' && (
                <>
                  <p className="font-futura text-[11px] text-[#6b6b6b]">{c.hex}</p>
                  <p className="font-futura text-[11px] text-[#6b6b6b]">{c.rgb}</p>
                  <p className="font-futura text-[11px] text-[#6b6b6b]">{c.cmyk}</p>
                </>
              )}
              {c.hex === 'Various' && (
                <p className="text-[11px] text-[#6b6b6b] leading-[1.6]">
                  콜라보레이션 로고 표기 및 사진 위에 표기 할 시, 무드에 맞게 다양하게 사용 가능
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 안전 영역 & 최소 사이즈 */}
      <div className="grid grid-cols-2 gap-px bg-[#e0e0e0] mb-px">
        <div className="bg-white p-8">
          <p className="brand-card-label mb-6">Safety Area</p>
          <div className="flex items-center justify-center h-36 border-2 border-dashed border-[#e0e0e0] relative">
            <div className="absolute inset-4 border border-dashed border-[#F5C842] flex items-center justify-center">
              <p className="font-futura font-bold text-[14px] tracking-[0.05em] uppercase">OH, LOLLY DAY!</p>
            </div>
            <span className="absolute top-1 left-1 text-[9px] text-[#F5C842] font-futura">X</span>
            <span className="absolute bottom-1 right-1 text-[9px] text-[#F5C842] font-futura">X</span>
          </div>
          <p className="text-[12px] text-[#6b6b6b] mt-4 leading-[1.7]">
            로고 사방에 로고 높이(X)만큼의 안전 영역을 확보합니다.
          </p>
        </div>

        <div className="bg-white p-8 border-l border-[#e0e0e0]">
          <p className="brand-card-label mb-6">Minimum Size</p>
          <div className="flex items-end gap-6 h-36">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center" style={{ width: 120, height: 28 }}>
                <span className="font-futura font-bold text-[10px] uppercase">OH, LOLLY DAY!</span>
              </div>
              <p className="text-[10px] text-[#6b6b6b] font-futura">Print: 15mm</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center" style={{ width: 80, height: 18 }}>
                <span className="font-futura font-bold text-[7px] uppercase">OH, LOLLY DAY!</span>
              </div>
              <p className="text-[10px] text-[#6b6b6b] font-futura">Digital: 80px</p>
            </div>
          </div>
          <p className="text-[12px] text-[#6b6b6b] mt-4 leading-[1.7]">
            최소 사이즈 이하로 사용 시 가독성이 저하됩니다.
          </p>
        </div>
      </div>

      {/* 콜라보 표기 & 그림자 */}
      <div className="grid grid-cols-2 gap-px bg-[#e0e0e0]">
        <div className="bg-white p-8">
          <p className="brand-card-label mb-6">Collaboration Logo Rule</p>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-futura font-bold text-[13px] uppercase">OH, LOLLY DAY!</span>
            <span className="text-[#6b6b6b] text-[12px]">×</span>
            <span className="font-futura font-bold text-[13px] uppercase">Brand</span>
          </div>
          <p className="text-[12px] text-[#6b6b6b] leading-[1.7]">
            콜라보레이션 시 오롤리데이 로고를 항상 앞에 표기하고,
            × 기호로 파트너 브랜드와 연결합니다.
          </p>
        </div>

        <div className="bg-[#f0f0f0] p-8 border-l border-[#e0e0e0]">
          <p className="brand-card-label mb-6">Shadow Effect</p>
          <div className="mb-4">
            <span
              className="font-futura font-bold text-[16px] uppercase"
              style={{ textShadow: '5px 5px 2.8px rgba(0,0,0,0.1)' }}
            >
              OH, LOLLY DAY!
            </span>
          </div>
          <p className="text-[12px] text-[#6b6b6b] leading-[1.7] mb-3">
            최대한 사용을 지양하나 배경이나 이미지 위의 로고가 돋보이지 않을 시 사용
          </p>
          <ul className="text-[11px] text-[#6b6b6b] space-y-1 font-futura">
            <li>모드: 곱하기 / 불투명도: 10%</li>
            <li>X옵셋: 5px / Y옵셋: 5px</li>
            <li>흐림효과: 2.8px</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
