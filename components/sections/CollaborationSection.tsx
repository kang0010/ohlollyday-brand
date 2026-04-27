import Image from 'next/image'
import { SectionHeader } from '../SectionHeader'

const COLLABS = [
  { brand: '01', img: '/collab/01.jpg', url: 'https://www.oh-lolly-day.com/article/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/8/46862/page/1/' },
  { brand: '02', img: '/collab/02.jpg', url: 'https://www.oh-lolly-day.com/article/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/8/46668/page/1/' },
  { brand: '03', img: '/collab/03.jpg', url: 'https://www.oh-lolly-day.com/article/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/8/35868/page/1/' },
  { brand: '04', img: '/collab/04.jpg', url: 'https://www.oh-lolly-day.com/article/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/8/31984/page/2/' },
  { brand: '05', img: '/collab/05.jpg', url: 'https://www.oh-lolly-day.com/article/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/8/31985/page/2/' },
  { brand: '06', img: '/collab/06.jpg', url: 'https://www.oh-lolly-day.com/article/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/8/31981/page/2/' },
  { brand: '07', img: '/collab/07.jpg', url: 'https://www.oh-lolly-day.com/article/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/8/31980/page/2/' },
  { brand: '08', img: '/collab/08.jpg', url: 'https://www.oh-lolly-day.com/article/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/8/31982/page/2/' },
  { brand: '09', img: '/collab/09.jpg', url: 'https://www.oh-lolly-day.com/article/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/8/30985/page/4/' },
  { brand: '10', img: '/collab/10.jpg', url: 'https://www.oh-lolly-day.com/article/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/8/31034/page/3/' },
  { brand: '11', img: '/collab/11.jpg', url: 'https://www.oh-lolly-day.com/article/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/8/31006/page/4/' },
  { brand: '12', img: '/collab/12.jpg', url: 'https://www.oh-lolly-day.com/article/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/8/31986/page/2/' },
  { brand: '13', img: '/collab/13.jpg', url: 'https://www.oh-lolly-day.com/article/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/8/30982/page/4/' },
  { brand: '14', img: '/collab/14.jpg', url: 'https://www.oh-lolly-day.com/article/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/8/31977/page/3/' },
  { brand: '15', img: '/collab/15.jpg', url: 'https://www.oh-lolly-day.com/article/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/8/29806/page/5/' },
  { brand: '16', img: '/collab/16.jpg', url: 'https://www.oh-lolly-day.com/article/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/8/31124/page/3/' },
  { brand: '17', img: '/collab/17.jpg', url: 'https://www.oh-lolly-day.com/article/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/8/30989/page/4/' },
]

export function CollaborationSection() {
  return (
    <section id="collaboration" className="px-16 border-b border-[#e0e0e0]">
      <div className="bg-[#c5e800] text-black px-16 py-20 mb-0 -mx-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-futura font-bold text-[42px] leading-[1.2] tracking-[0.02em] uppercase text-black">
              COLLABORATION
            </p>
            <p className="text-[16px] leading-[1.5] text-black mt-6">
              오롤리데이의 세계관에 공감하는 브랜드들과 함께 만든 특별한 제품들.<br />
              콜라보레이션은 오롤리데이의 가치를 더 많은 사람에게 전달하는 방법입니다.
            </p>
          </div>
          <a
            href="https://www.oh-lolly-day.com/board/free/etc-list.html?board_no=1002&category_no=2"
            target="_blank"
            rel="noopener noreferrer"
            className="font-futura font-bold text-[20px] tracking-[0.08em] bg-black text-[#c5e800] w-36 h-36 rounded-full flex items-center justify-center text-center hover:bg-[#ff6000] hover:text-black transition-colors leading-tight shrink-0 ml-12 antialiased"
          >
            콜라보<br />문의하기
          </a>
        </div>
      </div>

      {/* 콜라보 그리드 */}
      <div className="grid grid-cols-3 gap-px bg-[#e0e0e0] -mx-16">
        {COLLABS.map((c) => (
          <a key={c.brand} href={c.url} target="_blank" rel="noopener noreferrer" className="bg-white group overflow-hidden block">
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
          </a>
        ))}

        {/* 더보기 카드 */}
        <a
          href="https://www.oh-lolly-day.com/board/gallery/list.html?board_no=8"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#e8e8e8] flex items-center justify-center group"
          style={{ aspectRatio: 'auto' }}
        >
          <p className="font-futura font-bold text-[36px] tracking-[-0.02em] text-black group-hover:underline">and more...</p>
        </a>
      </div>

    </section>
  )
}
