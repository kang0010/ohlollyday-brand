interface SectionHeaderProps {
  number: string
  title: string
  description?: string
}

export function SectionHeader({ number, title, description }: SectionHeaderProps) {
  return (
    <div className="flex items-start gap-16 mb-12 pb-8 border-b border-[#e0e0e0]">
      <div className="flex-1">
        <p className="font-futura text-[10px] tracking-[0.15em] text-[#6b6b6b] uppercase mb-3">{number}</p>
        <h2 className="font-futura font-bold text-[52px] leading-[1.0] tracking-[-0.02em] uppercase text-black">
          {title}
        </h2>
      </div>
      {description && (
        <p className="w-72 text-[13px] leading-[1.7] text-[#6b6b6b] pt-14 shrink-0">
          {description}
        </p>
      )}
    </div>
  )
}
