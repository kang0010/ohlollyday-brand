import Image from 'next/image'
import { SectionHeader } from '../SectionHeader'

const STORES = [
  {
    name: 'Happier Mart 연남',
    address: '서울 마포구 연남동',
    desc: '오롤리데이의 첫 번째 직영 오프라인 매장. 오롤리데이의 모든 제품을 직접 만져보고 경험할 수 있습니다.',
    tag: 'MAPO · YEONNAM',
  },
  {
    name: 'Happier Mart 성수',
    address: '서울 성동구 성수동',
    desc: '성수의 감도 높은 문화와 함께하는 두 번째 직영 매장. 오롤리데이 본사와 같은 공간에 위치합니다.',
    tag: 'SEONGDONG · SEONGSU',
  },
]

export function StoreSection() {
  return (
    <section id="store" className="px-16 py-20 border-b border-[#e0e0e0]">
      <SectionHeader
        number="04"
        title="STORE"
        description="오롤리데이를 가장 온전히 경험할 수 있는 공간, 해피어마트. 서울 연남과 성수에 위치한 두 개의 직영 오프라인 매장입니다."
      />

      {/* 매장 헤더 */}
      <div className="bg-black px-12 py-10 mb-px">
        <p className="brand-card-label text-[#F5C842] mb-3">Offline Store</p>
        <p className="font-futura font-bold text-[36px] text-white uppercase leading-[1.2]">
          HAPPIER MART
        </p>
        <p className="font-futura text-[13px] text-[rgba(255,255,255,0.5)] tracking-[0.08em] uppercase mt-2">
          Seoul, Korea — 2 Locations
        </p>
      </div>

      {/* 매장 이미지 그리드 */}
      <div className="grid grid-cols-3 gap-px bg-[#e0e0e0] mb-px">
        {[
          { label: 'Exterior 01', src: '/store/store-exterior-1.jpg' },
          { label: 'Exterior 02', src: '/store/store-exterior-2.jpg' },
          { label: 'Interior 01', src: '/store/store-interior-1.jpg' },
          { label: 'Interior 02', src: '/store/store-interior-2.jpg' },
          { label: 'Interior 03', src: '/store/store-interior-3.jpg' },
        ].map((item) => (
          <div key={item.label} className="relative aspect-[4/3] overflow-hidden bg-[#f0f0f0]">
            <Image
              src={item.src}
              alt={item.label}
              fill
              className="object-cover"
            />
            <span className="absolute top-3 left-3 brand-card-label bg-white/70 px-1">{item.label}</span>
          </div>
        ))}
        {/* 빈 슬롯 */}
        <div className="relative aspect-[4/3] bg-[#f0f0f0] flex items-center justify-center">
          <p className="brand-card-label text-[#c0c0c0]">+ More</p>
        </div>
      </div>

      {/* 매장 정보 카드 */}
      <div className="grid grid-cols-2 gap-px bg-[#e0e0e0]">
        {STORES.map((store) => (
          <div key={store.name} className="bg-white p-8">
            <p className="font-futura text-[10px] tracking-[0.15em] text-[#6b6b6b] uppercase mb-2">{store.tag}</p>
            <p className="text-[18px] font-bold text-black mb-1">{store.name}</p>
            <p className="text-[12px] text-[#6b6b6b] mb-4">{store.address}</p>
            <div className="h-px bg-[#e0e0e0] mb-4" />
            <p className="text-[13px] text-[#6b6b6b] leading-[1.7]">{store.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
