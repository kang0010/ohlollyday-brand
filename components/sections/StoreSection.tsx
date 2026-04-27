'use client'

import Image from 'next/image'
import { useState } from 'react'

const EXTERIOR = [
  '/store/exterior/exterior-1.jpg',
  '/store/exterior/exterior-2.jpg',
  '/store/exterior/exterior-3.jpg',
]

const INTERIOR = [
  '/store/interior/interior_01.jpg',
  '/store/interior/interior_02.jpg',
  '/store/interior/interior_03.jpg',
  '/store/interior/interior_04.jpg',
  '/store/interior/interior_05.jpg',
  '/store/interior/interior_06.jpg',
]

function ImageSlider({ images, label }: { images: string[]; label: string }) {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(0) // -1: left, 1: right
  const [sliding, setSliding] = useState(false)

  const go = (next: number, direction: number) => {
    if (sliding) return
    setDir(direction)
    setSliding(true)
    setTimeout(() => {
      setIndex(next)
      setSliding(false)
    }, 400)
  }

  const prev = () => go((index - 1 + images.length) % images.length, -1)
  const next = () => go((index + 1) % images.length, 1)

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-[#f0f0f0] group">
      <div
        className="absolute inset-0 transition-transform duration-400 ease-in-out"
        style={{ transform: sliding ? `translateX(${dir * -100}%)` : 'translateX(0%)' }}
      >
        <Image
          src={images[index]}
          alt={`${label} ${index + 1}`}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      {/* 라벨 */}
      <div className="absolute top-4 left-4 z-10 font-futura text-[11px] tracking-[0.1em] uppercase bg-black/50 text-white px-2 py-1">
        {label}
      </div>
      {/* 인디케이터 */}
      <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i, i > index ? 1 : -1)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === index ? 'bg-white scale-125' : 'bg-white/50'}`}
          />
        ))}
      </div>
      {/* 이전/다음 버튼 */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 text-[20px]"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 text-[20px]"
      >
        ›
      </button>
    </div>
  )
}

export function StoreSection() {
  return (
    <section id="store" className="px-16 pb-20 border-b border-[#e0e0e0]">
      <div className="bg-[#c5e800] text-black px-16 py-20 mb-0 -mx-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-futura font-bold text-[42px] leading-[1.2] tracking-[0.02em] uppercase text-black">
              <span className="normal-case tracking-[-0.01em]">oh, lolly day!</span> SEONGSU
            </p>
            <p className="text-[16px] leading-[1.5] text-black mt-6">
              오롤리데이를 가장 온전히 경험할 수 있는 공간, 오롤리데이 성수.<br />
              서울 성동구 연무장길 3 1층
            </p>
          </div>
          <a
            href="https://naver.me/G0DXaAvX"
            target="_blank"
            rel="noopener noreferrer"
            className="font-futura font-bold text-[20px] tracking-[0.08em] bg-black text-[#c5e800] w-36 h-36 rounded-full flex items-center justify-center text-center hover:bg-[#ff6000] hover:text-black transition-colors leading-tight shrink-0 ml-12 antialiased"
          >
            오시는 길
          </a>
        </div>
      </div>

      {/* 이미지 슬라이더 */}
      <div className="grid grid-cols-2 gap-px bg-[#e0e0e0] -mx-16">
        <ImageSlider images={EXTERIOR} label="Exterior" />
        <ImageSlider images={INTERIOR} label="Interior" />
      </div>
    </section>
  )
}
