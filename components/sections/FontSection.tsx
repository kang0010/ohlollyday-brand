import { SectionHeader } from '../SectionHeader'

const FUTURA_WEIGHTS = [
  { weight: 'Bold', class: 'font-bold', sample: 'OH, LOLLY DAY!' },
  { weight: 'Medium', class: 'font-medium', sample: 'Makes Your Life Happier.' },
  { weight: 'Book', class: 'font-normal', sample: 'The simple joy of everyday moments.' },
  { weight: 'Light', class: 'font-light', sample: 'Finding happiness in the little things.' },
]

const PRETENDARD_WEIGHTS = [
  { weight: 'Bold', class: 'font-bold', sample: '오롤리데이는 당신의 삶을 더 행복하게 만듭니다.' },
  { weight: 'SemiBold', class: 'font-semibold', sample: '소소한 행복을 놓치지 않도록 일깨워주는 브랜드' },
  { weight: 'Regular', class: 'font-normal', sample: '모든 사람의 삶에는 이미 행복이 있습니다. 그 행복은 소소하기에 관찰하지 않으면 발견하기 힘들 수 있습니다.' },
  { weight: 'Light', class: 'font-light', sample: '더 많은 사람들이 각자의 행복을 경험할 수 있도록 방법들을 제안합니다.' },
]

export function FontSection() {
  return (
    <section id="font" className="px-16 py-20">
      <SectionHeader
        number="07"
        title="FONT"
        description="오롤리데이는 두 가지 폰트 패밀리를 사용합니다. 영문 타이틀에는 Futura, 한국어 및 본문에는 Pretendard를 사용합니다."
      />

      {/* Futura */}
      <div className="mb-12">
        <div className="flex items-baseline justify-between mb-px pb-4 border-b border-[#e0e0e0]">
          <div>
            <p className="brand-card-label mb-1">Title Font / English</p>
            <p className="font-futura font-bold text-[32px] uppercase tracking-[-0.01em]">Futura</p>
          </div>
          <p className="font-futura text-[12px] text-[#6b6b6b] tracking-[0.06em] uppercase">Family</p>
        </div>

        {/* 대형 알파벳 showcase */}
        <div className="bg-[#f0f0f0] px-12 py-10 mb-px">
          <p className="font-futura font-bold text-[72px] leading-[1.0] tracking-[-0.02em] text-black">
            ABCDEFGHIJ
          </p>
          <p className="font-futura font-bold text-[72px] leading-[1.0] tracking-[-0.02em] text-[#6b6b6b]">
            KLMNOPQRST
          </p>
          <p className="font-futura font-bold text-[72px] leading-[1.0] tracking-[-0.02em] text-[#c0c0c0]">
            UVWXYZ
          </p>
        </div>

        {/* 웨이트별 샘플 */}
        <div className="grid grid-cols-1 gap-px bg-[#e0e0e0]">
          {FUTURA_WEIGHTS.map((f) => (
            <div key={f.weight} className="bg-white px-8 py-6 flex items-center justify-between">
              <span className="brand-card-label w-20 shrink-0">{f.weight}</span>
              <p className={`font-futura ${f.class} text-[20px] flex-1 tracking-[0.01em] uppercase`}>{f.sample}</p>
            </div>
          ))}
        </div>

        {/* 숫자 */}
        <div className="bg-black px-12 py-8 mt-px">
          <p className="font-futura font-bold text-[48px] text-white leading-[1.0] tracking-[-0.01em]">
            0 1 2 3 4 5 6 7 8 9
          </p>
        </div>
      </div>

      {/* Pretendard */}
      <div>
        <div className="flex items-baseline justify-between mb-px pb-4 border-b border-[#e0e0e0]">
          <div>
            <p className="brand-card-label mb-1">Body Font / Korean</p>
            <p className="font-bold text-[32px]" style={{ fontFamily: 'Pretendard, Apple SD Gothic Neo, sans-serif' }}>
              Pretendard
            </p>
          </div>
          <p className="font-futura text-[12px] text-[#6b6b6b] tracking-[0.06em] uppercase">Family</p>
        </div>

        {/* 한글 showcase */}
        <div className="bg-[#F5F0E8] px-12 py-10 mb-px">
          <p className="font-bold text-[56px] leading-[1.2] text-black" style={{ fontFamily: 'Pretendard, Apple SD Gothic Neo, sans-serif' }}>
            가나다라마바사
          </p>
          <p className="font-bold text-[56px] leading-[1.2] text-[#6b6b6b]" style={{ fontFamily: 'Pretendard, Apple SD Gothic Neo, sans-serif' }}>
            아자차카타파하
          </p>
        </div>

        {/* 웨이트별 샘플 */}
        <div className="grid grid-cols-1 gap-px bg-[#e0e0e0]">
          {PRETENDARD_WEIGHTS.map((f) => (
            <div key={f.weight} className="bg-white px-8 py-6 flex items-start gap-8">
              <span className="brand-card-label w-20 shrink-0 mt-1">{f.weight}</span>
              <p className={`${f.class} text-[15px] leading-[1.7] flex-1`} style={{ fontFamily: 'Pretendard, Apple SD Gothic Neo, sans-serif' }}>
                {f.sample}
              </p>
            </div>
          ))}
        </div>

        {/* 사용 가이드 */}
        <div className="grid grid-cols-2 gap-px bg-[#e0e0e0] mt-px">
          <div className="bg-white p-8">
            <p className="brand-card-label mb-4">Futura — 사용 기준</p>
            <ul className="text-[13px] text-[#6b6b6b] leading-[1.8] space-y-1">
              <li>• 영문 헤드라인, 타이틀</li>
              <li>• 브랜드명, 캠페인 슬로건</li>
              <li>• 카테고리 레이블, 메뉴</li>
              <li>• 수치, 날짜 (숫자 표기)</li>
            </ul>
          </div>
          <div className="bg-white p-8 border-l border-[#e0e0e0]">
            <p className="brand-card-label mb-4">Pretendard — 사용 기준</p>
            <ul className="text-[13px] text-[#6b6b6b] leading-[1.8] space-y-1">
              <li>• 한국어 본문 전체</li>
              <li>• 제품 설명, 캡션</li>
              <li>• UI 텍스트</li>
              <li>• 영문 본문 (긴 문장)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
