'use client'

import { useTheme } from '@/hooks/useTheme'

interface NavbarProps {
  activeSection: string
  onNav: (section: string) => void
}

const navItems = ['PROFILE', 'PROJECT', 'CONTACT']

export default function Navbar({ activeSection, onNav }: NavbarProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <span
          className="font-display text-2xl tracking-widest"
          style={{ color: 'var(--text)', letterSpacing: '0.15em' }}
        >
          PS
        </span>
        <span
          className="font-mono text-xs hidden sm:block"
          style={{ color: 'var(--text-muted)' }}
        >
          Portfolio 
        </span>
      </div>

      {/* Nav pills */}
      <div className="flex items-center gap-1">
        {navItems.map(item => (
          <button
            key={item}
            onClick={() => onNav(item)}
            className={`nav-pill ${activeSection === item ? 'active' : ''}`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Theme toggle */}
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs hidden sm:block" style={{ color: 'var(--text-muted)' }}>
          {theme === 'dark' ? 'DARK' : 'LIGHT'}
        </span>
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          <div className="theme-toggle-thumb" />
        </button>
      </div>
    </nav>
  )
}
