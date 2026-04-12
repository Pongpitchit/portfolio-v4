'use client'

import { useEffect } from 'react'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Pongpitchit-Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    onClose()
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      style={{ background: 'rgba(0, 0, 0, 0.8)' }}
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl animate-slide-up"
        style={{ background: 'var(--bg)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-80"
          style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            border: '1px solid var(--border)',
            color: 'var(--text)'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2.343 2.343a1 1 0 011.414 0L8 6.586l4.243-4.243a1 1 0 111.414 1.414L9.414 8l4.243 4.243a1 1 0 01-1.414 1.414L8 9.414l-4.243 4.243a1 1 0 01-1.414-1.414L6.586 8 2.343 3.757a1 1 0 010-1.414z"/>
          </svg>
        </button>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 
              className="font-display text-2xl md:text-3xl font-bold mb-3"
              style={{ color: 'var(--text)' }}
            >
              Resume Preview
            </h2>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              Download my resume to learn more about my experience, skills, and qualifications.
            </p>
          </div>

          {/* Resume Preview */}
          <div className="mb-6">
            <div 
              className="rounded-lg p-8 text-center"
              style={{ 
                background: 'var(--bg-card)', 
                border: '1px solid var(--border)',
                minHeight: '400px'
              }}
            >
              <div className="mb-4">
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: 'var(--accent)', color: 'var(--bg)' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M12,19L8,15H10.5V12H13.5V15H16L12,19Z"/>
                  </svg>
                </div>
                <h3 
                  className="font-display text-xl mb-2"
                  style={{ color: 'var(--text)' }}
                >
                  Pongpitchit's Resume
                </h3>
                <p 
                  className="text-sm mb-4"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Full-Stack Developer Portfolio
                </p>
              </div>

              <div className="text-left max-w-md mx-auto space-y-3">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
                  <span className="text-sm" style={{ color: 'var(--text)' }}>
                    Education: Rangsit University (DIT)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
                  <span className="text-sm" style={{ color: 'var(--text)' }}>
                    Skills: Next.js, React, Node.js, TypeScript
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ background: 'var(--accent)' }}
                  />
                  <span className="text-sm" style={{ color: 'var(--text)' }}>
                    Experience: Full-Stack Development
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleDownload}
              className="flex-1 font-mono text-sm tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-200 hover:opacity-80 flex items-center justify-center gap-2"
              style={{ 
                background: 'var(--accent)', 
                color: 'var(--bg)',
                border: 'none'
              }}
            >
              Download Resume
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 0L5 1 8.3 4.3H0v1h8.3L5 8.6 6 9.6l4.3-4.3c.4-.4.4-1 0-1.4L6 0z"/>
              </svg>
            </button>
            
            <button
              onClick={onClose}
              className="flex-1 font-mono text-sm tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-200 hover:opacity-80 flex items-center justify-center gap-2"
              style={{
                background: 'transparent',
                color: 'var(--text)',
                border: '1px solid var(--border)'
              }}
            >
              Cancel
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M2.343 2.343a1 1 0 011.414 0L6 4.586l2.243-2.243a1 1 0 111.414 1.414L7.414 6l2.243 2.243a1 1 0 01-1.414 1.414L6 7.414l-2.243 2.243a1 1 0 01-1.414-1.414L4.586 6 2.343 3.757a1 1 0 010-1.414z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
