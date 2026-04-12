'use client'

import { useEffect, useState } from 'react'

interface HeroProps {
  name: string
  title: string
  subtitle: string
  onStart: () => void
}

export default function Hero({ name, title, subtitle, onStart }: HeroProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  const initials = name
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--text) 1px, transparent 1px),
                            linear-gradient(90deg, var(--text) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Corner accents */}
      {['top-24 left-8 border-t border-l','top-24 right-8 border-t border-r','bottom-12 left-8 border-b border-l','bottom-12 right-8 border-b border-r'].map((cls, i) => (
        <div key={i} className={`absolute w-12 h-12 opacity-20 ${cls}`} style={{ borderColor: 'var(--text)' }} />
      ))}

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">

        {/* Avatar */}
        <div
          className={`relative mb-8 transition-all duration-700 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          style={{ transitionDelay: '0.1s' }}
        >
          <div
            className="w-28 h-28 rounded-full flex items-center justify-center font-display text-4xl"
            style={{
              background: 'var(--bg-card)',
              border: '2px solid var(--border)',
              boxShadow: '0 0 40px rgba(255,255,255,0.05)',
              color: 'var(--text)',
            }}
          >
            {initials}
          </div>
          <div
            className="absolute inset-0 rounded-full border border-dashed opacity-20 animate-spin"
            style={{ borderColor: 'var(--text)', animationDuration: '12s', animationTimingFunction: 'linear' }}
          />
        </div>

        {/* Title block */}
        <div
          className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="font-mono text-xs tracking-[0.3em] mb-4 uppercase" style={{ color: 'var(--text-muted)' }}>
            ■ {title}
          </div>
          <h1
            className="font-display text-[clamp(3.5rem,12vw,8rem)] leading-none mb-2"
            style={{ color: 'var(--text)', letterSpacing: '0.02em' }}
          >
            PORTFOLIO
          </h1>
          <div
            className="font-display text-[clamp(2rem,7vw,5rem)] leading-none"
            style={{ color: 'transparent', WebkitTextStroke: '1px var(--text-muted)', letterSpacing: '0.12em' }}
          >
            
          </div>
        </div>

        {/* Name + subtitle */}
        <div
          className={`mt-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.35s' }}
        >
          <p className="font-sans text-sm font-semibold tracking-[0.2em] uppercase" style={{ color: 'var(--text-muted)' }}>
            {name}
          </p>
          <p className="font-mono text-xs mt-1" style={{ color: 'var(--text-dim)' }}>
            {subtitle}
          </p>
        </div>

        {/* Menu */}
        <div
          className={`mt-12 flex flex-col items-center gap-3 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.5s' }}
        >
          <button
            onClick={onStart}
            className="font-sans text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-200 hover:tracking-[0.35em]"
            style={{ color: 'var(--text)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            START
          </button>
          <div className="section-line w-24" />
          <button className="font-sans text-xs tracking-[0.15em] uppercase" style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}>
            OPTIONS
          </button>
          <button className="font-sans text-xs tracking-[0.15em] uppercase" style={{ color: 'var(--text-dim)', background: 'none', border: 'none', cursor: 'pointer' }}>
            EXIT
          </button>
        </div>
      </div>

      {/* Date */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs tracking-widest" style={{ color: 'var(--text-dim)' }}>
        {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase()}
      </div>
    </section>
  )
}
