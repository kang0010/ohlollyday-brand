import { SectionHeader } from '../SectionHeader'

const CAMPAIGNS = [
  {
    year: '2025',
    slogan: 'NO SWEAT, NO HAPPINESS',
    theme: '땀을 흘리는 순간의 행복',
    description: '편리함과 효율을 중시하는 시대에도 기꺼이 땀을 흘리며 자신만의 행복을 찾아가는 사람들을 이야기합니다. 노력, 설렘, 원동력, 기쁨—땀이 가진 다양한 의미를 발견합니다.',
    bg: '#000000',
    text: '#F5C842',
  },
  {
    year: '2024',
    slogan: 'WELCOME TO HAPPINESS ISLAND',
    theme: '웰컴 투 행복도',
    description: '오롤리데이 10주년을 맞아, 충성 팬들을 위한 가상의 섬 개념을 만들었습니다. 제품 중심이 아닌 팬 중심의 경험을 선물하는 캠페인.',
    bg: '#7AB5A0',
    text: '#ffffff',
  },
  {
    year: '2023',
    slogan: 'WHAT MAKES ME HAPPY?',
    theme: '나를 행복하게 하는 것',
    description: '당신은 무엇을 통해 일상에서 행복을 느끼나요? 거창한 것이 아닌, 나만의 작고 소중한 행복의 순간들을 발견하는 캠페인.',
    bg: '#F5C842',
    text: '#000000',
  },
  {
    year: '2022',
    slogan: 'GOOD REST, HAPPIER LIFE',
    theme: '잘 쉬어야 더 행복해',
    description: '더 행복한 삶을 위해서는 열심히 하는 것만큼 제대로 쉬어가는 순간도 꼭 필요합니다. 나만의 휴식 방식을 발견하는 캠페인.',
    bg: '#F5F0E8',
    text: '#000000',
  },
  {
    year: '2021',
    slogan: 'LUCKY < HAPPY < HAPPIER',
    theme: '운보다 행복, 행복보다 더 행복',
    description: '행운을 좇기 위해 멀리 가지 마세요. 행복은 생각보다 더 가까이에 있을지도 몰라요. 7주년을 맞아 지금 이 순간의 행복에 집중하는 캠페인.',
    bg: '#F26B5B',
    text: '#ffffff',
  },
]

export function CampaignSection() {
  return (
    <section id="campaign" className="px-16 py-20 border-b border-[#e0e0e0]">
      <SectionHeader
        number="02"
        title="CAMPAIGN"
        description="오롤리데이는 매년 5월 15일 창립기념일을 기점으로 비해피어 캠페인을 진행합니다. 매출액의 2%는 초록우산 어린이재단에 기부됩니다."
      />

      {/* 캠페인 철학 */}
      <div className="grid grid-cols-2 gap-px bg-[#e0e0e0] mb-px">
        <div className="bg-[#1A2B4A] p-10">
          <p className="brand-card-label text-[#7AB5A0] mb-6">Campaign Concept</p>
          <p className="font-futura font-bold text-[28px] text-white leading-[1.3] uppercase mb-4">
            #비해피어<br />캠페인
          </p>
          <p className="text-[13px] text-[#a0b0c0] leading-[1.8]">
            "행복... 그거 어떻게 하는 건데?"<br />
            누구나 해피어가 될 수 있어!
          </p>
        </div>
        <div className="bg-white p-10">
          <p className="brand-card-label mb-6">Since 2016</p>
          <div className="space-y-3">
            {['2025', '2024', '2023', '2022', '2021', '2020–', '2016'].map((y, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="font-futura font-bold text-[11px] tracking-[0.08em] text-[#6b6b6b] w-16">{y}</span>
                <div className="flex-1 h-px bg-[#e0e0e0]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 연도별 캠페인 그리드 */}
      <div className="grid grid-cols-1 gap-px bg-[#e0e0e0]">
        {CAMPAIGNS.map((c) => (
          <div
            key={c.year}
            className="flex items-stretch"
            style={{ background: c.bg }}
          >
            {/* 연도 */}
            <div className="w-32 flex items-center justify-center border-r shrink-0"
              style={{ borderColor: c.text === '#ffffff' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)' }}>
              <span className="font-futura font-bold text-[13px] tracking-[0.1em]"
                style={{ color: c.text === '#ffffff' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.35)' }}>
                {c.year}
              </span>
            </div>
            {/* 슬로건 */}
            <div className="flex-1 px-10 py-8">
              <p className="font-futura font-bold text-[24px] leading-[1.2] uppercase mb-2"
                style={{ color: c.text }}>
                {c.slogan}
              </p>
              <p className="text-[12px] font-semibold mb-3"
                style={{ color: c.text === '#ffffff' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.45)' }}>
                {c.theme}
              </p>
              <p className="text-[12px] leading-[1.7] max-w-lg"
                style={{ color: c.text === '#ffffff' ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.6)' }}>
                {c.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 사회공헌 */}
      <div className="mt-px bg-[#e0e0e0] h-px" />
      <div className="flex gap-px bg-[#e0e0e0] mt-px">
        <div className="flex-1 bg-white p-8">
          <p className="brand-card-label mb-3">Social Contribution</p>
          <p className="text-[16px] font-semibold text-black mb-2">매출의 2%를 기부합니다</p>
          <p className="text-[13px] text-[#6b6b6b] leading-[1.7]">
            오롤리데이는 회사 매출액의 2%를 초록우산 어린이재단에 기부하여
            보호 대상 아동과 청소년의 자립을 지원합니다.
          </p>
        </div>
        <div className="flex-1 bg-white p-8 border-l border-[#e0e0e0]">
          <p className="brand-card-label mb-3">Campaign Day</p>
          <p className="text-[16px] font-semibold text-black mb-2">5월 15일</p>
          <p className="text-[13px] text-[#6b6b6b] leading-[1.7]">
            오롤리데이 창립기념일. 매년 이 날을 기점으로 비해피어 캠페인이 시작됩니다.
          </p>
        </div>
      </div>
    </section>
  )
}
