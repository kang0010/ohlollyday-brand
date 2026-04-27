export function SloganSection() {
  return (
    <section id="slogan" className="border-b border-[#e0e0e0]">
      <div className="bg-[#e8e8e8] -mx-0 px-16 pt-20 pb-12">

        {/* 슬로건 */}
        <p className="font-futura font-bold text-[42px] leading-[1.2] tracking-[-0.01em] uppercase text-black">
          OH, LOLLY DAY! makes your life happier.
        </p>
        <p className="text-[16px] leading-[1.5] text-black mt-6">
          오롤리데이는 당신(팀원, 제작자, 고객, 우리를 둘러싼 모든 환경)의 삶을 더 행복하게 만든다.<br />
          모든 사람의 삶에는 이미 행복이 있다. 그 행복은 소소하기에 관찰하지 않으면 발견하기가 힘들 수 있다.<br />
          많은 사람들이 그 행복을 놓치지 않도록 일깨워 주는 것이 우리의 미션이다.<br />
          happy(행복한)가 아니라 happier(더 행복한)라고 하는 이유.
        </p>

        {/* 코어밸류 */}
        <div id="corevalue" className="grid grid-cols-4 gap-px bg-[#d0d0d0] mt-12 -ml-8 -mr-8">
          <div className="bg-[#e8e8e8] p-8">
            <p className="text-[10px] font-bold tracking-[0.12em] text-[#6b6b6b] uppercase mb-4">Core Value 01</p>
            <p className="text-[28px] font-bold text-black leading-[1.2] mb-4">성장하자</p>
            <ul className="space-y-2 list-disc list-outside pl-5">
              <li className="text-[16px] leading-[1.5] text-[#6b6b6b] tracking-[-0.02em]">끊임없는 자아 탐구, 자아 성숙, 능력 성장.</li>
              <li className="text-[16px] leading-[1.5] text-[#6b6b6b] tracking-[-0.02em]">A보다 A+, 혹은 그보다 더 나은 B를 찾으려고 노력한다.</li>
            </ul>
          </div>
          <div className="bg-[#e8e8e8] p-8">
            <p className="text-[10px] font-bold tracking-[0.12em] text-[#6b6b6b] uppercase mb-4">Core Value 02</p>
            <p className="text-[28px] font-bold text-black leading-[1.2] mb-4">협력하자</p>
            <ul className="space-y-2 list-disc list-outside pl-5">
              <li className="text-[16px] leading-[1.5] text-[#6b6b6b] tracking-[-0.02em]">누군가의 도움이 필요한 것 같으면 모른 척하지 않는다.</li>
              <li className="text-[16px] leading-[1.5] text-[#6b6b6b] tracking-[-0.02em]">내가 도움이 필요하다면 눈치 보지 않고 도움을 청한다.</li>
              <li className="text-[16px] leading-[1.5] text-[#6b6b6b] tracking-[-0.02em]">오롤리데이에는 네 일, 내 일 따로 없다.</li>
            </ul>
          </div>
          <div className="bg-[#e8e8e8] p-8">
            <p className="text-[10px] font-bold tracking-[0.12em] text-[#6b6b6b] uppercase mb-4">Core Value 03</p>
            <p className="text-[28px] font-bold text-black leading-[1.2] mb-4">솔직하자</p>
            <ul className="space-y-2 list-disc list-outside pl-5">
              <li className="text-[16px] leading-[1.5] text-[#6b6b6b] tracking-[-0.02em]">실수를 공개적으로 인정하고 반성하자. 인정은 부끄러운 것이 아니다. 신뢰가 쌓이고, 같은 실수를 반복하지 않는다.</li>
              <li className="text-[16px] leading-[1.5] text-[#6b6b6b] tracking-[-0.02em]">칭찬하고 싶은 마음을 감추지 말자. 솔직하게 칭찬하고 응원한다.</li>
            </ul>
          </div>
          <div className="bg-[#e8e8e8] p-8">
            <p className="text-[10px] font-bold tracking-[0.12em] text-[#6b6b6b] uppercase mb-4">Core Value 04</p>
            <p className="text-[28px] font-bold text-black leading-[1.2] mb-4">행복하자</p>
            <ul className="space-y-2 list-disc list-outside pl-5">
              <li className="text-[16px] leading-[1.5] text-[#6b6b6b] tracking-[-0.02em]">개개인의 다름을 인정하고 존중한다.</li>
              <li className="text-[16px] leading-[1.5] text-[#6b6b6b] tracking-[-0.02em]">나만의 행복의 기준이 무엇인지 스스로에게 물어보고, 탐구하고, 가까워지려 노력한다.</li>
              <li className="text-[16px] leading-[1.5] text-[#6b6b6b] tracking-[-0.02em]">팀원들과 서로의 행복에 대해 자주 이야기 나누고, 공감한다.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
