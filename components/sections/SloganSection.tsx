import { SectionHeader } from '../SectionHeader'

export function SloganSection() {
  return (
    <section id="slogan" className="px-16 py-20 border-b border-[#e0e0e0]">
      <SectionHeader
        number="01"
        title="SLOGAN"
        description="오롤리데이의 존재 이유, 그리고 우리가 만드는 것들이 가진 의미를 담은 한 문장."
      />

      {/* 메인 슬로건 */}
      <div className="mb-16">
        <div className="bg-black text-white px-12 py-16 mb-2">
          <p className="font-futura font-bold text-[42px] leading-[1.2] tracking-[-0.01em] uppercase">
            OH, LOLLY DAY!<br />
            <span className="text-[#F5C842]">makes your life</span><br />
            happier.
          </p>
        </div>
      </div>

      {/* 슬로건 해설 그리드 */}
      <div className="grid grid-cols-2 gap-px bg-[#e0e0e0]">
        <div className="bg-white p-8">
          <p className="brand-card-label mb-4">Brand Mission</p>
          <p className="text-[22px] font-semibold leading-[1.4] text-black mb-4">
            우리는 당신의 삶을<br />더 행복하게 만듭니다.
          </p>
          <p className="text-[13px] leading-[1.8] text-[#6b6b6b]">
            오롤리데이는 팀원, 제작자, 고객, 우리를 둘러싼 모든 환경의 삶을
            더 행복하게 만든다는 미션을 가지고 있습니다.
          </p>
        </div>

        <div className="bg-[#F5F0E8] p-8">
          <p className="brand-card-label mb-4">Why "Happier"?</p>
          <p className="text-[22px] font-semibold leading-[1.4] text-black mb-4">
            Happy가 아닌<br />Happier인 이유
          </p>
          <p className="text-[13px] leading-[1.8] text-[#6b6b6b]">
            모든 사람의 삶에는 이미 행복이 있습니다. 그 행복은 소소하기에
            관찰하지 않으면 발견하기 힘들 수 있습니다. 많은 사람들이 그
            행복을 놓치지 않도록 일깨워 주는 것이 우리의 미션입니다.
          </p>
        </div>

        <div className="bg-[#F5F0E8] p-8 col-span-2">
          <p className="brand-card-label mb-4">Premise</p>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-[13px] font-bold text-black mb-2">전제 1</p>
              <p className="text-[13px] leading-[1.8] text-[#6b6b6b]">
                모든 사람의 삶에는 이미 행복이 존재한다.
              </p>
            </div>
            <div>
              <p className="text-[13px] font-bold text-black mb-2">전제 2</p>
              <p className="text-[13px] leading-[1.8] text-[#6b6b6b]">
                그 행복은 소소하기에 관찰하지 않으면 발견하기 힘들다.
              </p>
            </div>
            <div>
              <p className="text-[13px] font-bold text-black mb-2">결론</p>
              <p className="text-[13px] leading-[1.8] text-[#6b6b6b]">
                더 많은 사람들이 각자의 행복을 놓치지 않도록 일깨워주는 것이 우리의 역할이다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
