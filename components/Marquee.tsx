'use client'

interface MarqueeProps {
  skills: string[]
}

export default function Marquee({ skills }: MarqueeProps) {
  const items = skills.length ? skills : ['FULL-STACK', 'NEXT.JS', 'REACT', 'NODE.JS', 'TYPESCRIPT', 'UI/UX']
  const doubled = [...items, ...items, ...items, ...items]

  return (
    <div className="overflow-hidden py-3 border-y" style={{ borderColor: 'var(--border)' }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 mr-6">
            <span className="font-mono text-xs tracking-[0.2em] uppercase whitespace-nowrap" style={{ color: 'var(--text-dim)' }}>
              {item}
            </span>
            <span style={{ color: 'var(--text-dim)' }}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
