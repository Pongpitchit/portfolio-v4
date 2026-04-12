'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import type { Project } from '@/lib/portfolio-data'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
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

  if (!isOpen || !project) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      style={{ background: 'rgba(0, 0, 0, 0.8)' }}
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl animate-slide-up"
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

        {/* Project image */}
        <div className="relative h-64 md:h-96">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)'
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span 
                className="font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full"
                style={{ 
                  background: 'var(--accent)', 
                  color: 'var(--bg)' 
                }}
              >
                {project.category}
              </span>
              <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                
              </span>
            </div>
            
            <h1 
              className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight"
              style={{ color: 'var(--text)' }}
            >
              {project.title}
            </h1>
            
            <p 
              className="text-base leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 
              className="font-sans text-sm font-bold mb-3 tracking-wider uppercase"
              style={{ color: 'var(--text-muted)' }}
            >
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(tech => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 rounded-lg transition-all duration-200"
                  style={{
                    background: 'var(--bg-card)',
                    color: 'var(--text)',
                    border: '1px solid var(--border)'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-200 hover:opacity-80 inline-flex items-center gap-2"
                style={{ 
                  background: 'var(--accent)', 
                  color: 'var(--bg)',
                  textDecoration: 'none'
                }}
              >
                Live Demo
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 0L5 1 8.3 4.3H0v1h8.3L5 8.6 6 9.6l4.3-4.3c.4-.4.4-1 0-1.4L6 0z"/>
                </svg>
              </a>
            )}
            
            {project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-200 hover:opacity-80 inline-flex items-center gap-2"
                style={{
                  background: 'transparent',
                  color: 'var(--text)',
                  border: '1px solid var(--border)',
                  textDecoration: 'none'
                }}
              >
                View Source
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 0C2.7 0 0 2.7 0 6c0 2.7 2.2 4.9 4.9 5.2.4 0 .5-.2.5-.4v-1.4c-2 .4-2.4-1-2.4-1-.3-.8-.8-1-1.2-1.2-.8-.5.1-.5.1-.5.9.1 1.3.9 1.3.9.8 1.3 2 1 2.5.7.1-.5.3-.9.5-1.1-1.9-.2-3.9-1-3.9-4.3 0-.9.3-1.7.9-2.3-.1-.2-.4-1.1.1-2.3 0 0 .7-.2 2.3.9.7-.2 1.4-.3 2.1-.3s1.4.1 2.1.3c1.6-1.1 2.3-.9 2.3-.9.5 1.2.2 2.1.1 2.3.6.6.9 1.4.9 2.3 0 3.3-2 4.1-3.9 4.3.3.3.6.8.6 1.6v2.3c0 .2.1.4.5.4 2.7-.3 4.9-2.5 4.9-5.2C12 2.7 9.3 0 6 0z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
