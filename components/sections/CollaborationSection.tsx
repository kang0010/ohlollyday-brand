import Image from 'next/image'
import { SectionHeader } from '../SectionHeader'

const COLLABS = [
  { brand: '김영사', img: 'https://www.oh-lolly-day.com/file_data/ohlollyday/gallery/2025/12/29/057a671ea3b73d9a28245b5432089b59.jpg' },
  { brand: '오너스', img: 'https://www.oh-lolly-day.com/file_data/ohlollyday/gallery/2025/12/29/9a06851e5c3d101ef74fe4e354575ef9.jpg' },
  { brand: 'ACE', img: 'https://www.oh-lolly-day.com/file_data/ohlollyday/gallery/2025/12/29/664cb28fb2d24d819843a5fa1f703552.jpg' },
  { brand: 'SPRING OF YOO', img: 'https://www.oh-lolly-day.com/file_data/ohlollyday/gallery/2025/12/29/117b695b23c50aa0c34aba2e138593f1.jpg' },
  { brand: '삼성전자 NOW', img: 'https://www.oh-lolly-day.com/file_data/ohlollyday/gallery/2025/12/29/80bfc78e83ca46a44367bafc4762eb4d.jpg' },
  { brand: 'Tefal', img: 'https://www.oh-lolly-day.com/file_data/ohlollyday/gallery/2025/12/08/3523563ef024fc6600527baf1b34374e.jpg' },
  { brand: 'Abib', img: 'https://www.oh-lolly-day.com/file_data/ohlollyday/gallery/2025/12/08/129e4b542c2cadd68db4d62b3fc2e774.jpg' },
  { brand: '바른생각', img: 'https://www.oh-lolly-day.com/file_data/ohlollyday/gallery/2025/12/08/9ee72d96ad34e38011b830a3d94790d3.jpg' },
  { brand: 'JBL', img: 'https://www.oh-lolly-day.com/file_data/ohlollyday/gallery/2025/12/05/723878e04cefe166ca006f00b84eda3f.jpg' },
  { brand: '이투스', img: 'https://www.oh-lolly-day.com/file_data/ohlollyday/gallery/2025/02/04/282281e3dc78b1875fc28eadc59d91ff.jpg' },
  { brand: '로지텍G', img: 'https://www.oh-lolly-day.com/file_data/ohlollyday/gallery/2025/01/10/c75cfe817a2aa5ffa03c93808b7bfdc2.jpg' },
  { brand: '크리넥스', img: 'https://www.oh-lolly-day.com/file_data/ohlollyday/gallery/2024/10/28/cc4e3c37ce3455e59de8867cacc6291c.jpg' },
]

export function CollaborationSection() {
  return (
    <section id="collaboration" className="px-16 pb-20 border-b border-[#e0e0e0]">
      <div className="bg-[#c5e800] text-black px-16 py-12 mb-0 -mx-16">
        <p className="font-futura font-bold text-[42px] leading-[1.2] tracking-[0.02em] uppercase text-black">
          COLLABORATION
        </p>
        <p className="text-[16px] leading-[1.5] text-black mt-6">
          오롤리데이의 세계관에 공감하는 브랜드들과 함께 만든 특별한 제품들.<br />
          콜라보레이션은 오롤리데이의 가치를 더 많은 사람에게 전달하는 방법입니다.
        </p>
      </div>

      {/* 콜라보 그리드 */}
      <div className="grid grid-cols-3 gap-px bg-[#e0e0e0] -mx-16">
        {COLLABS.map((c) => (
          <div key={c.brand} className="bg-white group overflow-hidden">
            <div className="overflow-hidden bg-[#f0f0f0]">
              <Image
                src={c.img}
                alt={c.brand}
                width={0}
                height={0}
                sizes="33vw"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                unoptimized
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        ))}

        {/* 더보기 카드 */}
        <div className="bg-[#f0f0f0] flex items-center justify-center aspect-square">
          <div className="text-center">
            <p className="font-futura font-bold text-[11px] tracking-[0.1em] uppercase text-[#6b6b6b]">AND MORE</p>
          </div>
        </div>
      </div>

      {/* 콜라보 가이드라인 */}
      <div className="mt-px bg-[#e0e0e0]">
        <div className="grid grid-cols-3 gap-px">
          <div className="bg-white p-8">
            <p className="brand-card-label mb-4">Collaboration Rule</p>
            <p className="text-[15px] font-semibold text-black mb-3">오롤리데이스러운 콜라보</p>
            <p className="text-[13px] text-[#6b6b6b] leading-[1.7]">
              브랜드의 세계관에 공감하고, 오롤리데이의 미션인 "더 행복하게"를
              함께 실현할 수 있는 파트너와만 협업합니다.
            </p>
          </div>
          <div className="bg-white p-8 border-l border-[#e0e0e0]">
            <p className="brand-card-label mb-4">Logo Usage</p>
            <p className="text-[15px] font-semibold text-black mb-3">로고 병기 규칙</p>
            <p className="text-[13px] text-[#6b6b6b] leading-[1.7]">
              콜라보레이션 시 로고 표기는 브랜드 무드에 맞게 다양하게 활용 가능합니다.
              사진 위 표기 시 가독성을 최우선으로 합니다.
            </p>
          </div>
          <div className="bg-white p-8 border-l border-[#e0e0e0]">
            <p className="brand-card-label mb-4">Category</p>
            <p className="text-[15px] font-semibold text-black mb-3">협업 분야</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {['뷰티', '전자기기', '생활용품', '출판', '식품', '스포츠'].map((cat) => (
                <span key={cat} className="px-2 py-1 bg-[#f0f0f0] text-[11px] font-futura tracking-[0.05em] text-[#6b6b6b] uppercase">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
